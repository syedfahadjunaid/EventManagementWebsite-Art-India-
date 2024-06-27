import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const termsAndConditions = createApi({
  reducerPath: "termsAndConditions",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.React_App_Base_Url }),
  endpoints: (builder) => ({
    getTermsAndConditions: builder.query({
      query: () => {
        return {
          url: `getAllTermsAndConditions`,
          method: "GET",
        };
      },
    }),

    getOneTermsAndConditionsById: builder.query({
      query: (id) => {
        // console.log("ID: ", id);
        return {
          url: `getOneTermsAndConditions/${id}`,
          method: "GET",
        };
      },
    }),

    createTermsAndConditions: builder.mutation({
      query: (newData) => {
        // console.log("CREATE VENUE:", newData);
        return {
          url: `termsAndConditionsAdd`,
          method: "POST",
          body: newData,
          headers: {
            // "Content-type": "multipart/form-data",
            // "content-type": "application/json",
          },
        };
      },
    }),

    updateTermsAndConditionsById: builder.mutation({
      query: (updateData) => {
        return {
          url: `updateTermsAndConditions/${updateData.id}`,
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
  useCreateTermsAndConditionsMutation,
  useGetOneTermsAndConditionsByIdQuery,
  useUpdateTermsAndConditionsByIdMutation,
  useGetTermsAndConditionsQuery,
} = termsAndConditions;
