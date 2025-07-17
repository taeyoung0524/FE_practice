import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [ 
    react(),
    VitePWA({
      registerType: 'autoUpdate', // 새 버전 생기면 자동 업데이트
      includeAssets: [
        'favicons/favicon.ico',
        'favicons/apple-touch-icon.png',
        'favicons/favicon-96x96.png',
        'favicons/favicon.svg'
      ],
      manifest: {
        name: '2025 연합 세션',
        short_name: '연합 세션',
        description: '2025 연합 세션 PWA 앱',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: 'favicons/web-app-manifest-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'favicons/web-app-manifest-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  server: { port: 3000 },
  preview: { port: 3000 },
  build: { outDir: 'build' },
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@components', replacement: '/src/components' },
      { find: '@routes', replacement: '/src/routes' },
      { find: '@styles', replacement: '/src/styles' },
      { find: '@utils', replacement: '/src/utils' },
    ],
  },
})
