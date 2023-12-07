import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";


const Footer = () => {
  return (
    <footer className="mu-footer">
      <div className="mu-footer-top">
        <div className="container">
          <div className="mu-footer-top-area">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="mu-footer-widget">
                  <h4>Reach Us</h4>
                  <div className="line" />
                  <address>
                    <p>From New-Delhi: Well connected by road, rail and air</p>
                    <p>From Mumbai, Chennai and Kolkata: Well connected by rail and air</p>
                    <p>Approximate distance to LNMIIT from:
                      Railway Station is 17.5 km, Airport is 23.2 km &amp; Bus Stand is 16.4 km</p>
                    <a className="image-footer" href="https://www.google.com/maps?ll=26.936346,75.923523&amp;z=16&amp;t=m&amp;hl=en-US&amp;gl=IN&amp;mapclient=embed&amp;cid=6536242364884995115" target="_blank" >View Google Map</a>
                  </address>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="mu-footer-widget">
                  <h4>Contact Us</h4>
                  <address>
                    <p>The LNM Institute of Information Technology</p>
                    <p>Rupa ki Nangal, Post-Sumel, Via-Jamdoli Jaipur-302031, (Rajasthan) INDIA</p>
                    <p>Contact No. (Toll Free): 1800-180-6566</p>
                    <p><strong>E-mail Id:</strong>
                      <br />ugadmissions@lnmiit.ac.in (UG Admission),</p>
                    <p>mtech-ms.admissions@lnmiit.ac.in (PG Engineering Admissions),</p>
                    <p>msc.admissions@lnmiit.ac.in  (PG Science Admissions)</p>
                    <p>phdadmissions@lnmiit.ac.in (Doctoral Admissions)</p>
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
