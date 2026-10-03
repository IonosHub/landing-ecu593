/**
 * Page choreography with GSAP. Everything here only runs when the visitor allows motion;
 * otherwise the page is fully printed from the start (all content is visible by default).
 *
 * Hooks (data attributes set in the components):
 *   [data-hero] [data-spread] [data-pitch] [data-data-page] [data-book-cover]  passport opening
 *   [data-hero-title] [data-hero-line] [data-doc-line]                         hero text
 *   [data-stamp]               rubber stamp thump        [data-anim="settle"]  card eases into place
 *   [data-level] [data-counter] level path + counter     [data-anim="row"|"window"]  quieter reveals
 *   [data-closing-title] [data-fab]
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

const root = document.documentElement;
const $ = <T extends Element = HTMLElement>(selector: string, scope: ParentNode = document) =>
  scope.querySelector<T>(selector);
const $$ = <T extends Element = HTMLElement>(selector: string, scope: ParentNode = document) =>
  Array.from(scope.querySelectorAll<T>(selector));

/** The stamp press: lands oversized and blurred, settles at its printed rotation. */
const thump = (targets: gsap.TweenTarget, vars: gsap.TweenVars = {}) =>
  gsap.from(targets, {
    autoAlpha: 0,
    scale: 1.7,
    rotation: '+=12',
    filter: 'blur(3px)',
    duration: 0.55,
    ease: 'power4.out',
    clearProps: 'filter',
    ...vars,
  });

const onceInView = (trigger: Element, start = 'top 82%'): ScrollTrigger.Vars => ({ trigger, start, once: true });

function openPassport(desktop: boolean) {
  const hero = $('[data-hero]');
  if (!hero) return;
  const cover = $('[data-book-cover]', hero)!;
  const pitch = $('[data-pitch]', hero)!;
  const dataPage = $('[data-data-page]', hero)!;
  const title = $('[data-hero-title]', hero)!;
  const lines = $$('[data-hero-line]', hero);
  const docLines = $$('[data-doc-line]', hero);
  const stamps = ['.stamp-a', '.stamp-b', '.stamp-c'].map((s) => $(s, hero)).filter(Boolean);

  const split = SplitText.create(title, { type: 'words,lines', mask: 'lines' });
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.15 });

  if (desktop) {
    // Closed booklet sits centred; opening swings the cover over the spine and slides the book right.
    gsap.set([pitch, cover], { xPercent: -50 });
    gsap.set(dataPage, { autoAlpha: 0 });
    // The cover must stay fully opaque while it turns: opacity < 1 flattens 3D and shows its back mirrored.
    const turn = 1.5;
    tl.from([pitch, cover], { y: 48, autoAlpha: 0, duration: 0.8 })
      .addLabel('open', '+=0.3')
      .to(cover, { rotationY: -180, duration: turn, ease: 'power2.inOut' }, 'open')
      .to([pitch, cover], { xPercent: 0, duration: turn, ease: 'power2.inOut' }, 'open')
      .set(dataPage, { autoAlpha: 1 }, `open+=${turn / 2}`)
      .to(cover, { autoAlpha: 0, duration: 0.3, ease: 'none' }, `open+=${turn}`)
      .from(docLines, { autoAlpha: 0, y: 10, stagger: 0.05, duration: 0.5 }, `open+=${turn}`)
      .addLabel('content', `open+=${turn * 0.6}`);
  } else {
    // Stacked layout: the cover lifts open like a booklet held in the hand, then is put away.
    tl.from(cover, { y: 32, autoAlpha: 0, duration: 0.6 })
      .addLabel('open', '+=0.3')
      .to(cover, { rotationY: -100, duration: 0.9, ease: 'power2.in' }, 'open')
      .to(cover, { autoAlpha: 0, duration: 0.2, ease: 'none' }, 'open+=0.9')
      .addLabel('content', 'open+=0.5');
  }

  tl.from(split.words, { yPercent: 110, duration: 0.8, stagger: 0.05 }, 'content')
    .from(lines, { autoAlpha: 0, y: 18, stagger: 0.12, duration: 0.6 }, '<0.35')
    .add(thump(stamps, { stagger: 0.28 }), '-=0.15')
    .set(cover, { display: 'none' });
}

/** Cards (visas, fee sheet, form) settle softly into place: a short rise and fade, no rotation. */
function settleCards() {
  $$('[data-anim="settle"]').forEach((card) => {
    gsap.from(card, {
      autoAlpha: 0,
      y: 36,
      scale: 0.985,
      duration: 1.2,
      ease: 'power2.out',
      scrollTrigger: onceInView(card, 'top 90%'),
    });
  });
}

/** Stamps outside the hero and the level path land after their sheet has arrived. */
function sectionStamps() {
  $$('[data-stamp]')
    .filter((stamp) => !stamp.closest('[data-hero], [data-level]'))
    .forEach((stamp) => {
      thump(stamp, { delay: stamp.closest('[data-anim="settle"]') ? 0.5 : 0.1, scrollTrigger: onceInView(stamp, 'top 85%') });
    });
}

/** Signature moment: each level gets stamped as it enters, and the passport counter follows. */
function levelPath() {
  const counter = $('[data-counter]');
  const levels = $$('[data-level]');
  if (!counter || levels.length === 0) return;

  const count = $('[data-stamp-count]', counter)!;
  const weeks = $('[data-week-count]', counter)!;
  const track = $('[data-track]', counter)!;
  const weeksPerLevel = Number(counter.dataset.weeksPerLevel);
  let inked = 0;

  const render = () => {
    count.textContent = String(inked).padStart(2, '0');
    weeks.textContent = String(inked * weeksPerLevel);
    gsap.to(track, { scaleX: inked / levels.length, duration: 0.5, ease: 'power3.out' });
  };
  gsap.set(track, { scaleX: 0, transformOrigin: 'left center' });
  render();

  const presses = new Map(
    levels.map((level) => [level, thump($('[data-stamp]', level)!, { paused: true, onStart: () => { inked += 1; render(); } })]),
  );

  ScrollTrigger.batch(levels, {
    start: 'top 78%',
    once: true,
    onEnter: (batch) => batch.forEach((level, i) => presses.get(level as HTMLElement)?.delay(i * 0.18).play()),
  });
}

function quietReveals() {
  $$('[data-anim="row"]').forEach((row) => {
    gsap.from(row, { autoAlpha: 0, y: 28, duration: 0.8, ease: 'power3.out', scrollTrigger: onceInView(row, 'top 90%') });
  });

  $$('[data-anim="window"]')
    .filter((frame) => !frame.closest('[data-anim="settle"]'))
    .forEach((frame) => {
      gsap.from(frame, {
        clipPath: 'inset(0% 0% 100% 0% round 10px)',
        duration: 1.1,
        ease: 'power3.inOut',
        scrollTrigger: onceInView(frame, 'top 85%'),
      });
    });

  const closing = $('[data-closing-title]');
  if (closing) {
    const split = SplitText.create(closing, { type: 'words,lines', mask: 'lines' });
    gsap.from(split.words, { yPercent: 110, duration: 0.9, stagger: 0.06, ease: 'power3.out', scrollTrigger: onceInView(closing, 'top 85%') });
  }

  const fab = $('[data-fab]');
  if (fab) gsap.from(fab, { autoAlpha: 0, y: 24, scale: 0.9, duration: 0.7, ease: 'power3.out', delay: 2.6 });
}

const mm = gsap.matchMedia();

mm.add(
  { motion: '(prefers-reduced-motion: no-preference)', desktop: '(min-width: 901px)' },
  (context) => {
    const { motion, desktop } = context.conditions as { motion: boolean; desktop: boolean };
    if (!motion) return;

    root.classList.add('gsap-on');
    openPassport(desktop);
    settleCards();
    sectionStamps();
    levelPath();
    quietReveals();

    return () => root.classList.remove('gsap-on');
  },
);

// Web fonts change heights; recompute trigger positions once they are in.
document.fonts?.ready.then(() => ScrollTrigger.refresh());
