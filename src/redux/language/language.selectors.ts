import { type RootState } from '../store';

const language = (state: RootState) => state.language.currentLanguage;

export const languageSelectors = { language };
