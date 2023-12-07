import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

const Loading = () => {
  return (
    <div>
      <h1 className="m-5">Please wait while we load the resources...</h1>
      <ProgressBar
        className="m-5"
        variant="danger"
        size="lg"
        animated
        now={75}
      />
    </div>
  );
};

export default Loading;
