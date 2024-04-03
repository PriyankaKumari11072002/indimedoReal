import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { logoutHandler } from 'utils/common';


const baseQuery = fetchBaseQuery({
  baseUrl: "https://indimedo.onrender.com/",

  prepareHeaders: (headers, { getState }) => {               //delete-access  card-payment 
    // headers.set(
    //   "authorization",
    //   `Bearer ${localStorage.getItem("accessToken")}`
    // );
    return headers;
  },

});



const baseQueryWithReauth = async (args, api, extraOptions) => {

  const result = await baseQuery(args, api, extraOptions);
  if (result?.error != null) {
  
    if (result?.error?.status === 401) {
     
    }
  }
  return result;
};


export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});


