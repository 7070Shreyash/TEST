import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./UgProgrammesOfferedAndSeats.css";


const UgProgrammesOfferedAndSeats = () => {
    return (
        <div className="ug-Main-Container">
            <h1>UG Programmes Offered and Available Seats</h1>
            <table className="ug-table">

                <thead className="ug-head">
                    <tr className="table-head">
                        <th>Programmes</th>
                        <th className="seats">Seats</th>
                    </tr>
                </thead>
                <tbody>

                    <tr className="gray-bg">
                        <td >B.Tech. in Computer Science and Engineering (CSE)</td>
                        <td className="seats" rowSpan="3">240</td>
                    </tr>
                    <tr className="gray-bg">
                        <td >B.Tech. (Hons.) in CSE with Specialization in Artificial Intelligence &amp; Data Science (40 Max.)</td>
                    </tr>
                    <tr className="gray-bg">
                        <td>B.Tech. in CSE with Minor in Robotics &amp; Automation (10 Max.)</td>
                    </tr>
                    <tr className="white-bg">
                        <td>B.Tech. in Communication and Computer Engineering (CCE)</td>
                        <td className="seats" rowSpan="3">120</td>
                    </tr>
                    <tr className="white-bg">
                        <td>B.Tech. (Hons.) in CCE with Specialization in Artificial Intelligence &amp; Data Science (20 Max.)</td>
                    </tr>
                    <tr className="white-bg">
                        <td>B.Tech. in CCE with Minor in Robotics &amp; Automation (5 Max.)</td>
                    </tr>
                    <tr className="gray-bg">
                        <td>B.Tech. in Electronics and Communication Engineering (ECE)</td>
                        <td className="seats" rowSpan="3">150</td>
                    </tr>
                    <tr className="gray-bg">
                        <td>B.Tech. in ECE with Minor in Artificial Intelligence &amp; Data Science (20 Max.)</td>
                    </tr>
                    <tr className="gray-bg">
                        <td>B.Tech. in ECE with Minor in Robotics &amp; Automation (5 Max.)</td>
                    </tr>
                    <tr className="white-bg">
                        <td>B.Tech. in Mechanical Engineering (ME)</td>
                        <td className="seats" rowSpan="3">60</td>
                    </tr>
                    <tr className="white-bg">
                        <td>B.Tech. (Hons.) in ME with Specialization in Robotics &amp; Automation (60 Max.)</td>
                    </tr>
                    <tr className="white-bg">
                        <td>B.Tech. in ME with Minor in Artificial Intelligence &amp; Data Science (10 Max.)</td>
                    </tr>
                    <tr className="gray-bg">
                        <td>B.Tech. – M.Tech. (5 Year Integrated Dual Degree) in CSE</td>
                        <td className="seats">10</td>
                    </tr>
                    <tr className="white-bg">
                        <td>B.Tech. – M.Tech. (5 Year Integrated Dual Degree) in ECE</td>
                        <td className="seats">10</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default UgProgrammesOfferedAndSeats;