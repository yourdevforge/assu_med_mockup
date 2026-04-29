<script setup>
useSeoMeta({
  title: 'Contact Us',
  description:
    'Contact Assu-Med for 24-hour ambulance services, patient transfer support, event standby, and emergency medical assistance.',
});

function submitContactForm(event) {
  const formData = new FormData(event.currentTarget);
  const details = [
    ['Name', formData.get('name')],
    ['Phone', formData.get('phone')],
    ['Email', formData.get('email')],
    ['Message', formData.get('message')],
  ]
    .map(([label, value]) => `${label}: ${String(value || '').trim()}`)
    .join('\n');

  const subject = encodeURIComponent('Website enquiry');
  const body = encodeURIComponent(details);

  window.location.href = `mailto:info@assumed.co.za?subject=${subject}&body=${body}`;
}
</script>

<template>
  <div>
    <section class="hero" aria-labelledby="contact-hero-title">
      <div class="hero__placeholder" role="img" aria-label="Random ambulance background image">
        <img src="https://images.pexels.com/photos/8948289/pexels-photo-8948289.jpeg?auto=compress&cs=tinysrgb&w=1800" alt="" />
      </div>

      <div class="hero__inner">
        <div class="hero__content">
          <p class="hero__kicker">24 Hour</p>
          <h1 id="contact-hero-title">Ambulance Services</h1>
          <p class="hero__copy">
            Assu-Med is a privately-owned emergency ambulance service based in Mitchell's Plain,
            Western Cape. We provide primary emergency response services as well as inter-hospital/
            facility transfer services with advanced life support capabilities to both medical aid
            and private patients.
          </p>
          <a class="hero__button" href="#contact-form">Learn more</a>
        </div>

        <div class="call-centre" aria-label="Call centre">
          <div class="call-centre__icon" aria-hidden="true"><SvgIcon name="phone" /></div>
          <div>
            <p>Call Centre</p>
            <strong>021 879 4716</strong>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-block" id="contact-form">
      <div class="contact-block__header">
        <p class="contact-block__eyebrow">Contact Assu-Med</p>
        <h2>Need assistance, event standby, or patient transfer support?</h2>
        <div class="contact-block__quick" aria-label="Quick contact options">
          <a href="tel:0218794716">
            <SvgIcon name="phone" />
            <span>Call Centre</span>
          </a>
          <a href="mailto:info@assumed.co.za">
            <SvgIcon name="message" />
            <span>Email Us</span>
          </a>
          <a href="#office-map">
            <SvgIcon name="hospital" />
            <span>Find Office</span>
          </a>
        </div>
      </div>

      <div class="contact-block__inner">
        <form class="contact-form" @submit.prevent="submitContactForm">
          <div class="contact-form__header">
            <p class="contact-form__eyebrow">Send a Message</p>
            <h2 class="contact-form__title">We respond within 24 hours.</h2>
          </div>

          <div class="contact-form__row">
            <label class="field">
              <input type="text" name="name" placeholder=" " required />
              <span class="field__label">Your Name</span>
              <span class="field__line" aria-hidden="true"></span>
            </label>
            <label class="field">
              <input type="tel" name="phone" placeholder=" " required />
              <span class="field__label">Contact Number</span>
              <span class="field__line" aria-hidden="true"></span>
            </label>
          </div>

          <label class="field">
            <input type="email" name="email" placeholder=" " required />
            <span class="field__label">Email Address</span>
            <span class="field__line" aria-hidden="true"></span>
          </label>

          <label class="field field--textarea">
            <textarea name="message" rows="5" placeholder=" " required></textarea>
            <span class="field__label">How can we help you?</span>
            <span class="field__line" aria-hidden="true"></span>
          </label>

          <button type="submit" class="contact-form__submit">
            <span>Send Message</span>
            <SvgIcon name="arrow-right" class="contact-form__arrow" />
          </button>
        </form>

        <aside class="contact-info">
          <h2 class="contact-info__title">Emergency</h2>

          <div class="contact-info__emergency">
            <div class="contact-info__icon" aria-hidden="true"><SvgIcon name="phone" /></div>
            <p class="contact-info__hours">24 HOUR</p>
            <div class="contact-info__call">
              <p>Call Centre</p>
              <strong>021 879 4716</strong>
            </div>
          </div>

          <h2 class="contact-info__title">Head Office</h2>

          <div class="contact-info__grid">
            <div>
              <span class="contact-info__grid-icon" aria-hidden="true"><SvgIcon name="hospital" /></span>
              <h3 class="contact-info__heading">Address:</h3>
              <address>
                Watergate Boulevard<br />
                Watergate Villa, Lentegeur<br />
                Mitchell's Plain<br />
                Western Cape, 7785
              </address>
            </div>

            <div>
              <span class="contact-info__grid-icon" aria-hidden="true"><SvgIcon name="message" /></span>
              <h3 class="contact-info__heading">Contact Details</h3>
              <p><strong>Tel:</strong> <a class="contact-info__link" href="tel:0218794716">021 879 4716</a></p>
              <p><strong>Email:</strong> <a class="contact-info__link" href="mailto:info@assumed.co.za">info@assumed.co.za</a></p>
            </div>
          </div>
        </aside>
      </div>
    </section>

    <section class="contact-map" id="office-map" aria-label="Office location map">
      <div class="contact-map__label">
        <span><SvgIcon name="hospital" /></span>
        <div>
          <p>Head Office Location</p>
          <strong>Watergate, Mitchell's Plain</strong>
        </div>
      </div>
      <iframe
        class="contact-map__frame"
        src="https://www.google.com/maps?q=Watergate+Boulevard,+Lentegeur,+Mitchell%27s+Plain,+7785&output=embed"
        title="Assu-Med Ambulance Service location"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        allowfullscreen
      ></iframe>
    </section>
  </div>
</template>
