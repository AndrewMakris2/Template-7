import { esc, external, telHref } from './utils.js';
import { icon } from './icons.js';

const socialColors = ['bg-sun', 'bg-sky', 'bg-mint', 'bg-lilac'];

// A repeating wave used as the footer's top edge.
const wave = (() => {
  let d = 'M0 40';
  for (let x = 0; x < 1440; x += 120) d += ` Q ${x + 30} 10 ${x + 60} 40 T ${x + 120} 40`;
  return `${d} V 80 H 0 Z`;
})();

/** Ink footer with a wavy top edge, big name and candy-coloured social buttons. */
export function Footer({ business, contact, social, footer }) {
  const year = new Date().getFullYear();
  const hours = footer.hours.map((h) => `<div class="flex justify-between gap-6"><dt>${esc(h.days)}</dt><dd class="font-semibold text-on-ink">${esc(h.time)}</dd></div>`).join('');
  const socials = social
    .map(
      (s, i) =>
        `<li><a href="${esc(s.url)}" ${external} class="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-on-ink ${socialColors[i % socialColors.length]} text-ink transition-transform hover:-rotate-12 hover:scale-110" aria-label="${esc(s.label)}">${icon(s.platform)}</a></li>`,
    )
    .join('');
  const heading = 'font-heading text-lg font-bold text-sun';

  return `
<footer class="bg-paper">
  <svg class="block h-10 w-full text-ink md:h-14" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true"><path fill="currentColor" d="${wave}" /></svg>
  <div class="bg-ink px-4 pb-10 pt-10 text-on-ink/80 md:px-6">
    <div class="mx-auto max-w-6xl">
      <a href="#top" class="font-heading text-5xl font-extrabold tracking-tight text-on-ink md:text-7xl">${esc(business.name)}</a>
      <p class="mt-3 max-w-md text-base">${esc(business.tagline)}</p>
      <div class="mt-12 grid gap-10 md:grid-cols-3">
        <div>
          <h2 class="${heading}">${esc(footer.hoursHeading)}</h2>
          <dl class="mt-3 max-w-xs space-y-1 text-sm">${hours}</dl>
        </div>
        <div>
          <h2 class="${heading}">${esc(footer.contactHeading)}</h2>
          <address class="mt-3 space-y-1 text-sm not-italic">
            <p>${esc(contact.address)}</p>
            <p><a href="mailto:${esc(contact.email)}" class="font-semibold text-on-ink underline decoration-2 underline-offset-2">${esc(contact.email)}</a></p>
            <p><a href="${esc(telHref(contact.phone))}" class="font-semibold text-on-ink underline decoration-2 underline-offset-2">${esc(contact.phone)}</a></p>
          </address>
        </div>
        <div>
          <h2 class="${heading}">${esc(footer.socialHeading)}</h2>
          <ul class="mt-4 flex gap-3">${socials}</ul>
        </div>
      </div>
      <div class="mt-14 flex flex-col gap-3 border-t-2 border-dashed border-on-ink/30 pt-6 text-sm sm:flex-row sm:justify-between">
        <p>&copy; ${year} ${esc(footer.copyrightName)}. ${esc(footer.copyrightSuffix)}</p>
        <a href="#top" class="inline-flex items-center gap-2 font-semibold text-on-ink hover:text-sun">${esc(footer.backToTopLabel)} ${icon('arrowUp', 'h-4 w-4')}</a>
      </div>
    </div>
  </div>
</footer>`;
}
