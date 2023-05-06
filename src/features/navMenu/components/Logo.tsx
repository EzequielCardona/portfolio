import { Box, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';

interface IProps {
  isDisplayingNavBar: boolean;
}

export function Logo({ isDisplayingNavBar }: IProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* logo letters */}
      <motion.div
        initial={{ x: '-10rem' }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          variant="body1"
          color="primary.darker"
          sx={{ fontSize: '5rem', fontWeight: 'bold', lineHeight: '5rem' }}
        >
          E
        </Typography>
      </motion.div>
      <motion.div
        style={{ zIndex: -1, x: '-2.6rem' }}
        initial={{ y: '-10rem' }}
        animate={{ y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ fontSize: '5rem', fontWeight: 'bold', lineHeight: '5rem' }}
        >
          C
        </Typography>
      </motion.div>
      {/* logo lines that connect to nav bar and controllers */}
      <AnimatePresence>
        {isDisplayingNavBar && (
          <Box
            sx={(theme) => ({
              overflow: 'hidden',
              position: 'absolute',
              width: '100%',
              left: '5%',
              [theme.breakpoints.down('md')]: {
                display: 'none',
              },
            })}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              exit={{ width: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: '40%' }}
                transition={{ delay: 0.5, ease: 'linear', duration: 1 }}
              >
                <Box
                  sx={(theme) => ({
                    width: '100%',
                    height: '2px',
                    backgroundColor: theme.palette.primary.darker,
                    borderRadius: '4px',
                  })}
                />
              </motion.div>
            </motion.div>
          </Box>
        )}
      </AnimatePresence>
      <Box
        sx={(theme) => ({
          overflow: 'hidden',
          position: 'absolute',
          top: '100%',
          transform: 'translateX(-1.3rem)',
          [theme.breakpoints.down('lg')]: {
            transform: 'translateX(-1.4rem)',
          },
          [theme.breakpoints.down('md')]: {
            display: 'none',
          },
        })}
      >
        <motion.div
          initial={{ height: '0%' }}
          animate={{ height: '100vh' }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.div
            style={{ height: '100%' }}
            initial={{ y: 0 }}
            animate={{ y: '15%' }}
            transition={{ delay: 1.5, ease: 'linear', duration: 1.5 }}
          >
            <Box
              sx={(theme) => ({
                width: '2px',
                height: '100%',
                backgroundColor: theme.palette.primary.darker,
                borderRadius: '4px',
              })}
            />
          </motion.div>
        </motion.div>
      </Box>
    </Box>
  );
}
