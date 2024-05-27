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
    react({
      babel: {}, // 更改react内置babel配置
    }),
    VitePWA({
      base: "/",
      registerType: "autoUpdate",
      injectRegister: false,

      pwaAssets: {
        disabled: false,
        config: true,
      },

      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,ico}"],
        runtimeCaching: [
          {
            // https://vite-pwa-org.netlify.app/workbox/generate-sw#cache-external-resources
            urlPattern: /.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "all-resource-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],

        cleanupOutdatedCaches: true,
        clientsClaim: true,
      },
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
      manifest: {
        name: "shark ledger",
        short_name: "shark ledger",
        description: "ledger",
        theme_color: "#ffffff",
        display: "fullscreen",
      },

      devOptions: {
        enabled: true,
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
