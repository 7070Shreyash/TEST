import React from "react";
import "./Banner.css";
import Button from "react-bootstrap/Button";
import bannerImage from "../../Assets/HomePage.jpg";
import { FaGraduationCap } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BannerCards = () => {
  const loginPage = "/login";
  const ug = "/ug";
  const msc = "/msc";
  const mtech = "/mtech";
  const phd = "/phd";

  const navigate = useNavigate();

  const handleClick = (page) => {
    navigate(page);
  };

  return (
    <div >
      <div className="banner-image-container">
        <figure>
          <img className="banner-image" src={bannerImage} alt="Banner Image" />
        </figure>
      </div>
      <div className="apply-button">
        <Button
          onClick={() => handleClick(loginPage)}
          variant="danger"
          size="lg"
          style={{backgroundColor : "#000080" ,
        margin : "40px"}}
        >
          Apply Now - 2024
        </Button>
      </div>
      {/* <div className="cards">
        <div className="card-item" onClick={() => handleClick(ug)}>
          <figure>
            <FaGraduationCap />
          </figure>
          <br />
          <strong>UG Admissions</strong>
          <br />
          B.Tech./B.Tech.-M.Tech. <br />
          (5 Year Integrated Dual Degree)
        </div>
        <div
          className="card-item"
          style={{ backgroundColor: "#000080" }}
          onClick={() => handleClick(mtech)}
        >
          <figure>
            <FaGraduationCap />
          </figure>
          <br />
          <strong>PG Engineering Admissions</strong>
          <br />
          (M.Tech./MS by Research)
        </div>
        <div className="card-item" onClick={() => handleClick(msc)}>
          <figure>
            <FaGraduationCap />
          </figure>
          <br />
          <strong>PG Science Admissions</strong>
          <br />
          (M.SC.)
        </div>
        <div
          className="card-item"
          style={{ backgroundColor: "#000080" }}
          onClick={() => handleClick(phd)}
        >
          <figure>
            <FaGraduationCap />
          </figure>
          <br />
          <strong>Doctoral Admissions</strong>
          <br />
          (Ph.D.)
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default BannerCards;
