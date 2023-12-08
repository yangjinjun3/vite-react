import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import antdDayjs from 'antd-dayjs-vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), antdDayjs()]
})
