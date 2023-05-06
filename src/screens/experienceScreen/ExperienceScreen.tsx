import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Box, Typography, List, ListItem } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { FadeInTopWrapper, ScreenWrapper } from '../../common';
import { titleText } from './texts';
import { emptyUrlReasons, experiences } from '../../constants';
import { useAppSelector } from '../../redux/hooks';
import { languageSelectors } from '../../redux/language';

export function ExperienceScreen() {
  const language = useAppSelector(languageSelectors.language);

  const screenRef = useRef<HTMLDivElement>(null);
  const screenInView = useInView(screenRef, { once: true });

  const [indexSelected, setIndexSelected] = useState(0);
  const [indexIsChanging, setIndexIsChanging] = useState(false);

  const { company, companyUrl, role, dates, description } =
    experiences[indexSelected];

  const emptyUrlValues = Object.values(emptyUrlReasons);
  const hasNoUrl = emptyUrlValues.includes(companyUrl as emptyUrlReasons);

  useEffect(() => {
    if (indexIsChanging) {
      setTimeout(() => {
        changeIsProcessed();
      }, 1000);
    }
  }, [indexIsChanging]);

  const handleChange = (index: number) => {
    if (indexSelected !== index) {
      notifyChangeUp();
      setTimeout(() => {
        setIndexSelected(index);
      }, 300);
    }
  };

  const notifyChangeUp = () => {
    setIndexIsChanging(true);
  };

  const changeIsProcessed = () => {
    setIndexIsChanging(false);
  };

  return (
    <ScreenWrapper id="experience" overflowsOnMobile>
      <Box
        ref={screenRef}
        sx={(theme) => ({
          width: '50%',
          [theme.breakpoints.down('lg')]: {
            width: '60%',
          },
          [theme.breakpoints.down('md')]: {
            width: '80%',
            minHeight: '40rem',
          },
          [theme.breakpoints.down('sm')]: {
            width: '90%',
          },
        })}
      >
        {screenInView && (
          <>
            {/* Screen title */}
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
            {/* content starts */}
            <Box
              sx={(theme) => ({
                display: 'flex',
                gap: '2rem',
                [theme.breakpoints.down('md')]: { flexDirection: 'column' },
              })}
            >
              {/* Screen navigation controls */}
              <FadeInTopWrapper delay={0.5}>
                <Box sx={{ display: 'flex' }}>
                  <Box
                    sx={(theme) => ({
                      width: '2px',
                      height: `${experiences.length * 2.6}rem`,
                      backgroundColor: theme.palette.primary.darker,
                      borderRadius: '1rem',
                    })}
                  />
                  <motion.div animate={{ y: `${indexSelected * 2.6}rem` }}>
                    <Box
                      sx={(theme) => ({
                        width: '4px',
                        height: '2.6rem',
                        backgroundColor: theme.palette.text.primary,
                        borderRadius: '1rem',
                      })}
                    />
                  </motion.div>
                  <Box
                    sx={(theme) => ({
                      [theme.breakpoints.down('md')]: {
                        width: '100%',
                      },
                    })}
                  >
                    {experiences.map((experience, index) => {
                      const isSelected = index == indexSelected;

                      return (
                        <Box
                          onClick={() => handleChange(index)}
                          key={index}
                          sx={(theme) => ({
                            color: isSelected
                              ? 'text.primary'
                              : 'primary.darker',
                            padding: '0.6rem 1rem',
                            cursor: isSelected ? 'auto' : 'pointer',
                            ':hover': {
                              backgroundColor: theme.palette.background.paper,
                              color: isSelected
                                ? 'auto'
                                : theme.palette.text.primary,
                            },
                            [theme.breakpoints.down('md')]: {
                              backgroundColor: theme.palette.background.paper,
                            },
                          })}
                        >
                          <Typography variant="caption">
                            {experience.company}
                          </Typography>
                        </Box>
                      );
                    })}
                  </Box>
                  <Box
                    sx={(theme) => ({
                      display: 'flex',
                      [theme.breakpoints.up('md')]: { display: 'none' },
                    })}
                  >
                    <motion.div animate={{ y: `${indexSelected * 2.6}rem` }}>
                      <Box
                        sx={(theme) => ({
                          width: '4px',
                          height: '2.6rem',
                          backgroundColor: theme.palette.text.primary,
                          borderRadius: '1rem',
                        })}
                      />
                    </motion.div>
                    <Box
                      sx={(theme) => ({
                        width: '2px',
                        height: `${experiences.length * 2.6}rem`,
                        backgroundColor: theme.palette.primary.darker,
                        borderRadius: '1rem',
                      })}
                    />
                  </Box>
                </Box>
              </FadeInTopWrapper>
              {/* Experience content */}

              <FadeInTopWrapper delay={0.8}>
                <motion.div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '24rem',
                  }}
                  animate={{
                    opacity: indexIsChanging ? [1, 0, 1] : 1,
                    y: indexIsChanging ? ['0rem', '2rem', '0rem'] : '0rem',
                  }}
                >
                  {/* Role and company texts */}
                  <Box
                    sx={(theme) => ({
                      display: 'flex',
                      gap: '0.5rem',
                      [theme.breakpoints.down('md')]: {
                        flexDirection: 'column',
                        gap: 0,
                        mb: '0.5rem',
                      },
                    })}
                  >
                    <Typography
                      variant="h4"
                      color="text.primary"
                      whiteSpace="nowrap"
                      gutterBottom
                    >
                      {role}
                    </Typography>
                    <a
                      href={hasNoUrl ? undefined : companyUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Typography
                        variant="h4"
                        color="primary.darker"
                        sx={{
                          cursor: hasNoUrl ? 'auto' : 'pointer',
                          ':hover': {
                            textDecoration: hasNoUrl ? 'none' : 'underline',
                            transition: '0.5s',
                          },
                        }}
                      >
                        @{company}
                      </Typography>
                    </a>
                  </Box>
                  {/* dates and description */}
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={(theme) => ({
                      mb: '1rem',
                      [theme.breakpoints.down('md')]: {
                        mb: 0,
                      },
                    })}
                  >
                    {dates}
                  </Typography>
                  <List>
                    {description[language].map((item) => {
                      return (
                        <div
                          key={item}
                          style={{ display: 'flex', marginBottom: '0.5rem' }}
                        >
                          <ArrowRightIcon
                            sx={(theme) => ({
                              color: theme.palette.primary.darker,
                              mr: '0.5rem',
                              [theme.breakpoints.down('md')]: {
                                fontSize: 'small',
                                mt: '0.3rem',
                                mr: 0,
                              },
                            })}
                          />
                          <ListItem
                            sx={(theme) => ({
                              color: theme.palette.text.secondary,
                            })}
                          >
                            {item}
                          </ListItem>
                        </div>
                      );
                    })}
                  </List>
                </motion.div>
              </FadeInTopWrapper>
            </Box>
          </>
        )}
      </Box>
    </ScreenWrapper>
  );
}
