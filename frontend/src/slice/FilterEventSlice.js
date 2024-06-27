import { createSlice } from "@reduxjs/toolkit";
// import { admin } from "../services/admin";

// console.log(currentDate);

const initialState = {
  eventDate: "",
  eventCategory: "All",
  eventVenue: "All Venues",
  filterEvent: [],
};

const filterEventSlice = createSlice({
  name: "filterEvent",
  initialState,
  reducers: {
    updateFilterEvent: (state, action) => {
      state.filterEvent = action.payload;
    },
    updateFilterEventDate: (state, action) => {
      state.eventDate = action.payload;
    },
    updateFilterEventVenue: (state, action) => {
      state.eventVenue = action.payload;
    },
    updateFilterEventCategory: (state, action) => {
      state.eventCategory = action.payload;
    },
  },
  extraReducers: {},
});

export default filterEventSlice.reducer;
export const {
  updateFilterEvent,
  updateFilterEventDate,
  updateFilterEventVenue,
  updateFilterEventCategory,
} = filterEventSlice.actions;
