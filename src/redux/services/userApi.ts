import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setUser } from '@/src/redux/slices/userSlice';
const _url = process.env.NEXT_PUBLIC_BASE_URL;

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: _url,
    prepareHeaders: (headers, { getState }) => {
      const accessToken = localStorage.getItem('access-token');

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
            transferId: data.info.transfer_id || '',
            isAuthenticated: data.info.is_authenticated,
          };
          const assetData = {
            toman: data.asset.toman,
            gold: data.asset.gold,
          };

          const feeData = {
            currentFee: data.fee.current_fee,
          };

          const profitData = {
            yesterdayAmount: data.profit.yesterday_profit_amount,
            yesterdayPercentage: data.profit.yesterday_profit_percentage,
            lastWeekAmount: data.profit.last_week_profit_amount,
            lastWeekPercentage: data.profit.last_week_profit_percentage,
            lastMonthAmount: data.profit.last_month_profit_amount,
            lastMonthPercentage: data.profit.last_month_profit_percentage,
          };

          dispatch(
            setUser({
              ...userData,
              asset: assetData,
              fee: feeData,
              profit: profitData,
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
