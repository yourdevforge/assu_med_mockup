<script setup>
useSeoMeta({
  title: 'Services Offered',
  description:
    'Explore Assu-Med ambulance services, including primary emergency response, inter-facility transfers, advanced life support, and on-site medical solutions.',
});
</script>

<template>
  <div>
    <section class="page-hero" aria-labelledby="services-hero-title">
      <div class="page-hero__placeholder" role="img" aria-label="Random page background image">
        <img src="https://images.pexels.com/photos/6754150/pexels-photo-6754150.jpeg?auto=compress&cs=tinysrgb&w=1800" alt="" />
      </div>

      <div class="page-hero__inner">
        <div class="page-hero__content">
          <h1 id="services-hero-title" class="page-hero__title">
            <span class="page-hero__title-faint">SERVICES</span>
            <span class="page-hero__title-strong">WE PROVIDE</span>
          </h1>

          <p class="page-hero__copy">
            Assu-Med manages a fleet of private ambulances and emergency response vehicles
            from our head office in <strong>Watergate, Mitchell's Plain</strong> and can
            quickly mobilise to patients requiring critical care across the Western Cape.
          </p>

          <p class="page-hero__tagline"><em>"The reduction in waiting time can save lives."</em></p>

          <a class="page-hero__button" href="#service-cards">Learn more</a>
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

    <section class="service-grid" id="service-cards" aria-label="Services offered">
      <div class="service-grid__inner">
        <article class="service-tile">
          <div class="service-tile__head">
            <span class="service-tile__icon" aria-hidden="true"><SvgIcon name="shield" /></span>
            <h2 class="service-tile__title">Primary Emergency Response Services</h2>
          </div>
          <div class="service-tile__body">
            <p>
              Assu-Med manages a fleet of private ambulances and emergency response vehicles
              from our head office in Mitchell's Plain and can quickly mobilise to patients
              requiring critical care. The reduction in waiting time can save lives.
            </p>
            <p>
              Our on-call paramedics are trained to assess and stabilise patients and transport
              them safely to the nearest healthcare facility.
            </p>
          </div>
        </article>

        <article class="service-tile">
          <div class="service-tile__head">
            <span class="service-tile__icon" aria-hidden="true"><SvgIcon name="hospital" /></span>
            <h2 class="service-tile__title">Inter Hospital / Facility Transfer</h2>
          </div>
          <div class="service-tile__body">
            <p>
              Assu-Med's ambulance fleet can be used to transfer patients from one healthcare
              facility to another with shorter turnaround times compared to public ambulance
              services.
            </p>
          </div>
        </article>

        <article class="service-tile">
          <div class="service-tile__head">
            <span class="service-tile__icon" aria-hidden="true"><SvgIcon name="heart-pulse" /></span>
            <h2 class="service-tile__title">Advanced Life-Support</h2>
          </div>
          <div class="service-tile__body">
            <p>
              Assu-Med's healthcare personnel are meticulously trained to provide advanced life
              support (ALS) to enable open airways and adequate ventilation to patients.
            </p>
          </div>
        </article>

        <article class="service-tile">
          <div class="service-tile__head">
            <span class="service-tile__icon" aria-hidden="true"><SvgIcon name="briefcase-medical" /></span>
            <h2 class="service-tile__title">Industrial &amp; On-Site Medical Solutions</h2>
          </div>
          <div class="service-tile__body">
            <p>
              Assu-Med can provide comprehensive on-site medical solutions for various industrial
              and remote sites. Our team works closely with contractors, their clients and
              employees to ensure a safe working environment, for all site personnel.
            </p>
            <p>
              Assu-Med's team uses a collaborative operational method to ensure compliance of all
              staff to the site regulations and mitigate all on-site risks. Our service offering
              can be customised to the needs of the client, including event standby medical
              services and on-site medical fitness certification by our residential doctor.
            </p>
          </div>
        </article>
      </div>
    </section>

    <section class="covid-section" aria-labelledby="covid-title">
      <div class="covid-section__inner">
        <div class="covid-section__header">
          <span class="covid-section__icon" aria-hidden="true">
            <img src="/icons/covid.png" alt="" />
          </span>
          <div>
            <p class="covid-section__eyebrow">Public health notice</p>
            <h2 id="covid-title" class="covid-section__title">COVID-19</h2>
          </div>
          <p class="covid-section__sub">AWARENESS, SUPPORT &amp; ADVICE</p>
        </div>

        <div class="covid-section__copy">
          <p>
            As healthcare professionals we have a responsibility to use our platform to inform
            and advise the public on global health matters. While the South African government
            puts the necessary measures in place to deal with infectious-disease outbreaks, it
            remains the responsibility of each of us to do our part in limiting the spread.
          </p>
          <p>
            If you display symptoms, call
            your GP and follow their instructions or call the coronavirus emergency helpline on
            <a class="covid-section__link" href="tel:0800029999">0800 029 999</a>.<br />
            For regular updates and more information about COVID-19 please visit
            <a class="covid-section__link" href="https://sacoronavirus.co.za" target="_blank" rel="noopener">sacoronavirus.co.za</a>.
          </p>
        </div>

        <ul class="covid-tips" aria-label="Hygiene tips">
          <li class="covid-tip">
            <div class="covid-tip__icon" aria-hidden="true"><img src="/icons/handwash.png" alt="" /></div>
            <p>Wash your hands<br />at least 20 seconds</p>
          </li>
          <li class="covid-tip">
            <div class="covid-tip__icon" aria-hidden="true"><img src="/icons/usesoap.png" alt="" /></div>
            <p>Use soap</p>
          </li>
          <li class="covid-tip">
            <div class="covid-tip__icon" aria-hidden="true"><img src="/icons/wearmask.png" alt="" /></div>
            <p>Wear a mask</p>
          </li>
          <li class="covid-tip">
            <div class="covid-tip__icon" aria-hidden="true"><img src="/icons/avoidcrowds.png" alt="" /></div>
            <p>Avoid crowds</p>
          </li>
          <li class="covid-tip">
            <div class="covid-tip__icon" aria-hidden="true"><img src="/icons/avoidhandshake.png" alt="" /></div>
            <p>Avoid handshakes</p>
          </li>
          <li class="covid-tip">
            <div class="covid-tip__icon" aria-hidden="true"><img src="/icons/disinfect.png" alt="" /></div>
            <p>Disinfect<br />contact elements</p>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
