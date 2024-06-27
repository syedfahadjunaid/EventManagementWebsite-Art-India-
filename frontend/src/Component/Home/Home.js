import React, { useRef } from "react";
import "./Home.css";
import AboutUs from "../AboutUs/AboutUs";
import HomeBanner from "../Layout/HomeBanner/HomeBanner";
import ShowBooking from "../ShowBooking/ShowBooking";
import ShowNotification from "../Layout/ShowNotification/ShowNotification";
import OurSpaces from "../OurSpaces/OurSpaces";
import OurComunity from "../OurComunity/OurComunity";
import Blog from "../Blog/Blog";
import Faq from "../Faq/Faq";
import Footer from "../Footer/Footer";
import NewsLetter from "../Layout/NewsLetter/NewsLetter";
import NavBar from "../Layout/NavBar/NavBar";

function Home() {
  const ref = useRef();

  const btn = (
    <button onClick={() => ref.current?.scrollIntoView({ behavior: "smooth" })}>
      Book Now
    </button>
  );
  return (
    <>
      <NavBar />
      <div className='home'>
        {/* <p className="home_para">Experience the rich history and amazing </p>
      <span className="home_span"></span>
      <p className="home_para1">Welcome to the home of creativity, creativity that expresses itself through the vibrant work</p>
      <button>Book Now</button> */}
        <HomeBanner btn={btn} />
        <AboutUs />
        <div
          ref={ref}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: "80%",
          }}>
          <ShowBooking />
        </div>
        <NewsLetter />
        <OurSpaces />
        <OurComunity />
        <Blog />
        <Faq />
        <ShowNotification />
        <Footer />
      </div>
    </>
  );
}

export default Home;
