import { useTheme, useMediaQuery } from '@mui/material';

// TODO: check if this is usefull and if so, put it in practice
export function useViewPortHelpers() {
  const theme = useTheme();

  const isHeigherThanXl = useMediaQuery(theme.breakpoints.up('xl'));
  const isSmallerThanLg = useMediaQuery(theme.breakpoints.down('lg'));
  const isSmallerThanMd = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallerThanSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isSmallerThanXs = useMediaQuery(theme.breakpoints.down('xs'));

  return {
    isHeigherThanXl,
    isSmallerThanLg,
    isSmallerThanMd,
    isSmallerThanSm,
    isSmallerThanXs,
  };
}
