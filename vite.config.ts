import { defineConfig } from 'vite'
import { cloudflarePagesPlugin } from './plugin/viteElysiaCloudflare.ts'

export default defineConfig({
  plugins: [
    cloudflarePagesPlugin({
      entry: 'src/_worker.tsx',
      minify: true,
    }),
  ],
})
