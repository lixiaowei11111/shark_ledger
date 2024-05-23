// components
import React from "react"
import ReactDOM from "react-dom/client"
import Theme from "./components/Theme/index.tsx"
import { BrowserRouter } from "react-router-dom"
import Router from "./router/routes.tsx"
// static
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Theme>
        <Router />
      </Theme>
    </BrowserRouter>
  </React.StrictMode>,
)
