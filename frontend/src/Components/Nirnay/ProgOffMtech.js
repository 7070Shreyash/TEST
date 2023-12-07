import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../HomePage/Programmes.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const ProgOffMtech = () => {
    const [key, setKey] = useState("MTech");

    return (
        <section className="programmes" style={{ backgroundColor: "#f2f2f2" }}>
            <div className="programmes-container">
                <div className="programmes-title">
                    <h2 className="programmes-title-h2">
                        PROGRAMMES OFFERED AND AVAILABLE SEATS
                    </h2>
                </div>
                <Tabs
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="programmes-sections-tabs"
                    variant="pills"
                >
                    <Tab
                        eventKey="MTech"
                        title="M.Tech."
                        className="programmes-sections-child"
                        variant="danger"
                    >
                        <div className="programmes-sections-tab-child-sub-header">
                            <h3 className="programmes-sections-tab-child-h3">
                                M. Tech.
                            </h3>
                        </div>
                        <div className="programmes-sections-tab-child-list">
                            <ul className="programmes-ul" >
                                <li className="programmes-list-elements">
                                    Computer Science and Engineering (CSE)
                                </li>
                                <li className="programmes-list-elements">
                                    Electronics and Communication Engineering (ECE)
                                </li>
                            </ul>
                            <hr />
                        </div>
                    </Tab>

                    <Tab
                        eventKey="MS"
                        title="MS (by research)"
                        className="programmes-sections-tab-child"
                        variant="danger"
                    >
                        <div className="programmes-sections-tab-child-sub-header">
                            <h3 className="programmes-sections-tab-child-h3">
                                M.S. (by research)
                            </h3>
                        </div>
                        <div className="programmes-sections-tab-child-list">
                            <ul className="programmes-ul" >
                                <li className="programmes-list-elements">
                                    Computer Science and Engineering (CSE)
                                </li>
                                <li className="programmes-list-elements">
                                    Electronics and Communication Engineering (ECE)
                                </li>
                                <li className="programmes-list-elements">
                                    Communication and Computer Engineering (CCE)
                                </li>
                            </ul>
                            <hr />
                        </div>
                    </Tab>

                </Tabs>
            </div>
        </section >
    );
};

export default ProgOffMtech;