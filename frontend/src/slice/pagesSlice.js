import { createSlice } from "@reduxjs/toolkit";
// import { admin } from "../services/admin";

const initialState = {
  Pagestitle: "",
  Pagelink: "",
  Pagesdescription: "",
  pageimg: [],
  pagevideo: [],
  gallery: [],
  videoimage: [],
};

const pagesSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default pagesSlice.reducer;
