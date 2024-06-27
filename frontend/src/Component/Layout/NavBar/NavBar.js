import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
// import logo from "../../imges/logo/2.jpg";
import hamburgerimage from "../../imges/Vector.png";
import { Close, Facebook, Instagram, WhatsApp } from "@mui/icons-material";

import {
  useGetWebsiteHeaderQuery,
  // useUpdateWebsiteHeaderMutation,
} from "../../../services/websiteHeader";

import { useGetAllSocialMediaQuery } from "../../../services/socialMedia";

import {
  // useCreatePageMutation,
  useGetPagesQuery,
  // useGetOnePageByIdQuery,
  // useUpdatePageByIdMutation,
  // useUpdatePagePublishByIdMutation,
} from "../../../services/pages";

function NavBar() {
  const responseWebsiteHeader = useGetWebsiteHeaderQuery();
  const responseSocialMedia = useGetAllSocialMediaQuery();
  const responseGetPages = useGetPagesQuery();

  const [hamburger, setHamburger] = useState(false);
  const history = useNavigate();
  const [mobileNav, setMobileNav] = useState(false);
  // const [width, setWidth] = useState("315px");
  const openHandle = () => {
    setMobileNav(!mobileNav);
  };
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);
  let activeStyle = {
    color: "#E68639",
    // fontweight: "700",
  };
  return (
    <>
      {!responseGetPages.isLoading &&
        !responseSocialMedia.isLoading &&
        !responseWebsiteHeader.isLoading && (
          <div className={scrolled ? "navbar navbar_border" : "navbar"}>
            <nav>
              <div className="navbar_hamburger_mobile">
                <img
                  src={hamburgerimage}
                  alt="hamburger"
                  onClick={openHandle}
                />
              </div>

              <div className="navbar_first">
                <div className="navbar_hamburger">
                  <div className="navbar_hamburger_div">
                    {!hamburger ? (
                      <img
                        src={hamburgerimage}
                        onClick={() => setHamburger(!hamburger)}
                        style={{ cursor: "pointer" }}
                        alt="hamburger"
                      />
                    ) : (
                      <Close
                        onClick={() => setHamburger(!hamburger)}
                        style={{
                          fontSize: "35px",
                          color: "#E68639",
                          fontWeight: "700",
                        }}
                      />
                    )}
                  </div>

                  {hamburger && (
                    <div className="navbar_hamburger_menu">
                      <span onClick={() => history("/contactus")}>
                        <p>Contact us</p>
                      </span>
                      <span onClick={() => history("/aboutus")}>
                        <p>About Us</p>
                      </span>
                      <span onClick={() => history("/blogpage")}>
                        <p>Blog</p>
                      </span>

                      <span className="navbar_hamburger_menu_icons">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          style={{ textDecoration: "none", color: "black" }}
                          href={responseSocialMedia?.data
                            ?.slice(0, 1)
                            .map((data) => {
                              return `https://${data.Link}`;
                            })}>
                          <WhatsApp className="navbar_hamburger_menu_icon" />
                        </a>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          style={{ textDecoration: "none", color: "black" }}
                          href={responseSocialMedia?.data
                            ?.slice(1, 2)
                            .map((data) => {
                              return `https://${data.Link}`;
                            })}>
                          <Facebook className="navbar_hamburger_menu_icon" />
                        </a>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          style={{ textDecoration: "none", color: "black" }}
                          href={responseSocialMedia?.data
                            ?.slice(2, 3)
                            .map((data) => {
                              return `https://${data.Link}`;
                            })}>
                          <Instagram className="navbar_hamburger_menu_icon" />
                        </a>
                      </span>
                    </div>
                  )}
                </div>
                <NavLink
                  to={`/page/${responseGetPages?.data[0]?.PagesLink}`}
                  style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>
                  {responseGetPages?.data[0]?.PagesTitle}
                </NavLink>
                <NavLink
                  to={`/page/${responseGetPages?.data[1]?.PagesLink}`}
                  style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>
                  {responseGetPages?.data[1]?.PagesTitle}
                </NavLink>
                <NavLink
                  to={`/page/${responseGetPages?.data[2]?.PagesLink}`}
                  style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>
                  {responseGetPages?.data[2]?.PagesTitle}
                </NavLink>
                <NavLink
                  to={`/page/${responseGetPages?.data[3]?.PagesLink}`}
                  style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>
                  {responseGetPages?.data[3]?.PagesTitle}
                </NavLink>
              </div>
              <div className="navbar_second">
                <Link to="/">
                  <img
                    className="websiteLogo"
                    style={{
                      width: "300px",
                      height: "80px",
                      objectFit: "contain",
                    }}
                    src={responseWebsiteHeader?.data?.map((data) => {
                      return `${process.env.React_App_Base_Image_Url}${data.websiteHeaderLogoImage}`;
                    })}
                    alt="website logo"
                  />
                </Link>
              </div>

              <div className="navbar_last">
                <NavLink
                  to={`/page/${responseGetPages?.data[4]?.PagesLink}`}
                  style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>
                  {responseGetPages?.data[4]?.PagesTitle}
                </NavLink>
                <NavLink
                  to={`/page/${responseGetPages?.data[5]?.PagesLink}`}
                  style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>
                  {responseGetPages?.data[5]?.PagesTitle}
                </NavLink>
                <NavLink
                  to={`/page/${responseGetPages?.data[6]?.PagesLink}`}
                  style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>
                  {responseGetPages?.data[6]?.PagesTitle}
                </NavLink>
                <NavLink
                  to={`/page/${responseGetPages?.data[7]?.PagesLink}`}
                  style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>
                  {responseGetPages?.data[7]?.PagesTitle}
                </NavLink>
              </div>
            </nav>
            {mobileNav && (
              <div
                id="mySidenav"
                className="sidenav scale-in-hor-left"
                style={{ width: "315px" }}>
                <span>
                  <Close
                    style={{ fontSize: "35px", color: "white" }}
                    onClick={() => setMobileNav(false)}
                  />
                </span>
                <Link
                  to={`/page/${responseGetPages?.data[0]?.PagesLink}`}
                  onClick={() => setMobileNav(false)}>
                  {responseGetPages?.data[0]?.PagesTitle}
                </Link>
                <Link
                  to={`/page/${responseGetPages?.data[1]?.PagesLink}`}
                  onClick={() => setMobileNav(false)}>
                  {responseGetPages?.data[1]?.PagesTitle}
                </Link>
                <Link
                  to={`/page/${responseGetPages?.data[2]?.PagesLink}`}
                  onClick={() => setMobileNav(false)}>
                  {responseGetPages?.data[2]?.PagesTitle}
                </Link>
                <Link
                  to={`/page/${responseGetPages?.data[3]?.PagesLink}`}
                  onClick={() => setMobileNav(false)}>
                  {responseGetPages?.data[3]?.PagesTitle}
                </Link>
                <Link
                  to={`/page/${responseGetPages?.data[4]?.PagesLink}`}
                  onClick={() => setMobileNav(false)}>
                  {responseGetPages?.data[4]?.PagesTitle}
                </Link>
                <Link
                  to={`/page/${responseGetPages?.data[5]?.PagesLink}`}
                  onClick={() => setMobileNav(false)}>
                  {responseGetPages?.data[5]?.PagesTitle}
                </Link>
                <Link
                  to={`/page/${responseGetPages?.data[6]?.PagesLink}`}
                  onClick={() => setMobileNav(false)}>
                  {responseGetPages?.data[6]?.PagesTitle}
                </Link>
                <Link
                  to={`/page/${responseGetPages?.data[7]?.PagesLink}`}
                  onClick={() => setMobileNav(false)}>
                  {responseGetPages?.data[7]?.PagesTitle}
                </Link>
                <Link to={`/aboutus`} onClick={() => setMobileNav(false)}>
                  About
                </Link>
                <Link to={`/blogpage`} onClick={() => setMobileNav(false)}>
                  Blog
                </Link>

                <Link to={`/contactus`} onClick={() => setMobileNav(false)}>
                  Contact
                </Link>
                <span className="sidenav_div">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={responseSocialMedia?.data?.slice(0, 1).map((data) => {
                      return `https://${data.Link}`;
                    })}>
                    <WhatsApp
                      style={{ fontSize: "35px", color: "white" }}
                      onClick={() => setMobileNav(false)}
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={responseSocialMedia?.data?.slice(1, 2).map((data) => {
                      return `https://${data.Link}`;
                    })}>
                    <Facebook
                      style={{ fontSize: "35px", color: "white" }}
                      onClick={() => setMobileNav(false)}
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={responseSocialMedia?.data?.slice(2, 3).map((data) => {
                      return `https://${data.Link}`;
                    })}>
                    <Instagram
                      style={{ fontSize: "35px", color: "white" }}
                      onClick={() => setMobileNav(false)}
                    />
                  </a>
                </span>
              </div>
            )}
          </div>
        )}
    </>
  );
}

export default NavBar;
