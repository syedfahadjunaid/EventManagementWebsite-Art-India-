import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blog = createApi({
  reducerPath: "blog",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.React_App_Base_Url }),
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => {
        return {
          url: `getAllBlogs`,
          method: "GET",
        };
      },
    }),

    getBlogById: builder.query({
      query: (id) => {
        // console.log("ID: ", id);
        return {
          url: `getOneBlog/${id}`,
          method: "GET",
        };
      },
    }),

    createBlog: builder.mutation({
      query: (newData) => {
        // console.log("CREATE BLOG:", newData);
        return {
          url: `addBlog`,
          method: "POST",
          body: newData,
          headers: {
            // "Content-Type": "multipart/form-data",
          },
        };
      },
    }),

    updateBlogById: builder.mutation({
      query: (updateData) => {
        return {
          url: `updateBlog/${updateData.id}`,
          method: "PUT",
          body: updateData.updateData,
          headers: {
            // "Content-Type": "multipart/form-data",
            // "content-type": "application/json",
          },
        };
      },
      // invalidatesTags: ["Albums"],
    }),

    deleteBlogById: builder.mutation({
      query: (id) => {
        // console.log("DELETE ID: ", id);
        return {
          url: `deleteBlog/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useGetBlogsQuery,
  useGetBlogByIdQuery,
  useCreateBlogMutation,
  useUpdateBlogByIdMutation,
  useDeleteBlogByIdMutation,
} = blog;
