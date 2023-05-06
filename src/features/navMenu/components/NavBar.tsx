import { Box } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { navigationOptions } from '../../../constants';
import { NavItem } from './NavItem';
import { HighlightedNavOption } from '.';

interface IProps {
  isDisplaying: boolean;
}

export function NavBar({ isDisplaying }: IProps) {
  return (
    <Box
      sx={(theme) => ({ [theme.breakpoints.down('md')]: { display: 'none' } })}
    >
      <AnimatePresence>
        {isDisplaying && (
          <motion.div
            style={{
              display: 'flex',
              gap: '1rem',
            }}
          >
            {navigationOptions.map((option, index) => {
              return <NavItem key={index} option={option} index={index} />;
            })}
            <HighlightedNavOption navigationLength={navigationOptions.length} />
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}
