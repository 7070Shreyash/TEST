import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import "./styles.css";
import ProgressBar from "react-bootstrap/ProgressBar";

const FeePayment = ({ fees = 25000 }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <div className="fees-container">
        {!isLoading ? (
          <div className="fees-container-title">
            Please Pay the required Fees to proceed further.
          </div>
        ) : (
          <div className="fees-container-title">Loading Payment Gateway...</div>
        )}

        {!isLoading ? (
          <Button
            variant="danger"
            size="lg"
            onClick={() => {
              setIsLoading(true);
            }}
          >
            Pay {fees}/-
          </Button>
        ) : (
          <ProgressBar variant="danger" size="lg" animated now={85} />
        )}
      </div>
    </div>
  );
};

export default FeePayment;
