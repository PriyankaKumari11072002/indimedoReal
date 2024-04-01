import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../services/apis/apiSlice'
import authReducer from './features/authSlice';
import searchReducer from './features/searchSlice'
import cartReducer from './features/cartSlice';

// import { productApi } from '../services/apis/product'

export const store = configureStore({
  reducer: {
    
    [apiSlice.reducerPath]: apiSlice.reducer,

    auth: authReducer,
    search:searchReducer,
    cart:cartReducer


  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})