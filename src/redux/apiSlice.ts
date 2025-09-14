// src/services/apiSlice.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const _url = process.env.NEXT_PUBLIC_BASE_URL;

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: _url,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('X-Auth-Token');
      if (token) {
        headers.set('X-Auth-Token', token);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
