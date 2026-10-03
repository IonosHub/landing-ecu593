import es from './es';
import en from './en';
import { toLocale, type Locale } from './config';
import type { Dictionary } from './types';

export * from './config';
export type { Dictionary } from './types';

const dictionaries: Record<Locale, Dictionary> = { es, en };

/** Dictionary for the current page: `const t = useDictionary(Astro.currentLocale)`. */
export const useDictionary = (locale: string | undefined): Dictionary => dictionaries[toLocale(locale)];
