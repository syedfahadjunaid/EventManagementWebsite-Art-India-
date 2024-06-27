import { createSlice } from "@reduxjs/toolkit";
// import { admin } from "../services/admin";

const initialState = {
  ourSpacesTitle: "",
  ourSpacesSubTitle: "",
  ourSpacesDescription: "",
  ourSpacesHighlights: "",
  ourSpacesImage: [],
};

const spacesSlice = createSlice({
  name: "websiteHeader",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default spacesSlice.reducer;
