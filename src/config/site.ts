import { pending, type Maybe } from '../lib/pending';

/**
 * Single source for brand and contact data. Edit here, not in components.
 * The public site URL is configured as PUBLIC_SITE_URL (see .env.example) and read via Astro.site.
 */

export interface SocialLink {
  name: 'Instagram' | 'Facebook' | 'TikTok';
  url: Maybe<string>;
}

export const site = {
  name: 'Ecu593 English',
  legalName: 'Ecu593 English School',
  slogan: ['Learn', 'Grow', 'Achieve'] as const,
  // WEBHOOK_URL is read at build time and rendered into the form; the browser POSTs to it without auth.
  leadWebhookUrl:
    (import.meta.env.WEBHOOK_URL as string | undefined) ||
    'https://n8n.ionoshub.net/webhook/correos-ecu593',
  logo: { src: '/imgs/logo_oficial.jpg', width: 557, height: 485 },
  ogImage: { src: '/og.png', width: 1200, height: 630 },

  whatsapp: {
    number: (import.meta.env.PUBLIC_WHATSAPP_NUMBER as string | undefined) || '593963660675',
    display: '096 366 0675',
  },

  email: 'ecu593english@gmail.com' as Maybe<string>,
  // Classes are 100% online: there is no campus address.
  officeHours: 'WhatsApp 24/7' as Maybe<string>,

  social: [
    { name: 'Instagram', url: pending('URL de Instagram') },
    { name: 'Facebook', url: pending('URL de Facebook') },
    { name: 'TikTok', url: pending('URL de TikTok') },
  ] satisfies SocialLink[] as SocialLink[],
};
