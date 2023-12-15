import { resolve } from 'path'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [react(), dts({ rollupTypes: true }), cssInjectedByJsPlugin()],
  build: {
    target: 'es2015',
    outDir: 'dist',
    lib: {
      entry: resolve(__dirname, 'packages/index.ts'),
      name: '@renzp/x6-react-components',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'react',
          'react-dom': 'react-dom',
        },
      },
      plugins: [],
    },
  },
})
