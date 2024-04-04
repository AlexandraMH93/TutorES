import { AppBar } from "@mui/material"
import logo from '../../assets/images/logotutorES.webp'
import './Header.css'

const Header = () => {
  return (
   < >
      <AppBar id='header'position="static">
          <img src={logo}alt="tutorES" />
      </AppBar>
   </>
  )
}

export default Header
