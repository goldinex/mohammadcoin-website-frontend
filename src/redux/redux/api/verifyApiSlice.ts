// src/redux/api/verifyApiSlice.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const _url = process.env.NEXT_PUBLIC_BASE_URL;

export const verifyApi = createApi({
  reducerPath: 'verifyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: _url, 
  }),
  endpoints: (builder) => ({
    verifyOTP: builder.mutation<any, { phone_number: string; verification_code: string }>({
      query: (body) => ({
        url: '/auth/verify?type=enter',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useVerifyOTPMutation } = verifyApi;
