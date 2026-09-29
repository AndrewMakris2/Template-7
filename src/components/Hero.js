import { esc, external } from './utils.js';
import { icon } from './icons.js';

const stickerColors = ['bg-sky', 'bg-mint', 'bg-lilac', 'bg-paper'];
const stickerTilt = ['-rotate-3', 'rotate-2', '-rotate-1', 'rotate-3'];

/** Bento hero: a sunny name tile, a big photo tile with sticker specialties, and two link tiles. */
export function Hero({ hero, booking, about, business }) {
  const tile = 'rounded-[2rem] border-2 border-ink shadow-[5px_5px_0_0_var(--color-ink)]';
  const stickers = about.specialties
    .map(
      (t, i) =>
        `<li class="${stickerColors[i % stickerColors.length]} ${stickerTilt[i % stickerTilt.length]} rounded-full border-2 border-ink px-4 py-2 font-heading text-sm font-bold text-ink shadow-[3px_3px_0_0_var(--color-ink)] md:text-base">${esc(t)}</li>`,
    )
    .join('');

  return `
<section id="top" class="bg-paper px-4 pb-16 pt-24 md:px-6 md:pt-32" aria-labelledby="hero-heading">
  <div class="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:gap-5 lg:grid-cols-4">
    <div class="${tile} bg-sun p-7 md:p-10 lg:col-span-2">
      <p class="inline-block rounded-full border-2 border-ink bg-paper px-3 py-1 text-xs font-semibold text-ink">${esc(hero.eyebrow)}</p>
      <h1 id="hero-heading" class="mt-6 font-heading text-5xl font-extrabold leading-[0.9] tracking-tight text-ink sm:text-6xl md:text-7xl xl:text-8xl">${esc(hero.heading)}</h1>
      <p class="mt-6 max-w-md text-lg font-medium leading-snug text-ink md:text-xl">${esc(hero.tagline)}</p>
    </div>

    <div class="${tile} relative min-h-[24rem] overflow-hidden bg-lilac lg:col-span-2 lg:row-span-2">
      <img src="${esc(hero.image.src)}" alt="${esc(hero.image.alt)}" class="absolute inset-0 h-full w-full object-cover" fetchpriority="high" decoding="async" />
      <h2 class="sr-only">${esc(about.specialtiesLabel)}</h2>
      <ul class="absolute inset-x-4 bottom-4 flex flex-wrap gap-2 md:inset-x-6 md:bottom-6">${stickers}</ul>
    </div>

    <a href="${esc(booking.url)}" ${external} class="${tile} group flex min-h-[11rem] flex-col justify-between bg-accent p-6 text-on-accent transition-transform hover:-translate-y-1 hover:-rotate-1">
      <span class="grid h-12 w-12 place-items-center rounded-full border-2 border-ink bg-paper text-ink transition-transform group-hover:rotate-45">${icon('arrowUpRight', 'h-5 w-5')}</span>
      <span class="font-heading text-3xl font-extrabold leading-none">${esc(hero.ctaLabel)}</span>
    </a>
    <a href="${esc(hero.secondaryCtaHref)}" class="${tile} group flex min-h-[11rem] flex-col justify-between bg-sky p-6 text-ink transition-transform hover:-translate-y-1 hover:rotate-1">
      <span class="text-sm font-semibold">${esc(business.location)}</span>
      <span class="flex items-end justify-between gap-3 font-heading text-3xl font-extrabold leading-none">${esc(hero.secondaryCtaLabel)} <span class="transition-transform group-hover:translate-y-1">${icon('arrowRight', 'h-7 w-7 rotate-90')}</span></span>
    </a>
  </div>
</section>`;
}
