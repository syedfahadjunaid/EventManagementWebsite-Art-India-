import { createSlice } from "@reduxjs/toolkit";
// import { admin } from "../services/admin";

const initialState = {
  blogTitle: "",
  blogTag: "",
  blogShortDescription: "",
  blogImage: [],
  blogDescription: "",
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default blogSlice.reducer;
