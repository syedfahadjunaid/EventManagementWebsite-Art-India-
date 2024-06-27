import React from "react";
import "./AdminSideBar.css";
import logo from "../../AdminAsset/Images/2.jpg";
import {
  Article,
  EventAvailable,
  Feed,
  Info,
  KeyboardArrowDown,
  LibraryBooks,
  MeetingRoom,
  Message,
  PersonalVideo,
  Settings,
  WebAsset,
  Wysiwyg,
} from "@mui/icons-material";
import { useState } from "react";

function AdminSideBar({
  setAdminProfile,
  dashboard,
  setDashBoard,
  payment,
  setPayment,
  genralsetting,
  setGenralsetting,
  setBlog,
  blog,
  setFooter,
  footer,
  header,
  setHeader,
  setHomeOurSpaces,
  homeOurSpaces,
  homeCommunity,
  setHomeCommunity,
  setHomeTopSection,
  homeTopSection,
  heroSection,
  setHeroSection,
  setContactMail,
  contactMail,
  setBooking,
  booking,
  setAdminAbout,
  adminAbout,
  categories,
  setCategories,
  setEvents,
  events,
  pages,
  setPages,
  setFAQ,
  FAQ,
}) {
  const sideBarHandle = (e) => {
    // console.log(e.target.textContent);
    if (e.target.textContent === "All Categories") {
      setCategories(true);
      setEvents(false);
      setPages(false);
      setAdminAbout(false);
      setBooking(false);
      setContactMail(false);
      setHeroSection(false);
      setHomeTopSection(false);
      setHomeCommunity(false);
      setHomeOurSpaces(false);
      setHeader(false);
      setFooter(false);
      setBlog(false);
      setGenralsetting(false);
      setPayment(false);
      setDashBoard(false);
      setAdminProfile(false);
      setFAQ(false);
    }
    if (e.target.textContent === "Events") {
      setCategories(false);
      setEvents(true);
      setPages(false);
      setAdminAbout(false);
      setBooking(false);
      setContactMail(false);
      setHeroSection(false);
      setHomeTopSection(false);
      setHomeCommunity(false);
      setHomeOurSpaces(false);
      setHeader(false);
      setFooter(false);
      setBlog(false);
      setGenralsetting(false);
      setPayment(false);
      setDashBoard(false);
      setAdminProfile(false);
      setFAQ(false);
    }
    if (e.target.textContent === "Page’s") {
      setCategories(false);
      setEvents(false);
      setPages(true);
      setAdminAbout(false);
      setBooking(false);
      setContactMail(false);
      setHeroSection(false);
      setHomeTopSection(false);
      setHomeCommunity(false);
      setHomeOurSpaces(false);
      setHeader(false);
      setFooter(false);
      setBlog(false);
      setGenralsetting(false);
      setPayment(false);
      setDashBoard(false);
      setAdminProfile(false);
      setFAQ(false);
    }
    if (e.target.textContent === "About us ") {
      setCategories(false);
      setEvents(false);
      setPages(false);
      setAdminAbout(true);
      setBooking(false);
      setContactMail(false);
      setHeroSection(false);
      setHomeTopSection(false);
      setHomeCommunity(false);
      setHomeOurSpaces(false);
      setHeader(false);
      setFooter(false);
      setBlog(false);
      setGenralsetting(false);
      setPayment(false);
      setDashBoard(false);
      setAdminProfile(false);
      setFAQ(false);
    }
    if (e.target.textContent === "Booking") {
      setCategories(false);
      setEvents(false);
      setPages(false);
      setAdminAbout(false);
      setBooking(true);
      setContactMail(false);
      setHeroSection(false);
      setHomeTopSection(false);
      setHomeCommunity(false);
      setHomeOurSpaces(false);
      setHeader(false);
      setFooter(false);
      setBlog(false);
      setGenralsetting(false);
      setPayment(false);
      setDashBoard(false);
      setAdminProfile(false);
      setFAQ(false);
    }
    if (e.target.textContent === "Contact") {
      setCategories(false);
      setEvents(false);
      setPages(false);
      setAdminAbout(false);
      setBooking(false);
      setContactMail(true);
      setHeroSection(false);
      setHomeTopSection(false);
      setHomeCommunity(false);
      setHomeOurSpaces(false);
      setHeader(false);
      setFooter(false);
      setBlog(false);
      setGenralsetting(false);
      setPayment(false);
      setDashBoard(false);
      setAdminProfile(false);
      setFAQ(false);
    }
    if (e.target.textContent === "Hero Section") {
      setCategories(false);
      setEvents(false);
      setPages(false);
      setAdminAbout(false);
      setBooking(false);
      setContactMail(false);
      setHeroSection(true);
      setHomeTopSection(false);
      setHomeCommunity(false);
      setHomeOurSpaces(false);
      setHeader(false);
      setFooter(false);
      setBlog(false);
      setGenralsetting(false);
      setPayment(false);
      setDashBoard(false);
      setAdminProfile(false);
      setFAQ(false);
    }
    if (e.target.textContent === "Section Top Description") {
      setCategories(false);
      setEvents(false);
      setPages(false);
      setAdminAbout(false);
      setBooking(false);
      setContactMail(false);
      setHeroSection(false);
      setHomeTopSection(true);
      setHomeCommunity(false);
      setHomeOurSpaces(false);
      setHeader(false);
      setFooter(false);
      setBlog(false);
      setGenralsetting(false);
      setPayment(false);
      setDashBoard(false);
      setAdminProfile(false);
      setFAQ(false);
    }
    if (e.target.textContent === "Community") {
      setCategories(false);
      setEvents(false);
      setPages(false);
      setAdminAbout(false);
      setBooking(false);
      setContactMail(false);
      setHeroSection(false);
      setHomeTopSection(false);
      setHomeCommunity(true);
      setHomeOurSpaces(false);
      setHeader(false);
      setFooter(false);
      setBlog(false);
      setGenralsetting(false);
      setPayment(false);
      setDashBoard(false);
      setAdminProfile(false);
      setFAQ(false);
    }
    if (e.target.textContent === "Our Spaces") {
      setCategories(false);
      setEvents(false);
      setPages(false);
      setAdminAbout(false);
      setBooking(false);
      setContactMail(false);
      setHeroSection(false);
      setHomeTopSection(false);
      setHomeCommunity(false);
      setHomeOurSpaces(true);
      setHeader(false);
      setFooter(false);
      setBlog(false);
      setGenralsetting(false);
      setPayment(false);
      setDashBoard(false);
      setAdminProfile(false);
      setFAQ(false);
    }
    if (e.target.textContent === "Website Header") {
      setCategories(false);
      setEvents(false);
      setPages(false);
      setAdminAbout(false);
      setBooking(false);
      setContactMail(false);
      setHeroSection(false);
      setHomeTopSection(false);
      setHomeCommunity(false);
      setHomeOurSpaces(false);
      setHeader(true);
      setFooter(false);
      setBlog(false);
      setGenralsetting(false);
      setPayment(false);
      setDashBoard(false);
      setAdminProfile(false);
      setFAQ(false);
    }
    if (e.target.textContent === "Footer ") {
      setCategories(false);
      setEvents(false);
      setPages(false);
      setAdminAbout(false);
      setBooking(false);
      setContactMail(false);
      setHeroSection(false);
      setHomeTopSection(false);
      setHomeCommunity(false);
      setHomeOurSpaces(false);
      setHeader(false);
      setFooter(true);
      setBlog(false);
      setGenralsetting(false);
      setPayment(false);
      setDashBoard(false);
      setAdminProfile(false);
      setFAQ(false);
    }
    if (e.target.textContent === "Blog’s ") {
      setCategories(false);
      setEvents(false);
      setPages(false);
      setAdminAbout(false);
      setBooking(false);
      setContactMail(false);
      setHeroSection(false);
      setHomeTopSection(false);
      setHomeCommunity(false);
      setHomeOurSpaces(false);
      setHeader(false);
      setFooter(false);
      setBlog(true);
      setGenralsetting(false);
      setPayment(false);
      setDashBoard(false);
      setAdminProfile(false);
      setFAQ(false);
    }
    if (e.target.textContent === "Venues") {
      setCategories(false);
      setEvents(false);
      setPages(false);
      setAdminAbout(false);
      setBooking(false);
      setContactMail(false);
      setHeroSection(false);
      setHomeTopSection(false);
      setHomeCommunity(false);
      setHomeOurSpaces(false);
      setHeader(false);
      setFooter(false);
      setBlog(false);
      setGenralsetting(true);
      setPayment(false);
      setDashBoard(false);
      setAdminProfile(false);
      setFAQ(false);
    }
    if (e.target.textContent === "Payment Methods Settings") {
      setCategories(false);
      setEvents(false);
      setPages(false);
      setAdminAbout(false);
      setBooking(false);
      setContactMail(false);
      setHeroSection(false);
      setHomeTopSection(false);
      setHomeCommunity(false);
      setHomeOurSpaces(false);
      setHeader(false);
      setFooter(false);
      setBlog(false);
      setGenralsetting(false);
      setPayment(true);
      setDashBoard(false);
      setAdminProfile(false);
      setFAQ(false);
    }
    if (e.target.textContent === "Dashboard") {
      setCategories(false);
      setEvents(false);
      setPages(false);
      setAdminAbout(false);
      setBooking(false);
      setContactMail(false);
      setHeroSection(false);
      setHomeTopSection(false);
      setHomeCommunity(false);
      setHomeOurSpaces(false);
      setHeader(false);
      setFooter(false);
      setBlog(false);
      setGenralsetting(false);
      setPayment(false);
      setDashBoard(true);
      setAdminProfile(false);
      setFAQ(false);
    }
    if (e.target.textContent === "FAQ") {
      setCategories(false);
      setEvents(false);
      setPages(false);
      setAdminAbout(false);
      setBooking(false);
      setContactMail(false);
      setHeroSection(false);
      setHomeTopSection(false);
      setHomeCommunity(false);
      setHomeOurSpaces(false);
      setHeader(false);
      setFooter(false);
      setBlog(false);
      setGenralsetting(false);
      setPayment(false);
      setDashBoard(false);
      setAdminProfile(false);
      setFAQ(true);
    }
  };
  const [appreance, setAppreance] = useState(false);
  const [setting, setSetting] = useState(false);
  return (
    <div className='adminsidebar'>
      <div className='adminsidebar_logo'>
        <img
          style={{ width: "100px", height: "100px" }}
          src={logo}
          alt='logo'
        />
      </div>
      <div className='adminsidebar_heading'>
        <span
          onClick={sideBarHandle}
          className={dashboard ? "active_sidebar" : ""}>
          <p>Dashboard</p>
        </span>{" "}
        <span
          onClick={sideBarHandle}
          className={categories ? "active_sidebar" : ""}>
          <p>All Categories</p>
        </span>
        <span onClick={sideBarHandle} className={pages ? "active_sidebar" : ""}>
          <Article className='adminsidebar_heading_icons' />
          <p>Page’s</p>
        </span>
        <span
          onClick={sideBarHandle}
          className={genralsetting ? "active_sidebar" : ""}>
          <Article className='adminsidebar_heading_icons' />
          <p>Venues</p>
        </span>
        <span
          onClick={sideBarHandle}
          className={events ? "active_sidebar" : ""}>
          <EventAvailable className='adminsidebar_heading_icons' />
          <p>Events</p>
        </span>
        <span
          onClick={sideBarHandle}
          className={adminAbout ? "active_sidebar" : ""}>
          <Info className='adminsidebar_heading_icons' />
          <p>About us </p>
        </span>
        <span
          onClick={sideBarHandle}
          className={booking ? "active_sidebar" : ""}>
          <LibraryBooks className='adminsidebar_heading_icons' />
          <p>Booking</p>
        </span>{" "}
        <span
          onClick={sideBarHandle}
          className={contactMail ? "active_sidebar" : ""}>
          <Message className='adminsidebar_heading_icons' />
          <p>Contact</p>
        </span>
        <span onClick={() => setAppreance(!appreance)}>
          <PersonalVideo className='adminsidebar_heading_icons' />
          <p>Appearance</p>
          <KeyboardArrowDown />
        </span>
        {appreance && (
          <div>
            <p
              onClick={sideBarHandle}
              className={heroSection ? "active_sidebar" : ""}>
              Hero Section
            </p>
            <p
              onClick={sideBarHandle}
              className={homeTopSection ? "active_sidebar" : ""}>
              Section Top Description
            </p>
            <p
              onClick={sideBarHandle}
              className={homeCommunity ? "active_sidebar" : ""}>
              Community
            </p>
          </div>
        )}
        <span
          onClick={sideBarHandle}
          className={homeOurSpaces ? "active_sidebar" : ""}>
          <MeetingRoom className='adminsidebar_heading_icons' />
          <p>Our Spaces</p>
        </span>
        <span
          onClick={sideBarHandle}
          className={header ? "active_sidebar" : ""}>
          <WebAsset className='adminsidebar_heading_icons' />
          <p>Website Header</p>
        </span>
        <span
          onClick={sideBarHandle}
          className={footer ? "active_sidebar" : ""}>
          <Wysiwyg className='adminsidebar_heading_icons' />
          <p>Footer </p>
        </span>
        <span onClick={sideBarHandle} className={blog ? "active_sidebar" : ""}>
          <Feed className='adminsidebar_heading_icons' />
          <p>Blog’s </p>
        </span>
        <span onClick={sideBarHandle} className={FAQ ? "active_sidebar" : ""}>
          <Article className='adminsidebar_heading_icons' />
          <p>FAQ</p>
        </span>
        <span onClick={() => setSetting(!setting)}>
          <Settings className='adminsidebar_heading_icons' />
          <p>System Settings</p>
          <KeyboardArrowDown />
        </span>
        {setting && (
          <div>
            {/* <p
              onClick={sideBarHandle}
              className={genralsetting ? "active_sidebar" : ""}>
              General Settings
            </p> */}
            <p
              onClick={sideBarHandle}
              className={payment ? "active_sidebar" : ""}>
              Payment Methods Settings
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminSideBar;
