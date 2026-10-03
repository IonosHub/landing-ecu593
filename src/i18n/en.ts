import { pending } from '../lib/pending';
import { LEVEL_COUNT, TOTAL_WEEKS, WEEKS_PER_LEVEL } from '../data/method';
import type { Dictionary } from './types';

const en: Dictionary = {
  meta: {
    title: 'Ecu593 English | English courses for kids, teens and adults in Ecuador',
    description: `In-person and online English courses for kids, teens and adults in Ecuador. ${LEVEL_COUNT} levels of ${WEEKS_PER_LEVEL} weeks, written and oral assessment, and your progress online. Enrol via WhatsApp.`,
    ogImageAlt: 'Ecu593 English student passport with level stamps',
  },
  a11y: {
    skip: 'Skip to content',
    sections: 'Sections',
    home: 'home',
    languageSwitch: 'Change language',
  },
  nav: {
    links: [
      { href: '#programas', label: 'Programs' },
      { href: '#metodo', label: 'Method' },
      { href: '#modalidades', label: 'Formats' },
      { href: '#valores', label: 'Fees' },
      { href: '#preguntas', label: 'FAQ' },
    ],
    cta: 'Enrol',
  },
  hero: {
    title: 'Learn English, one stamp at a time.',
    sub: `English courses for kids, teens and adults, in person or online. There are ${LEVEL_COUNT} levels of ${WEEKS_PER_LEVEL} weeks, and every level you pass is one more stamp in your passport.`,
    ctaPrimary: 'I want to enrol',
    ctaWhatsapp: 'Message us',
    passportLabel: 'Ecu593 English student passport',
    docHead: ['Student passport', 'Pasaporte de estudiante'],
    idLabels: { type: 'Type / Tipo', code: 'Code / Código', number: 'No. / N.º' },
    fields: [
      { label: 'Holder / Titular', value: 'You' },
      { label: 'Destination / Destino', value: 'English' },
      { label: 'Programs / Programas', value: 'Kids · Teens · Adults' },
      { label: 'Levels / Niveles', value: `${LEVEL_COUNT} × ${WEEKS_PER_LEVEL} weeks` },
      { label: 'Mode / Modalidad', value: 'In person · Online' },
      { label: 'Pass mark / Nota para aprobar', value: '7 / 10' },
    ],
    mrz: ['P<ECU593<<ENGLISH<<LEARN<GROW<ACHIEVE', 'YOU<<LEVEL01<<12X4<WEEKS<<PASS<7<10'],
    stamps: {
      slogan: { top: 'Learn · Grow · Achieve', main: '593', bottom: 'Ecu593 English' },
      entry: { top: 'Entry', main: 'Level 01', bottom: 'Week 1' },
      modality: { top: 'In person · Online', main: 'ECU', bottom: 'Ecuador · 593' },
    },
    cover: { country: 'Ecuador · 593', title: 'Passport', subtitle: 'Ecu593 English' },
  },
  programs: {
    title: 'A visa for every age',
    lead: `Kids, Teens and Adults follow the same path of ${LEVEL_COUNT} levels of ${WEEKS_PER_LEVEL} weeks. Pick the one for you or your children.`,
    band: 'Study visa',
    labels: { audience: 'For', ages: 'Ages', modality: 'Format' },
    modalityValue: 'In person · Online',
    agesFallback: 'Ask us',
    cta: (name) => `I want ${name}`,
    stampTop: 'Visa approved',
    items: {
      kids: {
        name: 'Kids',
        audience: 'Children',
        ages: pending('Rango de edad del programa Kids (inglés)'),
        pitch: 'Their first steps in English, in a group with their teacher, with a new level every four weeks.',
        focus: ['Vocabulary and pronunciation', 'Speaking from the first class', 'Progress the family can see'],
        imageAlt: 'Children in an English class at Ecu593 English',
        imageBrief: 'Kids taking part in class, teacher at the front',
      },
      teens: {
        name: 'Teens',
        audience: 'Teenagers',
        ages: pending('Rango de edad del programa Teens (inglés)'),
        pitch: 'English for school, travel and whatever comes next, with written and oral assessment at every level.',
        focus: ['Grammar you actually use', 'Conversation and listening', 'Grades and attendance online'],
        imageAlt: 'Teenagers talking in English in class',
        imageBrief: 'Teens working in pairs in the classroom',
      },
      adultos: {
        name: 'Adults',
        audience: 'Young people and adults',
        ages: pending('Rango de edad del programa Adultos (inglés)'),
        pitch: 'For your job, your studies or your next trip: short levels and in-person or online schedules.',
        focus: ['English for work', 'In person or online', 'Clear goals every 4 weeks'],
        imageAlt: 'Adults studying English at Ecu593 English',
        imageBrief: 'Adults in an in-person class or joining an online class',
      },
    },
  },
  method: {
    title: `${LEVEL_COUNT} levels. One stamp for each.`,
    lead: `Each level lasts ${WEEKS_PER_LEVEL} weeks and ends with an assessment. Pass it, earn the stamp and move on to the next. In ${TOTAL_WEEKS} weeks you complete the path.`,
    counterLabel: 'Your passport',
    weeksOf: `of ${TOTAL_WEEKS} weeks`,
    levelLabel: 'Level',
    weeksRange: (from, to) => `Weeks ${from}–${to}`,
    stamp: { top: (level) => `Level ${level}`, main: 'Passed', bottom: (week) => `Week ${week}` },
    evaluation: [
      { label: 'Pass mark', value: '7 / 10' },
      { label: 'Assessment', value: 'Written + oral' },
      { label: 'Graded on', value: 'Homework, midterm and final exam' },
      { label: 'Minimum attendance', value: '75 %' },
    ],
    levelContent: pending('Contenido o temas de cada nivel (inglés)'),
  },
  modalities: {
    title: 'In person or online, you choose the entry',
    lead: 'The path, the levels and the assessment are the same. Only where you join class from changes.',
    entry: 'Entry',
    detailFallback: 'Ask us on WhatsApp',
    items: {
      presencial: {
        name: 'In person',
        pitch: 'Classroom lessons, face to face with your group and your teacher.',
        details: [
          { label: 'Campus', value: pending('Dirección de la sede (inglés)') },
          { label: 'Schedule', value: pending('Horarios presenciales (inglés)') },
          { label: 'Group size', value: pending('Cupo por grupo (inglés)') },
        ],
        imageAlt: 'Ecu593 English classroom',
        imageBrief: 'The real classroom, with students in class',
      },
      online: {
        name: 'Online',
        pitch: `The same ${LEVEL_COUNT} levels from home or the office, live with your teacher.`,
        details: [
          { label: 'Platform', value: pending('Plataforma online (inglés)') },
          { label: 'Schedule', value: pending('Horarios online (inglés)') },
          { label: 'Requirements', value: pending('Requisitos técnicos online (inglés)') },
        ],
        imageAlt: 'Student in an Ecu593 English online class',
        imageBrief: 'Student at home joining their online class',
      },
    },
  },
  endorsements: {
    title: 'What comes with your passport',
    lead: 'Ecu593 runs its own academic system. You notice it in concrete things.',
    items: [
      {
        title: 'Your progress, in plain sight',
        body: 'With your Ecu593 account you see your grades and attendance for every level, without having to ask.',
      },
      {
        title: 'One account for the whole family',
        body: 'Enrol your children, nephews or cousins and every profile lives in a single family account.',
      },
      {
        title: 'Clear rules from day one',
        body: 'You know how you are assessed: graded out of 10, you pass with 7, and both written and oral skills count.',
      },
      {
        title: 'A real person by your side',
        body: 'The front office reviews your enrolment and answers you on WhatsApp. No forms that nobody reads.',
      },
      { title: 'Teachers', body: pending('Perfil de los docentes (inglés)') },
      { title: 'Certificate', body: pending('Certificado al terminar (inglés)') },
    ],
  },
  testimonials: {
    title: 'Stories from students who already have stamps',
    pendingNote:
      'Add real testimonials (with permission) in src/data/testimonials.ts. While the list is empty, this section is not published.',
  },
  pricing: {
    title: 'Fees',
    tag: 'Fees · Ecu593 English',
    labels: {
      enrollment: 'Enrolment',
      level: 'Price per level',
      payment: 'Payment methods',
      promotions: 'Promotions',
    },
    fallback: 'Message us and we will send you current fees and promotions.',
    ctaWhatsapp: 'Ask for fees on WhatsApp',
    ctaForm: 'Leave my details',
    whatsappMessage: 'Hi, I would like to know the fees for the Ecu593 English courses.',
  },
  faq: {
    title: 'Questions before your first stamp',
    more: 'Question not here?',
    moreLink: 'Message us on WhatsApp',
    whatsappMessage: 'Hi, I have a question about the Ecu593 English courses.',
    items: [
      {
        question: 'How long is the full course?',
        answer: `${LEVEL_COUNT} levels of ${WEEKS_PER_LEVEL} weeks each, ${TOTAL_WEEKS} weeks in total. You move forward one level at a time.`,
      },
      {
        question: 'How do I enrol?',
        answer:
          'Fill in the application or message us on WhatsApp. The front office contacts you, checks your documents and payment, and places you in a group.',
      },
      {
        question: 'Can I enrol several children with one account?',
        answer: 'Yes. A family account can hold several student profiles, each with its own grades and attendance.',
      },
      {
        question: 'How do I know if I passed a level?',
        answer:
          'Each level is graded out of 10 with written and oral assessment. You pass with 7 and need at least 75 % attendance.',
      },
      {
        question: 'Are classes in person or online?',
        answer: 'Both. Study in a classroom or online, with the same level path and the same assessment.',
      },
      { question: 'How much does it cost?', answer: pending('Respuesta sobre precios (inglés)') },
      { question: 'What schedules do you offer?', answer: pending('Respuesta sobre horarios (inglés)') },
      { question: 'Do you issue a certificate?', answer: pending('Respuesta sobre certificados (inglés)') },
      {
        question: 'Can I start if I already know some English?',
        answer: pending('Respuesta sobre prueba de ubicación (inglés)'),
      },
    ],
  },
  form: {
    title: 'Enrolment application',
    lead: 'Leave your details and we will contact you. The front office reviews your application and messages you on WhatsApp to choose a group and schedule.',
    steps: ['You send the application', 'We contact you on WhatsApp', 'We check documents and payment', 'You start Level 01'],
    alt: 'Rather talk now?',
    altCta: 'Chat on WhatsApp',
    band: ['Form E-593', 'Ecu593 English'],
    fields: {
      firstName: 'First names',
      lastName: 'Last names',
      phone: 'Mobile',
      email: 'Email (optional)',
      emailPlaceholder: 'you@example.com',
      program: 'Program',
      programPlaceholder: 'Choose a program',
      programUnsure: 'Not sure yet',
      modality: 'Format',
      modalityAny: 'Either',
      message: 'Message (optional)',
      messagePlaceholder: 'Tell us your current level, the student’s age or your preferred schedule',
    },
    submit: 'Send my application',
    noscript: 'To send the form please enable JavaScript, or',
    noscriptLink: 'message us on WhatsApp',
    stamp: { top: 'Application', main: 'Received', bottom: 'Ecu593 English' },
    client: {
      phoneInvalid: 'Enter a 10-digit Ecuadorian mobile number starting with 09.',
      sending: 'Sending your application…',
      success: 'Application received, {firstName}!',
      successDetail: ' Our front office will message {phone} very soon.',
      error: 'We could not send your application right now. ',
      errorLink: 'Send it on WhatsApp',
      errorTail: ' and we will help you all the same.',
      whatsappFallback:
        'Hi, I am {firstName} {lastName}. I would like information about the {program} program ({modality}). My number is {phone}.',
    },
  },
  footer: {
    closing: 'Ready for your first stamp?',
    ctaPrimary: 'I want to enrol',
    ctaWhatsapp: 'Message us',
    contact: 'Contact',
    social: 'Social',
    rights: 'All rights reserved.',
  },
  whatsapp: {
    greeting: 'Hi, I would like information about the Ecu593 English courses.',
    fab: 'Questions? Message us',
    fabLabel: 'Message us on WhatsApp',
    chat: 'WhatsApp',
  },
  photo: {
    pending: 'Photo pending',
  },
  pending: {
    tag: 'Pending',
    title: 'Fill in src/i18n or src/config',
  },
};

export default en;
