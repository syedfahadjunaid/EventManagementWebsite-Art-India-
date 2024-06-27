import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const events = createApi({
  reducerPath: "events",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.React_App_Base_Url }),
  endpoints: (builder) => ({
    getEvents: builder.query({
      query: () => {
        return {
          url: `getAllEvents`,
          method: "GET",
        };
      },
    }),

    getOneEventById: builder.query({
      query: (id) => {
        // console.log("ID: ", id);
        return {
          url: `getOneEvent/${id}`,
          method: "GET",
        };
      },
    }),

    createEvent: builder.mutation({
      query: (newData) => {
        // console.log("CREATE PAGE:", newData);
        return {
          url: `addevents`,
          method: "POST",
          body: newData,
          headers: {
            // "Content-type": "multipart/form-data",
            // "content-type": "application/json",
          },
        };
      },
    }),

    updateEventById: builder.mutation({
      query: (updateData) => {
        return {
          url: `updateevent/${updateData.id}`,
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
    updateEventPublishById: builder.mutation({
      query: (publishData) => {
        return {
          url: `eventpublished/${publishData.eventId}`,
          method: "PUT",
          body: publishData.publishStatus,
        };
      },
    }),
  }),
});

export const {
  useCreateEventMutation,
  useGetEventsQuery,
  useGetOneEventByIdQuery,
  useUpdateEventByIdMutation,
  useUpdateEventPublishByIdMutation,
} = events;
