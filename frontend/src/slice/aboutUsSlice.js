import { createSlice } from "@reduxjs/toolkit";
// import { admin } from "../services/admin";

const initialState = {
  BGTitle: "",
  BGSubTitle: "",
  BGDescription: "",
  FirstTitle: "",
  FirstSubTitle: "",
  FirstDescription: "",
  SecondTitle: "",
  SecondSubTitle: "",
  SecondDescription: "",
  CeoDeatils: "",
  ShortDescription: "",
  Description: "",
  BGImage: [],
  FirstImage: [],
  SecondImage: [],
  CeoImage: [],
};

const aboutUsSlice = createSlice({
  name: "aboutus",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default aboutUsSlice.reducer;
