import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./UgBulleted.css";
const UgBulleted = () => {
    return (
        <div className="UG-bulleted-note-main">
            <div className="sections-tab-child-sub-header">
                <h3 className="UG-bulleted-note-head">
                    Note:
                </h3>
            </div>
            <div className="sections-tab-child-list">
                <ul>
                    <li className="list-elements">
                        The Institute has no provision for either Capitation Fee or Management Quota
                    </li>
                    <li className="list-elements">
                        The Institute reserves the right to reflect any changes with respect to the admission to a programme, number of rounds of seat allocations, respective deadlines, and also any changes as may be necessary in view of statutory requirements/ notifications from time-to-time.
                    </li>
                    <li className="list-elements">
                        The number of seats mentioned above are tentative in nature. The number of seats may be changed appropriately considering the overall academic quality of incoming students, regulatory/statutory provisions, etc.
                    </li>
                    <li className="list-elements">
                        A maximum of 5% of the seats within each branch may be available for Non-resident Indian (NRI) candidates as per regulatory norms. (Such seats will be filled through DASA mode of admission.)
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default UgBulleted;