import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'
import './layouts.css'

const AuthLayout = () => {
  return (
    <div className='layout'>
        <Header />
        <Outlet />
    </div>
  )
}

export default AuthLayout
