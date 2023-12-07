import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./UgScholarship.css";

const UgScholarship = () => {
    return (
        <section className="ug-scholarship-feature">
            <div className="ug-scholarship-feature-container">
                <div className="ug-scholarship-feature-row">
                    <div className="col-md-12">
                        <div className="ug-scholarship-feature-x">
                            <h3 className="ug-scholarship-h3">
                                Scholarships & Assistantships
                            </h3>
                            <p className="ug-scholarship-feature-p">
                                The LNMIIT has made a provision of various types of Scholarships and Assistantships in order to encourage merit, foster internal competition and support the economically challenged students, with certain level of academic performance.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <h3 className="ug-scholarship-feature-h3">
                            A- Scholarships
                        </h3>
                        <h4 className="ug-scholarship-feature-h4">
                            Merit Scholarships:
                        </h4>
                        <p className="ug-scholarship-feature-p">
                            For select top rankers/meritorious students based on the following academic criteria.
                        </p>
                        <Button
                            size="lg"
                            variant="danger"
                            className="btn"
                        >
                            READ MORE
                        </Button>
                    </div>
                    <div className="col-md-12">
                        <h4 className="ug-scholarship-feature-h4">
                            BPL Scholarships
                        </h4>
                        <p className="ug-scholarship-feature-p">
                            A few BPL Scholarships are available for the neediest students.
                        </p>
                        <Button
                            size="lg"
                            variant="danger"
                            className="btn"
                        >
                            READ MORE
                        </Button>
                    </div>
                    <div className="col-md-12">
                        <h4 className="ug-scholarship-feature-h4">
                            Vijay Bhatnagar Scholarship
                        </h4>
                        <p className="ug-scholarship-feature-p">
                            For a meritorious and economically challenged girl student based on the following criteria. The scholarship amount is INR 50000 (INR 25000 per semester)
                        </p>
                        <Button
                            size="lg"
                            variant="danger"
                            className="btn"
                        >
                            READ MORE
                        </Button>
                    </div>
                    <div className="col-md-12">
                        <h4 className="ug-scholarship-feature-h4">
                            Vandana Jain Merit Scholarship
                        </h4>
                        <p className="ug-scholarship-feature-p">
                            One scholarship of Rs. 50,000 per semester to be given to an academically bright student purely on the basis of merit.
                        </p>
                        <h4 className="ug-scholarship-feature-h4">
                            Academic Eligibility
                        </h4>
                        <p className="ug-scholarship-feature-p">
                            Highest CGPA from all the UG batches.
                        </p>
                    </div>
                    <div className="col-md-12">
                        <h3 className="ug-scholarship-feature-h3">
                            B- Assistantships
                        </h3>
                        <p className="ug-scholarship-feature-p">
                            Select Semester/ Term-long assistantships/ stipends under Earn While you Learn (EWL) scheme, in lieu of Academic/Community support work is available.
                        </p>
                        <Button
                            size="lg"
                            variant="danger"
                            className="btn"
                        >
                            READ MORE
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UgScholarship;