import { site } from '../config/site';

export const buildWhatsAppUrl = (message: string): string =>
  `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
