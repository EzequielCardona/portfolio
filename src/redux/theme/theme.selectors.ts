import { type RootState } from '../store';

const theme = (state: RootState) => state.theme.currentTheme;

export const themeSelectors = { theme };
