import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const heroSection = createApi({
  reducerPath: "heroSection",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.React_App_Base_Url }),
  endpoints: (builder) => ({
    getHeroSection: builder.query({
      query: () => {
        return {
          url: `getHeroSectionBanners`,
          method: "GET",
        };
      },
    }),

    getOneHeroSectionById: builder.query({
      query: (id) => {
        // console.log("ID: ", id);
        return {
          url: `getOneHeroSectionBanners/${id}`,
          method: "GET",
        };
      },
    }),

    createHeroSection: builder.mutation({
      query: (newData) => {
        // console.log("CREATE SPACE:", newData);
        return {
          url: `addHeroSectionBanner`,
          method: "POST",
          body: newData,
          headers: {
            // "Content-type": "multipart/form-data",
          },
        };
      },
    }),

    updateHeroSectionById: builder.mutation({
      query: (updateData) => {
        return {
          url: `updateHeroSectionBanner/${updateData.id}`,
          method: "PUT",
          body: updateData.updateData,
          headers: {
            // "Content-type": "multipart/form-data",
          },
        };
      },
      // invalidatesTags: ["Albums"],
    }),

    deleteHeroSectionById: builder.mutation({
      query: (id) => {
        // console.log("DELETE ID: ", id);
        return {
          url: `deleteHeroSectionBanner/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useGetHeroSectionQuery,
  useCreateHeroSectionMutation,
  useUpdateHeroSectionByIdMutation,
  useDeleteHeroSectionByIdMutation,
  useGetOneHeroSectionByIdQuery,
} = heroSection;
