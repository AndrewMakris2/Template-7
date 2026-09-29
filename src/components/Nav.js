import { esc, external, buttonClasses } from './utils.js';
import { icon } from './icons.js';

/** Floating pill nav with a hard shadow; on mobile it opens a dropdown card. */
export function Nav({ business, nav, social, booking }) {
  const instagram = social.find((s) => s.platform === 'instagram');
  const links = nav.links
    .map(
      (l) =>
        `<li><a href="${esc(l.href)}" class="rounded-full px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-sun">${esc(l.label)}</a></li>`,
    )
    .join('');
  const tints = ['hover:bg-sun', 'hover:bg-sky', 'hover:bg-mint', 'hover:bg-lilac', 'hover:bg-cream'];
  const mobileLinks = nav.links
    .map(
      (l, i) =>
        `<li><a href="${esc(l.href)}" class="block rounded-2xl px-4 py-3 font-heading text-3xl font-extrabold text-ink transition-colors ${tints[i % tints.length]}" data-menu-link>${esc(l.label)}</a></li>`,
    )
    .join('');
  const igLink = instagram
    ? `<a href="${esc(instagram.url)}" ${external} class="hidden h-10 w-10 items-center justify-center rounded-full border-2 border-ink bg-sky text-ink transition-transform hover:-rotate-12 sm:inline-flex" aria-label="${esc(instagram.label)}">${icon('instagram', 'h-5 w-5')}</a>`
    : '';

  return `
<a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-on-ink">${esc(nav.skipLinkLabel)}</a>
<header class="fixed inset-x-0 top-3 z-50 px-3 md:top-5" data-header>
  <nav class="relative mx-auto flex max-w-5xl items-center justify-between gap-3 rounded-full border-2 border-ink bg-paper py-2 pl-5 pr-2 shadow-[4px_4px_0_0_var(--color-ink)]" aria-label="Primary">
    <a href="#top" class="whitespace-nowrap font-heading text-xl font-extrabold tracking-tight text-ink">${esc(business.name)}</a>
    <ul class="hidden items-center lg:flex">${links}</ul>
    <div class="flex items-center gap-2">
      ${igLink}
      <span class="hidden sm:block"><a href="${esc(booking.url)}" ${external} class="whitespace-nowrap !px-5 !py-2 ${buttonClasses.solid}">${esc(booking.label)}</a></span>
      <button type="button" class="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink bg-sun text-ink lg:hidden" aria-expanded="false" aria-controls="mobile-menu" aria-label="${esc(nav.menuOpenLabel)}" data-menu-toggle data-label-open="${esc(nav.menuOpenLabel)}" data-label-close="${esc(nav.menuCloseLabel)}">
        <span data-icon-open>${icon('menu', 'h-5 w-5')}</span>
        <span data-icon-close hidden>${icon('close', 'h-5 w-5')}</span>
      </button>
    </div>
    <div id="mobile-menu" class="absolute inset-x-0 top-full mt-3 rounded-[2rem] border-2 border-ink bg-paper p-4 shadow-[6px_6px_0_0_var(--color-ink)] lg:hidden" hidden data-menu>
      <ul>${mobileLinks}</ul>
      <a href="${esc(booking.url)}" ${external} class="mt-4 w-full ${buttonClasses.solid}">${esc(booking.label)} ${icon('arrowUpRight', 'h-4 w-4')}</a>
    </div>
  </nav>
</header>`;
}
