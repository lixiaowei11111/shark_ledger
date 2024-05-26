//HOOKS
import { useLocation } from "react-router-dom"
//COMPONENTS
import { Outlet } from "react-router-dom"
import TabBar from "../TabBar"
import NavBar from "../NavBar"
// CONSTANTS
import { TabBarValueEnum } from "@/constants"
const MainLayout = () => {
  const location = useLocation()

  return (
    <>
      <NavBar />
      <main className="w-screen">
        <Outlet />
      </main>
      {!location.pathname.includes(TabBarValueEnum.TALLY) ? <TabBar /> : null}
    </>
  )
}

export default MainLayout
