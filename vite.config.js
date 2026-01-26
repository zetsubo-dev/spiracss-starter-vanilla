import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  root: path.resolve(__dirname, './src'),
  appType: 'mpa',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@components': path.resolve(__dirname, './src/components'),
      '@common': path.resolve(__dirname, './src/components/common'),
      '@pages': path.resolve(__dirname, './src/components/pages'),
      '@parts': path.resolve(__dirname, './src/components/parts'),
      '@assets': path.resolve(__dirname, './src/assets')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: [path.resolve(__dirname, './src')]
      }
    }
  },
  build: {
    // Keep build output at the starter root (not under src/).
    outDir: path.resolve(__dirname, './dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        home: path.resolve(__dirname, 'src/index.html'),
        about: path.resolve(__dirname, 'src/about/index.html')
      }
    }
  }
})
