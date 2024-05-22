import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import "dotenv/config"

// https://vitejs.dev/config/
// vite.config.ts 不能获取import.meta.env上的环境变量,需要使用loadEnv来获取
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        clientsClaim: true,
        skipWaiting: true
      },
      devOptions: {
        enabled: true,
      }
    })],
  server: {
    https: {
      key: process.env.DEV_SSL_KEY,
      cert: process.env.DEV_SSL_CERT,
      ca: process.env.DEV_SSL_CA
    }
  }
})
