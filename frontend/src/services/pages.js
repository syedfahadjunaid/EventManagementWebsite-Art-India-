import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pages = createApi({
  reducerPath: "pages",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.React_App_Base_Url }),
  endpoints: (builder) => ({
    getPages: builder.query({
      query: () => {
        return {
          url: `getAllPages`,
          method: "GET",
        };
      },
    }),

    getOnePageById: builder.query({
      query: (id) => {
        // console.log("ID: ", id);
        return {
          url: `getOnePages/${id}`,
          method: "GET",
        };
      },
    }),

    createPage: builder.mutation({
      query: (newData) => {
        // console.log("CREATE PAGE:", newData);
        return {
          url: `Pagesadd`,
          method: "POST",
          body: newData,
          headers: {
            // "Content-type": "multipart/form-data",
            // "content-type": "application/json",
          },
        };
      },
    }),

    updatePageById: builder.mutation({
      query: (updateData) => {
        return {
          url: `Pagesupdate/${updateData.id}`,
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
    // updatePagePublishById: builder.mutation({
    //   query: ({ id, updateData }) => {
    //     return {
    //       url: `publishPages/${id}`,
    //       method: "PUT",
    //       body: JSON.stringify(updateData),
    //       headers: {
    //         "Content-type": "multipart/form-data",
    //         // "content-type": "application/json",
    //       },
    //     };
    //   },
    //   // invalidatesTags: ["Albums"],
    // }),

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
  useCreatePageMutation,
  useGetPagesQuery,
  useGetOnePageByIdQuery,
  useUpdatePageByIdMutation,
  useUpdatePagePublishByIdMutation,
} = pages;
