/**
 * Scroll choreography.
 * - [data-reveal] gets `.is-in` when it enters the viewport.
 * - [data-stamp] gets `.is-inked` (the stamp thump).
 * Both are no-ops unless <html> has `.motion-ok` (set in BaseLayout).
 */
const root = document.documentElement;

if (root.classList.contains('motion-ok') && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        el.classList.add(el.hasAttribute('data-stamp') ? 'is-inked' : 'is-in');
        observer.unobserve(el);
      }
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.2 },
  );

  document.querySelectorAll('[data-reveal], [data-stamp]').forEach((el) => observer.observe(el));
} else {
  root.classList.remove('motion-ok');
}
