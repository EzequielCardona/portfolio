import { Box } from '@mui/material';
import { SocialIcon } from '.';
import { socialConnections } from '../../../constants';

export function SocialIcons() {
  return (
    <Box
      sx={(theme) => ({
        position: 'absolute',
        width: '3.2rem',
        top: '30rem',
        marginLeft: '3.3rem',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '.5rem',
        padding: '1rem 0',
        [theme.breakpoints.down('lg')]: {
          marginLeft: '1.65rem',
        },
        [theme.breakpoints.down('md')]: {
          display: 'none',
        },
      })}
    >
      {socialConnections.map((item, index) => (
        <SocialIcon key={index} Icon={item.Icon} url={item.url} index={index} />
      ))}
    </Box>
  );
}
