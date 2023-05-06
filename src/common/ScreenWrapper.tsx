import { Box } from '@mui/material';

interface IProps {
  children: React.ReactElement | React.ReactElement[];
  overflowsEverywhere?: boolean;
  overflowsOnMobile?: boolean;
  id: string;
}

export function ScreenWrapper({
  children,
  overflowsEverywhere,
  overflowsOnMobile,
  id,
}: IProps) {
  return (
    <Box
      id={id}
      sx={(theme) => ({
        width: '100%',
        height: overflowsEverywhere ? 'auto' : '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        paddingY: overflowsEverywhere ? '6rem' : 'auto',
        [theme.breakpoints.down('md')]: {
          height: overflowsOnMobile || overflowsEverywhere ? 'auto' : '100svh',
          paddingY: overflowsOnMobile || overflowsEverywhere ? '6rem' : 0,
        },
      })}
    >
      {children}
    </Box>
  );
}
