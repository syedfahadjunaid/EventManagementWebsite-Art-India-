import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const community = createApi({
  reducerPath: "community",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.React_App_Base_Url }),
  endpoints: (builder) => ({
    getCommunity: builder.query({
      query: () => {
        return {
          url: `getCommunities`,
          method: "GET",
        };
      },
    }),

    getOneCommunityById: builder.query({
      query: (id) => {
        console.log("ID: ", id);
        return {
          url: `getOneCommunity/${id}`,
          method: "GET",
        };
      },
    }),

    createCommunity: builder.mutation({
      query: (newData) => {
        // console.log("CREATE COMMUNITY:", newData);
        return {
          url: `addCommunity`,
          method: "POST",
          body: newData,
          headers: {
            // "Content-type": "multipart/form-data",
          },
        };
      },
    }),

    updateCommunityById: builder.mutation({
      query: (updateData) => {
        return {
          url: `updateCommunity/${updateData.id}`,
          method: "PUT",
          body: updateData.updateData,
          headers: {
            // "Content-type": "multipart/form-data",
          },
        };
      },
      // invalidatesTags: ["Albums"],
    }),

    deleteCommunityById: builder.mutation({
      query: (id) => {
        console.log("DELETE ID: ", id);
        return {
          url: `deleteCommunity/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useGetCommunityQuery,
  useCreateCommunityMutation,
  useGetOneCommunityByIdQuery,
  useDeleteCommunityByIdMutation,
  useUpdateCommunityByIdMutation,
} = community;
