import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import "./styles.css";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Signup } from "../Classes/Signup";

//import SignUpComponent from "../Components/Raghav/SignUpComponent";

const SignUp = () => {
  const [signedUp, setSignedUp] = useState(false);
  const [isError, setIsError] = useState(false);
  const [applicationId, setApplicationId] = useState(null);
  const [phoneError, setPhoneError] = useState(false);
  const [pwdError, setPwdError] = useState(false);
  const [pass, setPass] = useState({ pass: "", rePass: "" });
  //Use Ref Hooks

  const applicant_emailId = useRef(null);
  const applicant_phoneNo = useRef(null);
  const applicant_password = useRef(null);
  const applicant_rePassword = useRef(null);
  const [show , setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const signupObject = new Signup();

  const fetchData = async (obj) => {
    await fetch(`/signUpData`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: obj }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setApplicationId(data);
      });
  };

  const handleChange = (e) => {
    console.log(pass);
    console.log(e.target.value);
    if (pass.pass !== e.target.value) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isError) {
      console.log(signedUp);
      // if (applicant_password === applicant_rePassword) {
      signupObject.email_id = applicant_emailId.current.value;
      signupObject.phone_no = applicant_phoneNo.current.value;
      signupObject.password = applicant_password.current.value;
      // }

      await fetchData(signupObject);

      setSignedUp(true);
      const data = {
        id : applicationId
      };
      handleShow()
    }
  };
  return (
    <div>
      <div className="signup-container"  >
        <div className="signup-title" style = {{ marginTop:"50px"}} >Sign-Up</div>
        <br/><br/><br/><br/>
        <div className="signup-form" style={{border : "2px solid blue" , boxShadow: '1px 1px 5px 5px rgba(0, 0, 0, 0.5)' }} >
          {/* <Alert  show={signedUp} variant="primary">
            <Alert.Heading>Success Application Id is -{" "}
              {applicationId}</Alert.Heading>
            <hr />
            <div className="d-flex justify-content-end">
              <Link to={"/login"}>
                <Button size="lg" variant="dark">
                  Login
                </Button>
              </Link>
            </div>
          </Alert> */}
       
       <Modal show={show} onHide={handleShow}>
        <Modal.Header closeButton>
          <Modal.Title>Signup Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>Application ID : { applicationId }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleClose}>
          <Link to={"/login"}>
                <Button size="lg" variant="dark">
                  Login
                </Button>
              </Link>
          </Button>
        </Modal.Footer>
      </Modal>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                required
                ref={applicant_emailId}
                size="lg"
                type="email"
                placeholder="Enter Your Email Address"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                required
                ref={applicant_phoneNo}
                size="lg"
                type="numeric"
                placeholder="Enter Your 10-Digit Phone Number"
                onChange={(e) => {
                  if (
                    e.target.value > 999999999 &&
                    e.target.value < 99999999999
                  ) {
                    setPhoneError(false);
                  } else {
                    setPhoneError(true);
                  }
                }}
              />
              <Form.Text className="Enter Your 10-Digit Phone Numbertext-danger">
                {phoneError && "Phone Number must be of 10-Digits"}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                ref={applicant_password}
                size="lg"
                type="password"
                placeholder="Type a Password"
                onChange={(e) => {
                  if (
                    e.target.value.length >= 7 &&
                    e.target.value.length < 100
                  ) {
                    setPwdError(false);
                    setPass({ ...pass, pass: e.target.value });
                  } else {
                    setPwdError(true);
                  }
                }}
              />
              <Form.Text className="Password Length should be atleast 7-danger">
                {pwdError && "Password length should be atleast 7"}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                required
                ref={applicant_rePassword}
                size="lg"
                type="password"
                placeholder="Re-type the Password"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Text className="text-danger">
              {isError && "Error! Passwords must match"}
            </Form.Text>
            <br />
            <Button className="mb-3" size="lg" type="submit" style = {{ backgroundColor : "000080"  }} >
              Sign-Up
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
