import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { connect } from "react-redux";
import { getAllPullRequest, getAllIssuesRequest } from "../../store/Actions/dashboardAction";
import InfoCard from "../Common/InfoCard/InfoCard";
import Loader from "../Common/Loader/Loader";
import SelectDropDown from "../Common/SelectDropDown/SelectDropDown";
import { useLocation } from 'react-router-dom';
import "./PullDetailsPage.scss";

const pullStateFilter = [{label: 'All', value: 'all'}, {label: 'Closed', value: 'closed'}, {label: 'Open', value: 'open'}];
const pullSortFilter = [{label: 'Updated', value: 'updated'}, {label: 'Created', value: 'created'}, {label: 'Popularity', value: 'popularity'}, {label: 'Long Running', value: 'long-running'}]

const PullDetailsPage = (props) => {
    const { isLoading, getAllPullRequest, PullRequestdata, maxPullPage } = props
    const [page, setPage] = useState(1)
    const [selectedState, setSelectedState] = useState('')
    const [selectedSortType, setSelectedSortType] = useState('')
    const [showIssuesPage, setShowIssuesPage] = useState(false)
    const location = useLocation();

    useEffect(() => {
        if(location?.pathname === '/list-pull-request'){
            setShowIssuesPage(false)
        }else if(location?.pathname === '/list-issues'){
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
        // getAllPullRequest(pullPayload);
    }

    useEffect(() => {
        if(!showIssuesPage){
            getPullRequestData()
        }else{
            //
        }
    }, [page, selectedState, selectedSortType, showIssuesPage])

    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <div className="list-view-container">
            <div className="list-view-table">
                <div className="filter-nav-conaatiner">
                    <div>
                        <SelectDropDown
                            label='Filter by'
                            filterOptions={pullStateFilter} 
                            onSelect={(val) => {
                                setSelectedState(val);
                                setPage(1);
                            }}
                        />
                    </div>
                    <div>
                        <SelectDropDown 
                            label='Sort by'
                            filterOptions={pullSortFilter} 
                            onSelect={(val) => {
                                setSelectedSortType(val);
                                setPage(1);
                            }}
                        />
                    </div>
                </div>
                <div className="table-data-container">
                    {PullRequestdata ? PullRequestdata.map((el) => (
                        <InfoCard key={el.id} {...el} isDetailCard={true} />
                    )) : <p>No Data</p>}
                </div>
            </div>
            <div className="pagination-container">
                <Stack spacing={2}>
                    <Pagination count={maxPullPage} onChange={handleChange} page={page} variant="outlined" shape="rounded" />
                </Stack>
            </div>
            <Loader isLoading={isLoading} />
        </div>
    );
};

const mapStateToProps = (state) => ({
    isLoading: state.dashboardReducer.isLoading || false,
    PullRequestdata: state.dashboardReducer.allPullRequest || [],
    allIssuesRequestdata: state.dashboardReducer.allIssuesRequest || [],
    maxPullPage: state.dashboardReducer.maxPullPage
});

const mapDispatchToProps = { getAllPullRequest, getAllIssuesRequest };

export default connect(mapStateToProps, mapDispatchToProps)(PullDetailsPage);

