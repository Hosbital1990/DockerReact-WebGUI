
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // access from local network
  server: {
    host: '0.0.0.0',  // Correct format for binding to all network interfaces
  }
})
