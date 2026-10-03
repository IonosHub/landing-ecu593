import { site } from '../config/site';

export const buildWhatsAppUrl = (message: string = site.whatsapp.greeting): string =>
  `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
