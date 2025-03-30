import { defineConfig, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  base: '/projects/cv-template',
  plugins: [react(), svgr()],
  build: {
    outDir: 'dist',
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['src/setupTests.ts'],
  },
} as UserConfig)
