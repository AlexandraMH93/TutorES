import CssBaseline from '@mui/material/CssBaseline'
import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './router/router'
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { themeOptions } from './themes/theme'

function App() {

  return (
    <>
    <ThemeProvider theme={themeOptions}>
    <CssBaseline/>
      <RouterProvider router={router}/>
    </ThemeProvider>
    </>
  )
}

export default App
