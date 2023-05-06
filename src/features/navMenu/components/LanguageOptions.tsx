import { useTheme, Box } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import CancelIcon from '@mui/icons-material/Cancel';
import { type ILangSelections } from './LanguageToggle';
import { changeLanguage } from '../../../redux/language';
import { useAppDispatch } from '../../../redux/hooks';
import { languageTypes } from '../../../types';

interface IProps {
  isDisplaying: boolean;
  options: ILangSelections[];
  mobileCloseThis: () => void;
  isMobile?: boolean;
}

export function LanguageOptions({
  isDisplaying,
  options,
  mobileCloseThis,
  isMobile,
}: IProps) {
  const dispatch = useAppDispatch();
  const theme = useTheme();

  const handleChangeLanguage = (language: languageTypes) => {
    dispatch(changeLanguage(language));
  };

  return (
    <AnimatePresence>
      {isDisplaying && (
        <>
          <motion.div
            key="languageOptionsWrapper"
            style={{
              overflow: 'hidden',
              position: 'absolute',
              left: '100%',
            }}
            initial={{ width: 0 }}
            animate={{ width: '7rem' }}
            exit={{ width: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              style={{
                width: '100%',
                height: '2px',
                backgroundColor: theme.palette.text.secondary,
                borderRadius: '4px',
                display: isMobile ? 'none' : 'block',
              }}
            />
          </motion.div>
          <Box
            sx={(theme) => ({
              width: '6.5rem',
              [theme.breakpoints.down('lg')]: {
                width: '10rem',
              },
              transition: '1s',
              position: 'absolute',
              left: '130%',
              display: 'flex',
              alignItems: 'center',
              overflow: 'hidden',
              gap: '.25rem',
            })}
          >
            {options.map((option, index) => {
              return (
                <motion.div
                  key={option.language}
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleChangeLanguage(option.language)}
                  initial={{ rotateX: '-90deg' }}
                  animate={{ rotateX: '0deg' }}
                  exit={{ rotateX: '-90deg' }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 * index,
                  }}
                >
                  <img
                    src={option.flag}
                    alt={`Change language to ${option.language}`}
                    width={35}
                    height={35}
                    style={{
                      borderRadius: '50%',
                      backgroundColor: theme.palette.background.default,
                      border: `2px solid ${theme.palette.text.secondary}`,
                    }}
                  />
                </motion.div>
              );
            })}
            <motion.div
              initial={{ rotateX: '-90deg' }}
              animate={{ rotateX: '0deg' }}
              exit={{ rotateX: '-90deg' }}
              transition={{
                duration: 0.5,
                delay: 0.5,
              }}
            >
              <Box
                sx={(theme) => ({
                  backgroundColor: theme.palette.text.secondary,
                  borderRadius: '50%',
                  height: '1.5rem',
                  [theme.breakpoints.up('lg')]: {
                    display: 'none',
                  },
                })}
              >
                <CancelIcon
                  onClick={mobileCloseThis}
                  sx={(theme) => ({
                    color: theme.palette.background.default,
                    cursor: 'pointer',
                  })}
                />
              </Box>
            </motion.div>
          </Box>
        </>
      )}
    </AnimatePresence>
  );
}
