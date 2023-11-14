import React from "react";
import "./PullListView.scss";

const PullListView = ({ PullRequestdata }) => {
  return (
    <div className="parent-pull-container">
      <div className="header-style">
        <p>Pull Request</p>
      </div>
      {PullRequestdata?.length ? PullRequestdata?.map((el) => (
        <div key={el.id} className="content-card-container">
          <div className="card-header">{el?.title || el?.body || ''}</div>
          <div className="card-info">
            <div>{`#${el.number} by ${el?.user?.login} on ${el?.created_at}`}</div>
          </div>
        </div>
      )) : <div>No data</div>}
    </div>

    // <div>
    //     {
    //         PullRequestdata.map((el) => (
    //             <div key={el.id}>
    //                 <p>{el?.url}</p>
    //                 <p>{el?.state}</p>
    //                 <p>{el?.title}</p>
    //                 <p>{el?.user?.login}</p>
    //                 {/* will show this in details */}
    //                 <p>{el?.body}</p>

    //             </div>
    //         ))
    //     }
    // </div>
  );
};

export default PullListView;
