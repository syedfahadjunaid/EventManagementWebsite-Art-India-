import React from "react";
import "./AboutUs.css";
// import img from "../imges/image 1.jpg";
import HeadImage from "../Layout/HeadImage/HeadImage";
// import Button from "../Layout/Button/Button";
import { useNavigate } from "react-router-dom";

import {
  useGetSectionTopDescriptionQuery,
  // useUpdateSectionTopDescriptionByIdMutation,
} from "../../services/sectionTopDescription";

function AboutUs() {
  const responseGetSectionTopDescription = useGetSectionTopDescriptionQuery();

  const history = useNavigate();
  return (
    <div className='aboutus'>
      <div className='aboutus_left'>
        <img
          src={responseGetSectionTopDescription?.data?.map((data) => {
            return `${process.env.React_App_Base_Image_Url}${data.sectionTopImage}`;
          })}
          alt='aboutus'
        />
      </div>
      <div className='aboutus_right'>
        <HeadImage />
        <p>
          {responseGetSectionTopDescription?.data?.map((data) => {
            return data.sectionTopDescriptionText;
          })}
        </p>
        {/* <p>
          We shall never suffer their unwelcome invasions, Nor forgive their
          sinful oppresion of us; We shall always remember their acts of
          wickedness, Their enmity and disdain for all mankind; With courage and
          fortitude we shall not shirk from our duty, To expel them and their
          evils from this world; Our feud shall continue until the day The
          adversary is vanquished and the truth wins out.
        </p>
        <p>
          We shall never suffer their unwelcome invasions, Nor forgive their
          sinful oppresion of us; We shall always remember their acts of
          wickedness, Their enmity and disdain for all mankind; With courage and
          fortitude we shall not shirk from our duty, To expel them and their
          evils from this world; Our feud shall continue until the day The
          adversary is vanquished and the truth wins out.
        </p> */}
        <button className='button' onClick={() => history("/aboutus")}>
          About Us
        </button>
      </div>
    </div>
  );
}

export default AboutUs;
