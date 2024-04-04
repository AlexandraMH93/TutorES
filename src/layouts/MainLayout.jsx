import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"
import SideBar from "../components/SideBar/SideBar"


const MainLayout = () => {
  return (
    <div>
      <Header />
      <SideBar />
      <Outlet />
    </div>
  )
}

export default MainLayout
