import { pending, type Maybe } from '../lib/pending';
import type { PriceId } from './types';

/** Fee values (labels live in src/i18n). Replace pending() with the real value, e.g. '$45'. */
export const pricing: { id: PriceId; value: Maybe<string> }[] = [
  { id: 'enrollment', value: pending('Valor de la matrícula') },
  { id: 'level', value: pending('Valor de cada nivel de 4 semanas') },
  { id: 'payment', value: pending('Formas de pago aceptadas') },
  { id: 'promotions', value: pending('Promociones o descuentos vigentes') },
];
