import { Typography, Box, Button } from '@mui/material';
import {
  checkProjectsText,
  helloText,
  introText,
  iLoveCodingText,
} from './texts';
import { ScreenWrapper } from '../../common';
import { motion } from 'framer-motion';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReactMarkdown from 'react-markdown';
import { FadeInTopWrapper } from '../../common';
import { useAppSelector } from '../../redux/hooks';
import { languageSelectors } from '../../redux/language';

export function LandingScreen() {
  const language = useAppSelector(languageSelectors.language);

  const handleGoToProjects = () => {
    window.location.href = `#projects`;
  };

  return (
    <ScreenWrapper id="home">
      <Box
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
        <FadeInTopWrapper delay={1.5}>
          <Typography
            variant="body1"
            color="primary.darker"
            fontWeight="bold"
            gutterBottom
          >
            {helloText(language)}
          </Typography>
        </FadeInTopWrapper>
        <FadeInTopWrapper delay={1.7}>
          <Typography
            variant="h1"
            color="text.primary"
            sx={(theme) => ({
              [theme.breakpoints.down('sm')]: { fontSize: '2rem' },
            })}
          >
            Ezequiel Cardona
          </Typography>
        </FadeInTopWrapper>

        <FadeInTopWrapper delay={1.9}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              variant="h1"
              color="text.secondary"
              sx={(theme) => ({
                [theme.breakpoints.down('sm')]: { fontSize: '2rem' },
              })}
            >
              {iLoveCodingText(language)}
            </Typography>
            <motion.div
              animate={{
                scale: [1, 1.1, 1, 1.1, 1],
                opacity: [0.7, 1, 0.7, 1, 0.7],
              }}
              transition={{
                repeat: Infinity,
                repeatDelay: 0.8,
              }}
            >
              <FavoriteIcon
                sx={(theme) => ({
                  color: theme.palette.text.primary,
                  ml: '0.5rem',
                  mt: '0.5rem',
                })}
                fontSize="large"
              />
            </motion.div>
          </div>
        </FadeInTopWrapper>
        <FadeInTopWrapper delay={2.1}>
          <div style={{ margin: '2rem 0' }}>
            <Box
              sx={(theme) => ({
                width: '80%',
                color: theme.palette.text.secondary,
                lineHeight: '1.57rem',
                [theme.breakpoints.down('lg')]: {
                  width: '100%',
                },
              })}
            >
              <ReactMarkdown>{introText(language)}</ReactMarkdown>
            </Box>
          </div>
        </FadeInTopWrapper>
        <FadeInTopWrapper delay={2.3}>
          <Box
            sx={(theme) => ({
              display: 'flex',
              [theme.breakpoints.down('sm')]: {
                justifyContent: 'center',
              },
            })}
          >
            <Button
              onClick={handleGoToProjects}
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
                [theme.breakpoints.down('sm')]: {
                  width: '100%',
                },
              })}
            >
              {checkProjectsText(language)}
            </Button>
          </Box>
        </FadeInTopWrapper>
      </Box>
    </ScreenWrapper>
  );
}
