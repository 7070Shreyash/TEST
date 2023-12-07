import React from "react";
import "./InstituteGlance.css";
import {
  FaUsers,
  FaBook,
  FaLaptop,
  FaMicrophone,
  FaFilm,
  FaSun,
} from "react-icons/fa";
import Button from "react-bootstrap/esm/Button";

const InstituteGlance = () => {
  return (
    <div className="container-ins" style = {{backgroundColor : "#e5fcf5"}} >
      <h2 className="institute-title" style = {{ textDecoration : "underline" , textDecorationColor : "#000080" }}>Institute at a Glance</h2>
      <section className="institute-information-container-parent">
        <div className="institute-information-container-row">
          <div className="institute-information-card">
            <figure>
              <FaUsers />
            </figure>
            <strong className="title" style = {{ textDecoration : "underline" , textDecorationColor : "#000080" }} >Faculty</strong>
            <br />
            <br />
            Faculty members at LNMIIT have excellent research credentials and
            extensive industry experience.
            <br />
            <Button className="readmore" variant="danger" size="lg" style={{backgroundColor : "#000080"}}>
              Read More
            </Button>
          </div>
          <div className="institute-information-card">
            <figure>
              <FaBook />
            </figure>
            <strong className="title" style = {{ textDecoration : "underline" , textDecorationColor : "#000080" }} >Research</strong>
            <br />
            <br />
            The LNMIIT, Jaipur focuses on the latest areas of science,
            technology and humanities for Teaching and research in its
            curriculum
            <br />
            <Button className="readmore" variant="danger" size="lg" style={{backgroundColor : "#000080"}}>
              Read More
            </Button>
          </div>
          <div className="institute-information-card">
            <figure>
              <FaLaptop />
            </figure>
            <strong className="title" style = {{ textDecoration : "underline" , textDecorationColor : "#000080" }} >Internships & Placements</strong>
            <br />
            <br />
            LNMIIT students have an outstanding offers of internship and
            placements.
            <br />
            <Button className="readmore" variant="danger" size="lg" style={{backgroundColor : "#000080"}} >
              Read More
            </Button>
          </div>
        </div>
        <div className="institute-information-container-row">
          <div className="institute-information-card">
            <figure>
              <FaMicrophone />
            </figure>
            <strong className="title" style = {{ textDecoration : "underline" , textDecorationColor : "#000080" }} >Infrastructure  </strong>
            <br />
            <br />
            The LNMIIT, spread over 100-acre green campus, is at par with the
            best technological institutions in the country.
            <br />
            <Button className="readmore" variant="danger" size="lg" style={{backgroundColor : "#000080"}}>
              Read More
            </Button>
          </div>
          <div className="institute-information-card">
            <figure>
              <FaFilm />
            </figure>
            <strong className="title" style = {{ textDecoration : "underline" , textDecorationColor : "#000080" }} >
              Institute Accreditation and Ranking
            </strong>
            <br />
            <br />
            The LNMIIT is a deemed-to be university under UGC and Accredited 'A'
            grade by NAAC. (Second-cycle of re-accreditation is in process)
            <br />
            <Button variant="danger" size="lg" style={{backgroundColor : "#000080"}}>
              Read More
            </Button>
          </div>
          <div className="institute-information-card">
            <figure>
              <FaSun />
            </figure>
            <strong className="title" style = {{ textDecoration : "underline" , textDecorationColor : "#000080" }} >Life at LNMIIT</strong>
            <br />
            <br />
            Students actively participate in institute's activity through
            Gymkhana, councils and clubs.
            <br />
            <Button variant="danger" size="lg" style={{backgroundColor : "#000080"}}>
              Read More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InstituteGlance;
