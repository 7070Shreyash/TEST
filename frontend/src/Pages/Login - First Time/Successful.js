import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate, useOutletContext } from "react-router-dom";

const Successful = () => {
  const navigate = useNavigate();
  const [isConfirm, setIsConfirm] = useState(false);
  const [[progress, setProgress], [formData, setFormData]] = useOutletContext();
  const nextPage = "/login";

  const handleClick = () => {
    fetch(`/store`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: formData }),
    }).then((res) => {
      console.log(res);
    });

    setIsConfirm(true);
  };

  return (
    <div style={{ marginTop : "40px" , height: "300px", width: "1000px"  }}>
    <h1 style={{ marginTop: "40px", marginBottom: "40px", justifyContent: "center" , display: "flex", alignItems: "center", fontWeight: "bold" }}>{isConfirm && "You've Successfully submitted your details"}</h1>
      <h1 style={{ marginTop: "40px", marginBottom: "40px", justifyContent: "center" , display: "flex", alignItems: "center", fontWeight: "bold" }}>

        {!isConfirm &&
          " Do you confirm all the details, you've entered, are correct?"}
      </h1>
      <div className="d-grid gap-2" style={{ justifyContent: "center" , display: "flex", alignItems: "center", fontWeight: "bold" }}>
      {isConfirm && (
        <Button
        
          size="lg"
          variant="primary"
          style={{ justifyContent: "center" , display: "flex", alignItems: "center", fontWeight: "bold" }}

          onClick={() => {
            navigate(nextPage);
          }}
        >
          Go to Home
        </Button>
      )}
      </div>
    <div className = "d-grid gap-2 " style={{ justifyContent: "center" , display: "flex", alignItems: "center", fontWeight: "bold" }}>
      {!isConfirm && (
      
        <Button size="lg" variant="primary" onClick={handleClick}  style={{ justifyContent: "center" , display: "flex", alignItems: "center", fontWeight: "bold" }}> 
          Accept
        </Button>
        
      )}
      </div>
    </div>
  );
};

export default Successful;
