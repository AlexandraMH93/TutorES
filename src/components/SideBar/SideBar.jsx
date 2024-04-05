import { AppBar, Box, Button } from '@mui/material'
import './SideBar.css'
import LogoutIcon from '@mui/icons-material/Logout'
import { Navigate, useNavigate } from 'react-router-dom'

const SideBar = () => {

  const navigate = useNavigate()

  const onLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('role')
        navigate('/')
    }
  return (
    <div id='sidebar'>
        <Button id='logout' onClick={() => {onLogout()}}>
            <LogoutIcon>Log out</LogoutIcon> 
        </Button>
    </div>
  )
}

export default SideBar
