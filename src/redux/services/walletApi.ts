import { apiSlice } from '@/src/redux/apiSlice';

export const walletApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    buyGold: builder.mutation<any, { toman: number }>({
      query: (body) => ({
        url: '/action/buy',
        method: 'PATCH',
        body,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access-token') || ''}`,
        },
      }),
    }),
  }),
});

export const { useBuyGoldMutation } = walletApi;
