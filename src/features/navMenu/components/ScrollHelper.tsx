import { Box, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { scrollText } from '../texts';
import { useAppSelector } from '../../../redux/hooks';
import { languageSelectors } from '../../../redux/language';
import { languageTypes } from '../../../types';

interface IProps {
  isOnBottomOfThePage: boolean;
}

export function ScrollHelper({ isOnBottomOfThePage }: IProps) {
  const language = useAppSelector(languageSelectors.language);

  const handleGoUp = () => {
    window.location.href = '#home';
  };

  return (
    <Box
      sx={(theme) => ({
        [theme.breakpoints.down('md')]: {
          display: 'none',
        },
      })}
    >
      <motion.div
        style={{
          position: 'absolute',
          top: '105vh',
          left: '94%',
          height: '10rem',
          display: 'flex',
          gap: '.5rem',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        animate={{ y: '-12rem' }}
        transition={{ delay: 2, duration: 1 }}
      >
        <AnimatePresence mode="wait">
          {isOnBottomOfThePage ? (
            <motion.div
              key="goUpIndicator"
              style={{ marginTop: '1rem' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <KeyboardDoubleArrowUpIcon
                onClick={handleGoUp}
                sx={(theme) => ({
                  borderRadius: '50%',
                  padding: '0.25rem',
                  cursor: 'pointer',
                  color: theme.palette.text.secondary,
                  border: `2px solid ${theme.palette.text.secondary}`,
                  ':hover': {
                    color: theme.palette.text.primary,
                    border: `2px solid ${theme.palette.text.primary}`,
                  },
                })}
              />
            </motion.div>
          ) : (
            <motion.div
              key="scrollDownIndicator"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* text for scrolling */}
              <motion.div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '.5rem',
                  alignItems: 'center',
                }}
                animate={{ y: [0, -7, 0] }}
                transition={{
                  delay: 2,
                  repeat: Infinity,
                  ease: 'linear',
                  duration: 1.5,
                }}
              >
                <Typography
                  variant="caption"
                  color="text.primary"
                  sx={{
                    transform: 'rotateZ(-90deg)',
                    mb: language == languageTypes.spanish ? '1rem' : '0rem',
                  }}
                >
                  {scrollText(language)}
                </Typography>
                <KeyboardDoubleArrowDownIcon
                  sx={(theme) => ({ color: theme.palette.primary.darker })}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Line effect */}
        <Box
          sx={(theme) => ({
            height: '100%',
            width: '2px',
            backgroundColor: theme.palette.primary.darker,
            borderRadius: '4px',
          })}
        />
      </motion.div>
    </Box>
  );
}
