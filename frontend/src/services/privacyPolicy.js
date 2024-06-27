import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const privacyPolicy = createApi({
  reducerPath: "PrivacyPolicy",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.React_App_Base_Url }),
  endpoints: (builder) => ({
    getPrivacyPolicy: builder.query({
      query: () => {
        return {
          url: `getAllPrivacyPolicy`,
          method: "GET",
        };
      },
    }),

    getOnePrivacyPolicyById: builder.query({
      query: (id) => {
        // console.log("ID: ", id);
        return {
          url: `getOnePrivacyPolicy/${id}`,
          method: "GET",
        };
      },
    }),

    createPrivacyPolicy: builder.mutation({
      query: (newData) => {
        // console.log("CREATE VENUE:", newData);
        return {
          url: `privacyPolicyAdd`,
          method: "POST",
          body: newData,
          headers: {
            // "Content-type": "multipart/form-data",
            // "content-type": "application/json",
          },
        };
      },
    }),

    updatePrivacyPolicyById: builder.mutation({
      query: (updateData) => {
        return {
          url: `updatePrivacyPolicy/${updateData.id}`,
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
  useCreatePrivacyPolicyMutation,
  useGetOnePrivacyPolicyByIdQuery,
  useGetPrivacyPolicyQuery,
  useUpdatePrivacyPolicyByIdMutation,
} = privacyPolicy;
