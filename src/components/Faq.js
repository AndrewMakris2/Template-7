import { esc, sectionLabel } from './utils.js';

/** Optional FAQ as chunky cards (native <details>, no JavaScript). Shown only when `faq.enabled` is true. */
export function Faq({ faq }) {
  if (!faq?.enabled) return '';
  const items = faq.items
    .map(
      (item) => `
      <details class="group rounded-[1.75rem] border-2 border-ink bg-paper shadow-[5px_5px_0_0_var(--color-ink)]">
        <summary class="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-heading text-lg font-bold text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink md:text-xl [&::-webkit-details-marker]:hidden">
          ${esc(item.q)}
          <span class="grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 border-ink bg-sun text-xl leading-none transition-transform duration-200 group-open:rotate-45" aria-hidden="true">+</span>
        </summary>
        <p class="px-6 pb-6 text-base leading-relaxed text-ink">${esc(item.a)}</p>
      </details>`,
    )
    .join('');

  return `
<section id="faq" class="scroll-mt-24 bg-lilac px-4 py-20 md:px-6 md:py-28" aria-labelledby="faq-heading">
  <div class="mx-auto max-w-3xl">
    <div class="text-center">
      ${sectionLabel(faq.label, 'bg-paper')}
      <h2 id="faq-heading" class="mt-6 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-ink md:text-6xl">${esc(faq.heading)}</h2>
    </div>
    <div class="mt-12 space-y-5">${items}</div>
  </div>
</section>`;
}
