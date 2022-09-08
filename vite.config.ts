// vite.config.ts
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve('/src'),
    },
  },
  define: {
    'process.env': {},
  },
});
