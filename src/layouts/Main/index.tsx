import { Outlet } from "react-router-dom"
import Tabbar from "../Tabbar"
import { useLocation } from "react-router-dom"
import { TabbarValueEnum } from "@/constants"
const MainLayout = () => {
  const location = useLocation()

  return (
    <main className="w-screen">
      mainLayout
      <Outlet />
      {!location.pathname.includes(TabbarValueEnum.TALLY) ? <Tabbar /> : null}
    </main>
  )
}

export default MainLayout
