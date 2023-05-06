import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { languageStoreKey } from './language.const';
import { languageTypes } from '../../types';

interface ILanguageState {
  isLoading: boolean;
  currentLanguage: languageTypes;
}

const initialState: ILanguageState = {
  isLoading: false,
  currentLanguage: languageTypes.english,
};

export const languageSlice = createSlice({
  name: languageStoreKey,
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<languageTypes>) => {
      state.isLoading = true;
      state.currentLanguage = action.payload;
      state.isLoading = false;
    },
  },
});

export const { changeLanguage } = languageSlice.actions;
