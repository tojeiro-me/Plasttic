// vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  root: 'src',
  build: {
    outDir: '../public/',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
  },
});
