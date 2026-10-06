import type { Program } from './types';

/** Add `photo: '/imgs/<file>'` when the real photos exist. Copy lives in src/i18n. */
export const programs: Program[] = [
  { id: 'regular', code: 'B2', stampInk: 'flame' },
  { id: 'particulares', code: 'P', stampInk: 'sky' },
  { id: 'conversacion', code: 'C', stampInk: 'violet' },
  { id: 'corporativo', code: 'E', stampInk: 'navy' },
];
