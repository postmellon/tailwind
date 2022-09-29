import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Pages()],
  server: {
    https: false,
    port: 8080,
    proxy: {'^/api/*' : { 
      target: 'htttp://localhost:3000',
      changeOrigin: true,
    }} 
  }
})
