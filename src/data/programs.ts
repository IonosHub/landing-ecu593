import { pending } from '../lib/pending';
import type { Program } from './types';

export const programs: Program[] = [
  {
    id: 'kids',
    name: 'Kids',
    code: 'K',
    audience: 'Niños',
    ages: pending('Rango de edad del programa Kids'),
    pitch: 'Su primer contacto con el inglés, en grupo y con su docente, con un nivel nuevo cada cuatro semanas.',
    focus: ['Vocabulario y pronunciación', 'Hablar desde la primera clase', 'Progreso visible para la familia'],
    image: {
      alt: 'Niños en una clase de inglés de Ecu593 English',
      brief: 'Niños de Kids participando en clase, con la docente al frente',
    },
    stampInk: 'flame',
  },
  {
    id: 'teens',
    name: 'Teens',
    code: 'T',
    audience: 'Adolescentes',
    ages: pending('Rango de edad del programa Teens'),
    pitch: 'Inglés para el colegio, los viajes y lo que venga después, con evaluación escrita y oral en cada nivel.',
    focus: ['Gramática que se usa', 'Conversación y comprensión', 'Notas y asistencia en línea'],
    image: {
      alt: 'Adolescentes conversando en inglés en clase',
      brief: 'Grupo de Teens conversando en parejas en el aula',
    },
    stampInk: 'sky',
  },
  {
    id: 'adultos',
    name: 'Adultos',
    code: 'A',
    audience: 'Jóvenes y adultos',
    ages: pending('Rango de edad del programa Adultos'),
    pitch: 'Para tu trabajo, tus estudios o tu próximo viaje: niveles cortos y horarios presenciales u online.',
    focus: ['Inglés para el trabajo', 'Presencial u online', 'Metas claras cada 4 semanas'],
    image: {
      alt: 'Adultos estudiando inglés en Ecu593 English',
      brief: 'Adultos en clase presencial o conectados a una clase online',
    },
    stampInk: 'violet',
  },
];
