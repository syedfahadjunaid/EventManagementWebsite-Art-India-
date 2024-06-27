import { createSlice } from "@reduxjs/toolkit";
// import { admin } from "../services/admin";

const initialState = {
  // adminName: "",
  // adminEmail: "",
  // adminPassword: "",
  // adminProfilePicture: [],
  adminCookieState: false,
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    // updateAdminName: (state, action) => {
    //   state.adminName = action.payload;
    // },
    // updateAdminEmail: (state, action) => {
    //   state.adminEmail = action.payload;
    // },
    // updateAdminPassword: (state, action) => {
    //   state.adminPassword = action.payload;
    // },
    adminCookie: (state, action) => {
      state.adminCookieState = action.payload;
    },
  },
  extraReducers: {},
});

export default adminSlice.reducer;
export const { adminCookie } = adminSlice.actions;
