import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate, useOutletContext } from "react-router-dom";
import "./LoginStyles.css";

const DocumentSubmission = () => {
  const [[progress, setProgress], [formData, setFormData]] = useOutletContext();
  const navigate = useNavigate();

  const nextPage = "/applicant/first_login/preferences";

  const handleSubmit = () => {
    setProgress(progress + 20);
    console.log(formData);
    navigate(nextPage);
  };
  return (
    <div>
      <Form className="details-form" onSubmit={handleSubmit}>
        <h1 style = {{ marginTop : "20px" }}>Document Submission</h1>
        <br />
        <Row className="mb-5">
          <Form.Group as={Col}>
            <Form.Label>Upload 10th Marksheet</Form.Label>
            <Form.Control size="lg" type="file" />
          </Form.Group>
          </Row>
          <Row className="mb-5">
          <Form.Group as={Col}>
            <Form.Label>Upload 12th Marksheet</Form.Label>
            <Form.Control size="lg" type="file" />
          </Form.Group>
        </Row>

        <Row className="mb-5">
          <Form.Group as={Col}>
            <Form.Label>Upload Aadhar Card</Form.Label>
            <Form.Control size="lg" type="file" />
          </Form.Group>
          </Row>

          <Row className="mb-5">
          <Form.Group as={Col}>
            <Form.Label>Upload JEE Admit Card</Form.Label>
            <Form.Control size="lg" type="file" />
          </Form.Group>
        </Row>

        <Button size="lg" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default DocumentSubmission;
