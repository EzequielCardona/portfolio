import { themeTypes } from '../../types';
import { darkTheme } from './variants/darkTheme';
import { lightTheme } from './variants/lightTheme';

// This is for adding types to the theme, so typescript can read them on use
declare module '@mui/material/styles' {
  interface PaletteColor {
    lighter: string;
    darker: string;
    generalBoxShadow: string;
  }
  interface TypeBackground {
    transparent: string;
  }
}

const buildAppTheme = (variant: themeTypes) => ({
  palette: {
    primary: {
      main: 'rgba(132, 210, 197, 1)',
      lighter: 'rgba(132, 210, 197, 1)',
      light: 'rgba(228, 201, 136, 1)',
      dark: 'rgba(194, 118, 100, 1)',
      darker: 'rgba(176, 90, 122, 1)',
      generalBoxShadow: '0 0 20px -15px rgba(2,12,27,0.7)',
    },
    ...(variant === themeTypes.light ? lightTheme : darkTheme),
  },
  typography: {
    fontFamily: ['Mulish', 'Roboto', 'Arial', 'sans-serif'].join(','),
    h1: {
      fontSize: '4rem',
    },
    h2: {
      fontSize: '2rem',
    },
    h3: {
      fontStyle: 'italic',
      fontSize: '1.5rem',
    },
    h4: {
      fontSize: '1.4rem',
    },
    caption: {
      fontSize: '0.82rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          boxShadow: 'none',
          ':hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
  },
});

export default buildAppTheme;
