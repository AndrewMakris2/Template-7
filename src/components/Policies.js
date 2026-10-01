import { esc, sectionLabel } from './utils.js';

const colors = ['bg-sun', 'bg-sky', 'bg-mint', 'bg-lilac'];

/** Optional booking policies as cards with coloured number badges. Shown only when `policies.enabled` is true. */
export function Policies({ policies }) {
  if (!policies?.enabled) return '';
  const items = policies.items
    .map(
      (p, i) => `
      <div class="flex gap-4 rounded-[1.75rem] border-2 border-ink bg-cream p-6 shadow-[5px_5px_0_0_var(--color-ink)]">
        <span class="grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-ink ${colors[i % colors.length]} font-heading font-extrabold text-ink" aria-hidden="true">${i + 1}</span>
        <div>
          <dt class="font-heading text-xl font-bold text-ink">${esc(p.title)}</dt>
          <dd class="mt-2 text-sm leading-relaxed text-ink">${esc(p.text)}</dd>
        </div>
      </div>`,
    )
    .join('');

  return `
<section id="policies" class="scroll-mt-24 bg-paper px-4 py-20 md:px-6 md:py-28" aria-labelledby="policies-heading">
  <div class="mx-auto max-w-5xl">
    <div class="mx-auto max-w-2xl text-center">
      ${sectionLabel(policies.label, 'bg-sky')}
      <h2 id="policies-heading" class="mt-6 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-ink md:text-6xl">${esc(policies.heading)}</h2>
    </div>
    <dl class="mt-14 grid gap-6 md:grid-cols-2">${items}</dl>
  </div>
</section>`;
}
