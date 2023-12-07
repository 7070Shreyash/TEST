import React from "react";
import Button from "react-bootstrap/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";


const ApplicantHome = () => {
  const allotement = "/applicant/allotment";
  const home = "/";
  const navigate = useNavigate();
  const location = useLocation();
  const status = location.state.data[0].status;
  const pref_details = location.state.pref_details;

  console.log(location.state.pref_details);

  const handleClick = () => {
    if(status === 0 && pref_details.length === 0){
      alert("Sorry, but you're already out of the process");
      navigate(home)
    }else{
      navigate(allotement, { state: location.state });
    }
  };

  return (
    <div style={{ width: "100%", height: "100vh", justifyContent: "center", display: "flex", alignItems: "center" }}>
      <div style = {{ border : "2px solid blue" , boxShadow: '1px 1px 5px 5px rgba(0, 0, 0, 0.5)' , width : "50%" , height : "40%" , display : "flex", justifyContent: "center" , alignItems: "center"}}>
        <div>
      <h1 style = {{ fontWeight : "bold" }}>Welcome to the Home Page of the Applicant!</h1>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
      <Button
        className="m-3"
        size={"lg"}
        variant="primary"
        onClick={handleClick}
      >
        Go to Allotment Page
      </Button>
      </div>
      </div>
    </div>
    </div>
  );
};

export default ApplicantHome;
