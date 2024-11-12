import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';
import path from 'path';

export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: false,
  }), image(), react()],
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
  },
});
