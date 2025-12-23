import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Replace 'dunk-and-caffeine' with your actual repository name
  base: '/dunk-and-caffeine/', 
  build: {
    outDir: 'dist',
  }
});