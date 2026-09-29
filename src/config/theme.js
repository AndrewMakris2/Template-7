/**
 * ============================================================================
 *  THEME — EDIT THIS FILE PER CLIENT / PER RESKIN
 * ============================================================================
 *  Every color and font family on the site comes from this file, and nothing
 *  else lives here. Components use the Tailwind utilities generated from
 *  these tokens (bg-paper, text-ink, bg-accent, bg-sun, font-heading, …):
 *
 *    colors.paper / cream / ink / muted / line / accent / onAccent / onInk
 *      → the core palette (see README)
 *    colors.sun / sky / mint / lilac
 *      → this template's extra "sticker" colors, used as tile backgrounds.
 *        Only `ink` text is placed on them, so keep them light.
 *
 *    fonts.heading  → font-heading   (chunky display headings)
 *    fonts.body     → font-body      (body copy, UI, buttons)
 *
 *  If you change font families, update `fonts.googleFontsUrl` to load them.
 * ============================================================================
 */

export const theme = {
  // Template 7 — Pop / Sticker book. All text/background pairs used meet WCAG AA.
  colors: {
    paper: '#FFF7EA', // warm cream page
    cream: '#FFE3EC', // bubblegum section background
    ink: '#1D1B1E', // outlines, text, hard shadows
    muted: '#5E5660',
    line: '#1D1B1E',
    accent: '#C2255C', // raspberry — TODO: pick the client's accent color
    onAccent: '#FFFFFF',
    onInk: '#FFF7EA',
    sun: '#FFD23F',
    sky: '#8FD3FE',
    mint: '#9BE3C3',
    lilac: '#CDB4FF',
  },

  fonts: {
    heading: "'Syne', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif",
    body: "'Plus Jakarta Sans', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif",
    googleFontsUrl:
      'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Syne:wght@600;700;800&display=swap',
  },
};
