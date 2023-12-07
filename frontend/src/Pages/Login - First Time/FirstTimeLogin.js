import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./LoginStyles.css";

const FirstTimeLogin = () => {
  const [progress, setProgress] = useState(20);
  const [formData, setFormData] = useState({});

  return (
    <div>
      <h1 className="login-title" style={{ marginTop : "40px" }}>Please Fill Your Details</h1>
      <br/><br/><br/>
      <div className="first-login-form-container" style={{border : "2px solid blue" , boxShadow: '1px 1px 5px 5px rgba(0, 0, 0, 0.5)'}}>
        <ProgressBar
          className="form-progress"
          now={progress}
          label={`${progress}%`}
          variant="primary"
          style = {{ height : "20px" }}
          animated = {45}
        />
        <Outlet
          context={[
            [progress, setProgress],
            [formData, setFormData],
          ]}
        />
      </div>
    </div>
  );
};

export default FirstTimeLogin;
