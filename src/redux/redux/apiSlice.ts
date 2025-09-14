// src/services/apiSlice.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const _url = process.env.NEXT_PUBLIC_BASE_URL;

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: _url,
    credentials: 'include',
    prepareHeaders: (headers, { endpoint }) => {
      const token = sessionStorage.getItem('access-token');
      if (endpoint.startsWith('transaction') || endpoint.startsWith('action')) {
        if (token) headers.set('Authorization', `Bearer ${token}`);
      }

      const xToken = localStorage.getItem('X-Auth-Token');
      if (
        endpoint.startsWith('auth/register') ||
        endpoint.startsWith('auth/forget')
      ) {
        if (xToken) headers.set('X-Auth-Token', xToken);
      }

      return headers;
    },
  }),
  endpoints: () => ({}),
});
