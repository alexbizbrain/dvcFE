'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: 'var(--font-poppins)',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& input': {
              fontFamily: 'var(--font-poppins)',
              fontSize: '14px',
            },
            '& input::placeholder': {
              color: 'rgba(0, 0, 0, 1)',
              opacity: 1,
              fontWeight: 400,
            },
          },
        },
      },
    },
  },
});

export default theme;
