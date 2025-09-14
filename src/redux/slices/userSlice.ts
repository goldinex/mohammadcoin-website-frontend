import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Profit {
  yesterdayAmount: number;
  yesterdayPercentage: number;
  lastWeekAmount: number;
  lastWeekPercentage: number;
  lastMonthAmount: number;
  lastMonthPercentage: number;
}

interface Asset {
  toman: number;
  gold?: number; // اختیاری
}

interface Fee {
  currentFee: number;
}

interface UserState {
  name: string | null;
  phoneNumber: string | null;
  melli: string | null;
  dateOfBirth: string | null;
  asset: Asset | null;
  fee?: { currentFee: number } | null;
  profit?: {
    yesterdayAmount: number;
    yesterdayPercentage: number;
    lastWeekAmount: number;
    lastWeekPercentage: number;
    lastMonthAmount: number;
    lastMonthPercentage: number;
  } | null;
}

const initialState: UserState = {
  name: null,
  phoneNumber: null,
  melli: null,
  dateOfBirth: null,
  asset: null,
  fee: null,
  profit: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.name = action.payload.name;
      state.phoneNumber = action.payload.phoneNumber;
      state.melli = action.payload.melli;
      state.dateOfBirth = action.payload.dateOfBirth;
      state.asset = action.payload.asset;
      state.fee = action.payload.fee;
      state.profit = action.payload.profit;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
