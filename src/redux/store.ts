import { configureStore } from '@reduxjs/toolkit';
import { languageSlice } from './language';
import { languageStoreKey } from './language/language.const';
import { themeStoreKey } from './theme/theme.const';
import { themeSlice } from './theme/theme.slice';

export const store = configureStore({
  reducer: {
    [themeStoreKey]: themeSlice.reducer,
    [languageStoreKey]: languageSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
