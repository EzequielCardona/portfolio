import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { themeStoreKey } from './theme.const';
import { themeTypes } from '../../types';

interface IThemeState {
  currentTheme: themeTypes;
}

const initialState: IThemeState = {
  currentTheme: themeTypes.light,
};

export const themeSlice = createSlice({
  name: themeStoreKey,
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<themeTypes>) => {
      state.currentTheme = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
