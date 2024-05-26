import React, { type PropsWithChildren } from "react"
import { createTheme, ThemeProvider, type Theme } from "@mui/material"
import { StyledEngineProvider } from "@mui/material/styles"
import { zhCN } from "@mui/material/locale"
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react"

const theme: Theme = createTheme(zhCN, {
  palette: {
    primary: {
      light: "#757CE8",
      main: "#FADB4A",
      dark: "#002884",
      contrastText: "#FFF",
      transparent: "transparent",
    },
    secondary: {
      light: "#FF7961",
      main: "#F44336",
      dark: "#BA000D",
      contrastText: "#000",
      transparent: "transparent",
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
    <EmotionThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <GlobalCssPriority>{children}</GlobalCssPriority>
      </ThemeProvider>
    </EmotionThemeProvider>
  )
}

export default Theme
