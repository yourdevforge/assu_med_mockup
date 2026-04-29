<script setup>
defineProps({
  titleId: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
  imageLabel: {
    type: String,
    default: 'Ambulance background image',
  },
  kicker: {
    type: String,
    default: '24 Hour',
  },
  title: {
    type: String,
    default: 'Ambulance Services',
  },
  ctaHref: {
    type: String,
    default: '#',
  },
  ctaLabel: {
    type: String,
    default: 'Learn more',
  },
});
</script>

<template>
  <section
    class="relative z-[1] min-h-[540px] overflow-visible border-t-2 border-[#ff2727] bg-[#001845] text-white max-lg:min-h-[620px] max-sm:min-h-0"
    :aria-labelledby="titleId"
  >
    <div class="absolute inset-0 overflow-hidden" role="img" :aria-label="imageLabel">
      <img class="block h-full w-full object-cover" :src="imageSrc" alt="" />
      <div class="absolute right-[-12%] top-[32%] h-1 w-[76%] -rotate-[16deg] rounded-full bg-white/35 blur-[1px]"></div>
      <div class="absolute bottom-[28%] right-[-22%] h-1 w-[76%] -rotate-[16deg] rounded-full bg-[#0070ff]/50 blur-[1px]"></div>
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_45%_55%,rgba(0,105,210,0.32),transparent_34%),linear-gradient(90deg,rgba(0,13,45,0.96),rgba(0,44,122,0.78)_48%,rgba(0,11,38,0.94)),linear-gradient(180deg,rgba(0,23,71,0.08),rgba(0,20,58,0.82))]"
      ></div>
    </div>

    <div class="pointer-events-none absolute bottom-[-18px] left-0 right-0 z-[3] h-5 blur-[0.25px]">
      <div class="h-1 bg-[linear-gradient(90deg,#ed1c24_0%,#ed1c24_47%,rgba(255,255,255,0.95)_50%,#008cff_53%,#008cff_100%)]"></div>
      <div class="grid h-4 grid-cols-2">
        <div class="bg-[linear-gradient(180deg,rgba(237,28,36,0.42)_0%,rgba(237,28,36,0)_88%)]"></div>
        <div class="bg-[linear-gradient(180deg,rgba(0,140,255,0.44)_0%,rgba(0,140,255,0)_88%)]"></div>
      </div>
    </div>

    <div
      class="relative mx-auto grid min-h-[540px] w-[calc(100%_-_2rem)] max-w-[1070px] grid-cols-[minmax(300px,520px)_1fr] items-center gap-[70px] max-lg:min-h-[620px] max-lg:grid-cols-1 max-lg:content-center max-lg:gap-10 max-lg:py-14 max-sm:min-h-0 max-sm:w-[calc(100%_-_1.5rem)] max-sm:gap-8"
    >
      <div class="max-w-[530px]">
        <p class="m-0 text-[clamp(38px,5vw,48px)] font-extrabold uppercase leading-[0.95] tracking-[0.02em] text-[#ff2a2a] max-sm:text-[34px]">
          {{ kicker }}
        </p>
        <h1 :id="titleId" class="relative mb-9 text-[clamp(28px,4vw,34px)] font-extrabold uppercase leading-[1.05] tracking-[0.01em] text-white max-sm:mb-6 max-sm:text-[26px]">
          {{ title }}
          <span
            aria-hidden="true"
            class="absolute left-[38%] top-1/2 hidden h-[58px] w-[min(390px,70vw)] -translate-y-[34%] skew-x-[28deg] border-r-4 border-t-4 border-white/70 sm:block"
          ></span>
        </h1>

        <div class="mb-9 max-w-[520px] [&_p]:m-0 [&_p]:text-[15px] [&_p]:font-normal [&_p]:leading-[1.7] max-sm:mb-7">
          <slot />
        </div>

        <a
          :href="ctaHref"
          class="inline-flex min-h-9 min-w-[116px] items-center justify-center bg-[#006eb8] px-[22px] py-2.5 text-sm font-extrabold tracking-[0.01em] text-white transition hover:bg-[#0080d5] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-white/70"
        >
          {{ ctaLabel }}
        </a>
      </div>

      <div class="flex items-center gap-[26px] justify-self-end max-lg:justify-self-start max-sm:w-full max-sm:flex-col max-sm:items-start max-sm:gap-4" aria-label="Call centre">
        <div
          class="grid aspect-square w-24 place-items-center rounded-full border-4 border-[#ff2a2a] text-[54px] font-black text-[#ff2a2a] max-sm:w-[72px] max-sm:text-[38px]"
          aria-hidden="true"
        >
          <SvgIcon name="phone" />
        </div>
        <div>
          <p class="mb-1.5 text-[clamp(22px,3vw,31px)] font-extrabold leading-none text-white max-sm:text-2xl">Call Centre</p>
          <strong class="block whitespace-nowrap text-[clamp(38px,5vw,53px)] font-extrabold leading-none tracking-normal text-white max-sm:whitespace-normal max-sm:text-[30px]">021 879 4716</strong>
        </div>
      </div>
    </div>
  </section>
</template>
