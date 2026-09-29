import { esc, sectionLabel } from './utils.js';
import { icon } from './icons.js';

const tilt = ['-rotate-2', 'rotate-1', 'rotate-2', '-rotate-1', 'rotate-3', '-rotate-3'];

/** Scattered polaroids that straighten up on hover; some are taped down. */
export function Gallery({ gallery }) {
  const items = gallery.images
    .map(
      (img, i) => `
      <li class="relative">
        ${i % 3 === 1 ? '<span class="absolute -top-3 left-1/2 z-10 h-6 w-20 -translate-x-1/2 -rotate-6 border border-ink/20 bg-sky/80" aria-hidden="true"></span>' : ''}
        <button type="button" class="${tilt[i % tilt.length]} relative block w-full border-2 border-ink bg-paper p-2.5 pb-8 shadow-[5px_5px_0_0_var(--color-ink)] transition duration-300 hover:z-10 hover:rotate-0 hover:scale-[1.04] focus-visible:rotate-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink md:p-3 md:pb-12" data-lightbox-item="${i}" data-full="${esc(img.full || img.src)}" aria-label="${esc(`${gallery.openImageLabel}: ${img.alt}`)}">
          <img src="${esc(img.src)}" alt="${esc(img.alt)}" class="aspect-square w-full border-2 border-ink object-cover" loading="lazy" decoding="async" width="800" height="800" />
        </button>
      </li>`,
    )
    .join('');
  const ctrl = 'absolute inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink text-ink shadow-[3px_3px_0_0_var(--color-ink)]';

  return `
<section id="gallery" class="scroll-mt-24 overflow-hidden bg-cream px-4 py-20 md:px-6 md:py-28" aria-labelledby="gallery-heading">
  <div class="mx-auto max-w-5xl text-center">
    ${sectionLabel(gallery.label, 'bg-sky')}
    <h2 id="gallery-heading" class="mt-6 font-heading text-5xl font-extrabold tracking-tight text-ink md:text-7xl">${esc(gallery.heading)}</h2>
  </div>
  <ul class="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-5 md:grid-cols-3 md:gap-8">${items}</ul>

  <dialog class="lightbox m-0 h-full max-h-none w-full max-w-none bg-ink/95 p-0 backdrop:bg-transparent" aria-label="${esc(gallery.heading)}" data-lightbox>
    <div class="flex h-full w-full items-center justify-center p-4 md:p-16" data-lightbox-backdrop>
      <img src="" alt="" class="max-h-full max-w-full border-4 border-paper object-contain" data-lightbox-img />
    </div>
    <button type="button" class="${ctrl} right-4 top-4 bg-sun" aria-label="${esc(gallery.lightboxCloseLabel)}" data-lightbox-close>${icon('close', 'h-6 w-6')}</button>
    <button type="button" class="${ctrl} left-3 top-1/2 -translate-y-1/2 bg-paper md:left-6" aria-label="${esc(gallery.lightboxPrevLabel)}" data-lightbox-prev>${icon('chevronLeft', 'h-6 w-6')}</button>
    <button type="button" class="${ctrl} right-3 top-1/2 -translate-y-1/2 bg-paper md:right-6" aria-label="${esc(gallery.lightboxNextLabel)}" data-lightbox-next>${icon('chevronRight', 'h-6 w-6')}</button>
    <p class="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full border-2 border-ink bg-paper px-4 py-1 font-heading text-sm font-bold text-ink" aria-live="polite" data-lightbox-counter></p>
  </dialog>
</section>`;
}
