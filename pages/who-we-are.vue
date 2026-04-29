<script setup>
useSeoMeta({
  title: 'Who We Are',
  description:
    'Meet Assu-Med, a private Advanced Life Support ambulance service based in Watergate, Mitchell\'s Plain.',
});
</script>

<template>
  <div>
    <section class="page-hero" aria-labelledby="page-hero-title">
      <div class="page-hero__placeholder" role="img" aria-label="Emergency response background image">
        <img src="https://images.pexels.com/photos/8943102/pexels-photo-8943102.jpeg?auto=compress&cs=tinysrgb&w=1800" alt="" />
      </div>

      <div class="page-hero__inner">
        <div class="page-hero__content">
          <h1 id="page-hero-title" class="page-hero__title">
            <span class="page-hero__title-faint">Who</span>
            <span class="page-hero__title-strong">We Are</span>
          </h1>

          <p class="page-hero__copy">
            Assu-Med is a privately-owned Advanced Life Support ambulance service based at
            <strong>Watergate Boulevard, Lentegeur</strong> in Mitchell's Plain.
          </p>

          <p class="page-hero__tagline"><em>"The reduction in waiting time can save lives."</em></p>

          <a class="page-hero__button" href="#about-us">Learn more</a>
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

    <section class="who-story" id="about-us" aria-labelledby="about-us-title">
      <div class="who-story__inner">
        <div class="who-story__content">
          <p class="who-story__eyebrow">About Us</p>
          <h2 id="about-us-title">Built For Fast, Respectful Emergency Care</h2>
          <p>
            Assu-Med is a privately-owned emergency ambulance service located in Mitchell's Plain,
            Western Cape, conveniently positioned to serve Watergate, Lentegeur and surrounding
            communities.
          </p>
          <p>
            Our team combines medically-trained professionals, reliable support staff and a patient
            first approach. We believe every patient deserves dignity, respect and calm clinical
            care when pressure is high.
          </p>

          <div class="who-story__stats" aria-label="Assu-Med highlights">
            <div>
              <strong>ALS</strong>
              <span>Advanced Life Support</span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>Emergency Dispatch</span>
            </div>
            <div>
              <strong>2020</strong>
              <span>Service Established</span>
            </div>
          </div>
        </div>

        <div class="who-story__media" role="img" aria-label="Assu-Med paramedics">
          <img src="https://images.pexels.com/photos/8942234/pexels-photo-8942234.jpeg?auto=compress&cs=tinysrgb&w=900" alt="" />
        </div>
      </div>
    </section>

    <section class="who-values" aria-labelledby="values-title">
      <div class="who-values__inner">
        <div class="who-values__cards">
          <article>
            <span>Mission</span>
            <h2 id="values-title">Exceptional medical care for every patient.</h2>
            <p>
              We provide emergency response, treatment and transport in a fiscally responsible way
              as an active part of the Mitchell's Plain and wider Western Cape community.
            </p>
          </article>
          <article>
            <span>Vision</span>
            <h2>Prepared teams. Better outcomes.</h2>
            <p>
              Through training and development, we continually prepare our staff to deliver the
              best possible care to the communities we serve.
            </p>
          </article>
        </div>

        <div class="who-values__list">
          <p class="who-story__eyebrow">Our Core Values</p>
          <ul>
            <li>Efficient, professional medical care</li>
            <li>Dignity and respect for every person</li>
            <li>Positive impact on patients' lives</li>
            <li>Strong relationships with medical professionals</li>
            <li>Health, wellness and injury-prevention education</li>
            <li>Continuous service improvement</li>
            <li>Highly skilled medical staff</li>
            <li>Pride in everything we do</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="who-operating" aria-labelledby="operating-title">
      <div class="who-operating__inner">
        <div class="who-operating__media" role="img" aria-label="Assu-Med paramedic with patient">
          <img src="https://images.pexels.com/photos/8948289/pexels-photo-8948289.jpeg?auto=compress&cs=tinysrgb&w=760" alt="" />
        </div>

        <div class="who-operating__content">
          <p class="who-story__eyebrow">Our Operating Model</p>
          <h2 id="operating-title">Clinical standards that keep patient care consistent.</h2>
          <p>
            Our emphasis on quality and clinical excellence ensures patient needs come first. The
            clinical team reviews policies, patient care and safety practices on a regular basis.
          </p>
          <ul>
            <li>Staff education and professional compliance</li>
            <li>Best-practice clinical protocols and guidelines</li>
            <li>High-risk case management support</li>
            <li>Coordination with referring and receiving facilities</li>
            <li>Clinical governance and EMS protocol review</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
