/**
 * Shared helpers for components. Structural only — no content, no colors.
 */

/** Escape a value for safe use in HTML text or attribute values. */
export function esc(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Attributes for links that leave the site. */
export const external = 'target="_blank" rel="noopener noreferrer"';

/** Hard offset shadow in the ink color ("sticker" look). */
export const shadow = 'shadow-[4px_4px_0_0_var(--color-ink)]';

/** Section label as a tilted sticker. */
export function sectionLabel(text, color = 'bg-sun') {
  return `<p class="inline-block -rotate-2 rounded-full border-2 border-ink ${color} px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-ink shadow-[3px_3px_0_0_var(--color-ink)]">${esc(text)}</p>`;
}

/** Turn a display phone number into a tel: href. */
export function telHref(phone) {
  return `tel:${String(phone).replace(/[^\d+]/g, '')}`;
}

const press =
  'transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_var(--color-ink)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink';

/** Chunky pill buttons with a hard shadow that "presses" on hover. */
export const buttonClasses = {
  solid: `inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink bg-accent px-7 py-3.5 font-heading text-base font-bold text-on-accent shadow-[4px_4px_0_0_var(--color-ink)] ${press}`,
  sun: `inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink bg-sun px-7 py-3.5 font-heading text-base font-bold text-ink shadow-[4px_4px_0_0_var(--color-ink)] ${press}`,
  white: `inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink bg-paper px-7 py-3.5 font-heading text-base font-bold text-ink shadow-[4px_4px_0_0_var(--color-ink)] ${press}`,
};
