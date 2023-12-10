import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base:"/advance-home-decor/",
  plugins: [react()],
  server: {
    open: true,
    port: 3000,
  },
})
