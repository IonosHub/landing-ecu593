import type { Modality } from './types';

/** Add `photo: '/imgs/<file>'` when the real photos exist. Copy lives in src/i18n. */
export const modalities: Modality[] = [
  { id: 'presencial', stampInk: 'flame' },
  { id: 'online', stampInk: 'sky' },
];
