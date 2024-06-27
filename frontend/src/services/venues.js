import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const venues = createApi({
  reducerPath: "venues",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.React_App_Base_Url }),
  endpoints: (builder) => ({
    getVenues: builder.query({
      query: () => {
        return {
          url: `getAllVenues`,
          method: "GET",
        };
      },
    }),

    getOneVenueById: builder.query({
      query: (id) => {
        // console.log("ID: ", id);
        return {
          url: `getOneVenues/${id}`,
          method: "GET",
        };
      },
    }),

    createVenue: builder.mutation({
      query: (newData) => {
        // console.log("CREATE VENUE:", newData);
        return {
          url: `Venuesadd`,
          method: "POST",
          body: newData,
          headers: {
            // "Content-type": "multipart/form-data",
            // "content-type": "application/json",
          },
        };
      },
    }),

    updateVenueById: builder.mutation({
      query: (updateData) => {
        return {
          url: `Venuesupdate/${updateData.id}`,
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

    // deleteVenueById: builder.mutation({
    //   query: (id) => {
    //     console.log("DELETE ID: ", id);
    //     return {
    //       url: `deleteOurSpace/${id}`,
    //       method: "DELETE",
    //     };
    //   },
    // }),
  }),
});

export const {
  useCreateVenueMutation,
  useGetOneVenueByIdQuery,
  useGetVenuesQuery,
  useUpdateVenueByIdMutation,
} = venues;
