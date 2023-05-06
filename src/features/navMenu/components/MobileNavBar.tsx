import { Box, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { navigationOptions } from '../../../constants';
import { NavItem } from './NavItem';
import { HighlightedNavOption, LanguageToggle, ThemeToggle } from '.';
import { controlsText, navigationText } from '../texts';
import { languageSelectors } from '../../../redux/language';
import { useAppSelector } from '../../../redux/hooks';

interface IProps {
  isDisplaying: boolean;
  handleCloseThis: () => void;
}

export function MobileNavBar({ isDisplaying, handleCloseThis }: IProps) {
  const language = useAppSelector(languageSelectors.language);

  const handleCheckNavBarClosing = (e: TouchEvent | any) => {
    if (e.x < 250) {
      handleCloseThis();
    }
  };

  return (
    <AnimatePresence>
      {isDisplaying && (
        <motion.div
          drag="x"
          dragConstraints={{ right: 0 }}
          dragElastic={0}
          onDragEnd={handleCheckNavBarClosing}
          style={{
            zIndex: 10,
            position: 'fixed',
            top: 0,
            left: 0,
            width: '60%',
          }}
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ duration: 0.5 }}
        >
          <Box
            sx={(theme) => ({
              height: '100svh',
              backgroundColor: theme.palette.primary.darker,
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
            })}
          >
            {/* Nav options */}
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                }}
              >
                <Typography variant="h3" fontWeight="bold" color="text.primary">
                  {navigationText(language)}
                </Typography>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                {navigationOptions.map((option, index) => {
                  return (
                    <NavItem
                      key={index}
                      index={index}
                      option={option}
                      isMobile
                      handleCloseMobileNav={handleCloseThis}
                    />
                  );
                })}
                <HighlightedNavOption
                  navigationLength={navigationOptions.length}
                  isMobile
                />
              </div>
            </div>
            {/* User controlls */}
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                }}
              >
                <Typography variant="h3" fontWeight="bold" color="text.primary">
                  {controlsText(language)}
                </Typography>
              </div>
              <div
                style={{
                  display: 'flex',
                  gap: '1rem',
                  justifyContent: 'center',
                }}
              >
                <ThemeToggle />
                <LanguageToggle isMobile />
              </div>
            </div>
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
