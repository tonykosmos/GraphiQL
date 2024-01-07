import { createTheme } from '@mui/material';

export const customTheme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label.Mui-focused': {
            color: 'var(--label-font-focused-color)',
          },
          '& label': { color: 'var(--label-font-color)' },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          '&:before, &:after': {
            borderBottom: '2px solid var(--TextField-border-color)',
          },
          '&:hover:not(.Mui-disabled, .Mui-error):before': {
            borderBottom: '2px solid var(--TextField-border-hover-color)',
          },
          '&.Mui-focused:after': {
            borderBottom: '2px solid var(--TextField-border-focused-color)',
          },
          color: 'var(--main-font-color)',
        },
        input: {
          '&.Mui-disabled': {
            WebkitTextFillColor: 'var(--main-font-color)',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            color: 'var(--label-font-color)',
          },
        },
      },
    },
  },
});
