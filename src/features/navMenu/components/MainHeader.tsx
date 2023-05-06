import { Box } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { Logo, MobileNavToggle, NavBar } from '.';
import { IDisplayControlState } from '../NavMenu';

interface IProps {
  displayControls: IDisplayControlState;
  setDisplayControls: React.Dispatch<
    React.SetStateAction<IDisplayControlState>
  >;
}

export function MainHeader({ displayControls, setDisplayControls }: IProps) {
  const { showDesktopNavBar, showMobileNavBar, showMobileNavToggle } =
    displayControls;

  return (
    <Box
      component="header"
      sx={(theme) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 3rem 0',
        [theme.breakpoints.down('lg')]: {
          padding: '1rem 1.5rem 0',
        },
        [theme.breakpoints.down('lg')]: {
          padding: '1rem 1rem 0',
        },
      })}
    >
      {/* Two logos, one for mobile display and another for larger screens */}
      <AnimatePresence>
        {showMobileNavToggle && (
          <Box
            sx={(theme) => ({
              [theme.breakpoints.up('sm')]: { display: 'none' },
            })}
          >
            <motion.div
              key="mobileLogo"
              initial={{ x: '-5rem' }}
              animate={{ x: 0 }}
              exit={{ x: '-5rem' }}
              transition={{
                duration: 0.5,
                fill: 'forwards',
              }}
            >
              <Logo isDisplayingNavBar={showDesktopNavBar} />
            </motion.div>
          </Box>
        )}
      </AnimatePresence>
      <Box
        sx={(theme) => ({
          [theme.breakpoints.down('sm')]: { display: 'none' },
        })}
      >
        <Logo isDisplayingNavBar={showDesktopNavBar} />
      </Box>
      <NavBar isDisplaying={showDesktopNavBar} />
      <MobileNavToggle
        isDisplayingMobileNavBar={showMobileNavBar}
        isDisplayingMobileToggle={showMobileNavToggle}
        setDisplayControls={setDisplayControls}
      />
    </Box>
  );
}
