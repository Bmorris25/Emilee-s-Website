import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // Ensures assets are referenced correctly
  build: {
    outDir: "dist", // Ensure this matches the deployment output folder
    rollupOptions: {
      input: '/index.html' // Explicitly tell Vercel to use this as the entry point if necessary
    }
  },
})
