import { useState, SyntheticEvent, ReactElement } from "react"

import { Tabs, Tab } from "@mui/material"
import Icon from "@/components/Icon"
import { css } from "@emotion/react"
import { TabbarValueEnum } from "@/constants"
import { useNavigate } from "react-router-dom"

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
  value: TabbarValueEnum
}

const Tabbar = () => {
  const navigate = useNavigate()

  const [value, setValue] = useState<TabbarValueEnum>(TabbarValueEnum.DETAIL)

  const handleChange = (_event: SyntheticEvent, newValue: TabbarValueEnum) => {
    setValue(newValue)
    navigate(`/main/${newValue}`)
  }

  const tabList: Array<TabProps> = [
    {
      label: <span css={labelCss}>明细</span>,
      icon: <Icon name="ziyuan76" className="text-2xl" />,
      value: TabbarValueEnum.DETAIL,
    },
    {
      label: <span css={labelCss}>图表</span>,
      icon: <Icon name="tubiao" className="text-2xl" />,
      value: TabbarValueEnum.GRAPH,
    },
    {
      label: <span css={labelCss}>记账</span>,
      icon: <Icon name="jiahao2fill" className="text-2xl text-transparent" />,
      value: TabbarValueEnum.TALLY,
    },
    {
      label: <span css={labelCss}>发现</span>,
      icon: <Icon name="faxian" className="text-2xl" />,
      value: TabbarValueEnum.DISCOVER,
    },
    {
      label: <span css={labelCss}>我的</span>,
      icon: <Icon name="wode" className="text-2xl" />,
      value: TabbarValueEnum.MY,
    },
  ]

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
        onChange={handleChange}>
        {tabList.map((item, index) => {
          return <Tab {...item} key={index} sx={tabCss} />
        })}
      </Tabs>
      <Icon
        name="jiahao2fill"
        className="fixed text-5xl -translate-x-1/2 left-1/2 bottom-6"
        css={theme => ({ color: theme.palette.primary.main })}
        onClick={(e: SyntheticEvent) => handleChange(e, TabbarValueEnum.TALLY)}
      />
    </footer>
  )
}

export default Tabbar
