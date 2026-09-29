import { esc, external, sectionLabel, buttonClasses } from './utils.js';
import { icon } from './icons.js';

const colors = ['bg-sun', 'bg-sky', 'bg-mint', 'bg-lilac'];
const tagTilt = ['rotate-6', '-rotate-3', 'rotate-3', '-rotate-6'];

/** Colourful service cards, each with a tilted price-tag sticker. */
export function Services({ services, booking }) {
  const cards = services.items
    .map(
      (s, i) => `
      <li class="relative flex flex-col rounded-[1.75rem] border-2 border-ink ${colors[i % colors.length]} p-6 pt-9 shadow-[5px_5px_0_0_var(--color-ink)] transition-transform duration-200 hover:-translate-y-1">
        <span class="absolute -right-3 -top-5 ${tagTilt[i % tagTilt.length]} rounded-full border-2 border-ink bg-paper px-4 py-2 font-heading text-lg font-extrabold text-ink shadow-[3px_3px_0_0_var(--color-ink)]"><span class="sr-only">${esc(services.columnLabels.price)}: </span>${esc(s.price)}</span>
        <h3 class="font-heading text-2xl font-bold leading-tight text-ink">${esc(s.name)}</h3>
        ${s.description ? `<p class="mt-3 flex-1 text-sm leading-relaxed text-ink">${esc(s.description)}</p>` : '<span class="flex-1"></span>'}
        <p class="mt-5"><span class="inline-flex rounded-full border-2 border-ink bg-paper px-3 py-1 text-xs font-bold text-ink"><span class="sr-only">${esc(services.columnLabels.duration)}: </span>${esc(s.duration)}</span></p>
      </li>`,
    )
    .join('');

  return `
<section id="services" class="scroll-mt-24 bg-paper px-4 py-20 md:px-6 md:py-28" aria-labelledby="services-heading">
  <div class="mx-auto max-w-6xl">
    <div class="mx-auto max-w-2xl text-center">
      ${sectionLabel(services.label, 'bg-lilac')}
      <h2 id="services-heading" class="mt-6 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-ink md:text-6xl">${esc(services.heading)}</h2>
      <p class="mt-6 text-lg leading-relaxed text-muted">${esc(services.intro)}</p>
    </div>
    <ul class="mt-16 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">${cards}</ul>
    <div class="mt-14 flex flex-col items-center gap-6 rounded-[2rem] border-2 border-dashed border-ink p-6 text-center md:flex-row md:justify-between md:text-left">
      ${services.note ? `<p class="max-w-2xl text-base font-medium text-ink">${esc(services.note)}</p>` : '<span></span>'}
      <a href="${esc(booking.url)}" ${external} class="shrink-0 ${buttonClasses.solid}">${esc(services.ctaLabel)} ${icon('arrowUpRight', 'h-4 w-4')}</a>
    </div>
  </div>
</section>`;
}
