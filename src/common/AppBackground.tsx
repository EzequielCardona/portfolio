import { useMemo } from 'react';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material';
import { motion } from 'framer-motion';
import { useAppSelector } from '../redux/hooks';
import { themeSelectors } from '../redux/theme';
import buildAppTheme from '../features/themeToggling/buildAppTheme';

interface IProps {
  children: React.ReactElement[] | React.ReactElement;
}

export function AppBackground({ children }: IProps) {
  const themeSelected = useAppSelector(themeSelectors.theme);
  // Update the theme only if the mode changes
  const theme = useMemo(() => {
    const creation = createTheme(buildAppTheme(themeSelected));
    return responsiveFontSizes(creation);
  }, [themeSelected]);

  return (
    <ThemeProvider theme={theme}>
      <motion.div
        animate={{ backgroundColor: theme.palette.background.default }}
      >
        {children}
      </motion.div>
    </ThemeProvider>
  );
}
