// services/goldPriceApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const _url = process.env.NEXT_PUBLIC_BASE_URL;

export const goldPriceApi = createApi({
  reducerPath: 'goldPriceApi',
  baseQuery: fetchBaseQuery({ baseUrl: _url }),
  endpoints: (builder) => ({
    getGoldPrice: builder.query<any, void>({
      query: () => 'price',
    }),
  }),
});

export const { useGetGoldPriceQuery } = goldPriceApi;
