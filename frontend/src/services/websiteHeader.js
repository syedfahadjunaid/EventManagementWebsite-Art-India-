import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const websiteHeader = createApi({
  reducerPath: "websiteHeader",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.React_App_Base_Url }),
  endpoints: (builder) => ({
    getWebsiteHeader: builder.query({
      query: () => {
        return {
          url: `getWebsiteHeader`,
          method: "GET",
        };
      },
    }),

    updateWebsiteHeader: builder.mutation({
      query: (updateData) => {
        return {
          url: `updateWebsiteHeader/${updateData.id}`,
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

export const { useGetWebsiteHeaderQuery, useUpdateWebsiteHeaderMutation } =
  websiteHeader;
