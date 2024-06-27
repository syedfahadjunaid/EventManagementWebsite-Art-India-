import { createSlice } from "@reduxjs/toolkit";
// import { admin } from "../services/admin";

const initialState = {
  footerTitle: "",
  footerDescription: "",
  footerEmail: "",
  footerAddress: "",
  whatsappIconLink: "",
  facebookIconLink: "",
  instagramIconLink: "",
  footerLogoImage: [],
};

const contact = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default contact.reducer;
