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
    <AppPageHero
      title-id="hero-title"
      image-src="https://images.pexels.com/photos/8943102/pexels-photo-8943102.jpeg?auto=compress&cs=tinysrgb&w=1800"
      image-label="Random emergency response background image"
      eyebrow="Primary"
      title="Emergency Response Services"
      cta-href="#ambulance-services"
      cta-label="Learn more"
      flush-top
    >
      <p>
        Assu-Med manages a dedicated team of emergency medical professionals and response
        vehicles from Watergate, Mitchell's Plain. Our team can quickly mobilise to patients
        requiring urgent care across the Western Cape.
      </p>
      <template #slogan>YOUR HEALTH IS OUR CONCERN</template>
      <template #tagline><strong>"The reduction in waiting time can save lives."</strong></template>
    </AppPageHero>

    <section class="relative bg-[radial-gradient(circle_at_20%_8%,rgba(237,28,36,0.09),transparent_24%),radial-gradient(circle_at_78%_18%,rgba(0,140,255,0.1),transparent_24%),linear-gradient(135deg,#f5f6f8_0%,#e7e9ed_100%)] py-[74px] pb-[86px] before:absolute before:left-0 before:right-0 before:top-0 before:h-px before:bg-[linear-gradient(90deg,transparent,rgba(237,28,36,0.4),rgba(0,140,255,0.35),transparent)] max-sm:py-12" id="services" aria-label="Services overview">
      <div class="relative mx-auto grid w-[calc(100%_-_3rem)] max-w-[1240px] grid-cols-3 gap-[clamp(34px,4vw,58px)] max-lg:grid-cols-1 max-lg:gap-9 max-sm:w-[calc(100%_-_1.5rem)] max-sm:gap-6">
        <div class="col-span-full mb-2 max-w-[760px]">
          <p class="mb-2 text-[13px] font-black uppercase tracking-[0.12em] text-[#ed1c24]">What We Provide</p>
          <h2 class="m-0 text-[clamp(28px,3.6vw,44px)] font-extrabold leading-[1.08] text-[#001b55] max-sm:text-[26px]">Emergency care, transfer support and on-site medical cover.</h2>
        </div>

        <a class="group relative z-[1] block min-h-[300px] overflow-hidden bg-[#001b55] shadow-[0_20px_44px_rgba(0,27,85,0.18)] transition hover:-translate-y-2 hover:shadow-[0_26px_54px_rgba(0,27,85,0.28)] focus-visible:-translate-y-2 focus-visible:outline focus-visible:outline-4 focus-visible:outline-[#008cff]/40 max-sm:min-h-[260px]" href="#ambulance-services">
          <img class="block h-[260px] w-full object-cover transition duration-300 group-hover:scale-[1.045] max-sm:h-[220px]" src="https://images.pexels.com/photos/8942234/pexels-photo-8942234.jpeg?auto=compress&cs=tinysrgb&w=760" alt="" />
          <div class="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,27,85,0.04)_0%,rgba(0,27,85,0.42)_58%,rgba(0,16,48,0.86)_100%),linear-gradient(135deg,rgba(237,28,36,0.18),transparent_38%)]"></div>
          <div class="absolute left-0 top-0 h-[5px] w-[78px] bg-[linear-gradient(90deg,#ed1c24_0_48%,#008cff_52%_100%)]"></div>
          <span class="absolute bottom-[18px] left-[18px] right-[18px] z-[3] flex min-h-16 items-center bg-[linear-gradient(135deg,rgba(237,28,36,0.96),rgba(176,10,18,0.96))] px-[18px] py-[15px] text-base font-extrabold leading-tight text-white shadow-[0_12px_24px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.2)] max-sm:left-3 max-sm:right-3 max-sm:bottom-3 max-sm:min-h-14 max-sm:text-[15px]">Primary Emergency Response Services</span>
        </a>

        <a class="group relative z-[1] block min-h-[300px] overflow-hidden bg-[#001b55] shadow-[0_20px_44px_rgba(0,27,85,0.18)] transition hover:-translate-y-2 hover:shadow-[0_26px_54px_rgba(0,27,85,0.28)] focus-visible:-translate-y-2 focus-visible:outline focus-visible:outline-4 focus-visible:outline-[#008cff]/40 max-sm:min-h-[260px]" href="#ambulance-services">
          <img class="block h-[260px] w-full object-cover transition duration-300 group-hover:scale-[1.045] max-sm:h-[220px]" src="https://images.pexels.com/photos/8943102/pexels-photo-8943102.jpeg?auto=compress&cs=tinysrgb&w=760" alt="" />
          <div class="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,27,85,0.04)_0%,rgba(0,27,85,0.42)_58%,rgba(0,16,48,0.86)_100%),linear-gradient(135deg,rgba(237,28,36,0.18),transparent_38%)]"></div>
          <div class="absolute left-0 top-0 h-[5px] w-[78px] bg-[linear-gradient(90deg,#ed1c24_0_48%,#008cff_52%_100%)]"></div>
          <span class="absolute bottom-[18px] left-[18px] right-[18px] z-[3] flex min-h-16 items-center bg-[linear-gradient(135deg,rgba(237,28,36,0.96),rgba(176,10,18,0.96))] px-[18px] py-[15px] text-base font-extrabold leading-tight text-white shadow-[0_12px_24px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.2)] max-sm:left-3 max-sm:right-3 max-sm:bottom-3 max-sm:min-h-14 max-sm:text-[15px]">Inter Hospital/Facility Transfer</span>
        </a>

        <a class="group relative z-[1] block min-h-[300px] overflow-hidden bg-[#001b55] shadow-[0_20px_44px_rgba(0,27,85,0.18)] transition hover:-translate-y-2 hover:shadow-[0_26px_54px_rgba(0,27,85,0.28)] focus-visible:-translate-y-2 focus-visible:outline focus-visible:outline-4 focus-visible:outline-[#008cff]/40 max-sm:min-h-[260px]" href="#ambulance-services">
          <img class="block h-[260px] w-full object-cover transition duration-300 group-hover:scale-[1.045] max-sm:h-[220px]" src="https://images.pexels.com/photos/8948289/pexels-photo-8948289.jpeg?auto=compress&cs=tinysrgb&w=760" alt="" />
          <div class="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,27,85,0.04)_0%,rgba(0,27,85,0.42)_58%,rgba(0,16,48,0.86)_100%),linear-gradient(135deg,rgba(237,28,36,0.18),transparent_38%)]"></div>
          <div class="absolute left-0 top-0 h-[5px] w-[78px] bg-[linear-gradient(90deg,#ed1c24_0_48%,#008cff_52%_100%)]"></div>
          <span class="absolute bottom-[18px] left-[18px] right-[18px] z-[3] flex min-h-16 items-center bg-[linear-gradient(135deg,rgba(237,28,36,0.96),rgba(176,10,18,0.96))] px-[18px] py-[15px] text-base font-extrabold leading-tight text-white shadow-[0_12px_24px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.2)] max-sm:left-3 max-sm:right-3 max-sm:bottom-3 max-sm:min-h-14 max-sm:text-[15px]">Industrial &amp; On-site Medical Solutions</span>
        </a>
      </div>
    </section>

    <section class="bg-[linear-gradient(180deg,#ffffff_0%,#f9fbff_100%)] py-24 pb-[108px] max-sm:py-14" id="ambulance-services" aria-labelledby="ambulance-services-title">
      <div class="mx-auto w-[calc(100%_-_3rem)] max-w-[1180px] max-sm:w-[calc(100%_-_1.5rem)]">
        <h2 id="ambulance-services-title" class="mb-[34px] grid grid-cols-[auto_1fr] items-center gap-4 text-base font-black uppercase tracking-[0.02em] text-[#001b55] after:h-px after:bg-[#dddddd] max-sm:grid-cols-1 max-sm:gap-3 max-sm:after:w-full">24 Hour Ambulance Services</h2>
        <div class="grid grid-cols-[minmax(360px,0.86fr)_minmax(520px,1.14fr)] items-center gap-[70px] max-lg:grid-cols-1 max-lg:gap-9">
          <div class="relative border-l-[3px] border-[#e0e3ea] bg-[linear-gradient(90deg,rgba(0,27,85,0.055),transparent_42%)] py-11 pr-[42px] pl-[34px] shadow-[0_18px_36px_rgba(0,27,85,0.06)] before:absolute before:left-[-3px] before:top-[42px] before:h-[78px] before:w-[3px] before:bg-[#ed1c24] max-sm:px-6">
            <p class="mb-[22px] text-base leading-[1.78] text-[#14213d]">
              Assu-Med is a privately-owned emergency ambulance service based in Watergate,
              Mitchell's Plain. We provide primary emergency response services as well as
              inter-hospital and facility transfer services with advanced life support
              capabilities.
            </p>
            <p class="mb-[22px] text-base leading-[1.78] text-[#14213d]">
              Our Call Centre is available 24/7 on 021 879 4716 and our experienced
              medical staff are on standby to provide emergency care.
            </p>
            <div class="mt-2 inline-flex items-center gap-3.5 border-t border-[#001b55]/10 pt-1 text-[#001b55]">
              <strong class="text-[38px] font-black leading-none text-[#ed1c24]">24/7</strong>
              <span class="text-[13px] font-extrabold uppercase tracking-[0.08em]">Call Centre Support</span>
            </div>
          </div>
          <div class="relative overflow-hidden border-[10px] border-white shadow-[-18px_18px_0_rgba(237,28,36,0.1),22px_-22px_0_rgba(0,140,255,0.1),0_24px_46px_rgba(0,27,85,0.2)] after:pointer-events-none after:absolute after:inset-0 after:border after:border-white/45 max-sm:border-4 max-sm:shadow-[0_18px_34px_rgba(0,27,85,0.18)]">
            <img class="block aspect-[16/9.5] w-full object-cover" src="https://images.pexels.com/photos/8942092/pexels-photo-8942092.jpeg?auto=compress&cs=tinysrgb&w=900" alt="" />
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[linear-gradient(180deg,#f2f3f5_0%,#e8eaee_100%)] py-[86px] pb-24 text-[#001b55] max-sm:py-14" aria-labelledby="testimonials-title">
      <div class="mx-auto w-[calc(100%_-_3rem)] max-w-[1180px] max-sm:w-[calc(100%_-_1.5rem)]">
        <div class="relative mb-[34px] max-w-[680px]">
          <p class="mb-2.5 text-[13px] font-black uppercase tracking-[0.12em] text-[#ff3340]">Community Feedback</p>
          <h2 id="testimonials-title" class="m-0 text-[clamp(32px,4vw,48px)] font-extrabold leading-[1.08] text-[#001b55] max-sm:text-[28px]">Trusted When Every Minute Matters</h2>
          <div class="absolute bottom-1 left-[calc(100%_+_42px)] flex gap-2.5 max-lg:static max-lg:mt-[22px]" aria-label="Testimonial controls">
            <button class="grid h-[50px] w-[50px] cursor-pointer place-items-center rounded-full bg-[linear-gradient(135deg,#ffffff,#dfe5ef)] text-[22px] text-[#001b55] shadow-[0_10px_20px_rgba(0,27,85,0.14),inset_0_1px_0_rgba(255,255,255,0.9)] transition hover:-translate-y-1 hover:bg-[linear-gradient(135deg,#ff2a32,#c90f18)] hover:text-white hover:shadow-[0_14px_26px_rgba(237,28,36,0.28),inset_0_1px_0_rgba(255,255,255,0.28)]" type="button" aria-label="Previous testimonials" @click="previousTestimonials">
              <SvgIcon name="arrow-left" />
            </button>
            <button class="grid h-[50px] w-[50px] cursor-pointer place-items-center rounded-full bg-[linear-gradient(135deg,#ffffff,#dfe5ef)] text-[22px] text-[#001b55] shadow-[0_10px_20px_rgba(0,27,85,0.14),inset_0_1px_0_rgba(255,255,255,0.9)] transition hover:-translate-y-1 hover:bg-[linear-gradient(135deg,#ff2a32,#c90f18)] hover:text-white hover:shadow-[0_14px_26px_rgba(237,28,36,0.28),inset_0_1px_0_rgba(255,255,255,0.28)]" type="button" aria-label="Next testimonials" @click="nextTestimonials">
              <SvgIcon name="arrow-right" />
            </button>
          </div>
        </div>

        <div ref="testimonialContainer" class="max-w-[820px] transition-[height] duration-300 ease-out will-change-[height] motion-reduce:transition-none">
          <Transition
            mode="out-in"
            enter-active-class="transition duration-300 ease-out motion-reduce:transition-none"
            :enter-from-class="testimonialDirection > 0 ? 'opacity-0 translate-x-7' : 'opacity-0 -translate-x-7'"
            enter-to-class="opacity-100 translate-x-0"
            leave-active-class="transition duration-300 ease-out motion-reduce:transition-none"
            leave-from-class="opacity-100 translate-x-0"
            :leave-to-class="testimonialDirection > 0 ? 'opacity-0 -translate-x-7' : 'opacity-0 translate-x-7'"
            @before-leave="setTestimonialHeight"
            @enter="animateTestimonialHeight"
            @after-enter="clearTestimonialHeight"
          >
            <article class="relative p-0 before:absolute before:right-0 before:top-[-28px] before:text-[120px] before:font-black before:leading-none before:text-[#001b55]/10 before:content-['\201C'] max-sm:before:text-[76px]" :key="testimonialIndex">
              <div class="mb-[22px] grid h-[62px] w-[62px] place-items-center rounded-full bg-[linear-gradient(180deg,#d5dae3,#9ca6b6)] text-xs font-black uppercase tracking-[0.08em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_10px_20px_rgba(0,0,0,0.2)]" aria-hidden="true">
                AM
              </div>
              <p class="relative z-[1] mb-7 text-[clamp(20px,2.6vw,30px)] font-semibold leading-[1.72] text-[#14213d] max-sm:text-lg max-sm:leading-[1.65]">"{{ testimonials[testimonialIndex].quote }}"</p>
              <footer class="grid gap-1">
                <strong class="text-[15px] font-black text-[#001b55]">{{ testimonials[testimonialIndex].name }}</strong>
                <span class="text-xs font-extrabold uppercase tracking-[0.08em] text-[#001b55]/60">{{ testimonials[testimonialIndex].role }}</span>
              </footer>
            </article>
          </Transition>
        </div>
      </div>
    </section>
  </div>
</template>