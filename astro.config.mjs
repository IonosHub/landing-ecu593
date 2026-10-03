// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';

// PUBLIC_SITE_URL (see .env.example) enables absolute canonical/hreflang URLs and the sitemap.
// On Vercel it falls back to the project's production domain (system env VERCEL_PROJECT_PRODUCTION_URL).
const env = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');
const PUBLIC_SITE_URL =
  env.PUBLIC_SITE_URL ||
  (env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${env.VERCEL_PROJECT_PRODUCTION_URL}` : '');

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
