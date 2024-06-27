import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const admin = createApi({
  reducerPath: "admin",
  baseQuery: fetchBaseQuery({
    // baseUrl: process.env.BASEURL,
    baseUrl: process.env.React_App_Base_Url,
  }),

  endpoints: (builder) => ({
    getAllAdmins: builder.query({
      query: () => ({
        url: "getAdminData",
        method: "GET",
      }),
    }),
    // getAdminById: builder.query({
    //   query: (id) => {
    //     console.log("ID: ", id);
    //     return {
    //       url: `getAdminData/${id}`,
    //       method: "GET",
    //     };
    //   },
    // }),
    // getAdminByLimit: builder.query({
    //   query: (num) => {
    //     console.log("ID: ", num);
    //     return {
    //       url: `getAdminData_limit=${num}`,
    //       method: "GET",
    //     };
    //   },
    // }),
    deleteAdminById: builder.mutation({
      query: (id) => {
        // console.log("DELETE ID: ", id);
        return {
          url: `deleteAdmin/${id}`,
          method: "DELETE",
        };
      },
    }),
    createAdmin: builder.mutation({
      query: (newAdmin) => {
        // console.log("CREATE ADMIN: ", newAdmin);
        return {
          url: `AdminRegister`,
          method: "POST",
          body: newAdmin,
          headers: {
            // "Content-type": "multipart/form-data",
            // "Content-type": "application/json",
          },
        };
      },
    }),
    updateAdminById: builder.mutation({
      query: (adminData) => ({
        url: `AdminUpdate/${adminData.id}`,
        method: "PUT",
        body: adminData.updateData,
        headers: {
          // "Content-type": "multipart/form-data",
        },
      }),
      // invalidatesTags: ["Albums"],
    }),

    adminSignIn: builder.mutation({
      query: (adminData) => {
        // console.log("CREATE ADMIN: ", newAdmin);
        return {
          url: `adminSignin`,
          method: "POST",
          body: adminData,
          headers: {
            // "Content-type": "multipart/form-data",
            // "Content-type": "application/json",
          },
        };
      },
    }),

    // adminLogout: builder.query({
    //   query: () => ({
    //     url: "adminlogout",
    //     method: "GET",
    //   }),
    // }),
  }),
});

export const {
  useGetAllAdminsQuery,
  useDeleteAdminByIdMutation,
  useCreateAdminMutation,
  useAdminSignInMutation,
  useUpdateAdminByIdMutation,
  useAdminLogoutQuery,
} = admin;
