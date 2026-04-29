<script setup>
useSeoMeta({
  title: 'Who We Are',
  description:
    'Meet Assu-Med, a private Advanced Life Support ambulance service based in Watergate, Mitchell\'s Plain.',
});
</script>

<template>
  <div>
    <AppPageHero
      title-id="page-hero-title"
      image-src="https://images.pexels.com/photos/8943102/pexels-photo-8943102.jpeg?auto=compress&cs=tinysrgb&w=1800"
      image-label="Emergency response background image"
      eyebrow="Who"
      title="We Are"
      cta-href="#about-us"
      cta-label="Learn more"
    >
      <p>
        Assu-Med is a privately-owned Advanced Life Support ambulance service based at
        <strong>Watergate Boulevard, Lentegeur</strong> in Mitchell's Plain.
      </p>
      <template #tagline><em>"The reduction in waiting time can save lives."</em></template>
    </AppPageHero>

    <section class="bg-[radial-gradient(circle_at_84%_14%,rgba(0,140,255,0.08),transparent_28%),#ffffff] py-[90px] max-sm:py-14" id="about-us" aria-labelledby="about-us-title">
      <div class="mx-auto grid w-[calc(100%_-_3rem)] max-w-[1180px] grid-cols-[minmax(340px,0.95fr)_minmax(420px,1.05fr)] items-center gap-[72px] max-lg:grid-cols-1 max-lg:gap-[38px] max-sm:w-[calc(100%_-_1.5rem)]">
        <div>
          <p class="mb-4 text-[clamp(20px,2vw,24px)] font-extrabold uppercase tracking-[0.02em] text-[#001b55]">About Us</p>
          <h2 id="about-us-title" class="mb-[22px] text-[clamp(34px,4vw,52px)] font-extrabold leading-[1.05] text-[#001b55] max-sm:text-[29px]">Built For Fast, Respectful Emergency Care</h2>
          <p class="mb-[18px] text-base leading-[1.78] text-[#14213d]">
            Assu-Med is a privately-owned emergency ambulance service located in Mitchell's Plain,
            Western Cape, conveniently positioned to serve Watergate, Lentegeur and surrounding
            communities.
          </p>
          <p class="mb-[18px] text-base leading-[1.78] text-[#14213d]">
            Our team combines medically-trained professionals, reliable support staff and a patient
            first approach. We believe every patient deserves dignity, respect and calm clinical
            care when pressure is high.
          </p>

          <div class="mt-[34px] grid grid-cols-3 border-y border-[#001b55]/10 max-sm:grid-cols-1" aria-label="Assu-Med highlights">
            <div class="border-r border-[#001b55]/10 p-[18px] max-sm:border-r-0 max-sm:border-b">
              <strong class="block text-[clamp(28px,3vw,38px)] font-black leading-none text-[#ed1c24]">ALS</strong>
              <span class="mt-2 block text-xs font-extrabold uppercase leading-tight tracking-[0.08em] text-[#001b55]">Advanced Life Support</span>
            </div>
            <div class="border-r border-[#001b55]/10 p-[18px] max-sm:border-r-0 max-sm:border-b">
              <strong class="block text-[clamp(28px,3vw,38px)] font-black leading-none text-[#ed1c24]">24/7</strong>
              <span class="mt-2 block text-xs font-extrabold uppercase leading-tight tracking-[0.08em] text-[#001b55]">Emergency Dispatch</span>
            </div>
            <div class="p-[18px]">
              <strong class="block text-[clamp(28px,3vw,38px)] font-black leading-none text-[#ed1c24]">2020</strong>
              <span class="mt-2 block text-xs font-extrabold uppercase leading-tight tracking-[0.08em] text-[#001b55]">Service Established</span>
            </div>
          </div>
        </div>

        <div class="relative overflow-hidden border-[10px] border-white shadow-[-18px_18px_0_rgba(237,28,36,0.09),22px_-22px_0_rgba(0,140,255,0.1),0_24px_46px_rgba(0,27,85,0.2)] after:pointer-events-none after:absolute after:inset-0 after:border after:border-white/50 max-sm:border-4 max-sm:shadow-[0_18px_34px_rgba(0,27,85,0.18)]" role="img" aria-label="Assu-Med paramedics">
          <img class="block aspect-[4/3] w-full object-cover" src="https://images.pexels.com/photos/8942234/pexels-photo-8942234.jpeg?auto=compress&cs=tinysrgb&w=900" alt="" />
        </div>
      </div>
    </section>

    <section class="bg-[radial-gradient(circle_at_15%_0%,rgba(237,28,36,0.08),transparent_25%),linear-gradient(135deg,#f2f3f5_0%,#e8eaee_100%)] py-[90px] max-sm:py-14" aria-labelledby="values-title">
      <div class="mx-auto grid w-[calc(100%_-_3rem)] max-w-[1180px] grid-cols-[minmax(320px,1.05fr)_minmax(320px,0.95fr)] gap-12 max-lg:grid-cols-1 max-lg:gap-[38px] max-sm:w-[calc(100%_-_1.5rem)]">
        <div class="grid gap-[22px]">
          <article class="relative bg-white px-9 py-[34px] shadow-[0_18px_38px_rgba(0,27,85,0.1)] before:absolute before:left-0 before:top-0 before:h-1 before:w-[78px] before:bg-[linear-gradient(90deg,#ed1c24_0_48%,#008cff_52%_100%)] max-sm:px-6 max-sm:py-7">
            <span class="mb-3 block text-xs font-black uppercase tracking-[0.12em] text-[#ed1c24]">Mission</span>
            <h2 id="values-title" class="mb-3 text-[clamp(24px,2.4vw,32px)] font-extrabold leading-[1.12] text-[#001b55]">Exceptional medical care for every patient.</h2>
            <p class="m-0 text-[15px] leading-[1.7] text-[#14213d]">
              We provide emergency response, treatment and transport in a fiscally responsible way
              as an active part of the Mitchell's Plain and wider Western Cape community.
            </p>
          </article>
          <article class="relative bg-white px-9 py-[34px] shadow-[0_18px_38px_rgba(0,27,85,0.1)] before:absolute before:left-0 before:top-0 before:h-1 before:w-[78px] before:bg-[linear-gradient(90deg,#ed1c24_0_48%,#008cff_52%_100%)] max-sm:px-6 max-sm:py-7">
            <span class="mb-3 block text-xs font-black uppercase tracking-[0.12em] text-[#ed1c24]">Vision</span>
            <h2 class="mb-3 text-[clamp(24px,2.4vw,32px)] font-extrabold leading-[1.12] text-[#001b55]">Prepared teams. Better outcomes.</h2>
            <p class="m-0 text-[15px] leading-[1.7] text-[#14213d]">
              Through training and development, we continually prepare our staff to deliver the
              best possible care to the communities we serve.
            </p>
          </article>
        </div>

        <div class="bg-[#001b55] px-9 py-[34px] text-white shadow-[0_18px_38px_rgba(0,27,85,0.16)] max-sm:px-6 max-sm:py-7">
          <p class="mb-2.5 text-[13px] font-black uppercase tracking-[0.12em] text-white">Our Core Values</p>
          <ul class="m-0 grid list-none gap-3 p-0">
            <li class="relative pl-6 text-base font-medium leading-[1.7] text-white/90 before:absolute before:left-0 before:top-[0.62em] before:h-[9px] before:w-[9px] before:rotate-45 before:bg-[#ed1c24]">Efficient, professional medical care</li>
            <li class="relative pl-6 text-base font-medium leading-[1.7] text-white/90 before:absolute before:left-0 before:top-[0.62em] before:h-[9px] before:w-[9px] before:rotate-45 before:bg-[#ed1c24]">Dignity and respect for every person</li>
            <li class="relative pl-6 text-base font-medium leading-[1.7] text-white/90 before:absolute before:left-0 before:top-[0.62em] before:h-[9px] before:w-[9px] before:rotate-45 before:bg-[#ed1c24]">Positive impact on patients' lives</li>
            <li class="relative pl-6 text-base font-medium leading-[1.7] text-white/90 before:absolute before:left-0 before:top-[0.62em] before:h-[9px] before:w-[9px] before:rotate-45 before:bg-[#ed1c24]">Strong relationships with medical professionals</li>
            <li class="relative pl-6 text-base font-medium leading-[1.7] text-white/90 before:absolute before:left-0 before:top-[0.62em] before:h-[9px] before:w-[9px] before:rotate-45 before:bg-[#ed1c24]">Health, wellness and injury-prevention education</li>
            <li class="relative pl-6 text-base font-medium leading-[1.7] text-white/90 before:absolute before:left-0 before:top-[0.62em] before:h-[9px] before:w-[9px] before:rotate-45 before:bg-[#ed1c24]">Continuous service improvement</li>
            <li class="relative pl-6 text-base font-medium leading-[1.7] text-white/90 before:absolute before:left-0 before:top-[0.62em] before:h-[9px] before:w-[9px] before:rotate-45 before:bg-[#ed1c24]">Highly skilled medical staff</li>
            <li class="relative pl-6 text-base font-medium leading-[1.7] text-white/90 before:absolute before:left-0 before:top-[0.62em] before:h-[9px] before:w-[9px] before:rotate-45 before:bg-[#ed1c24]">Pride in everything we do</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="bg-white py-24 pb-[108px] max-sm:py-14" aria-labelledby="operating-title">
      <div class="mx-auto grid w-[calc(100%_-_3rem)] max-w-[1180px] grid-cols-[minmax(380px,0.95fr)_minmax(360px,1.05fr)] items-center gap-[74px] max-lg:grid-cols-1 max-lg:gap-[38px] max-sm:w-[calc(100%_-_1.5rem)]">
        <div class="relative overflow-hidden border-[10px] border-white shadow-[-18px_18px_0_rgba(237,28,36,0.09),22px_-22px_0_rgba(0,140,255,0.1),0_24px_46px_rgba(0,27,85,0.2)] after:pointer-events-none after:absolute after:inset-0 after:border after:border-white/50 max-lg:order-2 max-sm:border-4 max-sm:shadow-[0_18px_34px_rgba(0,27,85,0.18)]" role="img" aria-label="Assu-Med paramedic with patient">
          <img class="block aspect-[4/3] w-full object-cover" src="https://images.pexels.com/photos/8948289/pexels-photo-8948289.jpeg?auto=compress&cs=tinysrgb&w=760" alt="" />
        </div>

        <div class="border-l-[3px] border-[#ed1c24] bg-[linear-gradient(90deg,rgba(0,27,85,0.055),transparent_46%)] px-[42px] py-11 max-sm:px-6 max-sm:py-8">
          <p class="mb-4 text-[clamp(20px,2vw,24px)] font-extrabold uppercase tracking-[0.02em] text-[#001b55]">Our Operating Model</p>
          <h2 id="operating-title" class="mb-[22px] text-[clamp(34px,4vw,52px)] font-extrabold leading-[1.05] text-[#001b55] max-sm:text-[29px]">Clinical standards that keep patient care consistent.</h2>
          <p class="mb-[18px] text-base leading-[1.78] text-[#14213d]">
            Our emphasis on quality and clinical excellence ensures patient needs come first. The
            clinical team reviews policies, patient care and safety practices on a regular basis.
          </p>
          <ul class="mt-6 grid list-none gap-3 p-0">
            <li class="relative pl-7 text-[15px] font-bold leading-[1.55] text-[#14213d] before:absolute before:left-0 before:top-[0.52em] before:h-[3px] before:w-3.5 before:bg-[linear-gradient(90deg,#ed1c24,#008cff)]">Staff education and professional compliance</li>
            <li class="relative pl-7 text-[15px] font-bold leading-[1.55] text-[#14213d] before:absolute before:left-0 before:top-[0.52em] before:h-[3px] before:w-3.5 before:bg-[linear-gradient(90deg,#ed1c24,#008cff)]">Best-practice clinical protocols and guidelines</li>
            <li class="relative pl-7 text-[15px] font-bold leading-[1.55] text-[#14213d] before:absolute before:left-0 before:top-[0.52em] before:h-[3px] before:w-3.5 before:bg-[linear-gradient(90deg,#ed1c24,#008cff)]">High-risk case management support</li>
            <li class="relative pl-7 text-[15px] font-bold leading-[1.55] text-[#14213d] before:absolute before:left-0 before:top-[0.52em] before:h-[3px] before:w-3.5 before:bg-[linear-gradient(90deg,#ed1c24,#008cff)]">Coordination with referring and receiving facilities</li>
            <li class="relative pl-7 text-[15px] font-bold leading-[1.55] text-[#14213d] before:absolute before:left-0 before:top-[0.52em] before:h-[3px] before:w-3.5 before:bg-[linear-gradient(90deg,#ed1c24,#008cff)]">Clinical governance and EMS protocol review</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>