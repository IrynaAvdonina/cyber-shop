import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/cyber-shop/',
  plugins: [svgr(), react(), viteStaticCopy({
    targets: [
      { src: 'dist/index.html', dest: 'dist/404.html' }
    ]
  }),],
  server: {
    historyApiFallback: true,
  },
});
