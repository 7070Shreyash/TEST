import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import "./LoginStyles.css";
import { Link } from "react-router-dom";

const SignUpComponent = () => {
  const [signedUp, setSignedUp] = useState(false);

  let applicationId = "LNMABCD001";

  const handleSubmit = (event) => {
    event.preventDefault();
    setSignedUp(true);
    console.log(signedUp);
  };
  return (
    <div>
      <div className="signup-container">
        <div className="signup-title">Welcome to the Sign-Up Page</div>
        <div className="signup-form">
          <Alert show={signedUp} variant="danger">
            <Alert.Heading>Thanks for becoming an Applicant</Alert.Heading>
            <p>
              You have successfully signed up! Your Application Id is -{" "}
              {applicationId}
            </p>
            <hr />
            <div className="d-flex justify-content-end">
              <Link to={"/login"}>
                <Button size="lg" variant="dark">
                  Login
                </Button>
              </Link>
            </div>
          </Alert>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                required
                size="lg"
                type="email"
                placeholder="Enter Your Email Address"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                required
                size="lg"
                type="numeric"
                placeholder="Enter Your 10-Digit Phone Number"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                size="lg"
                type="password"
                placeholder="Type a Password"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                required
                size="lg"
                type="password"
                placeholder="Re-type the Password"
              />
            </Form.Group>
            <Button className="mb-3" size="lg" variant="danger" type="submit">
              Sign-Up
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUpComponent;
