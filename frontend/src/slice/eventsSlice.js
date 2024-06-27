import { createSlice } from "@reduxjs/toolkit";
// import { admin } from "../services/admin";

const initialState = {
  EventName: "",
  EventShortdescription: "",
  EventOrganizer: "",
  EventType: "",
  Eventdescription: "",
  EventPrice: "",
  venueId: "",
  eventDates: "",
  EventImage: "",
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default eventsSlice.reducer;
