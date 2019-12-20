import React from "react";

const Loading = () => (
  <div className="row">
    <div className="col-md-8 offset-md-2 text-center">
      <div className="spinner-border text-warning" role="status">
        <span className="sr-only">Loading...</span>
      </div>{" "}
    </div>
  </div>
);

export default Loading;