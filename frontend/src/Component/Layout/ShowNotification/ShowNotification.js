import React from "react";
import "./ShowNotification.css";
import HeadImage from "../HeadImage/HeadImage";
import { useNavigate } from "react-router-dom";
function ShowNotification() {
  const history = useNavigate();
  return (
    <div className='shownotification'>
      <div className='shownotification_left'>
        <HeadImage />
        <p>Be the first to know about our upcoming events</p>
      </div>
      <div className='shownotification_right'>
        {/* <span>
          <input type="text" placeholder="Enter Your Email Address" />
          <p>Signup</p>
        </span> */}
        <button
          style={{ cursor: "pointer" }}
          className='button'
          onClick={() => history("/contactus")}>
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default ShowNotification;
