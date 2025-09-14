import { apiSlice } from '../apiSlice';

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loginWithPhone: builder.mutation<any, { phone_number: string }>({
      query: (body) => ({
        url: `/auth/otp?type=enter`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useLoginWithPhoneMutation } = authApi;
