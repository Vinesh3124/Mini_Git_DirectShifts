import React from 'react';
import '../PullListView/PullListView.scss'
import InfoCard from '../Common/InfoCard/InfoCard';

const IssueListView = ({allIssuesRequestdata}) => {
    return(
        <div className="parent-pull-container">
        <div className="header-style">
          <p>Issues</p>
        </div>
        {allIssuesRequestdata?.length ? allIssuesRequestdata?.map((el) => (
            <InfoCard key={el.id} {...el} isDetailCard={false} />
        )) : <div>No data</div>}
      </div>
    )
}

export default IssueListView