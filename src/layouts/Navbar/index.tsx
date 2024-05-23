import { FC, PropsWithChildren } from "react"
const Navbar: FC<PropsWithChildren> = ({ children }) => {
  return <header>{children}</header>
}

export default Navbar
