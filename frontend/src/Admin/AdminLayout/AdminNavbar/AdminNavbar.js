import React, { useEffect } from "react";
import "./AdminNavbar.css";
import {
  NotificationAdd,
  Notifications,
  NotificationsNone,
  Search,
} from "@mui/icons-material";
import { Avatar, Stack } from "@mui/material";

import {
  // useAdminLogoutQuery,
  useGetAllAdminsQuery,
} from "../../../services/admin";

import { useCookies } from "react-cookie";

// import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

function AdminNavbar({
  setAdminProfile,
  setEvents,
  setDashBoard,
  setPayment,
  setGenralsetting,
  setBlog,
  setFooter,
  setHeader,
  setHomeOurSpaces,
  setHomeCommunity,
  setHomeTopSection,
  setHeroSection,
  setContactMail,
  setBooking,
  setAdminAbout,
  setPages,
  setCategories,
}) {
  const navigate = useNavigate();
  const responseGetAdmins = useGetAllAdminsQuery();
  // const [adminLogout] = useAdminLogoutQuery();
  const [cookies, removeCookie] = useCookies(["adminLoginToken"]);

  const handleLogout = () => {
    removeCookie("adminLoginToken");

    responseGetAdmins?.refetch();
    navigate("/adminlogin");
    console.log(cookies.adminLoginToken);
  };

  const profileHandle = () => {
    setAdminProfile(true);

    setDashBoard(false);

    setPayment(false);

    setGenralsetting(false);

    setBlog(false);

    setFooter(false);

    setHeader(false);

    setHomeOurSpaces(false);

    setHomeCommunity(false);

    setHomeTopSection(false);

    setHeroSection(false);

    setContactMail(false);

    setBooking(false);

    setAdminAbout(false);

    setPages(false);
    setCategories(false);

    setEvents(false);
  };
  return (
    <div className='adminnavbar'>
      {/* <span>
        <input type="text" placeholder="Search" />
        <Search />
      </span> */}
      <div></div>
      <div className='adminnav_right'>
        {/* <NotificationsNone className='adminnavbar_icon' /> */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            cursor: "pointer",
          }}>
          <p>{responseGetAdmins?.data[0]?.name}</p>
          <Stack direction='row' spacing={2}>
            <Avatar
              alt={responseGetAdmins?.data[0]?.name}
              src='/static/images/avatar/1.jpg'
            />
          </Stack>
          <span>
            <p onClick={profileHandle}>My Profile</p>
            <p onClick={handleLogout}>Logout</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default AdminNavbar;
