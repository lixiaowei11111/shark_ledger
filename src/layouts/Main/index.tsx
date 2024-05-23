import { Outlet } from "react-router-dom"
import Tabbar from "../Tabbar"
const MainLayout = () => {
  return (
    <main className="w-screen">
      mainLayout
      <Outlet />
      <Tabbar />
    </main>
  )
}

export default MainLayout
