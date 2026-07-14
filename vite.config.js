import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // ponytail: hardcoded Pages subpath; set back to '/' if a custom domain is added
  base: '/voxfill/',
  plugins: [react()],
})
