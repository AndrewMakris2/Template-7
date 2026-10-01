import { esc, sectionLabel, buttonClasses } from './utils.js';
import { icon } from './icons.js';

const tagTilt = ['rotate-6', '-rotate-3', 'rotate-3'];

/** Optional bridal / events packages as white cards with price stickers. Shown only when `events.enabled` is true. */
export function Events({ events }) {
  if (!events?.enabled) return '';
  const cards = events.packages
    .map(
      (p, i) => `
      <li class="relative flex flex-col rounded-[1.75rem] border-2 border-ink bg-paper p-6 pt-9 shadow-[5px_5px_0_0_var(--color-ink)]">
        <span class="absolute -right-3 -top-5 ${tagTilt[i % tagTilt.length]} rounded-full border-2 border-ink bg-sun px-4 py-2 font-heading text-lg font-extrabold text-ink shadow-[3px_3px_0_0_var(--color-ink)]">${esc(p.price)}</span>
        <h3 class="font-heading text-2xl font-bold leading-tight text-ink">${esc(p.name)}</h3>
        ${p.description ? `<p class="mt-3 text-sm leading-relaxed text-ink">${esc(p.description)}</p>` : ''}
      </li>`,
    )
    .join('');

  return `
<section id="events" class="scroll-mt-24 bg-sky px-4 py-20 md:px-6 md:py-28" aria-labelledby="events-heading">
  <div class="mx-auto max-w-6xl">
    <div class="mx-auto max-w-2xl text-center">
      ${sectionLabel(events.label, 'bg-paper')}
      <h2 id="events-heading" class="mt-6 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-ink md:text-6xl">${esc(events.heading)}</h2>
      <p class="mt-6 text-lg leading-relaxed text-ink">${esc(events.intro)}</p>
    </div>
    <ul class="mt-16 grid gap-x-6 gap-y-10 md:grid-cols-3">${cards}</ul>
    <div class="mt-14 flex flex-col items-center gap-6 rounded-[2rem] border-2 border-dashed border-ink p-6 text-center md:flex-row md:justify-between md:text-left">
      ${events.note ? `<p class="max-w-2xl text-base font-medium text-ink">${esc(events.note)}</p>` : '<span></span>'}
      <a href="#contact" class="shrink-0 ${buttonClasses.white}">${esc(events.ctaLabel)} ${icon('arrowRight', 'h-4 w-4')}</a>
    </div>
  </div>
</section>`;
}
