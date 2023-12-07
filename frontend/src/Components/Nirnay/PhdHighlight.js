import React from "react";
import "../UG/UgHighlight.css"
import {
    FaChartLine,
    FaChartBar
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../HomePage/Programmes.css";
import "./PhdHighLight.css";

const PhdHighlight = () => {
    return (
        <section className="programmes">
            <div className="programmes-container">
                <div className="programmes-title">
                    <h2 className="programmes-title-h2">
                        HIGHLIGHTS
                    </h2>
                </div>
                <div className="phdhigh-flex">
                    <div className="col-md-3" >
                        <figure>
                            < FaChartLine />
                        </figure>
                        <strong className="title">Patent</strong>
                        <br />
                        <p style={{ color: "red" }}>View Detials</p>
                    </div>
                    <div className="col-md-3">
                        <figure>
                            <FaChartLine />
                        </figure>
                        <strong className="title">Projects</strong>
                        <br />
                        <p style={{ color: "red" }}>View Detials</p>
                    </div>
                    <div className="col-md-3">
                        <figure>
                            <FaChartLine />
                        </figure>
                        <strong className="title">MoUs</strong>
                        <br />
                        <p style={{ color: "red" }}>View Detials</p>
                    </div>
                </div>

            </div>
        </section >
    );
};

export default PhdHighlight;