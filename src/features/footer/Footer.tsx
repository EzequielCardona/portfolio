import { Box, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useAppSelector } from '../../redux/hooks';
import { languageSelectors } from '../../redux/language';
import { builtByText, designInspiredText } from './texts';
import { useRef } from 'react';
import { AnimatePresence, useInView } from 'framer-motion';
import { FadeInTopWrapper } from '../../common';

export function Footer() {
  const language = useAppSelector(languageSelectors.language);

  const footerRef = useRef<HTMLElement>(null);
  const footerInView = useInView(footerRef, { once: true });
  return (
    <Box
      component="footer"
      ref={footerRef}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
        paddingBottom: '2rem',
        minHeight: '5rem',
      }}
    >
      <AnimatePresence>
        {footerInView && (
          <FadeInTopWrapper delay={0.5}>
            <>
              <Box
                sx={{
                  display: 'flex',
                  gap: '0.25rem',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="caption" color="text.secondary">
                  {designInspiredText(language)}
                </Typography>
                <a
                  href="https://brittanychiang.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Typography variant="caption" color="text.secondary">
                    Brittany Chiang
                  </Typography>
                </a>
              </Box>
              <a
                href="https://github.com/EzequielCardona/portfolio"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Box
                  sx={(theme) => ({
                    display: 'flex',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    gap: '0.25rem',
                    color: theme.palette.text.secondary,
                    ':hover': {
                      transition: '0.5s',
                      color: theme.palette.primary.darker,
                    },
                  })}
                >
                  <Typography variant="caption">
                    {`${builtByText(language)} Ezequiel Cardona`}
                  </Typography>
                  <GitHubIcon fontSize="small" />
                </Box>
              </a>
            </>
          </FadeInTopWrapper>
        )}
      </AnimatePresence>
    </Box>
  );
}
