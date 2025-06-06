// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site:'https://mblcdev.com',
  integrations: [sitemap({
    i18n:{
      defaultLocale:'es',
      locales:{
        es:'es-PE',
        en: 'en-US',
      }
    }
  })]
});