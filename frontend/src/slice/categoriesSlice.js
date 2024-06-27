import { createSlice } from "@reduxjs/toolkit";
// import { admin } from "../services/admin";

const initialState = {
  CategorieTitle: "",
  SubCategorieTitle: "",
  CategoriesImage: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default categoriesSlice.reducer;
