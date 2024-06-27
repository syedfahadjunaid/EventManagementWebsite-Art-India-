import { createSlice } from "@reduxjs/toolkit";
// import { admin } from "../services/admin";

const initialState = {
  Link: "",
};

const Socialmedia = createSlice({
  name: "Socialmedia",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default Socialmedia.reducer;
