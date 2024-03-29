import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { useRef } from 'react';
import { Typography, Box } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { FadeInTopWrapper, ScreenWrapper } from '../../common';
import {
  titleText,
  paragraph1Text,
  paragraph2Text,
  paragraph3Text,
  paragraph4Text,
} from './texts';
import ezequielPhoto from '../../assets/Ezequiel-ai-gen-2.jpg';
import { useAppSelector } from '../../redux/hooks';
import { languageSelectors } from '../../redux/language';
// import ArrowRightIcon from '@mui/icons-material/ArrowRight';
// import { mainSkills } from '../../constants';

export function AboutMeScreen() {
  const language = useAppSelector(languageSelectors.language);

  const screenRef = useRef<HTMLDivElement>(null);
  const screenInView = useInView(screenRef, { once: true });

  return (
    <ScreenWrapper id="about" overflowsOnMobile>
      <Box
        ref={screenRef}
        sx={(theme) => ({
          width: '60%',
          [theme.breakpoints.down('lg')]: {
            width: '80%',
          },
          [theme.breakpoints.down('md')]: {
            minHeight: '50rem',
          },
          [theme.breakpoints.down('sm')]: {
            width: '90%',
            minHeight: '75rem',
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
                  animate={{ width: '30vw' }}
                  transition={{ duration: 2, delay: 0.8 }}
                >
                  <Box
                    sx={(theme) => ({
                      height: '2px',
                      backgroundColor: theme.palette.primary.darker,
                    })}
                  />
                </motion.div>
              </div>
            </FadeInTopWrapper>
            <Box
              sx={(theme) => ({
                display: 'flex',
                gap: '3rem',
                [theme.breakpoints.down('md')]: {
                  flexDirection: 'column-reverse',
                },
              })}
            >
              <div>
                {/* Paragraphs */}
                <FadeInTopWrapper delay={0.8}>
                  <>
                    {/* Full paragraphs for desktop view */}
                    <Box
                      sx={(theme) => ({
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        color: theme.palette.text.secondary,
                        lineHeight: '1.5rem',
                        [theme.breakpoints.between('md', 'xl')]: {
                          display: 'none',
                        },
                      })}
                    >
                      <ReactMarkdown>{paragraph1Text(language)}</ReactMarkdown>
                      <ReactMarkdown>{paragraph2Text(language)}</ReactMarkdown>
                      <ReactMarkdown>{paragraph3Text(language)}</ReactMarkdown>
                      <ReactMarkdown>{paragraph4Text(language)}</ReactMarkdown>
                    </Box>
                    {/* Only three first paragraphs for small desktops and ipads */}
                    <Box
                      sx={(theme) => ({
                        display: 'none',
                        flexDirection: 'column',
                        gap: '1rem',
                        color: theme.palette.text.secondary,
                        lineHeight: '1.5rem',
                        [theme.breakpoints.between('md', 'xl')]: {
                          display: 'flex',
                        },
                      })}
                    >
                      <ReactMarkdown>{paragraph1Text(language)}</ReactMarkdown>
                      <ReactMarkdown>{paragraph2Text(language)}</ReactMarkdown>
                      <ReactMarkdown>{paragraph3Text(language)}</ReactMarkdown>
                    </Box>
                  </>
                </FadeInTopWrapper>
              </div>
              <FadeInTopWrapper delay={0.8}>
                <Box
                  sx={(theme) => ({
                    [theme.breakpoints.down('sm')]: {
                      display: 'flex',
                      justifyContent: 'center',
                    },
                  })}
                >
                  <Box
                    sx={(theme) => ({
                      boxShadow: theme.palette.primary.generalBoxShadow,
                      borderTop: `2px solid ${theme.palette.primary.darker}`,
                      borderBottom: `2px solid ${theme.palette.primary.darker}`,
                      paddingTop: '4px',
                    })}
                  >
                    <img
                      src={ezequielPhoto}
                      width="100%"
                      loading="lazy"
                    />
                  </Box>
                </Box>
              </FadeInTopWrapper>
            </Box>
            <Box
              sx={(theme) => ({
                [theme.breakpoints.up('md')]: { display: 'flex' },
                [theme.breakpoints.up('xl')]: { display: 'none' },
              })}
            >
              <FadeInTopWrapper delay={0.5}>
                <>
                  {/* Only last paragraph for small desktops and ipads */}
                  <Box
                    sx={(theme) => ({
                      display: 'none',
                      flexDirection: 'column',
                      gap: '1rem',
                      color: theme.palette.text.secondary,
                      lineHeight: '1.5rem',
                      pt: '1rem',
                      [theme.breakpoints.between('md', 'xl')]: {
                        display: 'flex',
                        flexDirection: 'column',
                      },
                    })}
                  >
                    <ReactMarkdown>{paragraph4Text(language)}</ReactMarkdown>
                  </Box>
                </>
              </FadeInTopWrapper>
            </Box>
          </>
        )}
      </Box>
    </ScreenWrapper>
  );
}
