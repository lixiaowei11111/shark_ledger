import { useState, ReactElement, useEffect } from "react"
// COMPONENTS
import { Tabs, Tab } from "@mui/material"
import Icon from "@/components/Icon"
import { css } from "@emotion/react"
// HOOKS
import { useNavigate, useLocation } from "react-router-dom"
// CONSTANTS
import { TabBarValueEnum, TallyEnum, tabbarValueList } from "@/constants"
import { routeAliasList } from "@/constants/route"

// css
const tabCss = {
  "&.Mui-selected": {
    outline: "none !important",
  },
  "&.MuiTabs-flexContainer": {
    width: "100vw",
    position: "relative",
    borderTop: "1px solid #EEE",
  },
  "&.MuiButtonBase-root": {
    minWidth: "20vw",
    width: "20vw",
    borderTop: "1px solid #eee",
  },
  fontSize: "0.5rem",
}

const labelCss = css`
  color: #222 !important;
`
// type
interface TabProps {
  label: ReactElement
  icon: ReactElement
  value: TabBarValueEnum
}

const tabList: Array<TabProps> = [
  {
    label: <span css={labelCss}>明细</span>,
    icon: <Icon name="ziyuan76" className="text-2xl" />,
    value: TabBarValueEnum.DETAIL,
  },
  {
    label: <span css={labelCss}>图表</span>,
    icon: <Icon name="tubiao" className="text-2xl" />,
    value: TabBarValueEnum.GRAPH,
  },
  {
    label: <span css={labelCss}>记账</span>,
    icon: <Icon name="jiahao2fill" className="text-2xl text-transparent" />,
    value: TabBarValueEnum.TALLY,
  },
  {
    label: <span css={labelCss}>发现</span>,
    icon: <Icon name="faxian" className="text-2xl" />,
    value: TabBarValueEnum.DISCOVER,
  },
  {
    label: <span css={labelCss}>我的</span>,
    icon: <Icon name="wode" className="text-2xl" />,
    value: TabBarValueEnum.MY,
  },
]

const TabBar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const [value, setValue] = useState<TabBarValueEnum>(TabBarValueEnum.DETAIL)

  useEffect(() => {
    validateCurrentRoute(location.pathname)
  }, [location.pathname])

  const handleChange = (val: TabBarValueEnum) => {
    setValue(val)
    navigate(
      `/main/${val !== TabBarValueEnum.TALLY ? val : `${TabBarValueEnum.TALLY}/${TallyEnum.EXPENSE}`}`,
    )
  }

  const validateCurrentRoute = (path: string) => {
    const targetPath = routeAliasList.find(t => path.includes(t))
    if (targetPath && !targetPath.includes(value)) {
      const newVal = targetPath.split("/")[2]
      if (tabbarValueList.some(t => t === newVal)) {
        handleChange(newVal as TabBarValueEnum)
      }
    }
  }

  return (
    <footer className="fixed bottom-0 left-0 w-screen">
      <Tabs
        value={value}
        variant="fullWidth"
        aria-label="主页底部导航栏"
        sx={{
          ".MuiTabs-indicator": {
            display: "none",
          },
        }}
        onChange={(_e, val) => handleChange(val)}>
        {tabList.map((item, index) => {
          return <Tab {...item} key={index} sx={tabCss} />
        })}
      </Tabs>
      <Icon
        name="jiahao2fill"
        className="fixed text-5xl -translate-x-1/2 left-1/2 bottom-6"
        css={theme => ({ color: theme.palette.primary.main })}
        onClick={() => handleChange(TabBarValueEnum.TALLY)}
      />
    </footer>
  )
}

export default TabBar
