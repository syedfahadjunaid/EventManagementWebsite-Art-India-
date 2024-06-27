import React, { useState } from "react";
import "./AdminHomePage.css";
import AdminSideBar from "../../AdminLayout/AdminSideBar/AdminSideBar";
import AdminBarNavbar from "../../AdminLayout/AdminNavbar/AdminNavbar";
import AdminCategories from "../AdminCategories/AdminCategories";
import AdminEvent from "../AdminEvent/AdminEvent";
import AdminPages from "../AdminPages/AdminPages";
import AdminAboutPage from "../AdminAboutPage/AdminAboutPage";
import AdminBooking from "../AdminBooking/AdminBooking";
import AdminContactMail from "../AdminContactMail/AdminContactMail";
import AdminHeroSection from "../AdminHeroSection/AdminHeroSection";
import AdminHomeSectionTop from "../AdminHomeSectionTop/AdminHomeSectionTop";
import AdminHomeCommunity from "../AdminHomeCommunity/AdminHomeCommunity";
import AdminOurSpaces from "../AdminOurSpaces/AdminOurSpaces";
import AdminWebHeader from "../AdminWebHeader/AdminWebHeader";
import AdminFooter from "../AdminFooter/AdminFooter";
import AdminBlog from "../AdminBlog/AdminBlog";
// import AdminGenralSetting from "../AdminGenralSetting/AdminGenralSetting";
import AdminVenues from "../AdminVenues/AdminVenues";
import Adminpayment from "../AdminPayment/Adminpayment";
import AdminDashBoard from "../AdminDashBoard/AdminDashBoard";
import AdminProfile from "../AdminProfile/AdminProfile";
import AdminFAQ from "../AdminFAQ/AdminFAQ";

import { useCookies } from "react-cookie";

import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

function AdminHomePage() {
  const [cookies] = useCookies(["adminLoginToken"]);
  const navigate = useNavigate();

  useEffect(() => {
    if (
      cookies?.adminLoginToken === "undefined" ||
      cookies?.adminLoginToken === undefined ||
      !cookies?.adminLoginToken
    ) {
      navigate("/adminlogin");
    }
    // console.log(cookies.adminLoginToken);
  }, []);

  const [categories, setCategories] = useState(false);
  const [events, setEvents] = useState(false);
  const [pages, setPages] = useState(false);
  const [adminAbout, setAdminAbout] = useState(false);
  const [booking, setBooking] = useState(false);
  const [contactMail, setContactMail] = useState(false);
  const [heroSection, setHeroSection] = useState(false);
  const [homeTopSection, setHomeTopSection] = useState(false);
  const [homeCommunity, setHomeCommunity] = useState(false);
  const [homeOurSpaces, setHomeOurSpaces] = useState(false);
  const [header, setHeader] = useState(false);
  const [footer, setFooter] = useState(false);
  const [blog, setBlog] = useState(false);
  const [genralsetting, setGenralsetting] = useState(false);
  const [payment, setPayment] = useState(false);
  const [dashboard, setDashBoard] = useState(true);
  const [adminProfile, setAdminProfile] = useState(false);
  const [adminFAQ, setAdminFAQ] = useState(false);
  return (
    <div className='adminhome'>
      <div className='adminhome_left'>
        <AdminSideBar
          setAdminProfile={setAdminProfile}
          dashboard={dashboard}
          setDashBoard={setDashBoard}
          payment={payment}
          setPayment={setPayment}
          genralsetting={genralsetting}
          setGenralsetting={setGenralsetting}
          blog={blog}
          setBlog={setBlog}
          footer={footer}
          setFooter={setFooter}
          header={header}
          setHeader={setHeader}
          homeOurSpaces={homeOurSpaces}
          setHomeOurSpaces={setHomeOurSpaces}
          homeCommunity={homeCommunity}
          setHomeCommunity={setHomeCommunity}
          homeTopSection={homeTopSection}
          setHomeTopSection={setHomeTopSection}
          heroSection={heroSection}
          setHeroSection={setHeroSection}
          contactMail={contactMail}
          setContactMail={setContactMail}
          booking={booking}
          setBooking={setBooking}
          adminAbout={adminAbout}
          setAdminAbout={setAdminAbout}
          pages={pages}
          setPages={setPages}
          setCategories={setCategories}
          categories={categories}
          setEvents={setEvents}
          events={events}
          setFAQ={setAdminFAQ}
          FAQ={adminFAQ}
        />
      </div>
      <div className='adminhome_right'>
        <AdminBarNavbar
          setAdminProfile={setAdminProfile}
          setDashBoard={setDashBoard}
          setPayment={setPayment}
          setGenralsetting={setGenralsetting}
          setBlog={setBlog}
          setFooter={setFooter}
          setHeader={setHeader}
          setHomeOurSpaces={setHomeOurSpaces}
          setHomeCommunity={setHomeCommunity}
          setHomeTopSection={setHomeTopSection}
          setHeroSection={setHeroSection}
          setContactMail={setContactMail}
          setBooking={setBooking}
          setAdminAbout={setAdminAbout}
          setPages={setPages}
          setCategories={setCategories}
          setEvents={setEvents}
        />
        {categories && <AdminCategories />}
        {events && <AdminEvent />}
        {pages && <AdminPages />}
        {adminAbout && <AdminAboutPage />}
        {booking && <AdminBooking />}
        {contactMail && <AdminContactMail />}
        {heroSection && <AdminHeroSection />}
        {homeTopSection && <AdminHomeSectionTop />}
        {homeCommunity && <AdminHomeCommunity />}
        {homeOurSpaces && <AdminOurSpaces />}
        {header && <AdminWebHeader />}
        {footer && <AdminFooter />}
        {blog && <AdminBlog />}
        {genralsetting && <AdminVenues />}
        {payment && <Adminpayment />}
        {dashboard && <AdminDashBoard />}
        {adminProfile && <AdminProfile />}
        {adminFAQ && <AdminFAQ />}
      </div>
    </div>
  );
}

export default AdminHomePage;
