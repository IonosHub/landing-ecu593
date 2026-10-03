import { pending } from '../lib/pending';
import { TOTAL_WEEKS } from './method';
import type { Faq } from './types';

export const faqs: Faq[] = [
  {
    question: '¿Cuánto dura el curso completo?',
    answer: `Son 12 niveles de 4 semanas cada uno, ${TOTAL_WEEKS} semanas en total. Puedes avanzar nivel por nivel.`,
  },
  {
    question: '¿Cómo me inscribo?',
    answer:
      'Llena la solicitud o escríbenos por WhatsApp. Secretaría te contacta, revisa tus documentos y el pago, y te asigna a un grupo.',
  },
  {
    question: '¿Puedo inscribir a varios hijos con una sola cuenta?',
    answer: 'Sí. Una cuenta familiar puede tener varios perfiles de estudiante, cada uno con sus notas y asistencia.',
  },
  {
    question: '¿Cómo sé si apruebo un nivel?',
    answer:
      'Cada nivel se califica sobre 10 con evaluación escrita y oral. Apruebas con 7 y necesitas al menos 75 % de asistencia.',
  },
  {
    question: '¿Cuánto cuesta?',
    answer: pending('Respuesta sobre precios, matrícula y formas de pago'),
  },
  {
    question: '¿Qué horarios tienen?',
    answer: pending('Respuesta sobre horarios disponibles'),
  },
  {
    question: '¿Entregan certificado?',
    answer: pending('Respuesta sobre certificados'),
  },
  {
    question: '¿Puedo empezar si ya sé algo de inglés?',
    answer: pending('Respuesta sobre prueba de ubicación o ingreso a un nivel superior'),
  },
];
