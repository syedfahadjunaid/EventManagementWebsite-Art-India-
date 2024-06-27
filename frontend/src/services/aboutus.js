import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const aboutus = createApi({
  reducerPath: "aboutus",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.React_App_Base_Url }),
  endpoints: (builder) => ({
    getAboutUs: builder.query({
      query: () => {
        return {
          url: `getAboutus`,
          method: "GET",
        };
      },
    }),

    updateAboutUs: builder.mutation({
      query: (updateData) => {
        return {
          url: `Aboutusupdate/${updateData.id}`,
          method: "PUT",
          body: updateData.updateData,
          headers: {
            // "Content-type": "multipart/form-data",
          },
        };
      },
      // invalidatesTags: ["Albums"],
    }),
  }),
});

export const { useGetAboutUsQuery, useUpdateAboutUsMutation } = aboutus;
