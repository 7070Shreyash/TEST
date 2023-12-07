import React from "react";
import "./UgMode.css";
import bannerImage from "../../Assets/HomePage.jpg";
import { FaGraduationCap } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const UgModes = () => {
  const regularMode = "/ug_regular_mode";
  const loginPage = "/login";
  const navigate = useNavigate();

  const handleClick = (page) => {
    navigate(page);
  };

  return (
    <div>
      <div className="banner-image-container">
        <figure>
          <img className="banner-image" src={bannerImage} alt="Banner Image" />
        </figure>

      </div>
      {/* <div className="apply-button">
        <Button
          className="m-5"
          onClick={() => handleClick(loginPage)}
          variant="danger"
          size="lg"
        >
          Apply Now - 2022
        </Button>
      </div> */}
      <div className="cards">
        <div className="card-item" onClick={() => handleClick(regularMode)}>
          <figure>
            <FaGraduationCap />
          </figure>
          <br />
          <strong>REGULAR MODE</strong>
          <br />
          (For Indian Nationals through JEE (Main) Exam)
        </div>
        <div
          className="card-item"
          style={{ backgroundColor: "#000080" }}
        >
          <figure>
            <FaGraduationCap />
          </figure>
          <br />
          <strong>DASA MODE</strong>
          <br />
          Direct Admissions of
          <br /> Students Abroad
          <br /> (For FN/NRI/OCI/CIWG)
        </div>
        <div className="card-item">
          <figure>
            <FaGraduationCap />
          </figure>
          <br />
          <strong>DIRECT MODE</strong>
          <br />
          (Board Toppers)
        </div>
        <div
          className="card-item"
          style={{ backgroundColor: "#000080" }}
        >
          <figure>
            <FaGraduationCap />
          </figure>
          <br />
          <strong>LATERAL ENTRY MODE</strong>
          <br />
          (Admission in 3rd semester)
        </div>
      </div>
    </div>
  );
};

export default UgModes;
