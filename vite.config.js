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
        'c-i-decor-9.onrender.com', 'https://c-i-decor-9.onrender.com/', // Add your Render URL here
        'localhost',
      ],
    },
  },
});