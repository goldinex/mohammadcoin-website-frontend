import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setUser } from '@/src/redux/slices/userSlice';
const _url = process.env.NEXT_PUBLIC_BASE_URL;

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: _url,
    prepareHeaders: (headers, { getState }) => {
      const accessToken = sessionStorage.getItem('access-token');

      if (accessToken && accessToken !== 'null' && accessToken !== '') {
        headers.set('Authorization', `Bearer ${accessToken}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUser: builder.query<any, void>({
      query: () => 'user/read',
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const userData = {
            name: data.info.full_name || '',
            phoneNumber: data.info.phone_number || '',
            melli: data.info.national_id || '',
            dateOfBirth: data.info.date_of_birth || '',
          };
          const assetData = {
            toman: data.wallet.toman,
          };

          const walletData = {
            wallet: data.asset
          }

          dispatch(
            setUser({
              ...userData,
              asset: assetData,
              wallet: walletData,
            })
          );
        } catch (error) {
          console.error('Failed to fetch user data', error);
        }
      },
    }),
  }),
});

export const { useGetUserQuery } = userApi;
