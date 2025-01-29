import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Export the configuration
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // Alias to resolve paths more easily
      '@': '/src',
    },
  },
  server: {
    // Optional: You can set the host to expose the server on the network
    host: true,
  },
  build: {
    // Optional: Define build settings (e.g., output directory)
    outDir: 'dist',
  },
})
