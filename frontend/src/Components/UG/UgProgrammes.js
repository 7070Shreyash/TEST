import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./UgProgrammes.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const UgProgrammes = () => {
  const [key, setKey] = useState("UG");

  return (
    <section className="ug-programmes">
      <div className="ug-programmes-container">
        <div className="ug-programmes-title">
          <h2 className="ug-programmes-title-h2">
            PROGRAMMES
          </h2>
        </div>
        <Tabs
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="ug-programmes-section-tabs"
          variant="pills"
        >
          <Tab
            eventKey="UG"
            title="B.Tech"
            className="ug-programmes-section-child"
            variant="danger"
          >
            <div className="ug-programmes-section-tab-child-sub-header">
              <h3 className="ug-programmes-section-tab-child-h3">
                B. Tech. (Honours) with Specialization
              </h3>
            </div>
            <div className="ug-programmes-section-tab-child-list">
              <ul>
                <li className="ug-programmes-list-elements">
                  Communication and Computer Engineering (CCE) with specialization in Artificial Intelligence & Data Science.
                </li>
                <li className="ug-programmes-list-elements">
                  Computer Science and Engineering (CSE) with specialization in Artificial Intelligence & Data Science.
                </li>
                <li className="ug-programmes-list-elements">
                  Mechanical Engineering (ME) with specialization in Robotics & Automation.
                </li>
              </ul>
              <hr />
            </div>
            <div className="ug-programmes-section-tab-child-sub-header">
              <h3 className="ug-programmes-section-tab-child-h3">
                B. Tech. with Minor
              </h3>
            </div>
            <div className="ug-programmes-section-tab-child-list">
              <ul>
                <li className="ug-programmes-list-elements">
                  Communication and Computer Engineering (CCE) with minor in Robotics & Automation
                </li>
                <li className="ug-programmes-list-elements">
                  Computer Science and Engineering (CSE) with minor in Robotics & Automation
                </li>
                <li className="ug-programmes-list-elements">
                  Electronics and Communication Engineering (ECE) with minor in Robotics & Automation
                </li>
                <li className="ug-programmes-list-elements">
                  Electronics and Communication Engineering (ECE) with Minor in Artificial Intelligence & Data Science
                </li>
                <li className="ug-programmes-list-elements">
                  Mechanical Engineering (ME) with Minor in Artificial Intelligence & Data Science
                </li>
              </ul>
              <hr />
            </div>
            <div className="ug-programmes-section-tab-child-sub-header">
              <h3 className="ug-programmes-section-tab-child-h3">
                B. Tech.
              </h3>
            </div>
            <div className="ug-programmes-section-tab-child-list">
              <ul>
                <li className="ug-programmes-list-elements">
                  Communication and Computer Engineering (CCE)
                </li>
                <li className="ug-programmes-list-elements">
                  Computer Science and Engineering (CSE)
                </li>
                <li className="ug-programmes-list-elements">
                  Electronics and Communication Engineering (ECE)
                </li>
                <li className="ug-programmes-list-elements">
                  Mechanical Engineering (ME)
                </li>
              </ul>
              <hr />
            </div>
          </Tab>

          <Tab
            eventKey="B.Tech-M.Tech (5-Year Integrated Dual Degree)"
            title="B.Tech-M.Tech (5-Year Integrated Dual Degree)"
            className="ug-programmes-section-tab-child"
            variant="danger"
          >

            <div className="ug-programmes-section-tab-child-sub-header">
              <h3 className="ug-programmes-section-tab-child-h3">
                B.Tech-M.Tech (5-Year Integrated Dual Degree)
              </h3>
            </div>
            <div className="ug-programmes-section-tab-child-list">
              <ul>
                <li className="ug-programmes-list-elements">
                  Computer Science and Engineering (CSE)
                </li>
                <li className="ug-programmes-list-elements">
                  Electronics and Communication Engineering (ECE)
                </li>
              </ul>
            </div>
          </Tab>
        </Tabs>
      </div>
    </section>
  );
};

export default UgProgrammes;