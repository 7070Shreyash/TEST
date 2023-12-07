import React from "react";
import Button from "react-bootstrap/Button";
import Banner from "../../Assets/Banner.jpg";
import { useNavigate } from "react-router-dom";
import "./CommonBanner.css";

const CommonBanner = () => {
    const loginPage = "/login";

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(loginPage);
    };
    return (
        <div>
            <div className="cbanner-image-container">
                <figure>
                    <img className="cbanner-image" src={Banner} alt="Banner Image" />
                </figure>
            </div>
            <div className="capply-button">
                <Button onClick={handleClick} variant="danger" size="lg">
                    Apply Now - 2024
                </Button>
            </div>
        </div>
    )
}

export default CommonBanner;