// TYPE
import { FC, PropsWithChildren, ReactElement } from "react"
//COMPONENTS
import TallyNavBar from "@/views/Tally/components/NavBar"
//HOOKS
import { useLocation } from "react-router"

interface NavBarProps {
  path: string[]
  el: ReactElement
}

const NavBar: FC<PropsWithChildren> = () => {
  const location = useLocation()
  const navBarList: NavBarProps[] = [
    {
      path: [
        // "/main/tally", "/main/tally/expense", "/main/tally/income"
      ],
      el: <TallyNavBar />,
    },
  ]
  const getNavBar = (path: string): null | ReactElement => {
    const navBarMap = new Map()
    navBarList.forEach(item => {
      const el = item.el
      item.path.forEach(p => {
        navBarMap.set(p, el)
      })
    })

    return navBarMap.get(path)
  }

  return (
    <header className="fixed top-0 left-0 w-screen">
      <nav>{getNavBar(location.pathname)}</nav>
    </header>
  )
}

export default NavBar
