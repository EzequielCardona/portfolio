import { useEffect } from 'react';
import { useAppDispatch } from '../redux/hooks';
import { changeTheme } from '../redux/theme';
import { languageTypes, themeTypes } from '../types';
import { changeLanguage } from '../redux/language';

export function useCheckUserControlPrefs() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Evaluate theme pref user preference
    const themePreference = window.localStorage.getItem('theme-preference');
    if (themePreference) {
      dispatch(changeTheme(themePreference as themeTypes));
    }

    // Evaluate language user preference
    const navLanguage = navigator.language;
    const langPref = () => {
      if (navLanguage.startsWith('es')) {
        return languageTypes.spanish;
      } else if (navLanguage.startsWith('fr')) {
        return languageTypes.french;
      }
    };
    const languagePreference = langPref();

    if (languagePreference) {
      dispatch(changeLanguage(languagePreference));
    }
  }, []);
}
