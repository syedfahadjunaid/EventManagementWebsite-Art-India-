import { createSlice } from "@reduxjs/toolkit";
// import { admin } from "../services/admin";

const initialState = {
  whatsappIconLink: "",
  facebookIconLink: "",
  instagramIconLink: "",
  websiteHeaderLogoImage: [],
};

const websiteHeaderSlice = createSlice({
  name: "websiteHeader",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default websiteHeaderSlice.reducer;
