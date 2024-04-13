import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"
import SideBar from "../components/SideBar/SideBar"
import './AuthLayout.css'



const MainLayout = () => {


  
  return (
    <div className='layout'>
      <Header />
      <div id='sidebar-mainCcontainer'>
        <SideBar />
        <Outlet />
      </div>
      
    </div>
  )
}

export default MainLayout
