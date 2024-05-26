import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { VitePWA } from "vite-plugin-pwa"
import path from "path"

import "dotenv/config"
const relative = (p: string) => {
  return path.resolve(__dirname, p)
}

// https://vitejs.dev/config/
// vite.config.ts 不能获取import.meta.env上的环境变量,需要使用loadEnv来获取
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: false,

      pwaAssets: {
        disabled: false,
        config: true,
      },

      manifest: {
        name: "shark ledger",
        short_name: "shark ledger",
        description: "ledger",
        theme_color: "#ffffff",
      },

      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,ico}"],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
      },

      devOptions: {
        enabled: false,
        navigateFallback: "index.html",
        suppressWarnings: true,
        type: "module",
      },
    }),
  ],
  server: {
    host: true,
    https: {
      key: process.env.DEV_SSL_KEY,
      cert: process.env.DEV_SSL_CERT,
      ca: process.env.DEV_SSL_CA,
    },
  },
  resolve: {
    alias: {
      "@": relative("./src"),
      // "@assets": relative("./src/assets"),
      // "@components": relative("./src/components"),
      // "@constants": relative("./src/constants"),
      // "@db": relative("./src/db"),
      // "@hooks": relative("./src/hooks"),
      // "@layouts": relative("./src/layouts"),
      // "@store": relative("./src/store"),
      // "@router": relative("./src/router"),
      // "@styles": relative("./src/styles"),
      // "@utils": relative("./src/utils"),
      // "@views": relative("./src/views"),
    },
  },
})
