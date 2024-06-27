import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const eventSeats = createApi({
  reducerPath: "eventSeats",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.React_App_Base_Url }),
  endpoints: (builder) => ({
    getEventSeats: builder.query({
      query: () => {
        return {
          url: `get-all-eventseats`,
          method: "GET",
        };
      },
    }),

    getEventSeatsById: builder.query({
      query: (id) => {
        // console.log("ID: ", id);
        return {
          url: `eventseats/${id}`,
          method: "GET",
        };
      },
    }),

    createEventSeats: builder.mutation({
      query: (newData) => {
        // console.log("CREATE BLOG:", newData);
        return {
          url: `addeventseats`,
          method: "POST",
          body: newData,
          headers: {
            // "Content-type": "multipart/form-data",
          },
        };
      },
    }),

    updateEventSeatsById: builder.mutation({
      query: (updateData) => {
        return {
          url: `updateeventseats/${updateData.id}`,
          method: "PUT",
          body: updateData.updateData,
          headers: {
            // "Content-type": "multipart/form-data",
          },
        };
      },
      // invalidatesTags: ["Albums"],
    }),

    // deleteCategoryById: builder.mutation({
    //   query: (id) => {
    //     // console.log("DELETE ID: ", id);
    //     return {
    //       url: `deleteCategorie/${id}`,
    //       method: "DELETE",
    //     };
    //   },
    // }),

    // publishCategoriesById: builder.mutation({
    //   query: (updateData) => {
    //     return {
    //       url: `publishCategories/${updateData.id}`,
    //       method: "PUT",
    //       body: updateData.updateData,
    //       headers: {
    //         // "Content-type": "multipart/form-data",
    //         "Content-Type": "application/json",
    //       },
    //     };
    //   },
    // }),
  }),
});

export const {
  useCreateEventSeatsMutation,
  useGetEventSeatsByIdQuery,
  useGetEventSeatsQuery,
  useUpdateEventSeatsByIdMutation,
} = eventSeats;
