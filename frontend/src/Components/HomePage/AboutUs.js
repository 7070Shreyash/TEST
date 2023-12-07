import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import "bootstrap/dist/css/bootstrap.min.css";
import i1 from "../../Assets/AboutUS.jpg";
import "./AboutUs.css";

const AboutUs = () => {
    const [open, setOpen] = useState(false);
    return (
        <section className="home-about-us" style={{backgroundColor : "#e5fcf5"}}>
            <div className="home-about-us-container">
                <div className="home-about-us-title">
                    <h2 className="home-about-us-h2" >
                        ABOUT US
                    </h2>
                </div>
                <div className="home-about-us-box">
                    <div className="col-lg-6 col-md-6">
                        <div className="home-about-us-box-left">
                            <Collapse in="true">
                                <div id="visible-text" className="para">
                                    <p>The LNMIIT was founded in 2002 as a joint venture between Govt. of Rajasthan and Lakshmi & Usha Mittal (LUM) Foundation as a philanthropic initiative. With the emphasis on quality and rigour in education, the Institute began its first academic session in July 2003 and was granted Deemed-to-be-University status by UGC in 2006 under the De-Novo category. The Institute, in spite of being young, is considered as one of the best institutions in its chosen areas of higher learning, both in the state and the country. In addition to having been accredited by the National Assessment & Accreditation Council (NAAC) as an 'A' grade institution, all the engineering programmes of the institute are approved by the AICTE.</p>
                                </div>
                            </Collapse>
                            <Collapse in={open}>
                                <div id="collapse-text" className="para" >
                                    <p>The 100-acre green residential campus is located in a serene atmosphere on the outskirts of India's pink city, Jaipur. Till now, more than 2500 students have graduated from the undergraduate (B.Tech., B. Tech. - M. Tech. (5 Year Integrated Dual Degree)) programmes and nearly 130 students from the postgraduate (M.Tech., M.S. by Research, M.Sc.) and 14* students have been awarded Ph.D. degree. Currently, the Institute has 2025 undergraduate students; 47 postgraduate and 68 Ph.D. candidates. Girls constitute more than 16% of the total strength.<br />The Institute is guided, in broad terms, by its Governing Council (GC) which is headed by its Founding Chairman, Padma Vibhushan Mr. L. N. Mittal, who is also the President and CEO of ArcelorMittal, one of the largest multinational steel and mining companies, apart from having his interests in petrochemical and energy sector through HMEL, a joint enterprise of HPCL and Mittal Energy Ltd.</p>
                                </div>
                            </Collapse>
                            <Button
                                onClick={() => setOpen(!open)}
                                aria-controls="collapse-text"
                                aria-expanded={open}
                                size="lg"
                                variant="danger"
                                style = {{backgroundColor : "#000080"}}
                            >
                                {open === false ? "Read More" : "Read Less"}
                            </Button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="home-about-us-box-right">
                            <img src={i1} className="home-about-us-box-pict" alt="Photo" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;
