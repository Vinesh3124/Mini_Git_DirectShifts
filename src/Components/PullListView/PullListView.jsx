import React from "react";
import "./PullListView.scss";
import InfoCard from "../Common/InfoCard/InfoCard";

const PullListView = ({ PullRequestdata }) => {
  return (
    <div className="parent-pull-container">
      <div className="header-style">
        <p>Pull Request</p>
      </div>
      {PullRequestdata?.length ? PullRequestdata?.map((el) => (
        <InfoCard key={el.id} {...el} isDetailCard={false} />
      )) : <div>No data</div>}
    </div>
  );
};

export default PullListView;
