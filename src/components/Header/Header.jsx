import { AppBar } from "@mui/material"
import logo from '../../assets/images/logo3.png'
import bookLogo from '../../assets/images/grisaceobook.png'
import './Header.css'

const Header = () => {
  return (
   < >
      <AppBar id='header'position="static">
          {/* <img id='book' src={bookLogo} alt="tutorES" /> */}
          <img id='logo' src={logo}alt="tutorES" />
      </AppBar>
   </>
  )
}

export default Header
