import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl:"https://sports-ecomerce-backend.vercel.app/api/v1/"}),
  tagTypes: ['Product', 'User'],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ searchTerm, category }) => {
        let url = "/users/products";
        const params = new URLSearchParams();
        if (searchTerm) {
          params.append("searchTerm", searchTerm);
        }
        if (category) {
          params.append("category", category);
        }
        if (params.toString()) {
          url += `?${params.toString()}`;
        }

        return {
          url,
          method: "GET",
        };
      },
      providesTags: ['Product'],
    }),
    getSingleProduct: builder.query({
      query: (id) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
      providesTags: ["Product"],
    }),
    checkStockStatus: builder.query({
      query: (productIds) => ({
        url: `/users/checkstock`,
        method: "POST",
        body: { productIds },
      }),
      providesTags: ["Product"],
    }),
    updateStockStatus: builder.mutation({
      query: ({ productIds, stockquantity }) => ({
        url: `/users/updatestock`,
        method: "POST",
        body: { productIds, stockquantity },
      }),
      invalidatesTags: ["Product"],
    }),
    createProduct: builder.mutation({
      query: (newProduct) => ({
        url: "users",
        method: "POST",
        body: newProduct,
      }),
      invalidatesTags: ["Product"],
    }),
    updateProduct: builder.mutation({
      query: ({ id, body }) => ({
        url: `users/${id}`,
        method: "PUT",
        body: body,
      }),
      invalidatesTags: ["Product"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useCreateProductMutation,
  useGetSingleProductQuery,
  useCheckStockStatusQuery,
  useUpdateStockStatusMutation,
  useDeleteProductMutation,
  useUpdateProductMutation
} = baseApi;