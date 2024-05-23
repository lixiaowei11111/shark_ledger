import React, { type PropsWithChildren } from "react"
import { createTheme, ThemeProvider } from "@mui/material"
import { StyledEngineProvider } from "@mui/material/styles"
import { zhCN } from "@mui/material/locale"

const theme = createTheme(zhCN, {
  palette: {
    primary: {
      light: "#757CE8",
      main: "#3F50B5",
      dark: "#002884",
      contrastText: "#FFF",
    },
    secondary: {
      light: "#FF7961",
      main: "#F44336",
      dark: "#BA000D",
      contrastText: "#000",
    },
  },
})

const GlobalCssPriority: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <StyledEngineProvider injectFirst>
      {children /* Your component tree. Now you can override Material UI's styles. */}
    </StyledEngineProvider>
  )
}

const Theme: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalCssPriority>{children}</GlobalCssPriority>
    </ThemeProvider>
  )
}

export default Theme
