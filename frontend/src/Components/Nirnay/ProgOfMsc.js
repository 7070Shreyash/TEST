import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "../HomePage/Programmes.css";
import "./ProgOfMsc.css"


const ProgOfMsc = () => {
    const [key, setKey] = useState("Physics");

    return (
        <section className="programmes" >
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
                        eventKey="Physics"
                        title="Physics"
                        className="programmes-sections-child"
                        variant="danger"
                    >
                        <div className="programmes-sections-tab-child-sub-header">
                            <h3 className="programmes-sections-tab-child-h3">
                                Physics
                            </h3>
                        </div>
                        <div className="programmes-sections-tab-child-list">
                            <p className='prog-p'>
                                A Master's Programme in Physics, with a duration of 2 years, provides students the fundamental knowledge of advanced physics, along with problem-solving skills. The Department has a good research atmosphere with highly qualified and energetic faculty members backed up by excellent infrastructural facilities.
                            </p>
                            <h4 className='prog-h4'>
                                <strong>
                                    Eligibility Criteria
                                </strong>
                            </h4>
                            <p className='prog-p'>
                                A minimum of 55% or equivalent CPI/ CGPA in
                            </p>
                            <ul className="programmes-ul" >
                                <li className="programmes-list-elements">
                                    Computer Science and Engineering (CSE)
                                </li>
                                <li className="programmes-list-elements">
                                    Three-year B.Sc. (Honours in Physics/Applied Physics or Honours in Electronics/ Material Science/ Computer Science /Chemistry/Mathematics/Statistics with Physics as one of the major subjects.)
                                </li>
                                <li className="programmes-list-elements">
                                    Four-year B. Tech. / B. E. / B. Sc. (Engineering) in any branch of engineering.
                                </li>
                                <li className="programmes-list-elements">
                                    Three-year general B. Sc. degree (with Physics as one of the major subject)
                                </li>
                            </ul>
                            <h4 className='prog-h4'>
                                <strong>
                                    Available Seats - 15
                                </strong>
                            </h4>
                            <hr />
                        </div>
                    </Tab>

                    <Tab
                        eventKey="Mathematics"
                        title="Mathematics"
                        className="programmes-sections-tab-child"
                        variant="danger"
                    >
                        <div className="programmes-sections-tab-child-sub-header">
                            <h3 className="programmes-sections-tab-child-h3">
                                Mathematics
                            </h3>
                        </div>
                        <div className="programmes-sections-tab-child-list">
                            <p className='prog-p'>
                                The M.Sc. Program in Mathematics is designed to offer a complete, balanced combination of theory and applications. It will enable students to choose various carrier paths including research labs, academic institutions, and private companies.The Department has highly qualified and energetic faculty members backed up by excellent infrastructural facilities.
                            </p>
                            <h4 className='prog-h4'>
                                <strong>
                                    Eligibility Criteria
                                </strong>
                            </h4>
                            <p className='prog-p'>Minimum 55% or equivalent CPI/ CGPA in B. Sc. / B. A/ B. E./ B. Tech/ B. Sc. (Engineering) Mathematics should be a major subject in the above Bachelor degree.</p>
                            <h4 className='prog-h4'>
                                <strong>
                                    Available Seats - 15
                                </strong>
                            </h4>
                            <hr />
                        </div>
                    </Tab>

                </Tabs>
            </div>
        </section >
    );
}

export default ProgOfMsc