import { createSlice } from "@reduxjs/toolkit";
// import { admin } from "../services/admin";

const initialState = {
  venues: [],
};

const venuesSlice = createSlice({
  name: "venues",
  initialState,
  reducers: {
    updateVenues: (state, action) => {
      state.venues = action.payload;
    },
  },
  extraReducers: {},
});

export default venuesSlice.reducer;
export const { updateVenues } = venuesSlice.actions;
