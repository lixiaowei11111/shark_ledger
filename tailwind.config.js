/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: false,// https://mui.com/material-ui/integrations/interoperability/#tailwind-css
  },
  important: "#root",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

