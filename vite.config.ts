import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  // resolve: {
  //   alias: {
  //     '@assets': path.resolve(__dirname, 'src/assets'),
  //     '@components': path.resolve(__dirname, 'src/components'),
  //     '@pages': path.resolve(__dirname, 'src/pages')
  //   },
  // },
})
