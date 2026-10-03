export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];

/** Spanish is the default and lives at "/"; English lives at "/en/". */
export const defaultLocale: Locale = 'es';

export const localeMeta: Record<Locale, { htmlLang: string; ogLocale: string; label: string; short: string }> = {
  es: { htmlLang: 'es-EC', ogLocale: 'es_EC', label: 'Español', short: 'ES' },
  en: { htmlLang: 'en', ogLocale: 'en_US', label: 'English', short: 'EN' },
};

export const toLocale = (value: string | undefined): Locale =>
  locales.includes(value as Locale) ? (value as Locale) : defaultLocale;

export const localePath = (locale: Locale): string => (locale === defaultLocale ? '/' : `/${locale}/`);
