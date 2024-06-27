import React from "react";
import "./Footer.css";
// import logo from "../imges/SiteLogo.png";
import {
  Email,
  Facebook,
  Instagram,
  LocationOn,
  WhatsApp,
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

import { useGetfooterQuery } from "../../services/footer";

import { useGetAllSocialMediaQuery } from "../../services/socialMedia";

import { useGetPagesQuery } from "../../services/pages";
function Footer() {
  const responseFooter = useGetfooterQuery();
  const responseSocialMedia = useGetAllSocialMediaQuery();

  const responsePages = useGetPagesQuery();

  const pagesData = responsePages?.data?.map((page, index) => {
    return (
      <Link key={index} to={`/page/${page._id}`} className='footer_link_tag'>
        <p>{page.PagesTitle}</p>
      </Link>
    );
  });

  // console.log(responseSocialMedia);

  // const renderedSocialIcons = responseSocialMedia?.data?.map((data, index) => {
  //   return (
  //     <span key={index}>
  //       {index === 0 && <WhatsApp className='footer_icon' />}
  //       {index === 1 && <Facebook className='footer_icon' />}
  //       {index === 2 && <Instagram className='footer_icon' />}
  //     </span>
  //   );
  // });

  const history = useNavigate();
  return (
    <>
      {!responseFooter.isLoading && (
        <div className='footer'>
          <div className='footer_one'>
            <img
              style={{ width: "100%", height: "80px" }}
              src={responseFooter?.data[0]?.footerLogoImage.map((data) => {
                return `${process.env.React_App_Base_Image_Url}${data}`;
              })}
              alt='footer logo'
            />
            <h3>
              {responseFooter?.data?.map((data) => {
                return data.footerTitle;
              })}
            </h3>
            <p>
              {responseFooter?.data?.map((data) => {
                return data.footerDescription;
              })}
            </p>
          </div>
          <div className='footer_two'>
            <h3>Important Links</h3>
            {pagesData}
            {/* <Link to='/diwalibrussels' className='footer_link_tag'>
              <p>Diwali Brussels</p>
            </Link>
            <Link to='/yogafest' className='footer_link_tag'>
              {" "}
              <p>Yoga Fest</p>
            </Link>
            <Link to='/rama' className='footer_link_tag'>
              {" "}
              <p>Rama</p>
            </Link>
            <Link to='/taj' className='footer_link_tag'>
              {" "}
              <p>Taj</p>
            </Link> */}
          </div>
          {/* <div className="footer_three">
          <h3>Contact Details</h3>
          <p>Academy</p>
  

          <p>Themes</p>
          <p>Hosting</p>
          <p>Developers</p>
          <p>Support</p>
        </div> */}
          <div className='footer_four'>
            <h3>Company</h3>
            <Link to='/aboutus' className='footer_link_tag'>
              <p>About Us</p>
            </Link>
            <Link to='/blogpage' className='footer_link_tag'>
              <p>Blog</p>
            </Link>
            <Link to='/contactus' className='footer_link_tag'>
              <p>Contact Us</p>
            </Link>
          </div>
          <div className='footer_five'>
            <h3>Contact Us</h3>
            <span>
              <LocationOn />
              <p>
                {responseFooter?.data?.map((data) => {
                  return data.footerAddress;
                })}
              </p>
            </span>
            <span>
              <Email />
              <p>
                {responseFooter?.data?.map((data) => {
                  return data.footerEmail;
                })}
              </p>
            </span>

            <h3>Follow us</h3>
            <span>
              <a
                target='_blank'
                rel='noreferrer'
                style={{ textDecoration: "none", color: "white" }}
                href={responseSocialMedia?.data?.slice(0, 1).map((data) => {
                  return `https://${data.Link}`;
                })}>
                <WhatsApp className='footer_icon' />
              </a>
              <a
                target='_blank'
                rel='noreferrer'
                style={{ textDecoration: "none", color: "white" }}
                href={responseSocialMedia?.data?.slice(1, 2).map((data) => {
                  return `https://${data.Link}`;
                })}>
                <Facebook className='footer_icon' />
              </a>
              <a
                target='_blank'
                rel='noreferrer'
                style={{ textDecoration: "none", color: "white" }}
                href={responseSocialMedia?.data?.slice(2, 3).map((data) => {
                  return `https://${data.Link}`;
                })}>
                <Instagram className='footer_icon' />
              </a>
            </span>
          </div>
        </div>
      )}
      <div className='footer_copyright'>
        <p>©2023 All Rights Reserved</p>
        <span>
          <p onClick={() => history("/privacy")}>Privacy</p>
          <p onClick={() => history("/termandcondtion")}>
            Terms and Conditions
          </p>
        </span>
      </div>
    </>
  );
}

export default Footer;
