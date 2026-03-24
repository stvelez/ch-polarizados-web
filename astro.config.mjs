import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import cloudflare from "@astrojs/cloudflare";

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

  output: "hybrid",
  adapter: cloudflare()
});