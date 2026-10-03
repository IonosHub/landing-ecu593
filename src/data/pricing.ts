import { pending } from '../lib/pending';
import type { PriceItem } from './types';

export const pricing: PriceItem[] = [
  { label: 'Matrícula', value: pending('Valor de la matrícula') },
  { label: 'Valor por nivel', value: pending('Valor de cada nivel de 4 semanas') },
  { label: 'Formas de pago', value: pending('Formas de pago aceptadas') },
  { label: 'Promociones', value: pending('Promociones o descuentos vigentes') },
];

export const pricingFallback = 'Escríbenos y te enviamos los valores y promociones vigentes.';
