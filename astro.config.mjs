import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.associationgrand.ch',
  prefetch: true,
  integrations: [tailwind({ applyBaseStyles: false }), sitemap()],
});
