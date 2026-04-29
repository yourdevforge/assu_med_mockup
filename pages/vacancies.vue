<script setup>
useSeoMeta({
  title: 'Vacancies',
  description:
    'View current Assu-Med ambulance service vacancies for clinical roles including BLS and ILS positions.',
});
</script>

<template>
  <div>
    <section class="page-hero" aria-labelledby="vacancies-hero-title">
      <div class="page-hero__placeholder" role="img" aria-label="Random page background image">
        <img src="https://images.pexels.com/photos/8941917/pexels-photo-8941917.jpeg?auto=compress&cs=tinysrgb&w=1800" alt="" />
      </div>

      <div class="page-hero__inner">
        <div class="page-hero__content">
          <h1 id="vacancies-hero-title" class="page-hero__title">
            <span class="page-hero__title-faint">WE'RE</span>
            <span class="page-hero__title-strong">HIRING</span>
          </h1>

          <p class="page-hero__copy">
            Assu-Med manages a fleet of private ambulances and emergency response vehicles
            from our head office in <strong>Watergate, Mitchell's Plain</strong> and is always
            looking for highly-skilled medical professionals to join our growing team.
          </p>

          <p class="page-hero__tagline"><em>"The reduction in waiting time can save lives."</em></p>

          <a class="page-hero__button" href="#vacancy-list">View positions</a>
        </div>

        <div class="page-hero__call-centre" aria-label="Call centre">
          <div class="page-hero__call-icon" aria-hidden="true"><SvgIcon name="phone" /></div>
          <div>
            <p>Call Centre</p>
            <strong>021 879 4716</strong>
          </div>
        </div>
      </div>
    </section>

    <section class="vacancy-list" id="vacancy-list" aria-label="Open positions">
      <div class="vacancy-list__header">
        <p class="vacancy-list__eyebrow">Join The Response Team</p>
        <h2>Clinical roles for people who stay calm, capable and ready when it matters.</h2>
        <div class="vacancy-list__stats" aria-label="Vacancy highlights">
          <span><strong>BLS</strong> open</span>
          <span><strong>ILS</strong> open</span>
          <span><strong>24/7</strong> roster</span>
        </div>
      </div>

      <div class="vacancy-list__inner">
        <article class="vacancy">
          <div class="vacancy__poster" role="img" aria-label="We're hiring — positions available">
            <div class="vacancy__poster-badge" aria-hidden="true">
              <SvgIcon name="briefcase-medical" />
            </div>
            <div class="vacancy__poster-text">
              <p class="vacancy__poster-kicker">WE'RE HIRING</p>
              <p class="vacancy__poster-sub">POSITIONS AVAILABLE</p>
            </div>
          </div>

          <div class="vacancy__content">
            <div class="vacancy__intro">
              <p class="vacancy__role-label">Current Opening</p>
              <h2 class="vacancy__title">BLS &amp; ILS</h2>
              <p class="vacancy__subtitle">Positions Available</p>
            </div>

            <div class="vacancy__facts" aria-label="Role details">
              <span><SvgIcon name="shield" /> HPCSA registered</span>
              <span><SvgIcon name="clock" /> Shift roster</span>
              <span><SvgIcon name="heart-pulse" /> Clinical care</span>
            </div>

            <h3 class="vacancy__heading">Requirements</h3>
            <ul class="vacancy__list">
              <li>Current registration with HPCSA</li>
              <li>Valid 08 drivers licence with a current PrDP</li>
              <li>Sound clinical knowledge of protocols and scope of practice</li>
              <li>3 years + clinical experience</li>
              <li>Up to date CPD Points / Fluent in English and Afrikaans</li>
              <li>No criminal record</li>
            </ul>

            <h3 class="vacancy__heading">Duties</h3>
            <p class="vacancy__copy">Provide clinical care according to scope of practice / Shifts roster adherence</p>

            <h3 class="vacancy__heading">To Apply</h3>
            <div class="vacancy__apply">
              <p class="vacancy__copy">
                Email full CV with references to
                <a class="vacancy__link" href="mailto:admin@assumed.co.za">admin@assumed.co.za</a>
              </p>
              <a class="vacancy__apply-button" href="mailto:admin@assumed.co.za">
                <SvgIcon name="file-text" />
                <span>Send CV</span>
              </a>
              <p class="vacancy__copy">
                Enquiries:
                <a class="vacancy__link" href="tel:0218794716">021 879 4716</a>
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>
