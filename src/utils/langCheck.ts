import { languageTypes } from '../types';

export const isFrench = (language: languageTypes) =>
  language === languageTypes.french;
export const isSpanish = (language: languageTypes) =>
  language === languageTypes.spanish;
export const isEnglish = (language: languageTypes) =>
  language === languageTypes.english;
