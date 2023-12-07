import React from 'react'
import "./UgHead.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const UgHead = () => {
    const loginPage = "/login";
    const navigate = useNavigate();

    const handleClick = (page) => {
        navigate(page);
      };
    return (
        <section className="ug-mode">
            <div className="ug-mode-container">
                <p className="ug-mode-p">
                    LNMIIT offers <strong>B.Tech</strong> in Communication and Computer Engineering (CCE), Computer Science and Engineering (CSE), Electronics and Communication Engineering (ECE), and Mechanical Engineering (ME) and <strong>B. Tech.-M. Tech. (5-Year Integrated Dual Degree)</strong> in Computer Science and Engineering (CSE) and Electronics and Communication Engineering (ECE). Admissions to the above mentioned programmes are through following modes.
                </p>
                <p className="ug-mode-p-red">
                    <strong>Important Note:</strong> All admissions to LNMIIT Jaipur are handled ONLY through the admission portal on our website. We do NOT have any other companies/ individuals or online portals representing us and providing admission services.
                </p>
                <Button
                    size="lg"
                    variant="danger"
                    className="btn"
                    onClick={() => handleClick(loginPage)}
                >
                    APPLY NOW
                </Button>
            </div>
        </section>
    )
}

export default UgHead