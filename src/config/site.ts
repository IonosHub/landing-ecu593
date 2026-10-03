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
  apiUrl: (import.meta.env.PUBLIC_API_URL as string | undefined) ?? '',
  logo: { src: '/imgs/logo_oficial.jpg', width: 557, height: 485 },
  ogImage: { src: '/og.png', width: 1200, height: 630 },

  whatsapp: {
    number: (import.meta.env.PUBLIC_WHATSAPP_NUMBER as string | undefined) ?? '593963660675',
    display: '096 366 0675',
  },

  email: pending('Correo de contacto de la escuela') as Maybe<string>,
  city: pending('Ciudad de la sede') as Maybe<string>,
  address: pending('Dirección de la sede') as Maybe<string>,
  officeHours: pending('Horario de atención') as Maybe<string>,

  social: [
    { name: 'Instagram', url: pending('URL de Instagram') },
    { name: 'Facebook', url: pending('URL de Facebook') },
    { name: 'TikTok', url: pending('URL de TikTok') },
  ] satisfies SocialLink[] as SocialLink[],
};
