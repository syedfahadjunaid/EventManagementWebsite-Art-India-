import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  faqs: [],
};

const faqSlice = createSlice({
  name: "faq",
  initialState,
  reducers: {
    getAllFAQs: (state, action) => {
      state.faqs = action.payload;
    },
  },
});

export const { getAllFAQs } = faqSlice.actions;
export default faqSlice.reducer;
