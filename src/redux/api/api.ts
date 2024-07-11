import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/" }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ searchTerm, category }) => {
        let url = "/Users";
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
      providesTags: ["Product"],
    }),
    getSingleProduct: builder.query({
      query: (id) => ({
        url: `/Users/${id}`,
        method: "GET",
      }),
      providesTags: ["Product"],
    }),
    checkStockStatus: builder.query({
      query: (productIds) => ({
        url: `/Users/checkstock`,
        method: "POST",
        body: { productIds },
      }),
    }),
    updateStockStatus: builder.mutation({
      query: ({ productIds, stockquantity }) => ({
        url: `/Users/updatestock`,
        method: 'POST',
        body: { productIds, stockquantity },
      }),
      // Cache invalidation after mutation
      invalidatesTags: ["Product"],
    }),
    createProduct: builder.mutation({
      query: (newProduct) => ({
        url: `Users`,
        method: "POST",
        body: newProduct,
      }),
      // Cache invalidation after mutation
      invalidatesTags: ["Product"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `Users/${id}`,
        method: "DELETE",
      }),
      // Cache invalidation after mutation
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useCreateProductMutation,
  useGetSingleProductQuery,
  useCheckStockStatusQuery,
  useUpdateStockStatusMutation ,
  useDeleteProductMutation
} = baseApi;
