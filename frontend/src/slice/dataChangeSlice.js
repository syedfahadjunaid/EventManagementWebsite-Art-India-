import { createSlice } from "@reduxjs/toolkit";
// import { admin } from "../services/admin";

const initialState = {
  dataChange: false,
};

const dataChangeSlice = createSlice({
  name: "dataChange",
  initialState,
  reducers: {
    updateDataChange: (state, action) => {
      state.dataChange = action.payload;
    },
  },
  extraReducers: {},
});

export default dataChangeSlice.reducer;
export const { updateDataChange } = dataChangeSlice.actions;
