<template>
  <div>
    <section class="page-hero" aria-labelledby="about-hero-title">
      <div
        class="page-hero__placeholder"
        role="img"
        aria-label="Random page background image"
      >
        <img
          src="https://images.pexels.com/photos/8942117/pexels-photo-8942117.jpeg?auto=compress&cs=tinysrgb&w=1800"
          alt=""
        />
      </div>

      <div class="page-hero__inner">
        <div class="page-hero__content">
          <h1 id="about-hero-title" class="page-hero__title">
            <span class="page-hero__title-faint">ABOUT</span>
            <span class="page-hero__title-strong">ASSU-MED</span>
          </h1>

          <p class="page-hero__copy">
            More than 10 years of pre-hospital experience, now operating as an
            upgraded Advanced Life Support [ALS] service provider for the
            Mitchell's Plain community and the wider Western Cape.
          </p>
        </div>

        <div class="page-hero__call-centre" aria-label="Call centre">
          <div class="page-hero__call-icon" aria-hidden="true">
            <SvgIcon name="phone" />
          </div>
          <div>
            <p>Call Centre</p>
            <strong>021 879 4716</strong>
          </div>
        </div>
      </div>
    </section>

    <section class="company-profile" aria-labelledby="company-profile-title">
      <div class="company-profile__inner">
        <div class="company-profile__intro">
          <p class="company-profile__eyebrow">Company Profile</p>
          <h2 id="company-profile-title">
            Emergency ambulance care with the people, systems and readiness to
            respond.
          </h2>
          <p>
            Assu-Med has more than 10 years of experience in the pre-hospital
            industry and has upgraded to an Advanced Life Support [ALS] service
            provider with a highly skilled, efficient and professional team that
            can meet urgent medical needs, whether big or small.
          </p>
        </div>

        <div
          class="company-profile__visual"
          aria-label="Assu-Med ambulance service profile"
        >
          <img
            src="https://images.pexels.com/photos/6754150/pexels-photo-6754150.jpeg?auto=compress&cs=tinysrgb&w=900"
            alt=""
          />
          <div class="company-profile__visual-card">
            <img src="/images/logo4.png" alt="Assu-Med" />
            <span
              >Watergate Boulevard, Watergate Villa, Lentegeur, Mitchell's
              Plain, Western Cape, 7785</span
            >
          </div>
        </div>
      </div>
    </section>

    <section
      class="company-details-section"
      aria-labelledby="company-details-title"
    >
      <div class="company-details-section__inner">
        <div class="company-details-section__panel">
          <p class="company-profile__eyebrow">Registered Details</p>
          <h2 id="company-details-title">Company Details</h2>

          <dl class="company-details company-details--cards">
            <div>
              <dt>Business Type</dt>
              <dd>Emergency Ambulance Services (private company)</dd>
            </div>
            <div>
              <dt>Company Reg</dt>
              <dd>2020/252344/07</dd>
            </div>
            <div>
              <dt>Tax Reference</dt>
              <dd>9019328286</dd>
            </div>
          </dl>
        </div>

        <div
          class="company-details-section__panel company-details-section__panel--dark"
        >
          <p class="company-profile__eyebrow">Contact Us</p>
          <h2>Ready 24/7</h2>
          <div class="company-contact-list">
            <a href="tel:0218794716">
              <SvgIcon name="phone" />
              <span>021 879 4716</span>
            </a>
            <a href="mailto:info@assumed.co.za">
              <SvgIcon name="message" />
              <span>info@assumed.co.za</span>
            </a>
            <p>
              <SvgIcon name="hospital" />
              <span
                >Watergate Boulevard, Watergate Villa, Lentegeur, Mitchell's
                Plain</span
              >
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      class="company-values-profile"
      aria-labelledby="company-values-title"
    >
      <div class="company-values-profile__inner">
        <article>
          <span>Our Vision</span>
          <h2 id="company-values-title">
            Quality, cost-effective medical care focused on patient outcomes.
          </h2>
          <p>
            Assu-Med's vision is to provide quality, cost-effective medical care
            focused on patient care to all who require our services. We are
            dedicated to ensuring that patients receive the highest quality care
            available by providing the right staff for the job.
          </p>
        </article>

        <article>
          <span>Our Mission</span>
          <h2>
            Efficient emergency care for Watergate, Mitchell's Plain and
            surrounding communities.
          </h2>
          <p>
            Our mission is to ensure that the community is attended to
            efficiently by professional staff. Our teams constantly strive to
            improve the quality and speed of emergency medical care as needed.
          </p>
        </article>
      </div>
    </section>

    <section
      class="company-services-profile"
      aria-labelledby="company-services-title"
    >
      <div class="company-services-profile__inner">
        <div class="company-services-profile__content">
          <p class="company-profile__eyebrow">Services We Provide</p>
          <h2 id="company-services-title">
            Support for emergencies, events and occupational health needs.
          </h2>
        </div>

        <ul class="company-services-profile__list">
          <li><SvgIcon name="phone" /> 24/7 call centre</li>
          <li><SvgIcon name="shield" /> Ambulance availability</li>
          <li><SvgIcon name="heart-pulse" /> Event standby medical services</li>
          <li>
            <SvgIcon name="file-text" /> Certification of fitness examiners
          </li>
          <li>
            <SvgIcon name="briefcase-medical" /> Occupational health services
            provided by residential doctor
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
