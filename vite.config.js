import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '5683-2a09-bac5-3cc7-7eb-00-ca-131.ngrok-free.app'
    ]
  }
});
