import { esc, external, sectionLabel, buttonClasses, telHref } from './utils.js';
import { icon } from './icons.js';

const inputClasses =
  'mt-2 block w-full rounded-2xl border-2 border-ink bg-paper px-4 py-3 text-base text-ink placeholder:text-muted transition-shadow focus:shadow-[3px_3px_0_0_var(--color-ink)] focus:outline-none';
const labelClasses = 'text-sm font-bold text-ink';

/** One big lilac card: invitation and details on the left, a chunky form on the right. */
export function Contact({ contact, booking }) {
  const { form } = contact;
  const f = form.fields;
  const detail = (label, value, tilt) => `
        <div class="${tilt} rounded-2xl border-2 border-ink bg-paper p-4">
          <dt class="text-xs font-bold uppercase tracking-wider text-ink">${esc(label)}</dt>
          <dd class="mt-1 font-medium text-ink">${value}</dd>
        </div>`;

  return `
<section id="contact" class="scroll-mt-24 bg-paper px-4 py-20 md:px-6 md:py-28" aria-labelledby="contact-heading">
  <div class="mx-auto grid max-w-6xl grid-cols-1 gap-10 rounded-[2.5rem] border-2 border-ink bg-lilac p-6 shadow-[8px_8px_0_0_var(--color-ink)] md:p-12 lg:grid-cols-2 lg:gap-14">
    <div>
      ${sectionLabel(contact.label, 'bg-sun')}
      <h2 id="contact-heading" class="mt-6 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-ink md:text-6xl">${esc(contact.heading)}</h2>
      <p class="mt-6 text-lg font-medium leading-relaxed text-ink">${esc(contact.intro)}</p>
      <dl class="mt-10 grid gap-4 sm:grid-cols-2">
        ${detail(contact.detailsLabels.email, `<a href="mailto:${esc(contact.email)}" class="break-all underline decoration-2 underline-offset-2 hover:text-accent">${esc(contact.email)}</a>`, '-rotate-1')}
        ${detail(contact.detailsLabels.phone, `<a href="${esc(telHref(contact.phone))}" class="underline decoration-2 underline-offset-2 hover:text-accent">${esc(contact.phone)}</a>`, 'rotate-1')}
        <div class="rounded-2xl border-2 border-ink bg-paper p-4 sm:col-span-2">
          <dt class="text-xs font-bold uppercase tracking-wider text-ink">${esc(contact.detailsLabels.studio)}</dt>
          <dd class="mt-1 font-medium text-ink"><address class="not-italic">${esc(contact.address)}</address></dd>
        </div>
      </dl>
      <div class="mt-10">
        <p class="font-heading text-xl font-bold text-ink">${esc(contact.bookingHeading)}</p>
        <a href="${esc(booking.url)}" ${external} class="mt-4 ${buttonClasses.sun}">${esc(contact.bookingLabel)} ${icon('arrowUpRight', 'h-4 w-4')}</a>
      </div>
    </div>

    <form name="${esc(form.name)}" method="POST" action="/" data-netlify="true" netlify-honeypot="bot-field" class="space-y-5 self-start rounded-[2rem] border-2 border-ink bg-paper p-6 md:p-8" data-contact-form>
      <input type="hidden" name="form-name" value="${esc(form.name)}" />
      <p class="hidden" aria-hidden="true">
        <label>${esc(form.honeypotLabel)} <input name="bot-field" tabindex="-1" autocomplete="off" /></label>
      </p>
      <div>
        <label for="contact-name" class="${labelClasses}">${esc(f.name.label)}</label>
        <input id="contact-name" name="name" type="text" autocomplete="name" required class="${inputClasses}" placeholder="${esc(f.name.placeholder)}" />
      </div>
      <div class="grid gap-5 sm:grid-cols-2">
        <div>
          <label for="contact-email" class="${labelClasses}">${esc(f.email.label)}</label>
          <input id="contact-email" name="email" type="email" autocomplete="email" required class="${inputClasses}" placeholder="${esc(f.email.placeholder)}" />
        </div>
        <div>
          <label for="contact-phone" class="${labelClasses}">${esc(f.phone.label)}</label>
          <input id="contact-phone" name="phone" type="tel" autocomplete="tel" class="${inputClasses}" placeholder="${esc(f.phone.placeholder)}" />
        </div>
      </div>
      <div>
        <label for="contact-message" class="${labelClasses}">${esc(f.message.label)}</label>
        <textarea id="contact-message" name="message" rows="5" required class="${inputClasses} resize-y" placeholder="${esc(f.message.placeholder)}"></textarea>
      </div>
      <button type="submit" class="w-full ${buttonClasses.solid} disabled:opacity-60" data-submit data-label="${esc(form.submitLabel)}" data-sending-label="${esc(form.sendingLabel)}">${esc(form.submitLabel)} ${icon('arrowRight', 'h-4 w-4')}</button>
      <p class="hidden rounded-2xl border-2 border-ink bg-mint p-4 font-semibold text-ink" role="status" data-form-success>${esc(form.successMessage)}</p>
      <p class="hidden rounded-2xl border-2 border-ink bg-sun p-4 font-semibold text-ink" role="alert" data-form-error>${esc(form.errorMessage)}</p>
      <p class="text-sm text-muted">${esc(form.privacyNote)} <a href="/privacy/" class="underline underline-offset-4">${esc(form.privacyLabel)}</a></p>
    </form>
  </div>
</section>`;
}
