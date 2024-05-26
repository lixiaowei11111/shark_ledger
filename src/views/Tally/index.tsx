// COMPONENTS
import { Box, Dialog, Slide } from "@mui/material"
import { TransitionProps } from "@mui/material/transitions"
import { Outlet, useNavigate } from "react-router-dom"
import TallyNavBar from "./components/NavBar"
// HOOKS
import { useState, forwardRef, useEffect } from "react"
import { usePreviousRoute } from "@/hooks/usePreviousRoute"

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />
})

/**
 * @description 记账模块, 一个嵌套了路由的全屏弹窗
 * @returns
 */

const Tally = () => {
  const preRoute = usePreviousRoute()
  const navigate = useNavigate()
  const [open, setOpen] = useState(true)
  const [prePageRoute, setPrePageRoute] = useState<string>("/main")
  useEffect(() => {
    if (!prePageRoute.includes("tally")) {
      setPrePageRoute(preRoute || "/main")
    }
  }, [])

  console.log(preRoute, "preRoute", prePageRoute)
  const handleClose = () => {
    setOpen(false)
    navigate(prePageRoute)
  }

  return (
    <Box>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <TallyNavBar onClose={handleClose} />
        <Outlet />
      </Dialog>
    </Box>
  )
}

export default Tally
