import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://chpolarizados.com',
  integrations: [
    tailwind(),
  ],
  image: {
    // Optimización de imágenes con Sharp
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
