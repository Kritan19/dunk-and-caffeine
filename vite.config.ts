import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/dunk-and-caffeine/'  // ← Keep this (with trailing slash)
})