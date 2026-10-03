import type { Maybe } from '../lib/pending';

/** A photo slot. Without `src` it renders as an empty photo window describing the shot. */
export interface ImageRef {
  src?: string;
  alt: string;
  /** What the real photo should show; printed inside the empty window. */
  brief: string;
}

export interface Program {
  id: 'kids' | 'teens' | 'adultos';
  name: string;
  code: string;
  audience: string;
  ages: Maybe<string>;
  pitch: string;
  focus: string[];
  image: ImageRef;
  stampInk: 'flame' | 'sky' | 'violet';
}

export interface Level {
  number: number;
  weekFrom: number;
  weekTo: number;
  cefr: Maybe<string>;
}

export interface Modality {
  id: 'presencial' | 'online';
  name: string;
  pitch: string;
  details: { label: string; value: Maybe<string> }[];
  image: ImageRef;
}

export interface Endorsement {
  title: string;
  body: Maybe<string>;
}

export interface Faq {
  question: string;
  answer: Maybe<string>;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image?: ImageRef;
}

export interface PriceItem {
  label: string;
  value: Maybe<string>;
}
