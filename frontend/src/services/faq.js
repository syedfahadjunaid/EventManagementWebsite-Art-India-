import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const faq = createApi({
  reducerPath: "faq",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.React_App_Base_Url }),
  endpoints: (builder) => ({
    getFAQs: builder.query({
      query: () => {
        return {
          url: `getAllFAQs`,
          method: "GET",
        };
      },
    }),

    getOneFAQById: builder.query({
      query: (id) => {
        // console.log("ID: ", id);
        return {
          url: `getFAQbyId/${id}`,
          method: "GET",
        };
      },
    }),

    createFAQ: builder.mutation({
      query: (newData) => {
        // console.log("CREATE PAGE:", newData);
        return {
          url: `createFAQ`,
          method: "POST",
          body: newData,
          headers: {
            // "Content-type": "multipart/form-data",
            // "content-type": "application/json",
          },
        };
      },
    }),

    updateFAQById: builder.mutation({
      query: (updateData) => {
        return {
          url: `updateFAQ/${updateData.id}`,
          method: "PUT",
          body: updateData.updateData,
          headers: {
            // "Content-type": "multipart/form-data",
            // "content-type": "application/json",
          },
        };
      },
      // invalidatesTags: ["Albums"],
    }),
    deleteFAQById: builder.mutation({
      query: (id) => {
        return {
          url: `deleteFaq/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useCreateFAQMutation,
  useDeleteFAQByIdMutation,
  useGetFAQsQuery,
  useGetOneFAQByIdQuery,
  useUpdateFAQByIdMutation,
} = faq;
