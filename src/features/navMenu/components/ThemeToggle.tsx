import { Box } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { changeTheme } from '../../../redux/theme/theme.slice';
import { iconSizes } from '../../../constants';
import { themeTypes } from '../../../types';
import { themeSelectors } from '../../../redux/theme';

export function ThemeToggle() {
  const dispatch = useAppDispatch();
  const themeKey = useAppSelector(themeSelectors.theme);

  const handleChange = () => {
    const changeValue =
      themeKey === themeTypes.dark ? themeTypes.light : themeTypes.dark;

    window.localStorage.setItem('theme-preference', changeValue);

    dispatch(changeTheme(changeValue));
  };

  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.palette.background.default,
        border: `2px solid ${theme.palette.primary.darker}`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '.1rem',
        borderRadius: '50%',
        width: '2rem',
        height: '2rem',
        cursor: 'pointer',
        ':hover': {
          border: `2px solid ${theme.palette.text.secondary}`,
        },
      })}
      onClick={handleChange}
    >
      {themeKey === themeTypes.dark ? (
        <LightModeIcon
          sx={(theme) => ({
            color: theme.palette.text.secondary,
            fontSize: iconSizes.regular,
            ':hover': {
              transition: '0.5s',
              color: theme.palette.text.primary,
            },
          })}
        />
      ) : (
        <DarkModeIcon
          sx={(theme) => ({
            color: theme.palette.text.secondary,
            fontSize: iconSizes.regular,
            ':hover': {
              transition: '0.5s',
              color: theme.palette.text.primary,
            },
          })}
        />
      )}
    </Box>
  );
}
