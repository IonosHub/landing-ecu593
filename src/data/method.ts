import { pending } from '../lib/pending';
import type { Level } from './types';

/** Facts from the Ecu593 system: every course is 12 levels × 4 weeks (courses.service.ts). */
export const WEEKS_PER_LEVEL = 4;
export const LEVEL_COUNT = 12;
export const TOTAL_WEEKS = WEEKS_PER_LEVEL * LEVEL_COUNT;

export const levels: Level[] = Array.from({ length: LEVEL_COUNT }, (_, index) => ({
  number: index + 1,
  weekFrom: index * WEEKS_PER_LEVEL + 1,
  weekTo: (index + 1) * WEEKS_PER_LEVEL,
  cefr: pending(`Nivel MCER del nivel ${index + 1}`),
}));

/**
 * Grading rules from the Ecu593 system: PRD (pass mark 7.00, max 25% absences) and the
 * grades module, which splits each level into written/oral homework, midterm and final exam.
 */
export const evaluation = [
  { label: 'Nota para aprobar', value: '7 / 10' },
  { label: 'Evaluación', value: 'Escrita + oral' },
  { label: 'Se califica', value: 'Tareas, examen parcial y examen final' },
  { label: 'Asistencia mínima', value: '75 %' },
] as const;

export const levelContent = pending('Contenido o temas de cada nivel');
