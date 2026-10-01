/**
 * ============================================================================
 *  CONTENT — EDIT THIS FILE PER CLIENT / PER RESKIN
 * ============================================================================
 *  Every piece of text, every link, and every image path on the site comes
 *  from this file. Components never hardcode copy — they read it from here.
 *
 *  Everything below is PLACEHOLDER content. Each placeholder is marked with
 *  `// TODO: replace with real client content`. Search for "TODO" before
 *  launching a client site and make sure none are left.
 *
 *  Images:
 *    Placeholders point at picsum.photos. For a real client, drop their photos
 *    into /public/images and reference them here with root-relative paths,
 *    e.g.  src: '/images/hero.jpg'   (files in /public are served from "/").
 *    Every image needs meaningful `alt` text describing the photo.
 * ============================================================================
 */

export const content = {
  // --------------------------------------------------------------------------
  // SEO & SITE META — used for <title>, meta description and Open Graph tags
  // --------------------------------------------------------------------------
  site: {
    lang: 'en',
    // Full production URL, no trailing slash. Used for canonical + og:url.
    url: 'https://hairstylist-template-7.netlify.app', // Template 7 demo URL — TODO: replace with real client content
    title: 'Poppy Rae — Pastel, Vivid Colour & Shaggy Cuts, Los Angeles', // TODO: replace with real client content
    description:
      'Los Angeles colourist for pastel and vivid hair, rainbow placements and shaggy, lived-in cuts. Bright studio, zero judgement. Book online.', // TODO: replace with real client content
    // Absolute URL recommended for social previews (1200×630 works best).
    ogImage: 'https://picsum.photos/seed/t7-og/1200/630', // TODO: replace with real client content
    ogImageAlt: 'Placeholder: bright pastel pink and lilac hair in soft waves', // TODO: replace with real client content
  },

  // --------------------------------------------------------------------------
  // BUSINESS BASICS
  // --------------------------------------------------------------------------
  business: {
    name: 'Poppy Rae', // TODO: replace with real client content — shown as the text logo
    tagline: 'Colour that’s loud, cuts that are soft, vibes that are good.', // TODO: replace with real client content
    location: 'Silver Lake, Los Angeles', // TODO: replace with real client content
  },

  // External booking platform (StyleSeat, Vagaro, Booksy, Schedulicity, …).
  // The site never takes bookings itself — every "Book" button links here.
  booking: {
    url: 'https://styleseat.com/PLACEHOLDER', // TODO: replace with real client content
    label: 'Book now',
  },

  // --------------------------------------------------------------------------
  // NAVIGATION — `href` must match a section id below
  // --------------------------------------------------------------------------
  nav: {
    links: [
      { label: 'Hi!', href: '#about' },
      { label: 'Work', href: '#gallery' },
      { label: 'Menu', href: '#services' },
      { label: 'Reviews', href: '#testimonials' },
      { label: 'Contact', href: '#contact' },
    ],
    menuOpenLabel: 'Open menu',
    menuCloseLabel: 'Close menu',
    skipLinkLabel: 'Skip to content',
  },

  // --------------------------------------------------------------------------
  // HERO
  // --------------------------------------------------------------------------
  hero: {
    eyebrow: 'Colour & cut studio — Silver Lake, LA', // TODO: replace with real client content
    heading: 'Poppy Rae', // TODO: replace with real client content
    tagline: 'Colour that’s loud, cuts that are soft, vibes that are good.', // TODO: replace with real client content
    ctaLabel: 'Book now',
    secondaryCtaLabel: 'See the colour',
    secondaryCtaHref: '#gallery',
    image: {
      src: 'https://picsum.photos/seed/t7-hero/1400/1400', // TODO: replace with real client content
      alt: 'Placeholder: laughing client with bubblegum pink and lilac wavy hair', // TODO: replace with real client content
    },
  },

  // --------------------------------------------------------------------------
  // ABOUT
  // --------------------------------------------------------------------------
  about: {
    label: 'Hi, I’m Poppy',
    heading: 'Your hair should make you smile every time you catch your reflection.', // TODO: replace with real client content
    // One string per paragraph.
    bio: [
      'I’ve been painting heads in every colour of the rainbow for eight years, and I still get giddy at every reveal. My little studio in Silver Lake is bright, a bit chaotic and full of good snacks.', // TODO: replace with real client content
      'Whether it’s your very first pastel or your tenth neon refresh, we’ll plan it together, look after your hair’s health, and make sure you know exactly how to keep it bright at home.', // TODO: replace with real client content
    ],
    specialtiesLabel: 'Specialties',
    specialties: ['Pastel colour', 'Rainbow & vivids', 'Shaggy cuts', 'Colour blocking'], // TODO: replace with real client content
    image: {
      src: 'https://picsum.photos/seed/t7-about/900/1000', // TODO: replace with real client content
      alt: 'Placeholder: portrait of the stylist with mint green hair holding a colour bowl', // TODO: replace with real client content
    },
  },

  // --------------------------------------------------------------------------
  // GALLERY — any number of images; 9+ recommended. `full` is the larger
  // version shown in the lightbox (falls back to `src` if omitted).
  // --------------------------------------------------------------------------
  gallery: {
    label: 'Fresh out the chair',
    heading: 'Recent colour',
    lightboxCloseLabel: 'Close image',
    lightboxPrevLabel: 'Previous image',
    lightboxNextLabel: 'Next image',
    openImageLabel: 'Enlarge image', // prefixed to each image's alt for screen readers
    // TODO: replace with real client content — all 9 images below
    images: [
      { src: 'https://picsum.photos/seed/t7-g1/800/800', full: 'https://picsum.photos/seed/t7-g1/1600/1600', alt: 'Placeholder: cotton-candy pink to lilac melt' },
      { src: 'https://picsum.photos/seed/t7-g2/800/800', full: 'https://picsum.photos/seed/t7-g2/1600/1600', alt: 'Placeholder: shaggy mullet with bleached curtain bangs' },
      { src: 'https://picsum.photos/seed/t7-g3/800/800', full: 'https://picsum.photos/seed/t7-g3/1600/1600', alt: 'Placeholder: rainbow peekaboo panels under dark hair' },
      { src: 'https://picsum.photos/seed/t7-g4/800/800', full: 'https://picsum.photos/seed/t7-g4/1600/1600', alt: 'Placeholder: mint green bob with a blunt fringe' },
      { src: 'https://picsum.photos/seed/t7-g5/800/800', full: 'https://picsum.photos/seed/t7-g5/1600/1600', alt: 'Placeholder: half-and-half colour block in blue and orange' },
      { src: 'https://picsum.photos/seed/t7-g6/800/800', full: 'https://picsum.photos/seed/t7-g6/1600/1600', alt: 'Placeholder: peach pastel on long layers' },
      { src: 'https://picsum.photos/seed/t7-g7/800/800', full: 'https://picsum.photos/seed/t7-g7/1600/1600', alt: 'Placeholder: neon pink money-piece highlights' },
      { src: 'https://picsum.photos/seed/t7-g8/800/800', full: 'https://picsum.photos/seed/t7-g8/1600/1600', alt: 'Placeholder: lavender pixie with a textured finish' },
      { src: 'https://picsum.photos/seed/t7-g9/800/800', full: 'https://picsum.photos/seed/t7-g9/1600/1600', alt: 'Placeholder: sunset gradient from yellow to magenta' },
    ],
  },

  // --------------------------------------------------------------------------
  // SERVICES
  // --------------------------------------------------------------------------
  services: {
    label: 'The menu',
    heading: 'Pick your colour adventure',
    intro: 'Vivid work always starts with a consultation so we can check your hair’s history and plan the lightening safely. Prices are starting points.', // TODO: replace with real client content
    columnLabels: { service: 'Service', duration: 'Duration', price: 'Price' },
    // TODO: replace with real client content — all services below
    items: [
      { name: 'Shaggy cut', description: 'Texture-first cut with a wash and style.', duration: '75 min', price: '$85' },
      { name: 'Pastel refresh', description: 'Gloss your existing pastel back to life.', duration: '90 min', price: '$120' },
      { name: 'Full vivid', description: 'Lightening plus one or two vivid shades. Quote at consultation.', duration: '5 hr', price: '$350+' },
      { name: 'Rainbow panels', description: 'Hidden or statement panels in up to four colours.', duration: '3 hr', price: '$220+' },
      { name: 'Colour block', description: 'Graphic split or half-and-half placement.', duration: '4 hr', price: '$280+' },
      { name: 'Money piece', description: 'Face-framing pop of bright colour.', duration: '2 hr', price: '$140' },
      { name: 'Bleach & tone', description: 'Clean, even lift to a pastel-ready base.', duration: '4 hr', price: '$260+' },
      { name: 'Colour consult', description: 'Plan, strand test and quote. Credited to your service.', duration: '20 min', price: 'Free' },
    ],
    note: 'Bright colours fade fastest. I’ll send you home with a care plan and the right shampoo to keep them popping.', // TODO: replace with real client content
    ctaLabel: 'Book your colour',
  },

  // --------------------------------------------------------------------------
  // TESTIMONIALS
  // --------------------------------------------------------------------------
  testimonials: {
    label: 'Happy heads',
    heading: 'What people are saying',
    // TODO: replace with real client content — all testimonials below
    items: [
      { quote: 'I walked in with a Pinterest board and walked out looking like a literal sunset. Obsessed!!', name: 'Maddie L.', detail: 'Full vivid client' },
      { quote: 'First time going pastel and Poppy made it so easy. My hair actually feels healthier than before.', name: 'Jae S.', detail: 'Pastel client' },
      { quote: 'The shag of my dreams. Every stranger at the farmers market asks where I got it.', name: 'River T.', detail: 'Shaggy cut client' },
    ],
  },

  // --------------------------------------------------------------------------
  // OPTIONAL SECTIONS — hidden until `enabled: true`. When you switch one on,
  // also add it to nav.links if it should appear in the menu, e.g.
  // { label: 'FAQ', href: '#faq' }. Events sits after Services; Policies and
  // FAQ sit just before Contact.
  // --------------------------------------------------------------------------
  events: {
    enabled: false,
    label: 'Bridal & events',
    heading: 'For the big days.',
    intro: 'Wedding mornings, engagements and special occasions, in the studio or on location.', // TODO: replace with real client content
    // TODO: replace with real client content — all packages below
    packages: [
      { name: 'Bridal trial', price: '$150', description: 'A full run-through of your wedding-day look, about 90 minutes.' },
      { name: 'Wedding day', price: 'from $250', description: 'Styling on the morning, on location or in the studio.' },
      { name: 'Bridal party', price: 'from $95 each', description: 'Bridesmaids, mothers and anyone else getting ready with you.' },
    ],
    note: 'Travel within 20 miles is included. Dates book up early, so enquire as soon as you can.', // TODO: replace with real client content
    ctaLabel: 'Enquire about your date', // links to the contact form
  },

  policies: {
    enabled: false,
    label: 'Policies',
    heading: 'Good to know before you book.',
    // TODO: replace with real client content — all policies below
    items: [
      { title: 'Deposits', text: 'A 25% deposit secures your appointment and comes off your final bill.' },
      { title: 'Cancellations', text: 'Please give at least 48 hours’ notice to move or cancel. Late cancellations lose the deposit.' },
      { title: 'Running late', text: 'Arriving more than 15 minutes late may mean a shorter service or a new booking.' },
      { title: 'Colour services', text: 'New colour clients need a patch test at least 48 hours before their first appointment.' },
    ],
  },

  faq: {
    enabled: false,
    label: 'FAQ',
    heading: 'Questions, answered.',
    // TODO: replace with real client content — all questions below
    items: [
      { q: 'Do you offer consultations?', a: 'Yes. Free 15-minute consultations, in person or by video. Book one online or send a message.' },
      { q: 'How should I arrive?', a: 'With clean, dry hair unless your service includes a wash, plus any inspiration photos you love.' },
      { q: 'How long will my appointment take?', a: 'Each service lists a typical time. Colour and big changes can run longer, so plan a little extra.' },
      { q: 'How can I pay?', a: 'All major cards, Apple Pay and cash.' },
    ],
  },

  // --------------------------------------------------------------------------
  // CONTACT
  // --------------------------------------------------------------------------
  contact: {
    label: 'Say hey',
    heading: 'Got a colour idea? Let’s make it happen.',
    intro: 'Send me your inspo, your hair history and anything you’re nervous about. I reply within two business days.', // TODO: replace with real client content
    email: 'hello@example.com', // TODO: replace with real client content
    phone: '(323) 555-0172', // TODO: replace with real client content
    address: '3300 Placeholder Blvd, Studio 4, Los Angeles, CA 90026', // TODO: replace with real client content
    detailsLabels: { email: 'Email', phone: 'Text or call', studio: 'Studio' },
    bookingHeading: 'Already know what you want?',
    bookingLabel: 'Book an appointment',
    form: {
      name: 'contact', // Netlify form name — shows up in the Netlify dashboard
      fields: {
        name: { label: 'Your name', placeholder: '' },
        email: { label: 'Email', placeholder: '' },
        phone: { label: 'Phone (optional)', placeholder: '' },
        message: { label: 'Tell me everything', placeholder: 'Current colour, dream colour, last time you bleached…' },
      },
      honeypotLabel: 'Don’t fill this out if you’re human:',
      submitLabel: 'Send it',
      sendingLabel: 'Sending…',
      successMessage: 'Yay! Your message is in. I’ll be in touch soon.',
      errorMessage: 'Oops, something went wrong. Please try again, or email me directly.',
    },
  },

  // --------------------------------------------------------------------------
  // SOCIAL LINKS — `platform` picks the icon. Supported: instagram, facebook,
  // tiktok, pinterest, youtube, x. The first `instagram` entry also appears
  // in the nav. Remove any the client doesn't use.
  // --------------------------------------------------------------------------
  social: [
    { platform: 'instagram', label: 'Instagram', url: 'https://instagram.com/PLACEHOLDER' }, // TODO: replace with real client content
    { platform: 'tiktok', label: 'TikTok', url: 'https://tiktok.com/@PLACEHOLDER' }, // TODO: replace with real client content
    { platform: 'pinterest', label: 'Pinterest', url: 'https://pinterest.com/PLACEHOLDER' }, // TODO: replace with real client content
  ],

  // --------------------------------------------------------------------------
  // FOOTER
  // --------------------------------------------------------------------------
  footer: {
    hoursHeading: 'Studio hours',
    // TODO: replace with real client content
    hours: [
      { days: 'Wed – Fri', time: '11am – 7pm' },
      { days: 'Sat – Sun', time: '10am – 5pm' },
      { days: 'Mon – Tue', time: 'Closed' },
    ],
    contactHeading: 'Find me',
    socialHeading: 'Follow along',
    // "© {year} {copyrightName}. {copyrightSuffix}" — year is filled in at build time
    copyrightName: 'Poppy Rae Hair', // TODO: replace with real client content
    copyrightSuffix: 'All rights reserved.',
    backToTopLabel: 'Back to top',
  },

  // --------------------------------------------------------------------------
  // GOOGLE BUSINESS DETAILS — read by search engines, not shown on the page.
  // Name, phone, email, socials and booking link come from the sections above;
  // keep the address and hours here in step with Contact and the footer.
  // Hours use 24-hour times; leave out closed days.
  // --------------------------------------------------------------------------
  localBusiness: {
    type: 'HairSalon', // or 'BeautySalon' for wider beauty services
    priceRange: '$$', // $ – $$$$
    // TODO: replace with real client content
    address: { street: '3300 Placeholder Blvd, Studio 4', city: 'Los Angeles', region: 'CA', postalCode: '90026', country: 'US' },
    // TODO: replace with real client content
    hours: [
      { days: ['Wednesday', 'Thursday', 'Friday'], opens: '11:00', closes: '19:00' },
      { days: ['Saturday', 'Sunday'], opens: '10:00', closes: '17:00' },
    ],
  },

  // --------------------------------------------------------------------------
  // ANALYTICS — counts visitors plus taps on Book, phone and email links.
  // Off until an ID is filled in. Use one of:
  //   Umami (umami.is, no cookies)  → the site's Website ID
  //   Google Analytics 4            → the Measurement ID, e.g. 'G-XXXXXXXXXX'
  // --------------------------------------------------------------------------
  analytics: {
    umamiWebsiteId: '',
    ga4MeasurementId: '',
  },
};
