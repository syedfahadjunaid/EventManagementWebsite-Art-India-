import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const orders = createApi({
  reducerPath: "orders",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.React_App_Base_Url }),
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: () => {
        return {
          url: `getAllOrder`,
          method: "GET",
        };
      },
    }),

    getOrderById: builder.query({
      query: (id) => {
        // console.log("ID: ", id);
        return {
          url: `getOrder/${id}`,
          method: "GET",
        };
      },
    }),

    createOrder: builder.mutation({
      query: (newData) => {
        // console.log("CREATE BLOG:", newData);
        return {
          url: `CreateOrder`,
          method: "POST",
          body: newData,
          headers: {
            // "Content-Type": "multipart/form-data",
          },
        };
      },
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetOrderByIdQuery,
  useGetOrdersQuery,
} = orders;
