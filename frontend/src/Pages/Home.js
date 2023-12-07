import React from "react";
import GoToTop from "../Components/Nirnay/GoToTop";
import BannerCards from "../Components/HomePage/BannerCards";
import Programmes from "../Components/HomePage/Programmes";
import InstituteGlance from "../Components/Prateek/InstituteGlance";
import PhotoGallery from "../Components/HomePage/PhotoGallery";
import AboutUs from "../Components/HomePage/AboutUs";
import Footer from "../Components/Nirnay/Footer";
import { useState, useEffect } from "react";

function Home() {
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch("/load")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.id));
  // }, []);

  return (
    <>
      {/* <p style={{ color: "pink" }}>{!data ? "Loading..." : data}</p> */}
      <div >
        <GoToTop />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Programmes />
        <BannerCards />
        <InstituteGlance />
        <PhotoGallery />
        <AboutUs />
        <Footer />
      </div>
    </>
  );
}

export default Home;
