import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const category = createApi({
  reducerPath: "category",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.React_App_Base_Url }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => {
        return {
          url: `getCategories`,
          method: "GET",
        };
      },
    }),

    getCategoryById: builder.query({
      query: (id) => {
        // console.log("ID: ", id);
        return {
          url: `getOneCategories/${id}`,
          method: "GET",
        };
      },
    }),

    createCategory: builder.mutation({
      query: (newData) => {
        // console.log("CREATE BLOG:", newData);
        return {
          url: `Categorieadd`,
          method: "POST",
          body: newData,
          headers: {
            // "Content-type": "multipart/form-data",
          },
        };
      },
    }),

    updateCategoryById: builder.mutation({
      query: (updateData) => {
        return {
          url: `updateCategorie/${updateData.id}`,
          method: "PUT",
          body: updateData.updateData,
          headers: {
            // "Content-type": "multipart/form-data",
          },
        };
      },
      // invalidatesTags: ["Albums"],
    }),

    deleteCategoryById: builder.mutation({
      query: (id) => {
        // console.log("DELETE ID: ", id);
        return {
          url: `deleteCategorie/${id}`,
          method: "DELETE",
        };
      },
    }),

    publishCategoriesById: builder.mutation({
      query: (updateData) => {
        return {
          url: `publishCategories/${updateData.id}`,
          method: "PUT",
          body: updateData.updateData,
          headers: {
            // "Content-type": "multipart/form-data",
            "Content-Type": "application/json",
          },
        };
      },
    }),
  }),
});

export const {
  useCreateCategoryMutation,
  useDeleteCategoryByIdMutation,
  useGetCategoriesQuery,
  useGetCategoryByIdQuery,
  useUpdateCategoryByIdMutation,
  usePublishCategoriesByIdMutation,
} = category;
