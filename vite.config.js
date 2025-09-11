import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This allows Vite to expose the host
    hmr: {
        clientPort: 443
    },
    preview: {
      allowedHosts: [
        'c-i-decor-11.onrender.com', 
        'localhost',
      ],
    },
  },
});