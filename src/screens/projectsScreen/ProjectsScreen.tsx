import { Box, Typography } from '@mui/material';
import { FadeInTopWrapper, ScreenWrapper } from '../../common';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { titleText } from './texts';
import { useAppSelector } from '../../redux/hooks';
import { languageSelectors } from '../../redux/language';
import { projects } from '../../constants';
import { ProjectBlock } from './components';

export function ProjectsScreen() {
  const language = useAppSelector(languageSelectors.language);

  const screenRef = useRef<HTMLDivElement>(null);
  const screenInView = useInView(screenRef, { once: true });

  return (
    <ScreenWrapper overflowsEverywhere id="projects">
      <Box
        id="projects"
        ref={screenRef}
        sx={(theme) => ({
          width: '75%',
          [theme.breakpoints.down('md')]: {
            width: '80%',
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
          </>
        )}
        <Box
          sx={(theme) => ({
            display: 'flex',
            flexDirection: 'column',
            gap: '8rem',
            [theme.breakpoints.down('md')]: { gap: 0 },
            [theme.breakpoints.down('sm')]: { gap: '4rem' },
          })}
        >
          {projects.map((project, index) => {
            return (
              <ProjectBlock key={project.id} info={project} index={index} />
            );
          })}
        </Box>
      </Box>
    </ScreenWrapper>
  );
}
