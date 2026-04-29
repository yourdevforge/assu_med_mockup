<script setup>
useSeoMeta({
  title: '24 Hour Ambulance Services',
  description:
    'Assu-Med provides private emergency response, patient transfer, and on-site medical support from Mitchell\'s Plain in the Western Cape.',
});

const testimonials = [
  {
    quote:
      'Professional, calm and quick to respond. The crew treated our family with real care from the first call to arrival at the hospital.',
    name: 'Nadia P.',
    role: 'Patient Family',
  },
  {
    quote:
      'Assu-Med gave us confidence during a stressful emergency. Clear communication, respectful care and a team that knew exactly what to do.',
    name: 'Michael R.',
    role: 'Emergency Response',
  },
  {
    quote:
      'Reliable standby medical support for our event. The team arrived prepared, professional and ready to assist.',
    name: 'Event Coordinator',
    role: 'On-site Medical Support',
  },
  {
    quote:
      'The response team was reassuring, efficient and respectful. They made a difficult moment feel managed and safe.',
    name: 'Ayesha K.',
    role: 'Private Patient',
  },
  {
    quote:
      'Good communication from dispatch and a professional crew on arrival. Exactly what you need in an emergency.',
    name: 'Daniel S.',
    role: 'Family Member',
  },
];

const testimonialIndex = ref(0);
const testimonialDirection = ref(1);
const testimonialContainer = ref(null);

function setTestimonialHeight() {
  const container = testimonialContainer.value;

  if (!container) {
    return;
  }

  container.style.height = `${container.offsetHeight}px`;
  container.style.overflow = 'hidden';
}

function animateTestimonialHeight(element) {
  const container = testimonialContainer.value;

  if (!container) {
    return;
  }

  requestAnimationFrame(() => {
    container.style.height = `${element.offsetHeight}px`;
  });
}

function clearTestimonialHeight() {
  const container = testimonialContainer.value;

  if (!container) {
    return;
  }

  container.style.height = '';
  container.style.overflow = '';
}

function previousTestimonials() {
  testimonialDirection.value = -1;
  testimonialIndex.value =
    (testimonialIndex.value - 1 + testimonials.length) % testimonials.length;
}

function nextTestimonials() {
  testimonialDirection.value = 1;
  testimonialIndex.value = (testimonialIndex.value + 1) % testimonials.length;
}
</script>

<template>
  <div>
    <section class="page-hero about-hero" aria-labelledby="hero-title">
      <div class="page-hero__placeholder" role="img" aria-label="Random emergency response background image">
        <img src="https://images.pexels.com/photos/8943102/pexels-photo-8943102.jpeg?auto=compress&cs=tinysrgb&w=1800" alt="" />
      </div>

      <div class="page-hero__inner">
        <div class="page-hero__content">
          <h1 id="hero-title" class="page-hero__title">
            <span class="page-hero__title-faint">Primary</span>
            <span class="page-hero__title-strong">Emergency Response Services</span>
          </h1>
          <p class="page-hero__copy">
            Assu-Med manages a dedicated team of emergency medical professionals and response
            vehicles from Watergate, Mitchell's Plain. Our team can quickly mobilise to patients
            requiring urgent care across the Western Cape.
          </p>
          <p class="page-hero__slogan">YOUR HEALTH IS OUR CONCERN</p>
          <p class="page-hero__tagline">
            <strong>"The reduction in waiting time can save lives."</strong>
          </p>
          <a class="page-hero__button" href="#ambulance-services">Learn more</a>
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

    <section class="home-services-strip" id="services" aria-label="Services overview">
      <div class="home-services-strip__inner">
        <div class="home-services-strip__header">
          <p>What We Provide</p>
          <h2>Emergency care, transfer support and on-site medical cover.</h2>
        </div>

        <a class="home-service-card" href="#ambulance-services">
          <img src="https://images.pexels.com/photos/8942234/pexels-photo-8942234.jpeg?auto=compress&cs=tinysrgb&w=760" alt="" />
          <span>Primary Emergency Response Services</span>
        </a>
        <a class="home-service-card" href="#ambulance-services">
          <img src="https://images.pexels.com/photos/8943102/pexels-photo-8943102.jpeg?auto=compress&cs=tinysrgb&w=760" alt="" />
          <span>Inter Hospital/Facility Transfer</span>
        </a>
        <a class="home-service-card" href="#ambulance-services">
          <img src="https://images.pexels.com/photos/8948289/pexels-photo-8948289.jpeg?auto=compress&cs=tinysrgb&w=760" alt="" />
          <span>Industrial &amp; On-site Medical Solutions</span>
        </a>
      </div>
    </section>

    <section class="home-ambulance-intro" id="ambulance-services" aria-labelledby="ambulance-services-title">
      <div class="home-ambulance-intro__inner">
        <h2 id="ambulance-services-title">24 Hour Ambulance Services</h2>
        <div class="home-ambulance-intro__grid">
          <div class="home-ambulance-intro__copy">
            <p>
              Assu-Med is a privately-owned emergency ambulance service based in Watergate,
              Mitchell's Plain. We provide primary emergency response services as well as
              inter-hospital and facility transfer services with advanced life support
              capabilities.
            </p>
            <p>
              Our Call Centre is available 24/7 on 021 879 4716 and our experienced
              medical staff are on standby to provide emergency care.
            </p>
            <div class="home-ambulance-intro__callout">
              <strong>24/7</strong>
              <span>Call Centre Support</span>
            </div>
          </div>
          <div class="home-ambulance-intro__media">
            <img src="https://images.pexels.com/photos/8942092/pexels-photo-8942092.jpeg?auto=compress&cs=tinysrgb&w=900" alt="" />
          </div>
        </div>
      </div>
    </section>

    <section class="home-testimonials" aria-labelledby="testimonials-title">
      <div class="home-testimonials__inner">
        <div class="home-testimonials__header">
          <p class="home-testimonials__eyebrow">Community Feedback</p>
          <h2 id="testimonials-title">Trusted When Every Minute Matters</h2>
          <div class="home-testimonials__controls" aria-label="Testimonial controls">
            <button type="button" aria-label="Previous testimonials" @click="previousTestimonials">
              <SvgIcon name="arrow-left" />
            </button>
            <button type="button" aria-label="Next testimonials" @click="nextTestimonials">
              <SvgIcon name="arrow-right" />
            </button>
          </div>
        </div>

        <div
          ref="testimonialContainer"
          class="home-testimonials__single"
          :class="testimonialDirection > 0 ? 'is-next' : 'is-previous'"
        >
          <Transition
            name="testimonial-slide"
            mode="out-in"
            @before-leave="setTestimonialHeight"
            @enter="animateTestimonialHeight"
            @after-enter="clearTestimonialHeight"
          >
            <article class="home-testimonial" :key="testimonialIndex">
              <div class="home-testimonial__avatar" aria-hidden="true">
                <span></span>
              </div>
              <p>"{{ testimonials[testimonialIndex].quote }}"</p>
              <footer>
                <strong>{{ testimonials[testimonialIndex].name }}</strong>
                <span>{{ testimonials[testimonialIndex].role }}</span>
              </footer>
            </article>
          </Transition>
        </div>
      </div>
    </section>

  </div>
</template>
