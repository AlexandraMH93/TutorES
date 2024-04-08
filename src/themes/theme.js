import  {createTheme}  from "@mui/material/styles"

export const themeOptions =  createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#79C5F5',
    },
    secondary: {
      main: '#5d6464',
    },
    background: {
      default: '#ffffff',
      paper: 'rgba(243, 250, 249, 0.279)',
    },
    success: {
      main: '#90f395',
    },
    warning: {
      main: '#FF8383',
    },
  },
})