import React from 'react';
import InfoCard from '../Common/InfoCard/InfoCard';
import { Button } from '@mui/material';
import '../PullListView/PullListView.scss'

const IssueListView = ({ allIssuesRequestdata, viewAll }) => {
  return (
    <div className="parent-pull-container">
      <div className="header-style">
        <p>Issues</p>
        <div className="view-all-btn">
          <Button onClick={() => viewAll()} variant="contained">View All</Button>
        </div>
      </div>
      {allIssuesRequestdata?.length ? allIssuesRequestdata?.map((el) => (
        <InfoCard key={el.id} {...el} isDetailCard={false} />
      )) : <div className='no-data-style'>No Issues Data Available.</div>}
    </div>
  )
}

export default IssueListView