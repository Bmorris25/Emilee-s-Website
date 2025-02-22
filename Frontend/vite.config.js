import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/",  // Ensure correct base path
  build: {
    outDir: "dist",  // Ensure it's set correctly
  },
  server: {
    historyApiFallback: true, // Ensure proper fallback for client-side routing
  }
})
