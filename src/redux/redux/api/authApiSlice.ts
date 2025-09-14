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
    loginWithPhone: builder.mutation<any, { phone_number: string }>({
      query: (body) => ({
        url: '/auth/otp?type=enter',
        method: 'POST',
        body,
      }),
    }),
    forgotPasswordOtp: builder.mutation<any, { phone_number: string }>({
      query: (body) => ({
        url: '/auth/otp?type=password',
        method: 'POST',
        body,
      }),
    }),
    login: builder.mutation<any, { phone_number: string; password: string }>({
      query: (body) => ({
        url: '/auth/login',
        method: 'POST',
        body,
      }),
    }),
    verifyPasswordOtp: builder.mutation<
      any,
      { phone_number: string; verification_code: string }
    >({
      query: (body) => ({
        url: '/auth/verify?type=password',
        method: 'POST',
        body,
      }),
    }),
    forget: builder.mutation<any, { new_password: string }>({
      query: (body) => ({
        url: '/auth/password/forget',
        method: 'PATCH',
        body,
        headers: {
          'X-Auth-Token': localStorage.getItem('token') || '',
        },
      }),
    }),
    buyGoldAction: builder.mutation<
      any,
      { product_id: number; quantity: number }
    >({
      query: (body) => ({
        url: '/action/buy',
        method: 'PATCH',
        body,
        headers: {
          Authorization: `Bearer ${
            sessionStorage.getItem('access-token') || ''
          }`,
        },
      }),
    }),
    sellGoldAction: builder.mutation<
      any,
      { product_id: number; quantity: number }
    >({
      query: (body) => ({
        url: '/action/sell',
        method: 'PATCH',
        body,
        headers: {
          Authorization: `Bearer ${
            sessionStorage.getItem('access-token') || ''
          }`,
        },
      }),
    }),
    refreshTokenAction: builder.mutation<any, {}>({
      query: (body) => ({
        url: '/auth/refresh',
        method: 'POST',
        body,
        headers: {
          Authorization: `Bearer ${
            localStorage.getItem('refresh-token') || ''
          }`,
        },
      }),
    }),
    changePasswordAction: builder.mutation<
      any,
      { old_password: string; new_password: string }
    >({
      query: (body) => ({
        url: 'auth/password/change',
        method: 'PATCH',
        body,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access-token') || ''}`,
        },
      }),
    }),
    transactionRead: builder.query<any, void>({
      query: () => ({
        url: 'user/transaction',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${
            sessionStorage.getItem('access-token') || ''
          }`,
        },
      }),
    }),
    transactionValue: builder.query<any, void>({
      query: () => ({
        url: 'user/transaction/value',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access-token') || ''}`,
        },
      }),
    }),
    cardsRead: builder.query<any, void>({
      query: () => ({
        url: 'user/card',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${
            sessionStorage.getItem('access-token') || ''
          }`,
        },
      }),
    }),
    createCard: builder.mutation<any, { card_number: string }>({
      query: (body) => ({
        url: 'user/card',
        method: 'POST',
        body,
        headers: {
          Authorization: `Bearer ${
            sessionStorage.getItem('access-token') || ''
          }`,
        },
      }),
    }),
    deposit: builder.mutation<any, { toman: number }>({
      query: (body) => ({
        url: 'action/deposit',
        method: 'PATCH',
        body,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access-token') || ''}`,
        },
      }),
    }),
    withdraw: builder.mutation<any, { toman: number; card_id: number }>({
      query: (body) => ({
        url: 'action/withdraw',
        method: 'PATCH',
        body,
        headers: {
          Authorization: `Bearer ${
            sessionStorage.getItem('access-token') || ''
          }`,
        },
      }),
    }),
    getProducts: builder.query<Product[], void>({
      query: () => ({
        url: '/product/all',
        method: 'GET',
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginWithPhoneMutation,
  useLoginMutation,
  useForgotPasswordOtpMutation,
  useVerifyPasswordOtpMutation,
  useForgetMutation,
  useBuyGoldActionMutation,
  useSellGoldActionMutation,
  useChangePasswordActionMutation,
  useRefreshTokenActionMutation,
  useTransactionReadQuery,
  useTransactionValueQuery,
  useCardsReadQuery,
  useCreateCardMutation,
  useDepositMutation,
  useWithdrawMutation,
  useGetProductsQuery,
  useLogoutMutation,
} = authApi;
