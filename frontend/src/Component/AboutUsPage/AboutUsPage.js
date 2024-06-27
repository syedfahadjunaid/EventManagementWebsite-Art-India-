import React from "react";
import "./AboutUsPage.css";
import HeadImage from "../Layout/HeadImage/HeadImage";
// import img from "../imges/image 11.png";
// import img1 from "../imges/image 12.png";
// import img2 from "../imges/Rectangle 9.png";
// import img3 from "../imges/Rectangle 94.png";
// import img4 from "../imges/Rectangle 95.png";
// import img5 from "../imges/Rectangle 99.png";
import NewsLetter from "../Layout/NewsLetter/NewsLetter";
import Footer from "../Footer/Footer";
import NavBar from "../Layout/NavBar/NavBar";

import {
  useGetAboutUsQuery,
  // useUpdateAboutUsMutation,
} from "../../services/aboutus";

function AboutUsPage() {
  const responseAboutUs = useGetAboutUsQuery();

  return (
    <>
      <NavBar />
      <div className='aboutuspage'>
        {/* <div className='aboutuspage_banner'></div> */}
        <img
          className='aboutuspage_banner'
          src={responseAboutUs?.data?.map((data) => {
            return `${process.env.React_App_Base_Image_Url}${data.BGImage}`;
          })}
          alt='pagebanner'
        />
        <div className='aboutuspage_first'>
          <HeadImage />
        </div>
        <div className='aboutuspage_second'>
          <div className='aboutuspage_second_left'>
            <img
              style={{ width: "100%", height: "100%" }}
              src={responseAboutUs?.data?.map((data) => {
                return `${process.env.React_App_Base_Image_Url}${data.FirstImage}`;
              })}
              alt='banner'
            />
          </div>
          <div className='aboutuspage_second_right'>
            <h3>
              {responseAboutUs?.data?.map((data) => {
                return data.FirstTitle;
              })}
            </h3>
            <p className='aboutuspage_second_right_para'>
              {responseAboutUs?.data?.map((data) => {
                return data.FirstSubTitle;
              })}
            </p>
            <p className='aboutuspage_second_right_para1'>
              {responseAboutUs?.data?.map((data) => {
                return data.FirstDescription;
              })}
            </p>
            {/* <p className='aboutuspage_second_right_para1'>
              I'm also a team player who can work well with others to complete
              tasks and bring a positive attitude wherever I go. My experience
              with a variety of technologies, competency in web development, and
              ability to think critically make me an asset to any team. I'm
              passionate about using technology to make the world a better
              place, and am excited to continue learning new skills that can
              help me do that.
            </p> */}
          </div>
        </div>
        <span className='bottom_border'></span>
        <div className='aboutuspage_third'>
          <div className='aboutuspage_third_left'>
            <h3>
              {responseAboutUs?.data?.map((data) => {
                return data.SecondTitle;
              })}
            </h3>
            <p className='aboutuspage_second_right_para'>
              {responseAboutUs?.data?.map((data) => {
                return data.SecondSubTitle;
              })}
            </p>
            <p className='aboutuspage_second_right_para1'>
              {responseAboutUs?.data?.map((data) => {
                return data.SecondDescription;
              })}
            </p>
            {/* <p className='aboutuspage_second_right_para1'>
              I'm also a team player who can work well with others to complete
              tasks and bring a positive attitude wherever I go. My experience
              with a variety of technologies, competency in web development, and
              ability to think critically make me an asset to any team. I'm
              passionate about using technology to make the world a better
              place, and am excited to continue learning new skills that can
              help me do that.
            </p> */}
          </div>
          <div className='aboutuspage_third_right'>
            <img
              style={{ width: "100%", height: "100%" }}
              src={responseAboutUs?.data?.map((data) => {
                return `${process.env.React_App_Base_Image_Url}${data.SecondImage}`;
              })}
              alt='banner'
            />
          </div>
        </div>
        <span className='bottom_border'></span>
        <div className='aboutuspage_fourth'>
          <div className='aboutuspage_fourth_heading'>
            <h3>CEO</h3>
          </div>
          <div className='aboutuspage_fourth_image'>
            <span>
              <figure>
                <img
                  src={responseAboutUs?.data?.map((data) => {
                    return `${process.env.React_App_Base_Image_Url}${data.CeoImage}`;
                  })}
                  alt='Mountains'
                />
                <figcaption>
                  {responseAboutUs?.data?.map((data) => {
                    return data.CeoDeatils;
                  })}
                </figcaption>
              </figure>
            </span>
            {/* <span>
              <figure>
                <img src={img3} alt='Mountains' />
                <figcaption>CEO NAME</figcaption>
              </figure>
            </span>
            <span>
              <figure>
                <img src={img4} alt='Mountains' />
                <figcaption>CEO NAME</figcaption>
              </figure>
            </span> */}
          </div>
          <div className='aboutuspage_fourth_para'>
            <p>
              {responseAboutUs?.data?.map((data) => {
                return data.Description;
              })}
            </p>
            {/* <p>
              I am a long-time learner who loves to explore new skills, grow my
              knowledge, and better understand the world around me. I'm always
              looking for a challenge and diving into new opportunities. I am
              open-minded, have good problem solving skills, and am not afraid
              to take on new and sometimes difficult tasks. I'm also a team
              player who can work well with others to complete tasks and bring a
              positive attitude wherever I go. My experience with a variety of
              technologies, competency in web development, and ability to think
              critically make me an asset to any team. I'm passionate about
              using technology to make the world a better place, and am excited
              to continue learning new skills that can help me do that.
            </p> */}
            {/* <p>
              I am a long-time learner who loves to explore new skills, grow my
              knowledge, and better understand the world around me. I'm always
              looking for a challenge and diving into new opportunities. I am
              open-minded, have good problem solving skills, and am not afraid
              to take on new and sometimes difficult tasks. I'm also a team
              player who can work well with others to complete tasks and bring a
              positive attitude wherever I go. My experience with a variety of
              technologies, competency in web development, and ability to think
              critically make me an asset to any team. I'm passionate about
              using technology to make the world a better place, and am excited
              to continue learning new skills that can help me do that.
            </p> */}
            {/* <p>
              I am a long-time learner who loves to explore new skills, grow my
              knowledge, and better understand the world around me. I'm always
              looking for a challenge and diving into new opportunities. I am
              open-minded, have good problem solving skills, and am not afraid
              to take on new and sometimes difficult tasks. I'm also a team
              player who can work well with others to complete tasks and bring a
              positive attitude wherever I go. My experience with a variety of
              technologies, competency in web development, and ability to think
              critically make me an asset to any team. I'm passionate about
              using technology to make the world a better place, and am excited
              to continue learning new skills that can help me do that.
            </p> */}
          </div>
        </div>
        <span className='bottom_border'></span>
        {/* <div className='aboutuspage_five'>
          <img src={img5} alt='map' />
        </div> */}
        <NewsLetter />
        <Footer />
      </div>
    </>
  );
}

export default AboutUsPage;
