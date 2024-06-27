import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const sectionTopDescription = createApi({
  reducerPath: "sectionTopDescription",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.React_App_Base_Url }),
  endpoints: (builder) => ({
    getSectionTopDescription: builder.query({
      query: () => {
        return {
          url: `getSectionTop`,
          method: "GET",
        };
      },
    }),

    updateSectionTopDescriptionById: builder.mutation({
      query: (updateData) => {
        return {
          url: `updateSectionTop/${updateData.id}`,
          method: "PUT",
          body: updateData.updateData,
          headers: {
            // "Content-type": "multipart/form-data",
          },
        };
      },
      // invalidatesTags: ["Albums"],
    }),
  }),
});

export const {
  useGetSectionTopDescriptionQuery,
  useUpdateSectionTopDescriptionByIdMutation,
} = sectionTopDescription;
