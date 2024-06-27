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

const footer = createSlice({
  name: "footer",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default footer.reducer;
