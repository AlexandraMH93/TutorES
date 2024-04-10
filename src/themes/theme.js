import { createTheme } from "@mui/material/styles"

export const themeOptions =  createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#3d95a4',
    },
    secondary: {
      main: '#5d6464',
    },
    background: {
      default: '#ffffff',
      /* paper: 'rgba(243, 250, 249, 0.279)', */
    },
    success: {
      main: '#90f395',
    },
  },
})