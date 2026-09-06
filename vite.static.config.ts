import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/postcss';
import { resolve } from 'path';

export default defineConfig({
  base: process.env.VITE_BASE_PATH || './',
  plugins: [react()],
  css: { postcss: { plugins: [tailwindcss()] } },
  resolve: {
    alias: {
      'next/image': resolve(__dirname, 'src/next-image-stub.tsx'),
      '@': resolve(__dirname, '.'),
    },
  },
  build: {
    outDir: 'dist-static',
    emptyOutDir: true,
  },
});
