/// <reference types="vitest" />
import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    coverage: {
      exclude: ['src/main.tsx', 'src/**/types.ts', 'src/vite-env.d.ts'],
      include: ['src'],
    },
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./setupTests.ts'],
  },
});
