import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { INavOption } from '../../../constants';
import { useAppSelector } from '../../../redux/hooks';
import { languageSelectors } from '../../../redux/language';

interface IProps {
  index: number;
  option: INavOption;
  isMobile?: boolean;
  handleCloseMobileNav?: () => void;
}

export function NavItem({
  index,
  option,
  isMobile,
  handleCloseMobileNav,
}: IProps) {
  const language = useAppSelector(languageSelectors.language);

  const handleNavClick = (key: string) => {
    if (isMobile && handleCloseMobileNav) {
      handleCloseMobileNav();
    }

    window.location.href = `#${key}`;
  };

  return (
    <motion.div
      initial={isMobile ? undefined : { rotateX: '-90deg' }}
      animate={isMobile ? undefined : { rotateX: '0deg' }}
      exit={{ rotateX: '-90deg' }}
      transition={{
        duration: 0.5,
        delay: 0.8 + 0.15 * index,
      }}
    >
      <Box
        onClick={() => handleNavClick(option.key)}
        sx={(theme) => ({
          display: 'flex',
          cursor: 'pointer',
          alignItems: 'center',
          backgroundColor: isMobile
            ? undefined
            : theme.palette.background.default,
          padding: '0.35rem 1rem',
          borderRadius: '1rem',
          border: `2px solid ${theme.palette.primary.darker}`,
          color: 'text.secondary',
          ':hover': {
            transition: '0.5s',
            border: isMobile
              ? `2px solid ${theme.palette.primary.darker}`
              : `2px solid ${theme.palette.text.secondary}`,
            color: 'text.primary',
          },
        })}
      >
        <Typography variant={!isMobile ? 'caption' : 'body1'}>
          #{option.text[language]}
        </Typography>
      </Box>
    </motion.div>
  );
}
