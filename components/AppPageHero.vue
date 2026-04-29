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
    default: 'Emergency response background image',
  },
  eyebrow: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  ctaHref: {
    type: String,
    default: '',
  },
  ctaLabel: {
    type: String,
    default: 'Learn more',
  },
  flushTop: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <section
    :aria-labelledby="titleId"
    :class="[
      'relative z-[1] min-h-[680px] overflow-visible bg-[#06183d] text-white shadow-[inset_0_-44px_74px_rgba(0,128,255,0.42),0_22px_44px_rgba(237,28,36,0.2)] max-sm:min-h-auto',
      flushTop ? 'border-t-0' : 'border-t-2 border-[#ff2727]',
    ]"
  >
    <div class="absolute inset-0 overflow-hidden" role="img" :aria-label="imageLabel">
      <img class="block h-full w-full object-cover" :src="imageSrc" alt="" />
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_45%_55%,rgba(0,105,210,0.32),transparent_34%),linear-gradient(90deg,rgba(0,13,45,0.96),rgba(0,44,122,0.78)_48%,rgba(0,11,38,0.94)),linear-gradient(180deg,rgba(0,23,71,0.08),rgba(0,20,58,0.82))]"
      ></div>
    </div>

    <div
      class="pointer-events-none absolute left-[max(-180px,-10vw)] top-0 z-[1] h-full w-[min(850px,62vw)] bg-[linear-gradient(115deg,rgba(0,20,67,0.92),rgba(0,40,112,0.72))] [clip-path:polygon(0_0,82%_0,100%_100%,0_100%)] max-sm:w-full max-sm:[clip-path:none]"
    ></div>

    <div class="pointer-events-none absolute bottom-[-18px] left-0 right-0 z-[3] h-5 blur-[0.25px]">
      <div class="h-1 bg-[linear-gradient(90deg,#ed1c24_0%,#ed1c24_47%,rgba(255,255,255,0.95)_50%,#008cff_53%,#008cff_100%)]"></div>
      <div class="grid h-4 grid-cols-2">
        <div class="bg-[linear-gradient(180deg,rgba(237,28,36,0.42)_0%,rgba(237,28,36,0)_88%)]"></div>
        <div class="bg-[linear-gradient(180deg,rgba(0,140,255,0.44)_0%,rgba(0,140,255,0)_88%)]"></div>
      </div>
    </div>

    <div
      class="relative z-[2] mx-auto grid min-h-[680px] w-[calc(100%_-_2rem)] max-w-[1070px] grid-cols-[minmax(300px,560px)_1fr] items-center gap-[72px] py-[78px] max-lg:grid-cols-1 max-lg:gap-10 max-sm:min-h-0 max-sm:w-[calc(100%_-_1.5rem)] max-sm:gap-8 max-sm:py-14"
    >
      <div class="max-w-[580px] min-[1200px]:-translate-x-[90px] max-sm:max-w-full">
        <h1 :id="titleId" class="mb-[30px] flex flex-col font-extrabold uppercase leading-none">
          <span class="text-[clamp(54px,7.4vw,92px)] tracking-[0.01em] text-white/35 max-sm:text-[42px]">{{ eyebrow }}</span>
          <span
            class="relative text-[clamp(24px,2.8vw,34px)] tracking-[0.01em] text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.35)] max-sm:text-[24px] max-sm:leading-[1.08]"
          >
            {{ title }}
            <span
              aria-hidden="true"
              class="absolute left-[calc(100%_+_18px)] top-1/2 hidden h-[52px] w-[min(360px,38vw)] -translate-y-[38%] skew-x-[28deg] border-r-[3px] border-t-[3px] border-white/55 lg:block"
            ></span>
          </span>
        </h1>

        <div
          class="max-w-[560px] [text-shadow:0_1px_10px_rgba(0,0,0,0.35)] [&_p]:mb-[18px] [&_p]:text-base [&_p]:font-medium [&_p]:leading-[1.75] [&_p:last-child]:mb-0 [&_strong]:text-white max-sm:[&_p]:text-[15px] max-sm:[&_p]:leading-[1.7]"
        >
          <slot />
        </div>

        <p
          v-if="$slots.slogan"
          class="mb-3 mt-4 text-[clamp(18px,2vw,24px)] font-black uppercase tracking-[0.08em] [text-shadow:0_2px_12px_rgba(0,0,0,0.38)] max-sm:text-base max-sm:tracking-[0.04em]"
        >
          <slot name="slogan" />
        </p>

        <p
          v-if="$slots.tagline"
          class="mb-7 mt-4 text-base font-extrabold italic [text-shadow:0_1px_8px_rgba(0,0,0,0.36)]"
        >
          <slot name="tagline" />
        </p>

        <a
          v-if="ctaHref"
          :href="ctaHref"
          class="relative inline-flex min-h-11 min-w-[140px] items-center justify-center overflow-hidden border border-white/15 bg-[linear-gradient(135deg,#ff2a32_0%,#d90f19_58%,#a90c14_100%)] px-7 py-[11px] text-sm font-extrabold uppercase tracking-[0.01em] text-white shadow-[0_12px_24px_rgba(237,28,36,0.32),inset_0_1px_0_rgba(255,255,255,0.28)] transition hover:-translate-y-0.5 hover:bg-[linear-gradient(135deg,#ff343c_0%,#e51722_58%,#b20e17_100%)] hover:shadow-[0_16px_30px_rgba(237,28,36,0.42),inset_0_1px_0_rgba(255,255,255,0.32)] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-white/70"
        >
          {{ ctaLabel }}
        </a>
      </div>

      <div
        class="flex translate-x-[130px] items-center gap-6 justify-self-end border border-white/25 bg-[#031946]/35 px-[30px] py-[26px] text-white/85 shadow-[0_22px_48px_rgba(0,0,0,0.26)] backdrop-blur-[10px] max-xl:translate-x-0 max-lg:justify-self-start max-sm:w-full max-sm:flex-col max-sm:items-start max-sm:gap-4 max-sm:px-5 max-sm:py-5"
        aria-label="Call centre"
      >
        <div
          class="grid aspect-square w-24 place-items-center rounded-full border-4 border-white/60 bg-white/5 text-5xl font-black text-white/80 shadow-[0_14px_30px_rgba(0,0,0,0.22)] max-sm:w-[72px] max-sm:text-[38px]"
          aria-hidden="true"
        >
          <SvgIcon name="phone" />
        </div>
        <div>
          <p class="mb-1.5 text-[clamp(22px,2.8vw,32px)] font-extrabold leading-none text-white max-sm:text-2xl">Call Centre</p>
          <strong class="block whitespace-nowrap text-[clamp(34px,4.8vw,54px)] font-extrabold leading-none tracking-normal text-white [text-shadow:0_3px_16px_rgba(0,0,0,0.38)] max-sm:whitespace-normal max-sm:text-[30px]">021 879 4716</strong>
        </div>
      </div>
    </div>
  </section>
</template>
