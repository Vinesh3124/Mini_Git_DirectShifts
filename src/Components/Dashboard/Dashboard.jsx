import React, { useEffect } from "react";
import PullListView from "../PullListView/PullListView";
import IssueListView from "../IssueListView/IssueListView";
import { connect } from "react-redux";
import {getAllPullRequest, getAllIssuesRequest} from "../../store/Actions/dashboardAction";
import { useHistory } from 'react-router-dom';
import "./Dashboard.scss";
import Loader from "../Common/Loader/Loader";

const Dashboard = ({
  isLoading,
  getAllPullRequest,
  PullRequestdata,
  getAllIssuesRequest,
  allIssuesRequestdata
}) => {

  const history = useHistory();

  const handleClick = () => {
    history.push(`/list-pull-request`);
  };

  useEffect(() => {
    let pullPayload = {
      state: "all",
      perPage: 5,
      page: 1,
      sort: "updated",
    };
    let issuesPayload = {
      state: "all",
      filter: "all",
      label: "",
      perPage: 5,
      page: 1,
    };
    getAllPullRequest(pullPayload);
    // getAllIssuesRequest(issuesPayload);
  }, []);

  return (
    <div>
      <div className="summary-container">
        <div className="summary-container-pull" onClick={() => handleClick()}>
          <PullListView PullRequestdata={PullRequestdata} />
        </div>
        <div className="summary-container-issues">
          <IssueListView allIssuesRequestdata={allIssuesRequestdata} />
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

const mapDispatchToProps = { getAllPullRequest, getAllIssuesRequest };

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
