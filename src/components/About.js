import { esc, sectionLabel } from './utils.js';

const stickerColors = ['bg-sun', 'bg-sky', 'bg-mint', 'bg-lilac'];
const stickerTilt = ['rotate-2', '-rotate-2', 'rotate-1', '-rotate-3'];

/** Taped polaroid of the stylist beside a chatty intro and specialty stickers. */
export function About({ about, business }) {
  const bio = about.bio.map((p) => `<p>${esc(p)}</p>`).join('');
  const tags = about.specialties
    .map(
      (t, i) =>
        `<li class="${stickerColors[i % stickerColors.length]} ${stickerTilt[i % stickerTilt.length]} rounded-full border-2 border-ink px-4 py-2 font-heading text-sm font-bold text-ink">${esc(t)}</li>`,
    )
    .join('');

  return `
<section id="about" class="scroll-mt-24 bg-paper px-4 py-20 md:px-6 md:py-28" aria-labelledby="about-heading">
  <div class="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
    <figure class="relative mx-auto w-full max-w-sm -rotate-3 border-2 border-ink bg-paper p-4 pb-5 shadow-[8px_8px_0_0_var(--color-ink)] transition-transform duration-300 hover:rotate-0">
      <span class="absolute -top-4 left-1/2 h-8 w-28 -translate-x-1/2 rotate-3 border border-ink/20 bg-sun/80" aria-hidden="true"></span>
      <img src="${esc(about.image.src)}" alt="${esc(about.image.alt)}" class="aspect-[4/5] w-full border-2 border-ink object-cover" loading="lazy" decoding="async" width="900" height="1000" />
      <figcaption class="mt-4 text-center font-heading text-2xl font-extrabold text-ink" aria-hidden="true">${esc(business.name)}</figcaption>
    </figure>
    <div>
      ${sectionLabel(about.label, 'bg-mint')}
      <h2 id="about-heading" class="mt-6 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-ink md:text-5xl">${esc(about.heading)}</h2>
      <div class="mt-6 space-y-4 text-lg leading-relaxed text-muted">${bio}</div>
      <h3 class="mt-10 text-xs font-bold uppercase tracking-wider text-ink">${esc(about.specialtiesLabel)}</h3>
      <ul class="mt-4 flex flex-wrap gap-3">${tags}</ul>
    </div>
  </div>
</section>`;
}
