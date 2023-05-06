import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import { resumeText } from '../texts';
import { useAppSelector } from '../../../redux/hooks';
import { languageSelectors } from '../../../redux/language';
import { languageTypes } from '../../../types';

interface IProps {
  navigationLength: number;
  isMobile?: boolean;
}

export function HighlightedNavOption({ navigationLength, isMobile }: IProps) {
  const language = useAppSelector(languageSelectors.language);

  return (
    <motion.div
      initial={isMobile ? undefined : { rotateX: '-90deg' }}
      animate={isMobile ? undefined : { rotateX: '0deg' }}
      exit={{ rotateX: '-90deg' }}
      transition={{
        duration: 0.5,
        delay: 0.8 + 0.15 * navigationLength,
      }}
    >
      <a
        href={
          language == languageTypes.spanish
            ? '/ezequiel-cardona-resume-esp.pdf'
            : '/ezequiel-cardona-resume-eng.pdf'
        }
        target="_blank"
      >
        <Button
          variant="outlined"
          sx={(theme) => ({
            fontSize: !isMobile ? '0.82rem' : '1rem',
            fontWeight: 'bold',
            backgroundColor: !isMobile
              ? theme.palette.primary.darker
              : theme.palette.text.primary,
            color: theme.palette.background.default,
            fontStyle: 'normal',
            borderColor: theme.palette.primary.darker,
            borderWidth: '2px',
            borderRadius: '1rem',
            ':hover': {
              borderColor: theme.palette.text.primary,
              borderWidth: '2px',
              backgroundColor: !isMobile
                ? theme.palette.text.primary
                : theme.palette.text.primary,
            },
            marginLeft: isMobile ? '1rem' : undefined,
          })}
        >
          {resumeText(language)}
        </Button>
      </a>
    </motion.div>
  );
}
