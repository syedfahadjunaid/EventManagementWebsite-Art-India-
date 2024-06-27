import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const footer = createApi({
  reducerPath: "footer",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.React_App_Base_Url }),
  endpoints: (builder) => ({
    getfooter: builder.query({
      query: () => {
        return {
          url: `getFooter`,
          method: "GET",
        };
      },
    }),

    updatefooter: builder.mutation({
      query: (updateData) => {
        return {
          url: `updateFooter/${updateData.id}`,
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

export const { useGetfooterQuery, useUpdatefooterMutation } = footer;
