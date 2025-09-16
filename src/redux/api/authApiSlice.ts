import { apiSlice } from '@/src/redux/apiSlice';
import { Product } from '@/src/types/product';
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
  }),
});

export const {
  useRegisterMutation,
  useGetProductsQuery,
} = authApi;
