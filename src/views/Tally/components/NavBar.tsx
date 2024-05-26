//HOOKS
import { FC, SyntheticEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
// COMPONENTS
import { Tabs, Tab, Button, Box } from "@mui/material"
// CONSTANTS
import { TallyEnum } from "@/constants"

const tabCss = {
  "&.Mui-selected": {
    outline: "none !important",
    color: "primary.dark",
  },
  "&.MuiButtonBase-root": {
    minWidth: "20vw",
    width: "20vw",
  },
  color: "primary.dark",
}

/**
 * @description 记账模块 - 支出/收入 头部组件
 * @returns
 */
interface TallyNavBarProps {
  onClose?: () => void
}

const TallyNavBar: FC<TallyNavBarProps> = ({ onClose }) => {
  const navigate = useNavigate()
  const [val, setVal] = useState<TallyEnum>(TallyEnum.EXPENSE)

  const handleChange = (_e: SyntheticEvent, val: TallyEnum) => {
    setVal(val)
    navigate(`/main/tally/${val}`)
  }
  return (
    <Box
      className="relative flex items-center justify-center"
      css={theme => ({ backgroundColor: theme.palette.primary.main, height: "14vw" })}>
      <Tabs
        aria-label="记账模块头部"
        value={val}
        sx={{
          ".MuiTabs-indicator": {
            backgroundColor: "primary.dark",
            width: "20vw !important",
          },
          ".MuiTabs-flexContainer": {
            justifyContent: "center",
          },
        }}
        onChange={handleChange}>
        <Tab label="支出" sx={tabCss} value={TallyEnum.EXPENSE} />
        <Tab label="收入" sx={tabCss} value={TallyEnum.INCOME} />
      </Tabs>
      <Button
        variant="text"
        sx={{
          color: "primary.dark",
          display: "block",
          position: "fixed",
          right: "0",
          top: "0",
          lineHeight: "10vw",
        }}
        onClick={onClose}>
        取消
      </Button>
    </Box>
  )
}

export default TallyNavBar
