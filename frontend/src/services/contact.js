import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contact = createApi({
  reducerPath: "contact",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.React_App_Base_Url }),
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => {
        return {
          url: `getContacts`,
          method: "GET",
        };
      },
    }),

    getOneContactById: builder.query({
      query: (id) => {
        // console.log("ID: ", id);
        return {
          url: `getOneContacts/${id}`,
          method: "GET",
        };
      },
    }),

    createContact: builder.mutation({
      query: (newData) => {
        // console.log("CREATE CONTACT:", newData);
        return {
          url: `addContact`,
          method: "POST",
          body: newData,
          headers: {
            // "Content-type": "multipart/form-data",
          },
        };
      },
    }),

    // updateContactById: builder.mutation({
    //   query: ({ id, updateData }) => {
    //     return {
    //       url: `updateContact/${id}`,
    //       method: "PUT",
    //       body: JSON.stringify(updateData),
    //       headers: {
    //         // "Content-type": "multipart/form-data",
    //       },
    //     };
    //   },
    //   // invalidatesTags: ["Albums"],
    // }),

    deleteContactById: builder.mutation({
      query: (id) => {
        // console.log("DELETE ID: ", id);
        return {
          url: `deleteContact/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useCreateContactMutation,
  useDeleteContactByIdMutation,
  useGetContactsQuery,
  useGetOneContactByIdQuery,
  useUpdateContactByIdMutation,
} = contact;
