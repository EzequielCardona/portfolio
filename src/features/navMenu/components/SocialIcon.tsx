import { motion } from 'framer-motion';
import { SvgIconTypeMap, useTheme, Box } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

interface IProps {
  Icon: OverridableComponent<SvgIconTypeMap<object, 'svg'>>;
  url: string;
  index: number;
}

export function SocialIcon({ Icon, url, index }: IProps) {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ rotateY: '-90deg' }}
      animate={{ rotateY: '0deg' }}
      exit={{ rotateY: '-90deg' }}
      transition={{ duration: 1, delay: 1.8 + 0.3 * index }}
    >
      <a href={url} target="_blank" rel="noreferrer">
        <Box
          sx={{
            backgroundColor: theme.palette.background.default,
            border: `2px solid ${theme.palette.primary.darker}`,
            borderRadius: '50%',
            display: 'flex',
            cursor: 'pointer',
            padding: '.2rem',
            ':hover': {
              transition: '0.5s',
              border: `2px solid ${theme.palette.text.secondary}`,
            },
          }}
        >
          <Icon
            sx={{
              color: theme.palette.text.secondary,
              ':hover': { color: theme.palette.text.primary },
            }}
          />
        </Box>
      </a>
    </motion.div>
  );
}
