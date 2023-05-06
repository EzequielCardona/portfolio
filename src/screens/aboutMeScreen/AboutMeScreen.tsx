import { useRef } from 'react';
import { Typography, Box, List, ListItem } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { FadeInTopWrapper, ScreenWrapper } from '../../common';
import {
  titleText,
  paragraph1Text,
  paragraph2Text,
  paragraph3Text,
} from './texts';
import ezequielPhoto from '../../assets/ezequiel-photo.png';
import { mainSkills } from '../../constants';
import { useAppSelector } from '../../redux/hooks';
import { languageSelectors } from '../../redux/language';

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
          [theme.breakpoints.down('md')]: {
            width: '70%',
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
                gap: '2rem',
                [theme.breakpoints.down('md')]: {
                  flexDirection: 'column-reverse',
                },
              })}
            >
              <div>
                {/* Paragraphs */}
                <FadeInTopWrapper delay={0.8}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem',
                    }}
                  >
                    <Typography variant="body1" color="text.secondary">
                      {paragraph1Text(language)}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {paragraph2Text(language)}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {paragraph3Text(language)}
                    </Typography>
                  </Box>
                </FadeInTopWrapper>
                {/* Lists of skills */}
                <FadeInTopWrapper delay={1.3}>
                  <Box
                    sx={(theme) => ({
                      display: 'flex',
                      marginTop: '2rem',
                      gap: '2rem',
                      [theme.breakpoints.down('sm')]: { gap: '1rem' },
                    })}
                  >
                    <List>
                      {mainSkills.firstBlockSkills.map((skill) => {
                        return (
                          <div
                            key={skill}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              marginBottom: '0.25rem',
                            }}
                          >
                            <ArrowRightIcon
                              fontSize="small"
                              sx={(theme) => ({
                                color: theme.palette.primary.darker,
                              })}
                            />
                            <ListItem
                              sx={(theme) => ({
                                color: theme.palette.text.secondary,
                              })}
                            >
                              {skill}
                            </ListItem>
                          </div>
                        );
                      })}
                    </List>
                    <List>
                      {mainSkills.secondBlockSkills.map((skill) => {
                        return (
                          <div
                            key={skill}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              marginBottom: '0.25rem',
                            }}
                          >
                            <ArrowRightIcon
                              fontSize="small"
                              sx={(theme) => ({
                                color: theme.palette.primary.darker,
                              })}
                            />
                            <ListItem
                              sx={(theme) => ({
                                color: theme.palette.text.secondary,
                              })}
                            >
                              {skill}
                            </ListItem>
                          </div>
                        );
                      })}
                    </List>
                  </Box>
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
                      width: '20rem',
                      height: '22rem',
                      overflow: 'clip',
                      borderRadius: '50%',
                      boxShadow: theme.palette.primary.generalBoxShadow,
                      [theme.breakpoints.down('lg')]: {
                        width: '17rem',
                        height: '19rem',
                      },
                      [theme.breakpoints.down('md')]: {
                        width: '13rem',
                        height: '15rem',
                      },
                    })}
                  >
                    <img
                      src={ezequielPhoto}
                      width="100%"
                      height="100%"
                      loading="lazy"
                    />
                  </Box>
                </Box>
              </FadeInTopWrapper>
            </Box>
          </>
        )}
      </Box>
    </ScreenWrapper>
  );
}
