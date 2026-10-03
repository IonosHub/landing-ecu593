import type { Maybe } from '../lib/pending';

export type ProgramId = 'kids' | 'teens' | 'adultos';
export type ModalityId = 'presencial' | 'online';
export type PriceId = 'enrollment' | 'level' | 'payment' | 'promotions';
export type StampInk = 'flame' | 'sky' | 'violet' | 'navy';

/** A photo slot. Without `src` it renders as an empty photo window describing the shot. */
export interface ImageRef {
  src?: string;
  alt: string;
  /** What the real photo should show; printed inside the empty window. */
  brief: string;
}

/** Language-neutral facts; copy lives in src/i18n. */
export interface Program {
  id: ProgramId;
  code: string;
  stampInk: StampInk;
  /** Path under /public, e.g. "/imgs/kids.jpg". Shared by every language. */
  photo?: string;
}

export interface Modality {
  id: ModalityId;
  stampInk: StampInk;
  photo?: string;
}

export interface Level {
  number: number;
  weekFrom: number;
  weekTo: number;
  cefr: Maybe<string>;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image?: ImageRef;
}
