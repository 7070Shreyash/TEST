import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="main-container-footer">
      <div className="sub-container-footer">
        <div className="left-para-footer">
          <h4 className="contact_reach-footer">Reach Us</h4>
          <p>From New-Delhi: Well connected by road, rail and air</p>
          <p>From Mumbai, Chennai and Kolkata: Well connected by rail and air</p>
          <p>Approximate distance to LNMIIT from:
            Railway Station is 17.5 km</p>
          <p>Airport is 23.2 km &amp; Bus Stand is 16.4 km</p>
          <a className="image-footer" href="https://www.google.com/maps?ll=26.936346,75.923523&amp;z=16&amp;t=m&amp;hl=en-US&amp;gl=IN&amp;mapclient=embed&amp;cid=6536242364884995115" target="_blank" >View Google Map</a>
          {/* <p><a href="https://www.google.com/maps?ll=26.936346,75.923523&amp;z=16&amp;t=m&amp;hl=en-US&amp;gl=IN&amp;mapclient=embed&amp;cid=6536242364884995115" target="_blank" style="color:#f31620; font-weight:600;">View Google Map</a></p> */}
        </div>
        <div className="right-para-footer">
          <h4 className="contact_reach-footer">Contact Us</h4>
          <p>The LNM Institute of Information Technology</p>
          <p>Rupa ki Nangal, Post-Sumel, Via-Jamdoli Jaipur-302031, (Rajasthan) INDIA</p>
          <p>Contact No. (Toll Free): 1800-180-6566</p><br />
          <p className="email-footer">E-mail Id:</p>
          <p>ugadmissions@lnmiit.ac.in (UG Admission),</p>
          <p>mtech-ms.admissions@lnmiit.ac.in (PG Engineering Admissions),</p>
          <p>msc.admissions@lnmiit.ac.in  (PG Science Admissions)</p>
          <p>phdadmissions@lnmiit.ac.in (Doctoral Admissions)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
