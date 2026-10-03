// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';

// PUBLIC_SITE_URL (see .env.example) enables absolute canonical/hreflang URLs and the sitemap.
const { PUBLIC_SITE_URL } = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');

// https://astro.build/config
export default defineConfig({
  site: PUBLIC_SITE_URL || undefined,
  devToolbar: { enabled: false },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: PUBLIC_SITE_URL
    ? [sitemap({ i18n: { defaultLocale: 'es', locales: { es: 'es-EC', en: 'en' } } })]
    : [],
});
