import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Programmes.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const Programmes = () => {
  const [key, setKey] = useState("UG");

  return (
    <section className="programmes" >
      <div className="programmes-container">
        <div className="programmes-title">
          <h2 className="programmes-title-h2">
            PROGRAMMES
          </h2>
        </div>
        <Tabs
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="programmes-sections-tabs"
          variant="tabs"

        >
          <Tab
            eventKey="UG"
            title="UG Programmes"
            className="programmes-sections-child"
            variant="primary"
            
          >
            <div className="programmes-sections-tab-child-header">
              <h2 className="programmes-sections-tab-child-h2">
                UG Programmes
              </h2>
            </div>
            <div className="programmes-sections-tab-child-sub-header">
              <h3 className="programmes-sections-tab-child-h3">
                B. Tech. (Honours) with Specialization
              </h3>
            </div>
            <div className="programmes-sections-tab-child-list">
              <ul className="programmes-ul" >
                <li className="programmes-list-elements">
                  Communication and Computer Engineering (CCE) with specialization in Artificial Intelligence & Data Science.
                </li>
                <li className="programmes-list-elements">
                  Computer Science and Engineering (CSE) with specialization in Artificial Intelligence & Data Science.
                </li>
                <li className="programmes-list-elements">
                  Mechanical Engineering (ME) with specialization in Robotics & Automation.
                </li>
              </ul>
              <hr />
            </div>
            <div className="programmes-sections-tab-child-sub-header">
              <h3 className="programmes-sections-tab-child-h3">
                B. Tech. with Minor
              </h3>
            </div>
            <div className="programmes-sections-tab-child-list">
              <ul className="programmes-ul">
                <li className="programmes-list-elements">
                  Communication and Computer Engineering (CCE) with minor in Robotics & Automation
                </li>
                <li className="programmes-list-elements">
                  Computer Science and Engineering (CSE) with minor in Robotics & Automation
                </li>
                <li className="programmes-list-elements">
                  Electronics and Communication Engineering (ECE) with minor in Robotics & Automation
                </li>
                <li className="programmes-list-elements">
                  Electronics and Communication Engineering (ECE) with Minor in Artificial Intelligence & Data Science
                </li>
                <li className="programmes-list-elements">
                  Mechanical Engineering (ME) with Minor in Artificial Intelligence & Data Science
                </li>
              </ul>
              <hr />
            </div>
            <div className="programmes-sections-tab-child-sub-header">
              <h3 className="programmes-sections-tab-child-h3">
                B. Tech.
              </h3>
            </div>
            <div className="programmes-sections-tab-child-list">
              <ul className="programmes-ul">
                <li className="programmes-list-elements">
                  Communication and Computer Engineering (CCE)
                </li>
                <li className="programmes-list-elements">
                  Computer Science and Engineering (CSE)
                </li>
                <li className="programmes-list-elements">
                  Electronics and Communication Engineering (ECE)
                </li>
                <li className="programmes-list-elements">
                  Mechanical Engineering (ME)
                </li>
              </ul>
              <hr />
            </div>
            <div className="programmes-sections-tab-child-sub-header">
              <h3 className="programmes-sections-tab-child-h3">
                B.Tech. - M.Tech. (5 Year Integrated Dual Degree)
              </h3>
            </div>
            <div className="programmes-sections-tab-child-list">
              <ul className="programmes-ul">
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
            eventKey="PG"
            title="PG Programmes"
            className="programmes-sections-tab-child"
            variant="danger"
          >
            <div className="programmes-sections-tab-child-header">
              <h2 className="programmes-sections-tab-child-h2">
                PG Programmes
              </h2>
            </div>
            <div className="programmes-sections-tab-child-sub-header">
              <h3 className="programmes-sections-tab-child-h3">
                M.Sc.
              </h3>
            </div>
            <div className="programmes-sections-tab-child-list">
              <ul className="programmes-ul">
                <li className="programmes-list-elements">
                  Mathematics
                </li>
                <li className="programmes-list-elements">
                  Physics
                </li>
              </ul>
              <hr />
            </div>
            <div className="programmes-sections-tab-child-sub-header">
              <h3 className="programmes-sections-tab-child-h3">
                M.Tech.
              </h3>
            </div>
            <div className="programmes-sections-tab-child-list">
              <ul className="programmes-ul">
                <li className="programmes-list-elements">
                  Computer Science and Engineering (CSE)
                </li>
                <li className="programmes-list-elements">
                  Electronics and Communication Engineering (ECE)
                </li>
              </ul>
              <hr />
            </div>
            <div className="programmes-sections-tab-child-sub-header">
              <h3 className="programmes-sections-tab-child-h3">
                MS (by research)
              </h3>
            </div>
            <div className="programmes-sections-tab-child-list">
              <ul className="programmes-ul">
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
            </div>
          </Tab>

          <Tab
            eventKey="Doctoral"
            title="Doctoral Programmes"
            className="programmes-sections-child"
            variant="danger"
          >
            <div className="programmes-sections-tab-child-header">
              <h2 className="programmes-sections-tab-child-h2">
                Doctoral
              </h2>
            </div>
            <div className="programmes-sections-tab-child-list">
              <ul className="programmes-ul">
                <li className="programmes-list-elements">
                  Computer Science & Engineering (CSE)
                </li>
                <li className="programmes-list-elements">
                  Electronics & Communication Engineering (ECE)
                </li>
                <li className="programmes-list-elements">
                  Mechanical- Mechatronics Engineering (MME)
                </li>
                <li className="programmes-list-elements">
                  Physics
                </li>
                <li className="programmes-list-elements">
                  Mathematics
                </li>
                <li className="programmes-list-elements">
                  Humanities and Social Sciences
                </li>
              </ul>
            </div>
          </Tab>
        </Tabs>
      </div>
    </section>
  );
};

export default Programmes;



