import { createSlice } from "@reduxjs/toolkit";
// import { admin } from "../services/admin";

const initialState = {
  ourSpacesTitle: "",
  ourSpacesSubTitle: "",
  ourSpacesDescription: "",
  ourSpacesHighlights: "",
  ourSpacesImage: [],
};

const community = createSlice({
  name: "community",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default community.reducer;
