import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GITHUB_SHA is set in GitHub Actions, COMMIT_REF in Netlify builds; local builds have neither.
const buildCommit = process.env.GITHUB_SHA || process.env.COMMIT_REF || ''

export default defineConfig({
  plugins: [react()],
  define: {
    __BUILD_COMMIT__: JSON.stringify(buildCommit),
    __BUILD_DATE__: JSON.stringify(new Date().toISOString().slice(0, 10)),
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    include: ['src/**/*.test.{js,ts,jsx,tsx}']
  }
})
