import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// This is the Vite configuration file.
// The 'base' property is crucial for GitHub Pages deployment.
export default defineConfig({
  plugins: [react()],
  base: '/sri-lanka-apparel-dashboard-/',
  // Add a root property to tell Vite where to find the index.html file
  root: './',
})
