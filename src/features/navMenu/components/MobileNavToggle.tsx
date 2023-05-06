import { Box } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';
import { IDisplayControlState } from '../NavMenu';

interface IProps {
  isDisplayingMobileNavBar: boolean;
  isDisplayingMobileToggle: boolean;
  setDisplayControls: React.Dispatch<
    React.SetStateAction<IDisplayControlState>
  >;
}

export function MobileNavToggle({
  isDisplayingMobileNavBar,
  isDisplayingMobileToggle,
  setDisplayControls,
}: IProps) {
  const handleChangeMobileNavBarDisplay = (variant: boolean) => {
    setDisplayControls((prev) => {
      return {
        ...prev,
        showMobileNavBar: variant,
      };
    });
  };

  return (
    <Box
      sx={(theme) => ({ [theme.breakpoints.up('md')]: { display: 'none' } })}
    >
      <AnimatePresence>
        {isDisplayingMobileToggle && (
          <motion.div
            key="mobileNavToggle"
            initial={{ x: '10rem' }}
            animate={{ x: 0 }}
            exit={{ x: '10rem' }}
            transition={{ duration: 0.5 }}
          >
            {isDisplayingMobileNavBar ? (
              <CancelIcon
                key="cancelIcon"
                onClick={() => handleChangeMobileNavBarDisplay(false)}
                fontSize="large"
                sx={(theme) => ({
                  color: theme.palette.background.default,
                  borderRadius: '50%',
                  padding: '0.5rem',
                  cursor: 'pointer',
                  backgroundColor: theme.palette.primary.darker,
                })}
              />
            ) : (
              <MenuIcon
                key="menuIcon"
                onClick={() => handleChangeMobileNavBarDisplay(true)}
                fontSize="large"
                sx={(theme) => ({
                  color: theme.palette.background.default,
                  borderRadius: '50%',
                  padding: '0.5rem',
                  cursor: 'pointer',
                  backgroundColor: theme.palette.primary.darker,
                })}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}
