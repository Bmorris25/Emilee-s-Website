import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "./",  // Use "./" instead of "/"
  build: {
    outDir: "dist",  // Ensure this is correct
  }
})
