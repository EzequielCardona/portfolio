import { Box, Button, Typography } from '@mui/material';
import { FadeInTopWrapper, ScreenWrapper } from '../../common';
import { useAppSelector } from '../../redux/hooks';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { languageSelectors } from '../../redux/language';
import { paragraphText, sendEmailText, titleText } from './texts';

export function ContactScreen() {
  const language = useAppSelector(languageSelectors.language);

  const screenRef = useRef<HTMLDivElement>(null);
  const screenInView = useInView(screenRef, { once: true });

  return (
    <ScreenWrapper id="contact">
      <Box
        ref={screenRef}
        sx={(theme) => ({
          width: '50%',
          [theme.breakpoints.down('lg')]: {
            width: '60%',
          },
          [theme.breakpoints.down('sm')]: {
            width: '90%',
          },
        })}
      >
        {screenInView && (
          <>
            <FadeInTopWrapper delay={0.5}>
              <div
                style={{
                  display: 'flex',
                  gap: '0.5rem',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '2rem',
                }}
              >
                <motion.div
                  initial={{ scale: 2 }}
                  animate={{ scale: 0.8 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  <Box
                    sx={(theme) => ({
                      width: '0.5rem',
                      height: '0.5rem',
                      backgroundColor: theme.palette.primary.darker,
                      borderRadius: '50%',
                    })}
                  />
                </motion.div>
                <Typography
                  variant="h2"
                  color="text.primary"
                  fontWeight="bold"
                  gutterBottom
                  mt="0.3rem"
                >
                  {titleText(language)}
                </Typography>
                <motion.div
                  initial={{ scale: 2 }}
                  animate={{ scale: 0.8 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  <Box
                    sx={(theme) => ({
                      width: '0.5rem',
                      height: '0.5rem',
                      backgroundColor: theme.palette.primary.darker,
                      borderRadius: '50%',
                    })}
                  />
                </motion.div>
              </div>
            </FadeInTopWrapper>
            <FadeInTopWrapper delay={0.8}>
              <Typography
                variant="body1"
                color="text.secondary"
                textAlign="center"
                mb="2.5rem"
              >
                {paragraphText(language)}
              </Typography>
            </FadeInTopWrapper>
            <FadeInTopWrapper delay={1.1}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <a href="mailto:ezequiel98.08.27@gmail.com" target="_blank">
                  <Button
                    variant="outlined"
                    sx={(theme) => ({
                      backgroundColor: theme.palette.background.default,
                      border: `2px solid ${theme.palette.primary.darker}`,
                      borderRadius: '1rem',
                      fontWeight: 'bold',
                      padding: '1rem 2rem',
                      color: theme.palette.primary.darker,
                      ':hover': {
                        transition: '0.5s',
                        backgroundColor: theme.palette.background.default,
                        color: theme.palette.text.secondary,
                        border: `2px solid ${theme.palette.text.secondary}`,
                      },
                    })}
                  >
                    {sendEmailText(language)}
                  </Button>
                </a>
              </Box>
            </FadeInTopWrapper>
          </>
        )}
      </Box>
    </ScreenWrapper>
  );
}
