import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./@"),
    },
  },
  server: {
    host: '0.0.0.0',  // Escucha en todas las interfaces de red
    port: 3000,       // Puerto en el que la aplicación se sirve
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})


