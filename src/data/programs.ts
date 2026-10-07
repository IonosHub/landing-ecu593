import type { Program } from './types';

/** Add `photo: '/imgs/<file>'` when the real photos exist. Copy lives in src/i18n. */
export const programs: Program[] = [
  { id: 'regular', code: 'B2', stampInk: 'flame', photo: '/imgs/regular.jpg' },
  { id: 'particulares', code: 'P', stampInk: 'sky', photo: '/imgs/particulares.jpg' },
  { id: 'conversacion', code: 'C', stampInk: 'violet', photo: '/imgs/conversacion.jpg' },
  { id: 'corporativo', code: 'E', stampInk: 'navy', photo: '/imgs/corporativo.jpg' },
];
