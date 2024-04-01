import { PRODUCT } from "../../utils/apiRoutes/product";
import { apiSlice } from "./apiSlice";

const token =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjNlZTUwNmVmMmIwNmRkYTE4M2UwMyIsImlhdCI6MTcxMTc3NDM5OCwiZXhwIjoxNzEyMDMzNTk4fQ.tZib917t6aWWEcUvWjWlBTSzAUnR-bQofQTWpAbqSFs";

export const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    productDta: builder.query({
      query: () => ({
        headers: {
          "Content-type": "application/json",
		  
        },
        url: `${PRODUCT}`,
        method: "GET",
      }),
    }),

    productDtaWithId: builder.query({
      query: (id) => ({
        headers: {
          "Content-type": "application/json",
        },
        url: `${PRODUCT}${id}`,
        method: "GET",
      }),
    }),

    productDataByQuery: builder.query({
      query: (query) => ({
        headers: {
          "Content-type": "application/json",
        },
        url: `${PRODUCT}search?query=${query}`,
        method: "GET",
      }),
    }),

    productSearchByQuery: builder.query({
      query: (query) => ({
        headers: {
          "Content-type": "application/json",
        },
        url: `${PRODUCT}search?query=${query}`,
        method: "GET",
      }),
    }),

    add: builder.mutation({
      query: (items) => ({
        url: `user/addtocart`,
        method: "POST",
        body: items,
        headers: { Authorization: `Bearer ${token}` },
      }),
    }),
    getCart: builder.query({
      query: (items) => ({
        url: `user/getcart`,
        method: "GET",
        body: items,
        headers: { Authorization: `Bearer ${token}` },
      }),
    }),
    cartUpdate: builder.mutation({
      query: (updateCartId) => ({
        url: `user/cart/update`,
        method: "PUT",
        body: updateCartId,
        headers: { Authorization: `Bearer ${token}` },
      }),
    }),

    cartRemove: builder.mutation({
      query: (deleteId) => ({
        url: `user/cart/remove`,
        method: "DELETE",
        body: deleteId,
        headers: { Authorization: `Bearer ${token}` },
      }),
    }),

    
    
    // add: builder.mutation({
    // 	query: (cartData) => ({
    // 		headers: {
    // 			Authorization: `Bearer ${token}`,
    // 		  },
    // 	  url: '/user/addcart',
    // 	  method: 'POST',
    // 	  body: cartData,

    // 	}),
    //   }),
  }),
});

export const {
  useProductDtaQuery,
  useProductDtaWithIdQuery,
  useLazyProductDtaWithIdQuery,
  useLazyProductDataByQueryQuery,
  useAddMutation,
  useGetCartQuery,
useCartRemoveMutation,
  useLazyGetCartQuery,
  useLazyProductSearchByQueryQuery,
  useCartUpdateMutation
} = productApi;
