import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./MscProgrammes.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const MscProgrammes = () => {
    const [key, setKey] = useState("Physics");

    return (
        <section className="msc-programmes">
            <div className="msc-programmes-container">
                <div className="msc-programmes-title">
                    <h2 className="msc-programmes-title-h2">
                        PROGRAMMES
                    </h2>
                </div>
                <Tabs
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="msc-programmes-sections-tabs"
                    variant="pills"
                >
                    <Tab
                        eventKey="Physics"
                        title="Physics "
                        className="msc-programmes-sections-child"
                        variant="danger"
                    >
                        <div className="msc-programmes-sections-tab-child-header">
                            <h2 className="msc-programmes-sections-tab-child-h2">
                                UG Programmes
                            </h2>
                        </div>
                        <div className="msc-programmes-sections-tab-child-sub-header">
                            <h3 className="msc-programmes-sections-tab-child-h3">
                                B. Tech. (Honours) with Specialization
                            </h3>
                        </div>
                        <div className="msc-programmes-sections-tab-child-list">
                            <ul className="msc-programmes-ul" >
                                <li className="msc-programmes-list-elements">
                                    Communication and Computer Engineering (CCE) with specialization in Artificial Intelligence & Data Science.
                                </li>
                                <li className="msc-programmes-list-elements">
                                    Computer Science and Engineering (CSE) with specialization in Artificial Intelligence & Data Science.
                                </li>
                                <li className="msc-programmes-list-elements">
                                    Mechanical Engineering (ME) with specialization in Robotics & Automation.
                                </li>
                            </ul>
                            <hr />
                        </div>
                        <div className="msc-programmes-sections-tab-child-sub-header">
                            <h3 className="msc-programmes-sections-tab-child-h3">
                                B. Tech. with Minor
                            </h3>
                        </div>
                        <div className="msc-programmes-sections-tab-child-list">
                            <ul className="msc-programmes-ul">
                                <li className="msc-programmes-list-elements">
                                    Communication and Computer Engineering (CCE) with minor in Robotics & Automation
                                </li>
                                <li className="msc-programmes-list-elements">
                                    Computer Science and Engineering (CSE) with minor in Robotics & Automation
                                </li>
                                <li className="msc-programmes-list-elements">
                                    Electronics and Communication Engineering (ECE) with minor in Robotics & Automation
                                </li>
                                <li className="msc-programmes-list-elements">
                                    Electronics and Communication Engineering (ECE) with Minor in Artificial Intelligence & Data Science
                                </li>
                                <li className="msc-programmes-list-elements">
                                    Mechanical Engineering (ME) with Minor in Artificial Intelligence & Data Science
                                </li>
                            </ul>
                            <hr />
                        </div>
                        <div className="msc-programmes-sections-tab-child-sub-header">
                            <h3 className="msc-programmes-sections-tab-child-h3">
                                B. Tech.
                            </h3>
                        </div>
                        <div className="msc-programmes-sections-tab-child-list">
                            <ul className="msc-programmes-ul">
                                <li className="msc-programmes-list-elements">
                                    Communication and Computer Engineering (CCE)
                                </li>
                                <li className="msc-programmes-list-elements">
                                    Computer Science and Engineering (CSE)
                                </li>
                                <li className="msc-programmes-list-elements">
                                    Electronics and Communication Engineering (ECE)
                                </li>
                                <li className="msc-programmes-list-elements">
                                    Mechanical Engineering (ME)
                                </li>
                            </ul>
                            <hr />
                        </div>
                        <div className="msc-programmes-sections-tab-child-sub-header">
                            <h3 className="msc-programmes-sections-tab-child-h3">
                                B.Tech. - M.Tech. (5 Year Integrated Dual Degree)
                            </h3>
                        </div>
                        <div className="msc-programmes-sections-tab-child-list">
                            <ul className="msc-programmes-ul">
                                <li className="msc-programmes-list-elements">
                                    Computer Science and Engineering (CSE)
                                </li>
                                <li className="msc-programmes-list-elements">
                                    Electronics and Communication Engineering (ECE)
                                </li>
                            </ul>
                            <hr />
                        </div>
                    </Tab>

                    <Tab
                        eventKey="Mathematics"
                        title="Mathematics"
                        className="msc-programmes-sections-tab-child"
                        variant="danger"
                    >
                        <div className="msc-programmes-sections-tab-child-header">
                            <h2 className="msc-programmes-sections-tab-child-h2">
                                PG Programmes
                            </h2>
                        </div>
                        <div className="msc-programmes-sections-tab-child-sub-header">
                            <h3 className="msc-programmes-sections-tab-child-h3">
                                M.Sc.
                            </h3>
                        </div>
                        <div className="msc-programmes-sections-tab-child-list">
                            <ul className="msc-programmes-ul">
                                <li className="msc-programmes-list-elements">
                                    Mathematics
                                </li>
                                <li className="msc-programmes-list-elements">
                                    Physics
                                </li>
                            </ul>
                            <hr />
                        </div>
                        <div className="msc-programmes-sections-tab-child-sub-header">
                            <h3 className="msc-programmes-sections-tab-child-h3">
                                M.Tech.
                            </h3>
                        </div>
                        <div className="msc-programmes-sections-tab-child-list">
                            <ul className="msc-programmes-ul">
                                <li className="msc-programmes-list-elements">
                                    Computer Science and Engineering (CSE)
                                </li>
                                <li className="msc-programmes-list-elements">
                                    Electronics and Communication Engineering (ECE)
                                </li>
                            </ul>
                            <hr />
                        </div>
                        <div className="msc-programmes-sections-tab-child-sub-header">
                            <h3 className="msc-programmes-sections-tab-child-h3">
                                MS (by research)
                            </h3>
                        </div>
                        <div className="msc-programmes-sections-tab-child-list">
                            <ul className="msc-programmes-ul">
                                <li className="msc-programmes-list-elements">
                                    Computer Science and Engineering (CSE)
                                </li>
                                <li className="msc-programmes-list-elements">
                                    Electronics and Communication Engineering (ECE)
                                </li>
                                <li className="msc-programmes-list-elements">
                                    Communication and Computer Engineering (CCE)
                                </li>
                            </ul>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </section>
    );
};

export default MscProgrammes