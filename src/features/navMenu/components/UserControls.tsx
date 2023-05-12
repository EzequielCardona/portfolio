import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { LanguageToggle, ThemeToggle } from '.';

export function UserControls() {
  return (
    <Box
      sx={(theme) => ({
        position: 'absolute',
        width: '3.2rem',
        top: '15rem',
        marginLeft: '3.3rem',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '.5rem',
        padding: '1rem 0',
        [theme.breakpoints.down('lg')]: {
          marginLeft: '1.2rem',
        },
        [theme.breakpoints.down('md')]: {
          display: 'none',
        },
      })}
    >
      <motion.div
        initial={{ rotateY: '-90deg' }}
        animate={{ rotateY: '0deg' }}
        exit={{ rotateY: '-90deg' }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <ThemeToggle />
      </motion.div>
      <motion.div
        initial={{ rotateY: '-90deg' }}
        animate={{ rotateY: '0deg' }}
        exit={{ rotateY: '-90deg' }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        <LanguageToggle />
      </motion.div>
    </Box>
  );
}
