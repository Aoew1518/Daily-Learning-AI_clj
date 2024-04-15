import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 配置 @ 路径别名
  resolve: {
    alias: {
      // '@': '/src'
      '@': path.resolve(__dirname, 'src')
    }
  }
})
