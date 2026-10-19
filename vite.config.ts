import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'

export default defineConfig({
  plugins: [
    react(),
    // Only enable basic-ssl if explicitly requested (self-signed cert causes "Not Secure / Advanced -> Proceed Unsafe" in browsers)
    process.env.VITE_BASIC_SSL === 'true' ? basicSsl() : null,
  ].filter(Boolean),
  server: {
    host: '0.0.0.0', // Exposes application to local network
    port: 5173,
    open: true,
  },
})
