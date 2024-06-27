import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const socialmedia = createApi({
  reducerPath: "socialMedia",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.React_App_Base_Url }),
  endpoints: (builder) => ({
    getAllSocialMedia: builder.query({
      query: () => {
        return {
          url: `get-All-Socialmedia`,
          method: "GET",
        };
      },
    }),

    getOneSocialMediaById: builder.query({
      query: (id) => {
        //   console.log("ID: ", id);
        return {
          url: `get-Socialmedia/${id}`,
          method: "GET",
        };
      },
    }),

    updateSocialMediaById: builder.mutation({
      query: (updateData) => {
        return {
          url: `socialmedia-update/${updateData.id}`,
          method: "PUT",
          body: updateData.updateData,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
      // invalidatesTags: ["Albums"],
    }),
  }),
});

export const {
  useGetAllSocialMediaQuery,
  useUpdateSocialMediaByIdMutation,
  useGetOneSocialMediaByIdQuery,
} = socialmedia;
