import { useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { IProject } from '../../../types';
import { FadeInTopWrapper } from '../../../common';
import { noUrlText, projectTypeText } from '../texts';
import { useAppSelector } from '../../../redux/hooks';
import { languageSelectors } from '../../../redux/language';
import { emptyUrlReasons } from '../../../constants';

interface IProps {
  info: IProject;
  index: number;
}

export function ProjectBlock({ info, index }: IProps) {
  const language = useAppSelector(languageSelectors.language);

  const blockRef = useRef<HTMLDivElement>(null);
  const blockInView = useInView(blockRef, { once: true });

  // checking if number of project index is odd to reverse its display
  const isDisplayingReverse = index % 2 == 1;

  //Checking if url if empty because it's intern restricted project or wip
  const emptyUrlReasonValues = Object.values(emptyUrlReasons);
  const hasNoUrl = emptyUrlReasonValues.includes(info.url as emptyUrlReasons);

  const [imageOnHover, setImageOnHover] = useState(false);

  const handleMouseEnterImage = () => {
    setImageOnHover(true);
  };

  const handleMosueLeaveImage = () => {
    setImageOnHover(false);
  };

  return (
    <Box
      ref={blockRef}
      sx={(theme) => ({
        minHeight: '25rem',
        [theme.breakpoints.down('sm')]: {
          minHeight: '40rem',
        },
      })}
    >
      <AnimatePresence>
        {blockInView && (
          <Box
            sx={(theme) => ({
              display: 'flex',
              flexDirection: isDisplayingReverse ? 'row-reverse' : 'row',
              [theme.breakpoints.down('sm')]: {
                flexDirection: 'column',
              },
            })}
          >
            {/* Project image */}
            <FadeInTopWrapper delay={1}>
              <a
                href={hasNoUrl ? undefined : info.url}
                target="_blank"
                rel="noreferrer"
              >
                <Box
                  sx={(theme) => ({
                    cursor: hasNoUrl ? 'auto' : 'pointer',
                    boxShadow: theme.palette.primary.generalBoxShadow,
                    borderRadius: '1rem',
                    overflow: 'clip',
                    position: 'relative',
                    width: '36rem',
                    height: '27.5rem',
                    [theme.breakpoints.down('xl')]: {
                      width: '31rem',
                      height: '22.5rem',
                    },
                    [theme.breakpoints.down('lg')]: {
                      width: '25rem',
                      height: '16.5rem',
                    },
                    [theme.breakpoints.down('md')]: {
                      width: '18rem',
                      height: '11.5rem',
                    },
                    [theme.breakpoints.down('sm')]: {
                      width: '100%',
                      height: 'auto',
                    },
                  })}
                >
                  <img
                    src={info.image}
                    alt={`${info.title} project screenshot`}
                    loading="lazy"
                    width="100%"
                    height="100%"
                  />
                  {/* Image overlay color */}
                  <motion.div
                    style={{
                      position: 'absolute',
                      top: 0,
                      width: '100%',
                      height: '100%',
                      zIndex: 1,
                    }}
                    onMouseEnter={handleMouseEnterImage}
                    onMouseOut={handleMosueLeaveImage}
                    whileHover={{ opacity: hasNoUrl ? 1 : 0 }}
                  >
                    <Box
                      sx={(theme) => ({
                        width: '100%',
                        height: '100%',
                        backgroundColor: theme.palette.primary.darker,
                        opacity: 0.3,
                      })}
                    />
                  </motion.div>
                  {/* open in new tab indicator */}
                  <AnimatePresence>
                    {imageOnHover && (
                      <motion.div
                        key="openInNewTabIndicator"
                        style={{
                          position: 'absolute',
                          top: 0,
                          width: '100%',
                          height: '100%',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ delay: 0.25 }}
                      >
                        <Box
                          sx={(theme) => ({
                            borderRadius: '50%',
                            width: '6rem',
                            height: '6rem',
                            backgroundColor: theme.palette.primary.darker,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            border: `2px solid ${theme.palette.background.default}`,
                            boxShadow: theme.palette.primary.generalBoxShadow,
                          })}
                        >
                          {hasNoUrl ? (
                            <Typography
                              variant="body1"
                              color="background.default"
                            >
                              {noUrlText(language, info.url as emptyUrlReasons)}
                            </Typography>
                          ) : (
                            <OpenInNewIcon
                              sx={(theme) => ({
                                color: theme.palette.background.default,
                              })}
                            />
                          )}
                        </Box>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Box>
              </a>
            </FadeInTopWrapper>
            {/* Project content/text */}
            <FadeInTopWrapper delay={1.3}>
              <Box
                sx={(theme) => ({
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: isDisplayingReverse ? 'start' : 'end',
                  minHeight: '27.5rem ',
                  zIndex: 1,
                  [theme.breakpoints.down('xl')]: {
                    minHeight: '22.5rem',
                  },
                  [theme.breakpoints.down('lg')]: {
                    minHeight: '16.5rem',
                  },
                  [theme.breakpoints.down('md')]: {
                    minHeight: '11.5rem',
                  },
                  [theme.breakpoints.down('sm')]: {
                    minHeight: '9.5rem',
                    alignItems: 'start',
                    mt: '1rem',
                  },
                })}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="caption" color="primary.darker" sx={{ marginRight: '0.5rem' }}>
                    {projectTypeText(language, info.type)}
                  </Typography>
                  {info.countryFlags.map((flag, index) => {
                    return (
                      <img key={index} src={flag} alt="country flag" width="30rem" />
                    );
                  })}
                </Box>
                <Typography variant="h4" color="text.primary" mb="1rem">
                  {info.title}
                </Typography>
                <Box
                  sx={(theme) => ({
                    width: '100%',
                    p: isDisplayingReverse
                      ? '1rem 0.5rem 1rem 2rem'
                      : '1rem 2rem 1rem 0.5rem',
                    backgroundColor: theme.palette.background.default,
                    display: 'flex',
                    boxShadow: theme.palette.primary.generalBoxShadow,
                    borderLeft: isDisplayingReverse
                      ? `2px solid ${theme.palette.primary.darker}`
                      : 'none',
                    borderRight: isDisplayingReverse
                      ? 'none'
                      : `2px solid ${theme.palette.primary.darker}`,
                    borderRadius: '1rem',
                    [theme.breakpoints.down('md')]: {
                      p: isDisplayingReverse
                        ? '0.5rem 0.25rem 0.5rem 1rem'
                        : '0.5rem 1rem 0.5rem 0.25rem',
                    },
                    [theme.breakpoints.down('sm')]: {
                      p: 0,
                      boxShadow: 'none',
                      border: 'none',
                    },
                  })}
                >
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={(theme) => ({
                      textAlign: isDisplayingReverse ? 'start' : 'end',
                      [theme.breakpoints.down('sm')]: {
                        textAlign: 'start',
                      },
                    })}
                  >
                    {info.productDescription[language]}
                  </Typography>
                </Box>
                {/* skills block */}
                <Box
                  sx={(theme) => ({
                    display: 'flex',
                    gap: '1rem',
                    p: isDisplayingReverse
                      ? '2rem 2rem 1rem 0'
                      : '2rem 0 1rem 2rem ',
                    justifyContent: isDisplayingReverse ? 'start' : 'end',
                    flexWrap: 'wrap',
                    width: '100%',
                    [theme.breakpoints.down('md')]: {
                      p: isDisplayingReverse
                        ? '1rem 1rem 0.5rem 0'
                        : '1rem 0 0.5rem 1rem ',
                    },
                    [theme.breakpoints.down('sm')]: {
                      p: '1rem 0',
                      justifyContent: 'start',
                      width: 'auto',
                    },
                  })}
                >
                  {info.mainSkills.map((skill) => {
                    return (
                      <Typography
                        key={skill}
                        variant="caption"
                        color="text.secondary"
                        whiteSpace="nowrap"
                        fontWeight="bold"
                      >
                        {skill}
                      </Typography>
                    );
                  })}
                </Box>
                {/* Button to check project link */}
                {!hasNoUrl && (
                  <a
                    href={hasNoUrl ? undefined : info.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <OpenInNewIcon
                      sx={(theme) => ({
                        cursor: 'pointer',
                        color: theme.palette.text.secondary,
                        ':hover': {
                          color: theme.palette.text.primary,
                        },
                      })}
                    />
                  </a>
                )}
              </Box>
            </FadeInTopWrapper>
          </Box>
        )}
      </AnimatePresence>
    </Box>
  );
}
