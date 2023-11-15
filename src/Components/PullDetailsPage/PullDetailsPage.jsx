import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { connect } from "react-redux";
import { getAllPullRequest, getAllIssuesRequest, getPullCommentsRequest } from "../../store/Actions/dashboardAction";
import InfoCard from "../Common/InfoCard/InfoCard";
import Loader from "../Common/Loader/Loader";
import SelectDropDown from "../Common/SelectDropDown/SelectDropDown";
import { useLocation } from 'react-router-dom';
import MultiSelectDropDown from "../Common/MulitSelectDropDown/MultiSelectDropdown";
import CustomModal from "../Common/Modal/Modal";
import { FormatTimeDateFn } from "../../store/Constant/dashboardConstant";
import FilterListIcon from '@mui/icons-material/FilterList';
import "./PullDetailsPage.scss";


const pullStateFilter = [{ label: 'All', value: 'all' }, { label: 'Closed', value: 'closed' }, { label: 'Open', value: 'open' }];
const pullSortFilter = [{ label: 'Updated', value: 'updated' }, { label: 'Created', value: 'created' }, { label: 'Popularity', value: 'popularity' }, { label: 'Long Running', value: 'long-running' }];
const issuesLabelFilter = [{ label: 'Bug', value: 'bug' }, { label: 'Documentation', value: 'documentation' }, { label: 'Duplicate', value: 'duplicate' }, { label: 'Enhancement', value: 'enhancement' }, { label: 'Help Wanted', value: 'help wanted' }, { label: 'Invalid', value: 'invalid' }, { label: 'Question', value: 'question' }, { label: 'wontfix', value: 'Will not fix' }]

const PullDetailsPage = (props) => {
    const { isLoading, getAllPullRequest, getAllIssuesRequest, allIssuesRequestdata, PullRequestdata, maxPullPage, maxIssuesPage, getPullCommentsRequest, pullCommentsData } = props
    const [page, setPage] = useState(1)
    const [selectedState, setSelectedState] = useState(pullStateFilter[0]?.value || '')
    const [selectedSortType, setSelectedSortType] = useState(pullSortFilter[0]?.value || '')
    const [showIssuesPage, setShowIssuesPage] = useState(false)
    const [selectedLabels, setSelectedLabels] = useState([])
    const [openRightDrawer, setOpenRightDrawer] = useState(false)
    const [openViewModal, setOpenViewModal] = useState(false)
    const [selectedCardData, setSelectedCardData] = useState({})
    const location = useLocation();

    useEffect(() => {
        if (location?.pathname === '/list-pull-request') {
            setShowIssuesPage(false)
        } else if (location?.pathname === '/list-issues') {
            setShowIssuesPage(true)
        }
    }, [location])

    const getPullRequestData = () => {
        let pullPayload = {
            state: selectedState || "all",
            perPage: 10,
            page: page,
            sort: selectedSortType || "updated",
        };
        getAllPullRequest(pullPayload);
    }

    const getIssuesRequestData = () => {
        let issuesPayload = {
            state: selectedState || "all",
            filter: "all",
            label: selectedLabels.map((el) => el.value).join(',') || "",
            perPage: 10,
            page: page,
        };
        getAllIssuesRequest(issuesPayload);
    }

    useEffect(() => {
        if (!showIssuesPage) {
            getPullRequestData()
        } else {
            getIssuesRequestData()
        }
    }, [page, showIssuesPage])

    const handleFilterApply = () => {
        if (!showIssuesPage) {
            getPullRequestData()
        } else {
            getIssuesRequestData()
        }
    }

    const handleChange = (event, value) => {
        setPage(value);
    };

    const renderModalUI = () => {
        return (
            <div className="modal-body">
                <div className="modal-title-container">
                    <div className="modal-title-img-container">
                        <img src={selectedCardData?.user?.avatar_url} alt='user-avatar' />
                    </div>
                    <div className="modal-title">{`#${selectedCardData?.number} ${showIssuesPage ? 'Isssues' : 'Pull Request'} ${selectedCardData?.title?.length ? `- ${selectedCardData?.title}` : ''}`}</div>
                </div>
                <div className="modal-info-container">
                    <p className="modal-info-body">{selectedCardData?.body}</p>
                    <div className="modal-info-details">{`#${selectedCardData?.number} by ${selectedCardData?.user?.login} on ${FormatTimeDateFn(selectedCardData?.created_at || '')}`}</div>
                </div>
                {!showIssuesPage ? <div className="modal-comment-box-container">
                    <div className="comment-header-style">Latest 5 comments: </div>
                    <div className="comment-container">
                        {pullCommentsData?.length ? pullCommentsData?.map((el) => (
                            <div className="comment-txt-container" key={el.id}>
                                <p className="comment-text-style">{el?.body || ''}</p>
                                <div className="comment-text-info-container">
                                    <p>By {el?.user?.login || ''}</p>
                                    <p>{FormatTimeDateFn(el?.created_at || '')}</p>
                                </div>
                            </div>
                        )) : <p className="comment-text-style">No comments yet!</p>}
                    </div>
                </div> : null}
                <div className="modal-close-btn">
                    <Button
                        onClick={() => {
                            setOpenViewModal(false);
                            setSelectedCardData({})
                        }}>
                        Close
                    </Button>
                </div>
            </div>
        )
    }

    const renderCardUI = (value) => {
        return (
            value?.length ? value.map((el) => (
                <InfoCard
                    handleClicked={(val) => {
                        setOpenViewModal(true);
                        renderModalUI();
                        setSelectedCardData(val)
                        !showIssuesPage && getPullCommentsRequest(el?.comments_url || '')
                    }}
                    key={el.id} {...el}
                    isDetailCard={false}
                />
            )) : <div className="no_data_style">No Data Available</div>
        )
    }

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpenRightDrawer(open);
    };

    const list = () => (
        <div>
            <div className="filter-txt-style">Filter</div>
            <Divider />
            <Box
                sx={{ width: 350 }}
                role="presentation"
            >
                <div className="drawer-items">
                    <SelectDropDown
                        label='Filter by'
                        filterOptions={pullStateFilter}
                        value={selectedState}
                        onSelect={(val) => {
                            setSelectedState(val);
                            setPage(1);
                        }}
                    />
                </div>
                <Divider />
                {!showIssuesPage ? <>
                    <div className="drawer-items">
                        <SelectDropDown
                            label='Sort by'
                            filterOptions={pullSortFilter}
                            value={selectedSortType}
                            onSelect={(val) => {
                                setSelectedSortType(val);
                                setPage(1);
                            }}
                        />
                    </div>
                    <Divider />
                </> : null}
                {showIssuesPage ? <>
                    <div className="drawer-items">
                        <MultiSelectDropDown value={selectedLabels} filterOptions={issuesLabelFilter} onSelect={(val) => setSelectedLabels(val)} />
                    </div>
                    <Divider />
                </> : null}
                <Button onClick={() => handleFilterApply()}>Apply</Button>
            </Box>
        </div>
    );

    return (
        <div className="list-view-container">
            <div className="filter-btn-container">
                <Button onClick={toggleDrawer(true)} variant="contained" startIcon={<FilterListIcon />}>Filter</Button>
                <Drawer
                    anchor={"right"}
                    open={openRightDrawer}
                    onClose={toggleDrawer(false)}
                >
                    {list()}
                </Drawer>
            </div>
            <div className="list-view-table">
                <div className="table-data-container">
                    {renderCardUI(showIssuesPage ? allIssuesRequestdata : PullRequestdata)}
                </div>
            </div>
            <div className="pagination-container">
                <Stack spacing={2}>
                    <Pagination count={showIssuesPage ? maxIssuesPage : maxPullPage} onChange={handleChange} page={page} variant="outlined" shape="rounded" />
                </Stack>
            </div>
            {openViewModal && <CustomModal open={openViewModal} handleClose={() => setOpenViewModal(false)}> {renderModalUI()} </CustomModal>}
            <Loader isLoading={isLoading} />
        </div>
    );
};

const mapStateToProps = (state) => ({
    isLoading: state.dashboardReducer.isLoading || false,
    PullRequestdata: state.dashboardReducer.allPullRequest || [],
    allIssuesRequestdata: state.dashboardReducer.allIssuesRequest || [],
    maxPullPage: state.dashboardReducer.maxPullPage,
    maxIssuesPage: state.dashboardReducer.maxIssuesPage,
    pullCommentsData: state.dashboardReducer.pullComments || []
});

const mapDispatchToProps = { getAllPullRequest, getAllIssuesRequest, getPullCommentsRequest };

export default connect(mapStateToProps, mapDispatchToProps)(PullDetailsPage);

