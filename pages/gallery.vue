<script setup>
useSeoMeta({
  title: 'Gallery',
  description:
    'View Assu-Med ambulance service media, response crew moments, clinical readiness, and on-site medical support highlights.',
});

const videos = [
  { id: 1, title: 'Emergency Response Team', label: 'On scene', duration: '0:42' },
  { id: 2, title: 'Clinical Crew Readiness', label: 'Operations', duration: '1:08' },
  { id: 3, title: 'Advanced Life Support', label: 'In vehicle', duration: '0:56' },
  { id: 4, title: 'Patient Care Equipment', label: 'Care unit', duration: '1:21' },
  { id: 5, title: 'Paramedic Field Notes', label: 'Behind scenes', duration: '0:38' },
  { id: 6, title: 'Ambulance Standby', label: 'Fleet', duration: '0:47' },
];

const videoImages = [8942234, 8941917, 8948289, 6754150, 8942117, 8942092];
</script>

<template>
  <div>
    <AppAmbulanceHero
      title-id="gallery-hero-title"
      image-src="https://images.pexels.com/photos/6754146/pexels-photo-6754146.jpeg?auto=compress&cs=tinysrgb&w=1800"
      image-label="Random ambulance background image"
      cta-href="#gallery-videos"
      cta-label="Learn more"
    >
      <p>
        Assu-Med is a privately-owned emergency ambulance service based in Mitchell's Plain,
        Western Cape. We provide primary emergency response services as well as inter-hospital/
        facility transfer services with advanced life support capabilities to both medical aid
        and private patients.
      </p>
    </AppAmbulanceHero>

    <section class="relative overflow-hidden bg-[radial-gradient(circle_at_12%_0%,rgba(237,28,36,0.12),transparent_25%),radial-gradient(circle_at_88%_6%,rgba(0,140,255,0.14),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f3f6fb_100%)] py-[76px] pb-[108px] max-sm:py-14" id="gallery-videos" aria-label="Video gallery">
      <div class="relative z-[1] mx-auto mb-[34px] w-[calc(100%_-_3rem)] max-w-[1180px] max-sm:w-[calc(100%_-_1.5rem)]">
        <p class="mb-2.5 text-[13px] font-black uppercase tracking-[0.12em] text-[#ed1c24]">Media Gallery</p>
        <h2 class="m-0 max-w-[760px] text-[clamp(30px,3.6vw,48px)] font-black leading-[1.08] text-[#001b55] max-sm:text-[28px]">Assu-Med in action, from response crews to clinical care.</h2>
        <div class="mt-6 flex flex-wrap gap-3" aria-label="Gallery statistics">
          <span class="inline-flex min-h-10 items-center gap-2 rounded-full border border-[#001b55]/10 bg-white/80 px-[15px] py-2 text-xs font-black uppercase tracking-[0.05em] text-[#001b55]/75"><strong class="text-[15px] text-[#001b55]">06</strong> clips</span>
          <span class="inline-flex min-h-10 items-center gap-2 rounded-full border border-[#001b55]/10 bg-white/80 px-[15px] py-2 text-xs font-black uppercase tracking-[0.05em] text-[#001b55]/75"><strong class="text-[15px] text-[#001b55]">24/7</strong> coverage</span>
          <span class="inline-flex min-h-10 items-center gap-2 rounded-full border border-[#001b55]/10 bg-white/80 px-[15px] py-2 text-xs font-black uppercase tracking-[0.05em] text-[#001b55]/75"><strong class="text-[15px] text-[#001b55]">ALS</strong> ready</span>
        </div>
      </div>

      <div class="relative z-[1] mx-auto grid w-[calc(100%_-_3rem)] max-w-[1180px] grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:w-[calc(100%_-_1.5rem)] max-sm:grid-cols-1">
        <div
          v-for="video in videos"
          :key="video.id"
          :class="[
            'group relative flex flex-col justify-end overflow-hidden rounded-2xl border border-[#001b55]/10 bg-[linear-gradient(180deg,#001b55,#000d2d_70%,#00081f)] shadow-[0_18px_44px_rgba(0,27,85,0.14),0_0_0_8px_rgba(255,255,255,0.74)] transition hover:-translate-y-1.5 hover:border-[#008cff]/30 hover:shadow-[0_26px_60px_rgba(0,27,85,0.2),0_0_38px_rgba(0,140,255,0.12),0_0_0_8px_rgba(255,255,255,0.86)] before:absolute before:left-[18px] before:top-[18px] before:z-[2] before:h-[5px] before:w-[90px] before:rounded-full before:bg-[linear-gradient(90deg,#ed1c24,#ffffff_48%,#008cff)] before:shadow-[0_8px_18px_rgba(0,27,85,0.18)] after:absolute after:inset-0 after:bg-[linear-gradient(180deg,rgba(0,27,85,0.04)_0%,rgba(0,27,85,0.36)_46%,rgba(0,16,48,0.92)_100%),linear-gradient(135deg,rgba(237,28,36,0.16),transparent_36%,rgba(0,140,255,0.16))] max-sm:shadow-[0_16px_34px_rgba(0,27,85,0.14)]',
            video.id === 1 ? 'col-span-2 row-span-2 aspect-[16/10] max-sm:col-span-1 max-sm:row-span-1 max-sm:aspect-video' : 'aspect-video',
          ]"
          role="img"
          :aria-label="video.title"
        >
          <img class="absolute inset-0 block h-full w-full object-cover transition duration-300 group-hover:scale-[1.04]" :src="`https://images.pexels.com/photos/${videoImages[video.id - 1]}/pexels-photo-${videoImages[video.id - 1]}.jpeg?auto=compress&cs=tinysrgb&w=900`" alt="" />
          <div class="relative z-[1] mx-[18px] mb-3.5">
            <span class="mb-2 inline-flex min-h-7 items-center rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.08em] text-[#001b55]">{{ video.label }}</span>
            <strong :class="video.id === 1 ? 'block text-[clamp(28px,3vw,42px)] font-black leading-[1.12] text-white max-sm:text-xl' : 'block text-lg font-black leading-[1.12] text-white'">{{ video.title }}</strong>
          </div>
          <div class="relative z-[1] mx-3.5 mb-3.5 flex items-center gap-3 rounded-full border border-white/15 bg-[#000e2d]/55 px-2.5 py-2 text-[13px] font-extrabold text-white/85 backdrop-blur max-sm:gap-2 max-sm:text-xs">
            <button class="grid h-6 w-6 cursor-pointer place-items-center rounded-full bg-white/10 text-[13px] text-white/85 transition hover:text-white" type="button" aria-label="Play">
              <SvgIcon name="play" />
            </button>
            <span class="min-w-9">{{ video.duration }}</span>
            <span class="mx-1.5 h-[3px] flex-1 rounded-sm bg-white/25" aria-hidden="true"></span>
            <button class="grid h-6 w-6 cursor-pointer place-items-center rounded-full bg-white/10 text-[13px] text-white/85 transition hover:text-white" type="button" aria-label="Mute">
              <SvgIcon name="volume-off" />
            </button>
            <button class="grid h-6 w-6 cursor-pointer place-items-center rounded-full bg-white/10 text-[13px] text-white/85 transition hover:text-white max-sm:hidden" type="button" aria-label="Fullscreen">
              <SvgIcon name="maximize" />
            </button>
            <button class="grid h-6 w-6 cursor-pointer place-items-center rounded-full bg-white/10 text-[13px] text-white/85 transition hover:text-white max-sm:hidden" type="button" aria-label="More options">
              <SvgIcon name="more-vertical" />
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>