import { createSlice } from "@reduxjs/toolkit";
// import { admin } from "../services/admin";

const initialState = {
  heroSectionBannnerTitle: "",
  heroSectionBannerSubTitle: "",
  heroSectionBannerLink: "",
  heroSectionBannerVideo: [],
};

const heroSection = createSlice({
  name: "community",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default heroSection.reducer;
