import React, { useEffect, useState } from "react";
import PullListView from "../PullListView/PullListView";
import IssueListView from "../IssueListView/IssueListView";
import { connect } from "react-redux";
import { getAllPullRequest, getAllIssuesRequest, setSelectedRepoRequest } from "../../store/Actions/dashboardAction";
import { RepoList, mapOwnerObj } from '../../store/Constant/dashboardConstant'
import SelectDropDown from "../Common/SelectDropDown/SelectDropDown";
import { useHistory } from 'react-router-dom';
import Loader from "../Common/Loader/Loader";
import "./Dashboard.scss";

const Dashboard = ({ isLoading, getAllPullRequest, PullRequestdata, getAllIssuesRequest, allIssuesRequestdata, setSelectedRepoRequest }) => {

  const [selectedRepo, setSelectedRepo] = useState(RepoList[0]?.value)
  const history = useHistory();

  const handleClick = (route) => {
    history.push(route);
  };

  useEffect(() => {
    setSelectedRepoRequest(selectedRepo)
    // eslint-disable-next-line
  }, [selectedRepo])

  useEffect(() => {
    let pullPayload = {
      state: "all",
      perPage: 5,
      page: 1,
      sort: "updated",
      owner: mapOwnerObj[selectedRepo],
      repo: selectedRepo
    };
    let issuesPayload = {
      state: "all",
      filter: "all",
      label: "",
      perPage: 5,
      page: 1,
      owner: mapOwnerObj[selectedRepo],
      repo: selectedRepo
    };
    getAllPullRequest(pullPayload);
    getAllIssuesRequest(issuesPayload);
    // eslint-disable-next-line
  }, [selectedRepo]);

  return (
    <div>
      <div className="repo-select-container">
        <SelectDropDown
          label='Select Repo'
          filterOptions={RepoList}
          value={selectedRepo}
          onSelect={(val) => {
            setSelectedRepo(val);
          }}
        />
      </div>
      <div className="summary-container">
        <div className="summary-container-pull">
          <PullListView PullRequestdata={PullRequestdata} viewAll={() => handleClick('/list-pull-request')} />
        </div>
        <div className="summary-container-issues">
          <IssueListView allIssuesRequestdata={allIssuesRequestdata} viewAll={() => handleClick('/list-issues')} />
        </div>
      </div>
      <Loader isLoading={isLoading} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.dashboardReducer.isLoading || false,
  PullRequestdata: state.dashboardReducer.allPullRequest || [],
  allIssuesRequestdata: state.dashboardReducer.allIssuesRequest || [],
});

const mapDispatchToProps = { getAllPullRequest, getAllIssuesRequest, setSelectedRepoRequest };

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
