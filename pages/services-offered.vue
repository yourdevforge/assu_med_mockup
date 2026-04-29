<script setup>
useSeoMeta({
  title: 'Services Offered',
  description:
    'Explore Assu-Med ambulance services, including primary emergency response, inter-facility transfers, advanced life support, and on-site medical solutions.',
});

const serviceTiles = [
  {
    icon: 'shield',
    title: 'Primary Emergency Response Services',
    paragraphs: [
      'Assu-Med manages a fleet of private ambulances and emergency response vehicles from our head office in Mitchell\'s Plain and can quickly mobilise to patients requiring critical care. The reduction in waiting time can save lives.',
      'Our on-call paramedics are trained to assess and stabilise patients and transport them safely to the nearest healthcare facility.',
    ],
  },
  {
    icon: 'hospital',
    title: 'Inter Hospital / Facility Transfer',
    paragraphs: [
      'Assu-Med\'s ambulance fleet can be used to transfer patients from one healthcare facility to another with shorter turnaround times compared to public ambulance services.',
    ],
  },
  {
    icon: 'heart-pulse',
    title: 'Advanced Life-Support',
    paragraphs: [
      'Assu-Med\'s healthcare personnel are meticulously trained to provide advanced life support (ALS) to enable open airways and adequate ventilation to patients.',
    ],
  },
  {
    icon: 'briefcase-medical',
    title: 'Industrial & On-Site Medical Solutions',
    paragraphs: [
      'Assu-Med can provide comprehensive on-site medical solutions for various industrial and remote sites. Our team works closely with contractors, their clients and employees to ensure a safe working environment, for all site personnel.',
      'Assu-Med\'s team uses a collaborative operational method to ensure compliance of all staff to the site regulations and mitigate all on-site risks. Our service offering can be customised to the needs of the client, including event standby medical services and on-site medical fitness certification by our residential doctor.',
    ],
  },
];

const covidTips = [
  { icon: '/icons/handwash.png', label: 'Wash your hands', detail: 'at least 20 seconds' },
  { icon: '/icons/usesoap.png', label: 'Use soap' },
  { icon: '/icons/wearmask.png', label: 'Wear a mask' },
  { icon: '/icons/avoidcrowds.png', label: 'Avoid crowds' },
  { icon: '/icons/avoidhandshake.png', label: 'Avoid handshakes' },
  { icon: '/icons/disinfect.png', label: 'Disinfect', detail: 'contact elements' },
];
</script>

<template>
  <div>
    <AppPageHero
      title-id="services-hero-title"
      image-src="https://images.pexels.com/photos/6754150/pexels-photo-6754150.jpeg?auto=compress&cs=tinysrgb&w=1800"
      image-label="Random page background image"
      eyebrow="Services"
      title="We Provide"
      cta-href="#service-cards"
      cta-label="Learn more"
    >
      <p>
        Assu-Med manages a fleet of private ambulances and emergency response vehicles
        from our head office in <strong>Watergate, Mitchell's Plain</strong> and can
        quickly mobilise to patients requiring critical care across the Western Cape.
      </p>
      <template #tagline><em>"The reduction in waiting time can save lives."</em></template>
    </AppPageHero>

    <section class="relative overflow-hidden bg-[radial-gradient(circle_at_16%_18%,rgba(237,28,36,0.08),transparent_24%),radial-gradient(circle_at_84%_12%,rgba(0,140,255,0.1),transparent_28%),linear-gradient(180deg,#f4f4f4_0%,#ececec_100%)] py-[72px] after:pointer-events-none after:absolute after:left-[-8%] after:right-[-8%] after:top-[46%] after:h-[140px] after:skew-y-[-3deg] after:bg-[linear-gradient(100deg,transparent_0_12%,rgba(255,255,255,0.58)_12%_32%,transparent_32%_68%,rgba(255,255,255,0.48)_68%_88%,transparent_88%_100%)] max-sm:py-12 max-sm:after:hidden" id="service-cards" aria-label="Services offered">
      <div class="relative z-[1] mx-auto grid w-[calc(100%_-_2rem)] max-w-[1070px] grid-cols-2 gap-7 max-lg:grid-cols-1 max-sm:w-[calc(100%_-_1.5rem)] max-sm:gap-5">
        <article v-for="service in serviceTiles" :key="service.title" class="group relative flex flex-col overflow-hidden rounded-[14px] border border-[#001b55]/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(255,255,255,0.9))] px-[30px] py-7 pb-8 shadow-[0_18px_40px_rgba(0,27,85,0.08),inset_0_0_0_1px_rgba(255,255,255,0.78)] transition hover:-translate-y-1 hover:border-[#008cff]/25 hover:shadow-[0_24px_54px_rgba(0,27,85,0.12),0_0_34px_rgba(0,140,255,0.08),inset_0_0_0_1px_rgba(255,255,255,0.85)] before:absolute before:left-0 before:top-0 before:h-1 before:w-[92px] before:bg-[linear-gradient(90deg,#ed1c24,#ffffff_48%,#008cff)] after:pointer-events-none after:absolute after:right-[-56px] after:top-[-70px] after:h-[190px] after:w-[190px] after:rounded-full after:bg-[radial-gradient(circle,rgba(0,140,255,0.1),transparent_66%)] max-sm:px-5 max-sm:py-6 max-sm:shadow-[0_14px_28px_rgba(0,27,85,0.08)]">
          <div class="mb-[18px] flex items-center gap-[18px] max-sm:items-start max-sm:gap-3.5">
            <span class="grid h-14 w-14 flex-none place-items-center rounded-full bg-[#001b55] text-2xl text-white shadow-[0_12px_22px_rgba(0,27,85,0.18),inset_0_0_0_1px_rgba(255,255,255,0.2)] max-sm:h-12 max-sm:w-12 max-sm:text-xl" aria-hidden="true">
              <SvgIcon :name="service.icon" />
            </span>
            <h2 class="m-0 text-xl font-extrabold leading-tight text-[#001b55] max-sm:text-lg">{{ service.title }}</h2>
          </div>
          <div>
            <p v-for="paragraph in service.paragraphs" :key="paragraph" class="mb-3.5 text-sm leading-[1.7] text-[#1f2937] last:mb-0">
              {{ paragraph }}
            </p>
          </div>
        </article>
      </div>
    </section>

    <section class="bg-[radial-gradient(circle_at_12%_0%,rgba(237,28,36,0.1),transparent_28%),radial-gradient(circle_at_88%_10%,rgba(0,140,255,0.16),transparent_26%),linear-gradient(180deg,#ffffff_0%,#f3f6fb_100%)] py-[82px] pb-[110px] max-sm:py-14 max-sm:pb-[74px]" aria-labelledby="covid-title">
      <div class="relative mx-auto w-[calc(100%_-_3rem)] max-w-[1180px] overflow-hidden border-2 border-transparent bg-[linear-gradient(#ffffff,#ffffff)_padding-box,linear-gradient(90deg,rgba(237,28,36,0.62)_0%,rgba(237,28,36,0.62)_47%,rgba(255,255,255,0.96)_50%,rgba(0,140,255,0.62)_53%,rgba(0,140,255,0.62)_100%)_border-box] p-[34px] shadow-[0_28px_70px_rgba(0,27,85,0.1)] before:pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(90deg,rgba(237,28,36,0.06),transparent_23%),linear-gradient(270deg,rgba(0,140,255,0.08),transparent_22%)] max-lg:p-6 max-sm:w-[calc(100%_-_1.5rem)] max-sm:p-[18px]">
        <div class="relative z-[1] mx-[18px] mb-[26px] flex -skew-x-[11deg] items-center gap-[18px] overflow-hidden bg-[linear-gradient(120deg,rgba(0,27,85,0.98)_0%,rgba(0,63,145,0.98)_66%,rgba(0,119,216,0.96)_100%)] px-8 py-7 shadow-[0_20px_42px_rgba(0,27,85,0.17),inset_4px_0_0_#ed1c24] after:pointer-events-none after:absolute after:bottom-0 after:right-[-34px] after:top-0 after:w-[250px] after:bg-[linear-gradient(135deg,transparent_0_28%,rgba(255,255,255,0.1)_28%_45%,transparent_45%_100%)] max-sm:mx-0 max-sm:grid max-sm:grid-cols-[auto_1fr] max-sm:skew-x-0 max-sm:p-5 max-sm:after:hidden">
          <span class="relative z-[1] grid h-16 w-16 skew-x-[11deg] place-items-center bg-white shadow-[0_12px_28px_rgba(0,0,0,0.2),0_0_0_6px_rgba(255,255,255,0.12)] max-sm:h-14 max-sm:w-14 max-sm:skew-x-0" aria-hidden="true">
            <img class="h-[42px] w-[42px] object-contain" src="/icons/covid.png" alt="" />
          </span>
          <div class="relative z-[1] skew-x-[11deg] max-sm:skew-x-0">
            <p class="mb-1 text-xs font-black uppercase tracking-[0.14em] text-white/70">Public health notice</p>
            <h2 id="covid-title" class="m-0 text-[clamp(30px,3.2vw,44px)] font-black leading-none tracking-[0.01em] text-white">COVID-19</h2>
          </div>
          <p class="relative z-[1] ml-auto border-l border-white/25 py-2.5 pl-5 skew-x-[11deg] text-sm font-extrabold tracking-[0.04em] text-white/80 max-sm:col-span-2 max-sm:ml-0 max-sm:border-l-0 max-sm:py-0 max-sm:pl-0 max-sm:skew-x-0 max-sm:text-xs">AWARENESS, SUPPORT &amp; ADVICE</p>
        </div>

        <div class="relative z-[1] mx-auto mt-[-2px] w-[min(960px,calc(100%_-_56px))] -skew-x-[8deg] border border-[#008cff]/20 bg-[linear-gradient(115deg,rgba(237,28,36,0.08),transparent_22%),linear-gradient(285deg,rgba(0,140,255,0.12),transparent_24%),rgba(255,255,255,0.92)] px-[42px] py-7 pb-[18px] shadow-[0_24px_54px_rgba(0,27,85,0.13),0_0_0_1px_rgba(255,255,255,0.74)_inset] before:absolute before:bottom-0 before:left-0 before:top-0 before:w-[5px] before:bg-[linear-gradient(180deg,#ed1c24,#008cff)] after:absolute after:right-[26px] after:top-[-8px] after:h-1 after:w-[88px] after:bg-[linear-gradient(90deg,#ed1c24,#ffffff_48%,#008cff)] after:shadow-[0_8px_20px_rgba(237,28,36,0.18),0_8px_20px_rgba(0,140,255,0.16)] max-sm:m-0 max-sm:w-full max-sm:skew-x-0 max-sm:px-[18px] max-sm:py-4">
          <div class="skew-x-[8deg] max-sm:skew-x-0">
            <p class="mb-4 max-w-[900px] text-[15px] leading-[1.85] text-[#14213d]">
              As healthcare professionals we have a responsibility to use our platform to inform
              and advise the public on global health matters. While the South African government
              puts the necessary measures in place to deal with infectious-disease outbreaks, it
              remains the responsibility of each of us to do our part in limiting the spread.
            </p>
            <p class="mb-4 max-w-[900px] text-[15px] leading-[1.85] text-[#14213d]">
              If you display symptoms, call your GP and follow their instructions or call the
              coronavirus emergency helpline on
              <a class="font-bold text-[#d92020] underline" href="tel:0800029999">0800 029 999</a>.<br />
              For regular updates and more information about COVID-19 please visit
              <a class="font-bold text-[#d92020] underline" href="https://sacoronavirus.co.za" target="_blank" rel="noopener">sacoronavirus.co.za</a>.
            </p>
          </div>
        </div>

        <ul class="relative z-[1] mt-[46px] grid list-none grid-cols-6 gap-[18px] p-0 before:absolute before:left-[7%] before:right-[7%] before:top-[50px] before:z-0 before:h-1 before:bg-[linear-gradient(90deg,rgba(237,28,36,0.82),rgba(255,255,255,0.95)_50%,rgba(0,140,255,0.82))] before:shadow-[0_0_16px_rgba(237,28,36,0.18),0_0_20px_rgba(0,140,255,0.16)] max-lg:grid-cols-3 max-sm:mt-7 max-sm:grid-cols-1 max-sm:gap-3 max-sm:before:hidden" aria-label="Hygiene tips">
          <li v-for="tip in covidTips" :key="tip.label" class="relative z-[1] flex min-h-[174px] -skew-x-[8deg] flex-col items-center justify-start border-2 border-transparent bg-[linear-gradient(#ffffff,#ffffff)_padding-box,linear-gradient(180deg,rgba(0,140,255,0.72)_0%,rgba(255,255,255,0.92)_50%,rgba(237,28,36,0.62)_100%)_border-box] px-4 py-[26px] pb-[22px] text-center text-[#001b55] shadow-[0_16px_34px_rgba(0,27,85,0.12)] transition hover:-translate-y-[7px] hover:shadow-[0_24px_44px_rgba(0,27,85,0.18),0_0_0_1px_rgba(0,140,255,0.08)] before:absolute before:left-1/2 before:top-[52px] before:h-3 before:w-3 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:border-[3px] before:border-white before:bg-[#ed1c24] before:shadow-[0_0_0_7px_rgba(237,28,36,0.14)] max-sm:min-h-0 max-sm:skew-x-0 max-sm:flex-row max-sm:justify-start max-sm:gap-4 max-sm:p-4 max-sm:text-left max-sm:before:hidden">
            <div class="relative z-[1] mb-[18px] grid h-[72px] w-[72px] skew-x-[8deg] place-items-center rounded-full bg-[radial-gradient(circle_at_30%_25%,#ffffff,#eef7ff_70%)] shadow-[0_12px_22px_rgba(0,91,180,0.16),inset_0_0_0_1px_rgba(0,140,255,0.18)] max-sm:mb-0 max-sm:h-14 max-sm:w-14 max-sm:flex-none max-sm:skew-x-0" aria-hidden="true">
              <img class="h-[46px] w-[46px] object-contain" :src="tip.icon" alt="" />
            </div>
            <p class="m-0 skew-x-[8deg] text-[13px] font-black leading-[1.45] text-[#001b55] max-sm:skew-x-0">
              {{ tip.label }}<br v-if="tip.detail" />
              <span v-if="tip.detail">{{ tip.detail }}</span>
            </p>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>