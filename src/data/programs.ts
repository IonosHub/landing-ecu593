import type { Program } from './types';

/** Add `photo: '/imgs/<file>'` when the real photos exist. Copy lives in src/i18n. */
export const programs: Program[] = [
  { id: 'kids', code: 'K', stampInk: 'flame' },
  { id: 'teens', code: 'T', stampInk: 'sky' },
  { id: 'adultos', code: 'A', stampInk: 'violet' },
];
