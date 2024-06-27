import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const spaces = createApi({
  reducerPath: "spaces",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.React_App_Base_Url }),
  endpoints: (builder) => ({
    getSpaces: builder.query({
      query: () => {
        return {
          url: `getOurSpaces`,
          method: "GET",
        };
      },
    }),

    getOneSpaceById: builder.query({
      query: (id) => {
        // console.log("ID: ", id);
        return {
          url: `getOneOurSpace/${id}`,
          method: "GET",
        };
      },
    }),

    createSpace: builder.mutation({
      query: (newData) => {
        // console.log("CREATE SPACE:", newData);
        return {
          url: `addOurSpaces`,
          method: "POST",
          body: newData,
          headers: {
            // "Content-type": "multipart/form-data",
          },
        };
      },
    }),

    updateSpaceById: builder.mutation({
      query: (updateData) => {
        return {
          url: `updateOurSpaces/${updateData.id}`,
          method: "PUT",
          body: updateData.updateData,
          headers: {
            // "Content-type": "multipart/form-data",
          },
        };
      },
      // invalidatesTags: ["Albums"],
    }),

    deleteSpaceById: builder.mutation({
      query: (id) => {
        // console.log("DELETE ID: ", id);
        return {
          url: `deleteOurSpace/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useGetSpacesQuery,
  useCreateSpaceMutation,
  useGetOneSpaceByIdQuery,
  useDeleteSpaceByIdMutation,
  useUpdateSpaceByIdMutation,
} = spaces;
