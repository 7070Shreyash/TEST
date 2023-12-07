import React from 'react'
import { Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import "../HomePage/Programmes.css";
import "./ProgPhd.css";

const ProgPhd = () => {
    return (
        <section className="programmes" style={{ backgroundColor: "#f2f2f2" }}>
            <div className="programmes-container">
                <div className="programmes-title">
                    <h2 className="programmes-title-h2">
                        PROGRAMMES
                    </h2>
                </div>
                <div className="phd-flexbx">
                    <Button
                        size="lg"
                        variant="danger"
                        className="btn"
                    // onClick={() => handleClick(loginPage)}
                    >
                        Computer Science & Engineering
                    </Button>
                    <Button
                        size="lg"
                        variant="danger"
                        className="btn"
                    // onClick={() => handleClick(loginPage)}
                    >
                        Electronics & Communication Engineering
                    </Button>
                    <Button
                        size="lg"
                        variant="danger"
                        className="btn"
                    // onClick={() => handleClick(loginPage)}
                    >
                        Mechanical- Mechatronics Engineering (MME)
                    </Button>
                    <Button
                        size="lg"
                        variant="danger"
                        className="btn"
                    // onClick={() => handleClick(loginPage)}
                    >
                        Physics
                    </Button>
                    <Button
                        size="lg"
                        variant="danger"
                        className="btn"
                    // onClick={() => handleClick(loginPage)}
                    >
                        Mathematics
                    </Button>
                    <Button
                        size="lg"
                        variant="danger"
                        className="btn"
                    // onClick={() => handleClick(loginPage)}
                    >
                        Humanities and Social Sciences
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default ProgPhd