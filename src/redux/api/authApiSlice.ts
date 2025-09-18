import { apiSlice } from '@/src/redux/apiSlice';
import { Product, PricePoint } from '@/src/types/product';
export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<
      any,
      { password: string; national_id: string; date_of_birth: string }
    >({
      query: (body) => ({
        url: '/auth/register',
        method: 'POST',
        body,
        headers: {
          'X-Auth-Token': localStorage.getItem('token') || '',
        },
      }),
    }),
    getProducts: builder.query<Product[], void>({
      query: () => ({
        url: '/product/all',
        method: 'GET',
      }),
    }),
    getProducts2: builder.query<Product[], void>({
      query: () => ({
        url: '/product/all2',
        method: 'GET',
      }),
    }),
    getTimeseries: builder.query<PricePoint[], string>({
      query: (productId) => ({
        url: `/product/timeseries/${productId}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useGetProductsQuery,
  useGetProducts2Query,
  useGetTimeseriesQuery,
} = authApi;
