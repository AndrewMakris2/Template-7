import { esc, sectionLabel } from './utils.js';

/** Reviews as a chat thread: alternating message bubbles in a phone-style window. */
export function Testimonials({ testimonials, business }) {
  const msgs = testimonials.items
    .map((t, i) => {
      const initial = esc(t.name.trim().charAt(0).toUpperCase());
      const right = i % 2 === 1;
      return `
      <li class="flex items-end gap-3 ${right ? 'flex-row-reverse' : ''}">
        <span class="grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-ink ${right ? 'bg-mint' : 'bg-sun'} font-heading font-extrabold text-ink" aria-hidden="true">${initial}</span>
        <figure class="max-w-[80%] ${right ? 'text-right' : ''}">
          <blockquote class="rounded-3xl border-2 border-ink px-5 py-4 text-left text-base font-medium leading-relaxed md:text-lg ${right ? 'rounded-br-md bg-accent text-on-accent' : 'rounded-bl-md bg-cream text-ink'}">
            <p>${esc(t.quote)}</p>
          </blockquote>
          <figcaption class="mt-2 px-2 text-xs font-semibold text-muted">${esc(t.name)}${t.detail ? ` &middot; ${esc(t.detail)}` : ''}</figcaption>
        </figure>
      </li>`;
    })
    .join('');

  return `
<section id="testimonials" class="scroll-mt-24 bg-mint px-4 py-20 md:px-6 md:py-28" aria-labelledby="testimonials-heading">
  <div class="mx-auto max-w-2xl text-center">
    ${sectionLabel(testimonials.label, 'bg-paper')}
    <h2 id="testimonials-heading" class="mt-6 font-heading text-4xl font-extrabold tracking-tight text-ink md:text-6xl">${esc(testimonials.heading)}</h2>
  </div>
  <div class="mx-auto mt-12 max-w-2xl overflow-hidden rounded-[2rem] border-2 border-ink bg-paper shadow-[8px_8px_0_0_var(--color-ink)]">
    <div class="flex items-center gap-3 border-b-2 border-ink bg-sun px-5 py-3" aria-hidden="true">
      <span class="h-3 w-3 rounded-full border-2 border-ink bg-mint"></span>
      <span class="font-heading font-bold text-ink">${esc(business.name)}</span>
    </div>
    <ul class="space-y-6 p-5 md:p-8">
      ${msgs}
      <li class="flex items-end gap-3" aria-hidden="true">
        <span class="h-10 w-10 shrink-0"></span>
        <span class="flex gap-1.5 rounded-3xl rounded-bl-md border-2 border-ink bg-cream px-5 py-4">
          <span class="typing-dot h-2 w-2 rounded-full bg-ink"></span><span class="typing-dot h-2 w-2 rounded-full bg-ink [animation-delay:0.15s]"></span><span class="typing-dot h-2 w-2 rounded-full bg-ink [animation-delay:0.3s]"></span>
        </span>
      </li>
    </ul>
  </div>
</section>`;
}
