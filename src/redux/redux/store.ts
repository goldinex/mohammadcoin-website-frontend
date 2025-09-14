import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './apiSlice';
import { verifyApi } from './api/verifyApiSlice';
import { userApi } from './services/userApi';
import userReducer from './slices/userSlice';
import { goldPriceApi } from './services/goldPriceApi';

export const store = configureStore({
  reducer: {
    user: userReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [verifyApi.reducerPath]: verifyApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [goldPriceApi.reducerPath]: goldPriceApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      apiSlice.middleware,
      verifyApi.middleware,
      userApi.middleware,
      goldPriceApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
