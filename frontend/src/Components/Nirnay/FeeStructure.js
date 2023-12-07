import React from 'react'
import { Table } from 'react-bootstrap'
import UgBullet from '../UG/UgBullet'
import "../UG/UgImpDates.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Fee.css";

const FeeStructure = ({ fee_title, fee_arr, mess_arr, bulletarr, colr }) => {
    return (
        <section className="fee-main" style={{ backgroundColor: colr }}>
            <div className="fee-container">
                <h3 className="ug-imp-dates-h3">
                    {fee_title}
                </h3>
                <Table striped bordered>
                    <tbody>
                        <tr>
                            <td>
                                A
                            </td>
                            <td>
                                Caution Money (One time deposit; Refundable at the end of the Programme; No interest is payable)
                            </td>
                            <td>
                                {fee_arr[0]}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                B
                            </td>
                            <td>
                                Semester Fee
                            </td>
                            <td>

                            </td>
                        </tr>
                        <tr>
                            <td>

                            </td>
                            <td>
                                Registration Fee
                            </td>
                            <td>
                                {fee_arr[1]}
                            </td>
                        </tr>
                        <tr>
                            <td>

                            </td>
                            <td>
                                Tuition Fee
                            </td>
                            <td>
                                {fee_arr[2]}
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <h3 className="ug-imp-dates-h3">
                    Hostel and Mess charges per semester (in INR)
                </h3>
                <Table striped bordered>
                    <tbody>
                        <tr>

                            <td>
                                Hostel Charges
                            </td>
                            <td>
                                {mess_arr[0]}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Electricity Charges
                            </td>
                            <td>
                                {mess_arr[1]}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Internet Charges
                            </td>
                            <td>
                                {mess_arr[2]}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Student Activity Charges
                            </td>
                            <td>
                                {mess_arr[2]}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Mess Food Charges (Advance) - Adjustable as per actual at the end of the Semester/ Academic year                            </td>
                            <td>
                                {mess_arr[3]}
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <UgBullet dataArray={bulletarr} />
            </div>
        </section >

    )
}

export default FeeStructure