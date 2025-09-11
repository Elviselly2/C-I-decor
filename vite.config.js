import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Get the hostname from the environment, defaulting to localhost
const hostname = process.env.VITE_APP_HOST || 'localhost';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    hmr: {
      clientPort: 443
    },
    preview: {
      allowedHosts: [
        hostname, // Use the variable here
      ],
    },
  },
});