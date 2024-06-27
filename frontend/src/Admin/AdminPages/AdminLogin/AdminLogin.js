import { useEffect, useState } from "react";
import "./AdminLogin.css";
import Logo from "../../AdminAsset/Images/2.jpg";

import {
  useGetAllAdminsQuery,
  useAdminSignInMutation,
} from "../../../services/admin";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import { useDispatch, useSelector } from "react-redux";

// const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);

import { adminCookie } from "../../../slice/adminSlice";

import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function AdminLogin() {
  const dispatch = useDispatch();
  const responseGetAdmins = useGetAllAdminsQuery();
  const [adminSignIn, responseInfo] = useAdminSignInMutation();
  console.log(responseInfo);

  const { adminCookieState } = useSelector((state) => state.adminState);

  console.log(adminCookieState);

  // const [newData, setNewData] = useState(false);
  // console.log(responseInfo)

  const [cookies, setCookie] = useCookies(["adminLoginToken"]);

  // const [signInError, setSignInError] = useState(false);
  const [failedLogin, setFailedLogin] = useState();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (
      cookies.adminLoginToken !== "undefined" &&
      cookies.adminLoginToken !== undefined
    ) {
      const tokenNum = responseGetAdmins?.data[0].tokens.length;
      setCookie(
        "adminLoginToken",
        responseGetAdmins?.data[0]?.tokens[tokenNum - 1].token
      );
      navigate("/admin");
    }
    // console.log(cookies.adminLoginToken);
    // console.log(responseInfo);
  }, []);

  useEffect(() => {
    responseGetAdmins?.refetch();

    dispatch(adminCookie(false));
  }, [adminCookieState]);

  const navigate = useNavigate();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    // const formData = new FormData();

    // formData.append("email", username);
    // formData.append("password", password);

    // console.log({
    //   email: username,
    //   password: password
    // });

    adminSignIn({
      email: username,
      password: password,
    });

    responseGetAdmins?.refetch();

    setLoader(true);

    // if (responseInfo.isSuccess) {
    //   navigate("/admin");

    //   const tokenNum = responseGetAdmins?.data[0].tokens.length;
    //   setCookie(
    //     "adminLoginToken",
    //     responseGetAdmins?.data[0]?.tokens[tokenNum - 1].token
    //   );

    //   // responseInfo.reset();
    //   responseGetAdmins?.refetch();
    //   dispatch(adminCookie(true));
    // } else {
    //   setFailedLogin("Invalid username or password!");
    // }
    // if (responseInfo?.error?.status === 400) {
    //   setFailedLogin("Invalid username or password!");
    // }
  };

  useEffect(() => {
    setTimeout(() => {
      if (responseInfo.isSuccess) {
        navigate("/admin");

        const tokenNum = responseGetAdmins?.data[0].tokens.length;
        setCookie(
          "adminLoginToken",
          responseGetAdmins?.data[0]?.tokens[tokenNum - 1].token,
          { path: "/" }
        );

        // responseInfo.reset();
        setLoader(false);
        dispatch(adminCookie(true));
      } else if (responseInfo?.error?.status === 400) {
        setFailedLogin("Invalid username or password!");
        setLoader(false);
      }
    }, [2000]);
  }, [responseInfo.isSuccess, responseInfo?.error?.status]);

  return (
    <div
      style={{
        background: "#E68639",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
      }}>
      <div
        style={{
          width: "30%",
          color: "white",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <h1>ART INDIA</h1>
        <img
          src={Logo}
          alt='logoimage'
          style={{ width: "200px", height: "200px" }}
        />
      </div>
      <div
        style={{
          width: "70%",
          background: "white",
          borderRadius: "2rem 0 0 2rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <h1>SIGN IN</h1>
        <form
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          onSubmit={handleSubmit}>
          <input
            onChange={(e) => setUsername(e.target.value)}
            type='text'
            placeholder='Enter you username'
            required
            style={{ padding: "1rem", width: "400px", outline: "none" }}
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            placeholder='Enter you password'
            required
            style={{ padding: "1rem", width: "400px", outline: "none" }}
          />
          {loader ? (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <CircularProgress />
            </Box>
          ) : (
            <button
              type='submit'
              style={{
                background: "#E68639",
                padding: "1rem",
                color: "white",
                cursor: "pointer",
              }}>
              <h3>Submit</h3>
            </button>
          )}
        </form>
        <p style={{ color: "red" }}>{failedLogin}</p>
      </div>
    </div>
  );
}
