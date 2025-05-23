import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

import svgLoader from 'vite-svg-loader'

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: [
      'secretly-coherent-lacewing.ngrok-free.app',
      'shouldsleep8hr.github.io',
      'organic-charming-raven.ngrok-free.app',
      'imaginative-khapse-7b7fb5.netlify.app',
      'life-in-ctrl.netlify.app'
    ],
  },
  plugins: [vue(), vueJsx(), vueDevTools(), svgLoader()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  base: './',
})
