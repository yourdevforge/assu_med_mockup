<script setup>
useSeoMeta({
  title: 'Vacancies',
  description:
    'View current Assu-Med ambulance service vacancies for clinical roles including BLS and ILS positions.',
});

const requirements = [
  'Current registration with HPCSA',
  'Valid 08 drivers licence with a current PrDP',
  'Sound clinical knowledge of protocols and scope of practice',
  '3 years + clinical experience',
  'Up to date CPD Points / Fluent in English and Afrikaans',
  'No criminal record',
];
</script>

<template>
  <div>
    <AppPageHero
      title-id="vacancies-hero-title"
      image-src="https://images.pexels.com/photos/8941917/pexels-photo-8941917.jpeg?auto=compress&cs=tinysrgb&w=1800"
      image-label="Random page background image"
      eyebrow="We're"
      title="Hiring"
      cta-href="#vacancy-list"
      cta-label="View positions"
    >
      <p>
        Assu-Med manages a fleet of private ambulances and emergency response vehicles
        from our head office in <strong>Watergate, Mitchell's Plain</strong> and is always
        looking for highly-skilled medical professionals to join our growing team.
      </p>
      <template #tagline><em>"The reduction in waiting time can save lives."</em></template>
    </AppPageHero>

    <section class="relative overflow-hidden bg-[radial-gradient(circle_at_12%_4%,rgba(237,28,36,0.1),transparent_24%),radial-gradient(circle_at_88%_0%,rgba(0,140,255,0.12),transparent_26%),linear-gradient(180deg,#ffffff_0%,#f4f7fb_100%)] py-[76px] pb-[108px] before:pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(rgba(0,27,85,0.032)_1px,transparent_1px),linear-gradient(90deg,rgba(0,27,85,0.032)_1px,transparent_1px)] before:bg-[length:58px_58px] max-sm:py-14" id="vacancy-list" aria-label="Open positions">
      <div class="relative z-[1] mx-auto mb-[38px] w-[calc(100%_-_3rem)] max-w-[1180px] max-sm:w-[calc(100%_-_1.5rem)]">
        <p class="mb-2.5 text-[13px] font-black uppercase tracking-[0.12em] text-[#ed1c24]">Join The Response Team</p>
        <h2 class="m-0 max-w-[780px] text-[clamp(30px,3.6vw,48px)] font-black leading-[1.08] text-[#001b55] max-sm:text-[28px]">Clinical roles for people who stay calm, capable and ready when it matters.</h2>
        <div class="mt-6 flex flex-wrap gap-3" aria-label="Vacancy highlights">
          <span class="inline-flex min-h-10 items-center gap-2 rounded-full border border-[#001b55]/10 bg-white/80 px-[15px] py-2 text-xs font-black uppercase tracking-[0.05em] text-[#001b55]/75"><strong class="text-[15px] text-[#001b55]">BLS</strong> open</span>
          <span class="inline-flex min-h-10 items-center gap-2 rounded-full border border-[#001b55]/10 bg-white/80 px-[15px] py-2 text-xs font-black uppercase tracking-[0.05em] text-[#001b55]/75"><strong class="text-[15px] text-[#001b55]">ILS</strong> open</span>
          <span class="inline-flex min-h-10 items-center gap-2 rounded-full border border-[#001b55]/10 bg-white/80 px-[15px] py-2 text-xs font-black uppercase tracking-[0.05em] text-[#001b55]/75"><strong class="text-[15px] text-[#001b55]">24/7</strong> roster</span>
        </div>
      </div>

      <div class="relative z-[1] mx-auto w-[calc(100%_-_3rem)] max-w-[1180px] max-sm:w-[calc(100%_-_1.5rem)]">
        <article class="grid grid-cols-[minmax(300px,0.82fr)_minmax(360px,1.18fr)] items-stretch gap-[34px] max-lg:grid-cols-1 max-lg:gap-8">
          <div class="relative grid min-h-[540px] items-end overflow-hidden rounded-[18px] border border-[#008cff]/20 bg-[radial-gradient(circle_at_20%_12%,rgba(237,28,36,0.42),transparent_26%),radial-gradient(circle_at_86%_2%,rgba(0,140,255,0.34),transparent_32%),linear-gradient(180deg,rgba(0,18,51,0.3)_0%,rgba(0,18,51,0.44)_48%,rgba(0,18,51,0.92)_100%),repeating-linear-gradient(72deg,rgba(255,255,255,0.08)_0_2px,transparent_2px_72px),linear-gradient(135deg,#001a4d,#003b8a_50%,#00102e)] p-8 text-white shadow-[0_26px_58px_rgba(0,27,85,0.18),inset_0_0_0_1px_rgba(255,255,255,0.12)] before:absolute before:left-6 before:top-6 before:h-[5px] before:w-[104px] before:rounded-full before:bg-[linear-gradient(90deg,#ed1c24,#ffffff_48%,#008cff)] after:absolute after:bottom-[78px] after:right-[-70px] after:h-[260px] after:w-[260px] after:rounded-full after:border-[34px] after:border-white/10 max-lg:min-h-[440px] max-sm:min-h-[300px] max-sm:p-6 max-sm:after:h-[180px] max-sm:after:w-[180px] max-sm:after:border-[24px]">
            <div class="absolute left-8 top-[54px] grid h-[76px] w-[76px] place-items-center rounded-[18px] bg-white/95 text-[34px] text-[#001b55] shadow-[0_18px_36px_rgba(0,0,0,0.22)] max-sm:left-6 max-sm:top-12 max-sm:h-16 max-sm:w-16 max-sm:text-[28px]" aria-hidden="true">
              <SvgIcon name="briefcase-medical" />
            </div>
            <div class="relative z-[1]">
              <p class="mb-1.5 text-[clamp(38px,5vw,62px)] font-black uppercase leading-[0.95] tracking-normal text-white max-sm:text-[34px]">We're Hiring</p>
              <p class="m-0 text-[clamp(14px,2vw,18px)] font-black uppercase tracking-[0.08em] text-white/80">Positions Available</p>
            </div>
          </div>

          <div class="relative overflow-hidden rounded-[18px] border border-[#001b55]/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(255,255,255,0.92))] p-9 shadow-[0_22px_54px_rgba(0,27,85,0.1),inset_0_0_0_1px_rgba(255,255,255,0.8)] before:absolute before:left-0 before:top-0 before:h-[5px] before:w-[120px] before:bg-[linear-gradient(90deg,#ed1c24,#ffffff_48%,#008cff)] max-sm:px-[22px] max-sm:py-7">
            <div class="mb-[22px]">
              <p class="mb-2 text-xs font-black uppercase tracking-[0.12em] text-[#ed1c24]">Current Opening</p>
              <h2 class="mb-1 text-[clamp(44px,5vw,72px)] font-black leading-[0.95] text-[#001b55] max-sm:text-[38px]">BLS &amp; ILS</h2>
              <p class="m-0 text-[clamp(18px,2.2vw,24px)] font-black text-[#001b55]/75">Positions Available</p>
            </div>

            <div class="mb-7 flex flex-wrap gap-2.5" aria-label="Role details">
              <span class="inline-flex min-h-[38px] items-center gap-2 rounded-full bg-[#001b55]/10 px-3 py-2 text-xs font-black text-[#001b55]"><SvgIcon name="shield" class="text-[15px] text-[#ed1c24]" /> HPCSA registered</span>
              <span class="inline-flex min-h-[38px] items-center gap-2 rounded-full bg-[#001b55]/10 px-3 py-2 text-xs font-black text-[#001b55]"><SvgIcon name="clock" class="text-[15px] text-[#ed1c24]" /> Shift roster</span>
              <span class="inline-flex min-h-[38px] items-center gap-2 rounded-full bg-[#001b55]/10 px-3 py-2 text-xs font-black text-[#001b55]"><SvgIcon name="heart-pulse" class="text-[15px] text-[#ed1c24]" /> Clinical care</span>
            </div>

            <h3 class="mb-2.5 mt-6 text-[17px] font-black text-[#001b55]">Requirements</h3>
            <ul class="m-0 mb-2 list-none p-0 text-[#001b55]">
              <li v-for="requirement in requirements" :key="requirement" class="relative mb-1.5 pl-[22px] text-sm leading-[1.6] before:absolute before:left-0 before:top-[0.62em] before:h-[9px] before:w-[9px] before:rounded-full before:bg-[linear-gradient(135deg,#ed1c24,#008cff)]">
                {{ requirement }}
              </li>
            </ul>

            <h3 class="mb-2.5 mt-6 text-[17px] font-black text-[#001b55]">Duties</h3>
            <p class="mb-2 text-sm leading-[1.7] text-[#001b55]">Provide clinical care according to scope of practice / Shifts roster adherence</p>

            <h3 class="mb-2.5 mt-6 text-[17px] font-black text-[#001b55]">To Apply</h3>
            <div class="mt-3 rounded-[14px] border border-[#008cff]/15 bg-[linear-gradient(120deg,rgba(237,28,36,0.06),transparent_28%),linear-gradient(280deg,rgba(0,140,255,0.08),transparent_30%),#f8fbff] p-5">
              <p class="mb-2 text-sm leading-[1.7] text-[#001b55]">
                Email full CV with references to
                <a class="font-black text-[#d92020] underline" href="mailto:admin@assumed.co.za">admin@assumed.co.za</a>
              </p>
              <a class="my-2 inline-flex min-h-11 items-center gap-2 rounded-full bg-[linear-gradient(135deg,#ed1c24,#b90f18)] px-[18px] py-2.5 text-xs font-black uppercase tracking-[0.04em] text-white shadow-[0_14px_26px_rgba(237,28,36,0.2)] transition hover:bg-[linear-gradient(135deg,#ff2a32,#c9141e)] max-sm:w-full max-sm:justify-center" href="mailto:admin@assumed.co.za">
                <SvgIcon name="file-text" />
                <span>Send CV</span>
              </a>
              <p class="mb-2 text-sm leading-[1.7] text-[#001b55]">
                Enquiries:
                <a class="font-black text-[#d92020] underline" href="tel:0218794716">021 879 4716</a>
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>