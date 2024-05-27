// components
import React from "react"
import ReactDOM from "react-dom/client"
import Theme from "@/components/Theme/index.tsx"
import { BrowserRouter } from "react-router-dom"
import Router from "@/router/routes.tsx"
import PreviousRouteProvider from "@/components/PreviousRouteContext/index.tsx"
// static
import "@/styles/index.css"

import { registerSW } from "virtual:pwa-register"

// const updateSW =
registerSW({
  onNeedRefresh() {},
  onOfflineReady() {},
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <PreviousRouteProvider>
        <Theme>
          <Router />
        </Theme>
      </PreviousRouteProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
