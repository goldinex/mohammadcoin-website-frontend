import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Asset {
  toman: number;
}

interface Wallet {
  wallet: [];
}

interface UserState {
  name: string | null;
  phoneNumber: string | null;
  melli: string | null;
  dateOfBirth: string | null;
  asset: Asset | null;
  wallet: Wallet | null;
}

const initialState: UserState = {
  name: null,
  phoneNumber: null,
  melli: null,
  dateOfBirth: null,
  asset: null,
  wallet: null,
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
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
