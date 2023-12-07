import React from "react";
import "./Banner.css";
import bannerImage from "../../Assets/HomePage.jpg";

const Banner = () => {
  return (
    <div>
      <div className="banner-image-container">
        <figure>
          <img className="banner-image" src={bannerImage} alt="Banner Image" />
        </figure>
      </div>
    </div>
  );
};

export default Banner;
