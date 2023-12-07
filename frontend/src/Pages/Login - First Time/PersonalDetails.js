import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import { useRef } from "react";
import "./LoginStyles.css";

import { Personaldetails } from "../../Classes/Personaldetails";

const PersonalDetails = () => {
  const [[progress, setProgress], [formData, setFormData]] = useOutletContext();
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const location = useLocation();
  //Use Ref Hooks
  const firstName = useRef(null);
  const middleName = useRef(null);
  const lastName = useRef(null);
  const fatherName = useRef(null);
  const address_1 = useRef(null);
  const address_2 = useRef(null);
  const pin = useRef(null);
  //

  const pr = location.state.id;

  const onlyTextPattern = /^[A-Za-z]+$/;
  const zipCodePattern = /[0-9]{6}/;
  const nextPage = "/applicant/first_login/2";
  const a = new Personaldetails();
  let applicantObjectArray = [];

  // const handleError = (e) => {
  //   console.log(onlyTextPattern.test(e.target.value));
  //   if (
  //     onlyTextPattern.test(e.target.value) === true
  //     // zipCodePattern.test(e.target.value) === true
  //   ) {
  //     setIsError(false);
  //   } else {
  //     setIsError(true);
  //   }
  // };

  // const handleZipError = (e) => {
  //   console.log(zipCodePattern.test(e.target.value));
  //   if (
  //     // onlyTextPattern.test(e.target.value) === true
  //     zipCodePattern.test(e.target.value) === true
  //   ) {
  //     setIsError(false);
  //   } else {
  //     setIsError(true);
  //   }
  // };

  const handleSubmit = (e) => {
    // fetch(`/for_store?fname=${firstName.current.value}&mname=${middleName.current.value}`)
    e.preventDefault();
    if (!isError) {
      setProgress(progress + 20);

      //Use Ref Hooks
      a.id = pr; //route.params.state; //need to assign
      a.first_name = firstName.current.value;
      a.middle_name = middleName.current.value;
      a.last_name = lastName.current.value;
      a.father_name = fatherName.current.value;
      a.address1 = address_1.current.value;
      a.address2 = address_2.current.value;
      a.zip = pin.current.value;
      //

      setFormData({ ...formData, a });
      navigate(nextPage);
    }
  };

  return (
    <div>
      <Form className="details-form" onSubmit={handleSubmit}  >
        <h1 style={{ marginTop : "50px" }}>Enter Your Personal Details</h1>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>First Name*</Form.Label>
            <Form.Control
              required
              ref={firstName}
              size="lg"
              type="text"
              placeholder="Enter Your First Name"
              // onChange={(e) => handleError(e)}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Middle Name</Form.Label>
            <Form.Control
              ref={middleName}
              size="lg"
              type="text"
              placeholder="Enter Your Middle Name"
              // onChange={(e) => handleError(e)}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              ref={lastName}
              size="lg"
              type="text"
              placeholder="Enter Your Last Name"
              // onChange={(e) => handleError(e)}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group className="mb-3">
            <Form.Label>Father Full Name*</Form.Label>
            <Form.Control
              required
              ref={fatherName}
              size="lg"
              placeholder="Please Enter your Father's Full Name"
              // onChange={(e) => handleError(e)}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group className="mb-3">
            <Form.Label>Address Line 1*</Form.Label>
            <Form.Control
              required
              ref={address_1}
              size="lg"
              placeholder="House/Flat No., Street, Landmark"
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Address Line 2</Form.Label>
            <Form.Control ref={address_2} size="lg" placeholder="City, State" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip*</Form.Label>
            <Form.Control
              required
              ref={pin}
              size="lg"
              placeholder="Please Enter your PINCODE"
              // onChange={(e) => handleZipError(e)}
            />
          </Form.Group>
          {/* <Form.Text className="text-danger">
            {isError &&
              "Error! Note - Name must not contain characters other than alphabets and Zip Code must be of 6-digits"}
          </Form.Text> */}
        </Row>
        <Button size="lg" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default PersonalDetails;
