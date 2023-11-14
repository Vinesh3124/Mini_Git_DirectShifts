import React, { useEffect } from "react";
import PullListView from "../PullListView/PullListView";
import Header from "../HeaderBar/Header";
import { connect } from 'react-redux';
import { getAllPullRequest } from '../../store/Actions/dashboardAction';
import "./Dashboard.scss";

const Dashboard = ({isLoading, getAllPullRequest, PullRequestdata}) => {

    useEffect(() => {
        let payload = {
            state: 'all',
            perPage: 5,
            page: 1,
            sort: 'updated'
        }
        // getAllPullRequest(payload);
    }, [])

    console.log(PullRequestdata, 'PullRequestdata')
    
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="summary-container">
        <div className="summary-container-pull">
          <PullListView PullRequestdata={PullRequestdata} />
        </div>
        <div className="summary-container-issues"></div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
    loading: state.dashboardReducer.isLoading || false,
    PullRequestdata: state.dashboardReducer.allPullRequest || []
});
  
const mapDispatchToProps = {getAllPullRequest};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
