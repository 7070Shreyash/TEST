import React, { useState } from "react";
import "./Navbar.css";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, Outlet } from "react-router-dom";
import LogoImage from "../../Assets/Logo.png";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <>
      <nav className="new-main-nav">
        {/* Logo */}
        <div className="new-logo">
          <figure>
            <img className="new-logo-image" src={LogoImage} alt="LNMIIT Logo" />
          </figure>
        </div>

        {/* Menu */}
        <div className={showMediaIcons ? "new-menu-link mobile-menu-link" : "new-menu-link"}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <a href="https://admissions.lnmiit.ac.in/ug/FAQs.html">FAQ</a>
            </li>
            <li>
              <a href="https://admissions.lnmiit.ac.in/ug/Placement_Internships.html">Placements</a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        {/* <div className="new-social-media">
          <ul className="new-social-media-desktop">
            <li>
              <a href="https://www.facebook.com/lnmiit.ac.in" target="_lnmiit">
                <FaFacebookSquare className="new-social-media-icons" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/lnmiit/" target="_lnmiit">
                <FaInstagramSquare className="new-social-media-icons" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCBndW-qun8prPOmq5kRFbjw?view_as=subscriber" target="_lnmiit">
                <FaYoutubeSquare className="new-social-media-icons" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/LNMIIT_Jaipur" target="_lnmiit">
                <FaTwitterSquare className="new-social-media-icons" />
              </a>
            </li>
          </ul>

          {/* Hamburger Menu */}
          {/* <div className="new-hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        // </div> */}
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;