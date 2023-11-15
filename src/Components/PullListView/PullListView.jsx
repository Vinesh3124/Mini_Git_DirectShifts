import React from "react";
import "./PullListView.scss";
import InfoCard from "../Common/InfoCard/InfoCard";
import { Button } from "@mui/material";

const PullListView = ({ PullRequestdata, viewAll }) => {

  return (
    <div className="parent-pull-container">
      <div className="header-style">
        <p>Pull Request</p>
        <div className="view-all-btn">
          <Button onClick={() => viewAll()} variant="contained">View All</Button>
        </div>
      </div>
      {PullRequestdata?.length ? PullRequestdata?.map((el) => (
        <InfoCard key={el.id} {...el} isDetailCard={false} />
      )) : <div className="no-data-style">No Pull Request Data Available.</div>}
    </div>
  );
};

export default PullListView;
