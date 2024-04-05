import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"
import SideBar from "../components/SideBar/SideBar"


const MainLayout = () => {
  return (
    <div className='layout'>
      <Header />
      <div id='main'>
        <SideBar />
        <Outlet />
      </div>
      
    </div>
  )
}

export default MainLayout
