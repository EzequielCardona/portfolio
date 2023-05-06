import { useState } from 'react';
import { Box } from '@mui/material';
import { MotionValue, useMotionValueEvent, useScroll } from 'framer-motion';
import {
  MobileNavBar,
  UserControls,
  SocialIcons,
  ScrollHelper,
  MainHeader,
} from './components';

// TODO: locate these definitions properly
export interface IDisplayControlState {
  showDesktopNavBar: boolean;
  showMobileNavToggle: boolean;
  showMobileNavBar: boolean;
}

interface IExtra {
  current: number;
}
type TExtendedProps = MotionValue<number> & IExtra;

export function NavMenu() {
  const { scrollYProgress } = useScroll();

  const [lastestsScrollY, setLastestScrollY] = useState(0);
  const [isOnBottomOfThePage, setIsOnBottomOfThePage] = useState(false);
  const [displayControls, setDisplayControls] = useState<IDisplayControlState>({
    showDesktopNavBar: true,
    showMobileNavToggle: true,
    showMobileNavBar: false,
  });

  useMotionValueEvent(scrollYProgress, 'change', (lastest) => {
    const threshold = 0.02;
    const scrollingDif = Math.abs(lastestsScrollY - lastest);

    if (scrollingDif < threshold) return;

    // Define the display of things in the nav menu
    if (lastestsScrollY < lastest) {
      // Is scrolling down
      setDisplayControls((prev) => {
        return {
          ...prev,
          showDesktopNavBar: false,
          showMobileNavToggle: false,
        };
      });
    } else {
      // Is scrolling up
      setDisplayControls((prev) => {
        return {
          ...prev,
          showDesktopNavBar: true,
          showMobileNavToggle: true,
        };
      });
    }

    setLastestScrollY(lastest);

    // Check if it's in the bottom of the page
    const progress = scrollYProgress as TExtendedProps;
    if (progress.current > 0.95) {
      setIsOnBottomOfThePage(true);
    } else {
      isOnBottomOfThePage && setIsOnBottomOfThePage(false);
    }
  });

  const handleCloseMobileNavBar = () => {
    setDisplayControls((prev) => {
      return {
        ...prev,
        showMobileNavBar: false,
      };
    });
  };

  return (
    <>
      <Box
        sx={(theme) => ({
          position: 'sticky',
          top: 0,
          marginBottom: '-6rem',
          zIndex: 10,
          [theme.breakpoints.down('sm')]: {
            marginBottom: '-3rem',
          },
        })}
      >
        <MainHeader
          displayControls={displayControls}
          setDisplayControls={setDisplayControls}
        />
        <UserControls />
        <SocialIcons />
        <ScrollHelper isOnBottomOfThePage={isOnBottomOfThePage} />
      </Box>
      <MobileNavBar
        isDisplaying={displayControls.showMobileNavBar}
        handleCloseThis={handleCloseMobileNavBar}
      />
    </>
  );
}
