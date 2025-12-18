import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/yakushev-landing/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'swiper']
        }
      }
    }
  },
  publicDir: 'public',
  css: {
    modules: {
      localsConvention: 'camelCase'
    }
  }
})
