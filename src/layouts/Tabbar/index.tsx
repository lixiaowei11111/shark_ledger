import { useState, SyntheticEvent } from "react"

import { Tabs, Tab } from "@mui/material"
import Icon from "@/components/Icon"

const Tabbar = () => {
  const [value, setValue] = useState<string>("detail")

  const handleChange = (_event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  const tabList = [
    {
      label: "明细",
      icon: <Icon name="mingxi" />,
      value: "detail",
    },
    {
      label: "图表",
      icon: <Icon name="tubiao1" />,
      value: "graph",
    },
    {
      label: "发现",
      icon: <Icon name="faxian" />,
      value: "discover",
    },
    {
      label: "我的",
      icon: <Icon name="wode" />,
      value: "my",
    },
  ]

  return (
    <footer className="fixed bottom-0 left-0 w-screen">
      <Tabs
        value={value}
        className="relative"
        variant="fullWidth"
        aria-label="主页底部导航栏"
        onChange={handleChange}>
        {tabList.map((item, index) => (
          <Tab {...item} key={index} />
        ))}
        <Tab
          className="fixed -translate-x-1/2 left-1/2 bottom-1"
          value="tally"
          label="记账"
          icon={<Icon name="jiahao2fill" />}
        />
      </Tabs>
    </footer>
  )
}

export default Tabbar
