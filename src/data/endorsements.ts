import { pending } from '../lib/pending';
import type { Endorsement } from './types';

/** "Lo que incluye tu pasaporte": benefits grounded in what the Ecu593 system actually does. */
export const endorsements: Endorsement[] = [
  {
    title: 'Tu progreso, a la vista',
    body: 'Con tu cuenta en el sistema de Ecu593 ves tus notas y tu asistencia de cada nivel, sin tener que preguntar.',
  },
  {
    title: 'Una cuenta para toda la familia',
    body: 'Si inscribes a tus hijos, sobrinos o primos, todos los perfiles quedan en una sola cuenta familiar.',
  },
  {
    title: 'Reglas claras desde el primer día',
    body: 'Sabes cómo te evalúan: nota sobre 10, apruebas con 7, y se mide tanto lo escrito como lo oral.',
  },
  {
    title: 'Una persona te acompaña',
    body: 'Secretaría revisa tu inscripción y te responde por WhatsApp. Nada de formularios que nadie lee.',
  },
  {
    title: 'Docentes',
    body: pending('Perfil de los docentes (formación, experiencia, certificaciones)'),
  },
  {
    title: 'Certificado',
    body: pending('Qué certificado o diploma recibe el estudiante al terminar'),
  },
];
