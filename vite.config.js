import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// This is the Vite configuration file.
// The 'base' property is crucial for GitHub Pages deployment.
export default defineConfig({
  plugins: [react()],
  base: '/sri-lanka-apparel-dashboard-/',
  // Explicitly define the entry point to resolve the "index.html" error.
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  }
})
