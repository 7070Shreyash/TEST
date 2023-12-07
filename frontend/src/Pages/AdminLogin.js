import React from "react";
import LoginComponent from "../Components/Raghav/LoginComponent";
import "./styles.css";

const AdminLogin = () => {
  return (
    <div>
      <div className="login-title">Welcome to the Administrator Login</div>
      <LoginComponent isAdmin={true} />
    </div>
  );
};

export default AdminLogin;
