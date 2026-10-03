import { pending } from '../lib/pending';
import type { Modality } from './types';

export const modalities: Modality[] = [
  {
    id: 'presencial',
    name: 'Presencial',
    pitch: 'Clases en aula, con tu grupo y tu docente cara a cara.',
    details: [
      { label: 'Sede', value: pending('Dirección de la sede para clases presenciales') },
      { label: 'Horarios', value: pending('Horarios de clases presenciales') },
      { label: 'Cupo por grupo', value: pending('Número máximo de estudiantes por grupo') },
    ],
    image: {
      alt: 'Aula de Ecu593 English',
      brief: 'El aula real de la sede, con estudiantes en clase',
    },
  },
  {
    id: 'online',
    name: 'Online',
    pitch: 'Los mismos 12 niveles desde tu casa o tu oficina, en vivo con tu docente.',
    details: [
      { label: 'Plataforma', value: pending('Plataforma de clases online (Zoom, Meet, etc.)') },
      { label: 'Horarios', value: pending('Horarios de clases online') },
      { label: 'Requisitos', value: pending('Requisitos técnicos para clases online') },
    ],
    image: {
      alt: 'Estudiante en una clase online de Ecu593 English',
      brief: 'Estudiante en casa conectado a su clase online',
    },
  },
];
