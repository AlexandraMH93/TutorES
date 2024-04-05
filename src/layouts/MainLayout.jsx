import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"
import SideBar from "../components/SideBar/SideBar"
import Class from "../pages/Classes/Class"


const MainLayout = () => {
  return (
    <div>
      <Header />
      <SideBar />
      <Class />
      <Outlet />
    </div>
  )
}

export default MainLayout
