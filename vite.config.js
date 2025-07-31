import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// This is the Vite configuration file.
// The 'base' property is crucial for GitHub Pages deployment.
export default defineConfig({
  plugins: [react()],
  base: '/sri-lanka-apparel-dashboard-/',
  // Set the root to the 'src' directory where index.html is likely located
  root: './src',
  build: {
    // Set the output directory for the build to the root of the repository
    outDir: '../dist',
    emptyOutDir: true,
  }
})
