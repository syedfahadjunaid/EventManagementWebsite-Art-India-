import { createSlice } from "@reduxjs/toolkit";
// import { admin } from "../services/admin";

const initialState = {
  ourSpacesTitle: "",
  ourSpacesSubTitle: "",
  ourSpacesDescription: "",
  ourSpacesHighlights: "",
  ourSpacesImage: [],
};

const sectionTopDescription = createSlice({
  name: "sectionTopDescription",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default sectionTopDescription.reducer;
