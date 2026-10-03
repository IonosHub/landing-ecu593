import { pending } from '../lib/pending';
import { LEVEL_COUNT, TOTAL_WEEKS, WEEKS_PER_LEVEL } from '../data/method';
import type { Dictionary } from './types';

const es: Dictionary = {
  meta: {
    title: 'Ecu593 English | Cursos de inglés para niños, jóvenes y adultos en Ecuador',
    description: `Cursos de inglés presenciales y online para niños, adolescentes y adultos. ${LEVEL_COUNT} niveles de ${WEEKS_PER_LEVEL} semanas, evaluación escrita y oral, y tu progreso en línea. Inscríbete por WhatsApp.`,
    ogImageAlt: 'Pasaporte de estudiante de Ecu593 English con sellos de nivel',
  },
  a11y: {
    skip: 'Saltar al contenido',
    sections: 'Secciones',
    home: 'inicio',
    languageSwitch: 'Cambiar idioma',
  },
  nav: {
    links: [
      { href: '#programas', label: 'Programas' },
      { href: '#metodo', label: 'Método' },
      { href: '#modalidades', label: 'Modalidades' },
      { href: '#valores', label: 'Valores' },
      { href: '#preguntas', label: 'Preguntas' },
    ],
    cta: 'Inscríbete',
  },
  hero: {
    title: 'Aprende inglés, un sello a la vez.',
    sub: `Cursos de inglés para niños, adolescentes y adultos, presenciales u online. Son ${LEVEL_COUNT} niveles de ${WEEKS_PER_LEVEL} semanas, y cada nivel que apruebas es un sello más en tu pasaporte.`,
    ctaPrimary: 'Quiero inscribirme',
    ctaWhatsapp: 'Escríbenos',
    passportLabel: 'Pasaporte de estudiante Ecu593 English',
    docHead: ['Pasaporte de estudiante', 'Student passport'],
    idLabels: { type: 'Tipo / Type', code: 'Código / Code', number: 'N.º / No.' },
    fields: [
      { label: 'Titular / Holder', value: 'Tú' },
      { label: 'Destino / Destination', value: 'Inglés' },
      { label: 'Programas / Programs', value: 'Kids · Teens · Adultos' },
      { label: 'Niveles / Levels', value: `${LEVEL_COUNT} × ${WEEKS_PER_LEVEL} semanas` },
      { label: 'Modalidad / Mode', value: 'Presencial · Online' },
      { label: 'Nota para aprobar / Pass mark', value: '7 / 10' },
    ],
    mrz: ['P<ECU593<<ENGLISH<<LEARN<GROW<ACHIEVE', 'TU<<NIVEL01<<12X4<SEMANAS<<APRUEBA<7<10'],
    stamps: {
      slogan: { top: 'Learn · Grow · Achieve', main: '593', bottom: 'Ecu593 English' },
      entry: { top: 'Entrada', main: 'Nivel 01', bottom: 'Semana 1' },
      modality: { top: 'Presencial · Online', main: 'ECU', bottom: 'Ecuador · 593' },
    },
    cover: { country: 'Ecuador · 593', title: 'Pasaporte', subtitle: 'Ecu593 English' },
  },
  programs: {
    title: 'Una visa para cada edad',
    lead: `Kids, Teens y Adultos siguen la misma ruta de ${LEVEL_COUNT} niveles de ${WEEKS_PER_LEVEL} semanas. Elige la que va contigo o con tus hijos.`,
    band: 'Visa de estudio',
    labels: { audience: 'Para', ages: 'Edades', modality: 'Modalidad' },
    modalityValue: 'Presencial · Online',
    agesFallback: 'Consúltanos',
    cta: (name) => `Quiero ${name}`,
    stampTop: 'Visa aprobada',
    items: {
      kids: {
        name: 'Kids',
        audience: 'Niños',
        ages: pending('Rango de edad del programa Kids'),
        pitch: 'Su primer contacto con el inglés, en grupo y con su docente, con un nivel nuevo cada cuatro semanas.',
        focus: ['Vocabulario y pronunciación', 'Hablar desde la primera clase', 'Progreso visible para la familia'],
        imageAlt: 'Niños en una clase de inglés de Ecu593 English',
        imageBrief: 'Niños de Kids participando en clase, con la docente al frente',
      },
      teens: {
        name: 'Teens',
        audience: 'Adolescentes',
        ages: pending('Rango de edad del programa Teens'),
        pitch: 'Inglés para el colegio, los viajes y lo que venga después, con evaluación escrita y oral en cada nivel.',
        focus: ['Gramática que se usa', 'Conversación y comprensión', 'Notas y asistencia en línea'],
        imageAlt: 'Adolescentes conversando en inglés en clase',
        imageBrief: 'Grupo de Teens conversando en parejas en el aula',
      },
      adultos: {
        name: 'Adultos',
        audience: 'Jóvenes y adultos',
        ages: pending('Rango de edad del programa Adultos'),
        pitch: 'Para tu trabajo, tus estudios o tu próximo viaje: niveles cortos y horarios presenciales u online.',
        focus: ['Inglés para el trabajo', 'Presencial u online', 'Metas claras cada 4 semanas'],
        imageAlt: 'Adultos estudiando inglés en Ecu593 English',
        imageBrief: 'Adultos en clase presencial o conectados a una clase online',
      },
    },
  },
  method: {
    title: `${LEVEL_COUNT} niveles. Un sello por cada uno.`,
    lead: `Cada nivel dura ${WEEKS_PER_LEVEL} semanas y termina con una evaluación. Si apruebas, ganas el sello y pasas al siguiente. En ${TOTAL_WEEKS} semanas completas la ruta.`,
    counterLabel: 'Tu pasaporte',
    weeksOf: `de ${TOTAL_WEEKS} semanas`,
    levelLabel: 'Nivel',
    weeksRange: (from, to) => `Semanas ${from}–${to}`,
    stamp: { top: (level) => `Nivel ${level}`, main: 'Aprobado', bottom: (week) => `Semana ${week}` },
    evaluation: [
      { label: 'Nota para aprobar', value: '7 / 10' },
      { label: 'Evaluación', value: 'Escrita + oral' },
      { label: 'Se califica', value: 'Tareas, examen parcial y examen final' },
      { label: 'Asistencia mínima', value: '75 %' },
    ],
    levelContent: pending('Contenido o temas de cada nivel'),
  },
  modalities: {
    title: 'Presencial u online, tú eliges la entrada',
    lead: 'La ruta, los niveles y la evaluación son los mismos. Cambia desde dónde llegas a clase.',
    entry: 'Entrada',
    detailFallback: 'Consúltanos por WhatsApp',
    items: {
      presencial: {
        name: 'Presencial',
        pitch: 'Clases en aula, con tu grupo y tu docente cara a cara.',
        details: [
          { label: 'Sede', value: pending('Dirección de la sede para clases presenciales') },
          { label: 'Horarios', value: pending('Horarios de clases presenciales') },
          { label: 'Cupo por grupo', value: pending('Número máximo de estudiantes por grupo') },
        ],
        imageAlt: 'Aula de Ecu593 English',
        imageBrief: 'El aula real de la sede, con estudiantes en clase',
      },
      online: {
        name: 'Online',
        pitch: `Los mismos ${LEVEL_COUNT} niveles desde tu casa o tu oficina, en vivo con tu docente.`,
        details: [
          { label: 'Plataforma', value: pending('Plataforma de clases online (Zoom, Meet, etc.)') },
          { label: 'Horarios', value: pending('Horarios de clases online') },
          { label: 'Requisitos', value: pending('Requisitos técnicos para clases online') },
        ],
        imageAlt: 'Estudiante en una clase online de Ecu593 English',
        imageBrief: 'Estudiante en casa conectado a su clase online',
      },
    },
  },
  endorsements: {
    title: 'Lo que viene con tu pasaporte',
    lead: 'Ecu593 trabaja con su propio sistema académico. Eso se nota en cosas concretas.',
    items: [
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
      { title: 'Docentes', body: pending('Perfil de los docentes (formación, experiencia, certificaciones)') },
      { title: 'Certificado', body: pending('Qué certificado o diploma recibe el estudiante al terminar') },
    ],
  },
  testimonials: {
    title: 'Historias de quienes ya tienen sellos',
    pendingNote:
      'Agrega testimonios reales (con permiso) en src/data/testimonials.ts. Mientras la lista esté vacía, esta sección no se publica.',
  },
  pricing: {
    title: 'Valores',
    tag: 'Tasas · Ecu593 English',
    labels: {
      enrollment: 'Matrícula',
      level: 'Valor por nivel',
      payment: 'Formas de pago',
      promotions: 'Promociones',
    },
    fallback: 'Escríbenos y te enviamos los valores y promociones vigentes.',
    ctaWhatsapp: 'Pedir valores por WhatsApp',
    ctaForm: 'Dejar mis datos',
    whatsappMessage: 'Hola, quiero conocer los valores de los cursos de inglés de Ecu593 English.',
  },
  faq: {
    title: 'Preguntas antes de tu primer sello',
    more: '¿No está tu pregunta?',
    moreLink: 'Escríbenos por WhatsApp',
    whatsappMessage: 'Hola, tengo una pregunta sobre los cursos de Ecu593 English.',
    items: [
      {
        question: '¿Cuánto dura el curso completo?',
        answer: `Son ${LEVEL_COUNT} niveles de ${WEEKS_PER_LEVEL} semanas cada uno, ${TOTAL_WEEKS} semanas en total. Puedes avanzar nivel por nivel.`,
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
        question: '¿Las clases son presenciales u online?',
        answer: 'Las dos. Puedes estudiar en aula o en línea, con la misma ruta de niveles y la misma evaluación.',
      },
      { question: '¿Cuánto cuesta?', answer: pending('Respuesta sobre precios, matrícula y formas de pago') },
      { question: '¿Qué horarios tienen?', answer: pending('Respuesta sobre horarios disponibles') },
      { question: '¿Entregan certificado?', answer: pending('Respuesta sobre certificados') },
      {
        question: '¿Puedo empezar si ya sé algo de inglés?',
        answer: pending('Respuesta sobre prueba de ubicación o ingreso a un nivel superior'),
      },
    ],
  },
  form: {
    title: 'Solicitud de inscripción',
    lead: 'Déjanos tus datos y te contactamos. Secretaría revisa tu solicitud y te escribe por WhatsApp para elegir grupo y horario.',
    steps: ['Envías la solicitud', 'Te contactamos por WhatsApp', 'Validamos documentos y pago', 'Empiezas tu Nivel 01'],
    alt: '¿Prefieres hablar ya?',
    altCta: 'Chatear por WhatsApp',
    band: ['Formulario E-593', 'Ecu593 English'],
    fields: {
      firstName: 'Nombres',
      lastName: 'Apellidos',
      phone: 'Celular',
      email: 'Correo (opcional)',
      emailPlaceholder: 'tucorreo@ejemplo.com',
      program: 'Programa',
      programPlaceholder: 'Elige un programa',
      programUnsure: 'No estoy seguro',
      modality: 'Modalidad',
      modalityAny: 'Cualquiera',
      message: 'Mensaje (opcional)',
      messagePlaceholder: 'Cuéntanos tu nivel actual, edad del estudiante o el horario que prefieres',
    },
    submit: 'Enviar mi solicitud',
    noscript: 'Para enviar el formulario activa JavaScript, o',
    noscriptLink: 'escríbenos por WhatsApp',
    stamp: { top: 'Solicitud', main: 'Recibida', bottom: 'Ecu593 English' },
    client: {
      phoneInvalid: 'Escribe un celular de 10 dígitos que empiece con 09.',
      sending: 'Enviando tu solicitud…',
      success: '¡Solicitud recibida, {firstName}!',
      successDetail: ' Secretaría te escribirá al {phone} muy pronto.',
      error: 'No pudimos enviar tu solicitud en este momento. ',
      errorLink: 'Envíala por WhatsApp',
      errorTail: ' y te atendemos igual.',
      whatsappFallback:
        'Hola, soy {firstName} {lastName}. Quiero información del programa {program} ({modality}). Mi número es {phone}.',
    },
  },
  footer: {
    closing: '¿Listo para tu primer sello?',
    ctaPrimary: 'Quiero inscribirme',
    ctaWhatsapp: 'Escríbenos',
    contact: 'Contacto',
    social: 'Redes',
    rights: 'Todos los derechos reservados.',
  },
  whatsapp: {
    greeting: 'Hola, quiero información sobre los cursos de inglés de Ecu593 English.',
    fab: '¿Dudas? Escríbenos',
    fabLabel: 'Escríbenos por WhatsApp',
    chat: 'WhatsApp',
  },
  photo: {
    pending: 'Foto pendiente',
  },
  pending: {
    tag: 'Dato pendiente',
    title: 'Completar en src/i18n o src/config',
  },
};

export default es;
