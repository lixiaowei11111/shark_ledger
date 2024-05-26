# `eslint`
+ `eslint`插件 `eslint-plugin-html`

# `emotion`
+ `emotion/react`在`TypeScript` 4.1以上的版本中,需要配置`tsconfig.json`中的配置
```json
    "jsx": "react-jsx",
    "jsxImportSource": "@emotion/react",
```
+ [同理,`emotion`的`theme`要符合`TS`的话,也需要继承类型,比如继承`Material UI`中的类型](https://emotion.sh/docs/typescript)
  + `emotion.d.ts`
    ```TypeScript
    import "emotion/react"
    import { Theme as MuiTheme } from "@mui/material"

    declare module "@emotion/react" {
    export interface Theme extends MuiTheme {}
    }
    ```
  + `ThemeProvider.ts`中,就可以直接使用了
    ```TypeScript
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
                {children}
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
    ```