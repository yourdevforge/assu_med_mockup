<script setup>
useSeoMeta({
  title: 'Contact Us',
  description:
    'Contact Assu-Med for 24-hour ambulance services, patient transfer support, event standby, and emergency medical assistance.',
});

function submitContactForm(event) {
  const formData = new FormData(event.currentTarget);
  const details = [
    ['Name', formData.get('name')],
    ['Phone', formData.get('phone')],
    ['Email', formData.get('email')],
    ['Message', formData.get('message')],
  ]
    .map(([label, value]) => `${label}: ${String(value || '').trim()}`)
    .join('\n');

  const subject = encodeURIComponent('Website enquiry');
  const body = encodeURIComponent(details);

  window.location.href = `mailto:info@assumed.co.za?subject=${subject}&body=${body}`;
}
</script>

<template>
  <div>
    <AppAmbulanceHero
      title-id="contact-hero-title"
      image-src="https://images.pexels.com/photos/8948289/pexels-photo-8948289.jpeg?auto=compress&cs=tinysrgb&w=1800"
      image-label="Random ambulance background image"
      cta-href="#contact-form"
      cta-label="Learn more"
    >
      <p>
        Assu-Med is a privately-owned emergency ambulance service based in Mitchell's Plain,
        Western Cape. We provide primary emergency response services as well as inter-hospital/
        facility transfer services with advanced life support capabilities to both medical aid
        and private patients.
      </p>
    </AppAmbulanceHero>

    <section class="relative overflow-hidden bg-[radial-gradient(circle_at_12%_4%,rgba(237,28,36,0.1),transparent_24%),radial-gradient(circle_at_88%_0%,rgba(0,140,255,0.12),transparent_26%),linear-gradient(180deg,#ffffff_0%,#f3f6fb_100%)] py-[76px] pb-[92px] before:pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(rgba(0,27,85,0.032)_1px,transparent_1px),linear-gradient(90deg,rgba(0,27,85,0.032)_1px,transparent_1px)] before:bg-[length:58px_58px] max-sm:py-14" id="contact-form">
      <div class="relative z-[1] mx-auto mb-[38px] w-[calc(100%_-_3rem)] max-w-[1180px] max-sm:w-[calc(100%_-_1.5rem)]">
        <p class="mb-2.5 text-[13px] font-black uppercase tracking-[0.12em] text-[#ed1c24]">Contact Assu-Med</p>
        <h2 class="m-0 max-w-[760px] text-[clamp(30px,3.6vw,48px)] font-black leading-[1.08] text-[#001b55] max-sm:text-[28px]">Need assistance, event standby, or patient transfer support?</h2>
        <div class="mt-6 flex flex-wrap gap-3" aria-label="Quick contact options">
          <a class="inline-flex min-h-[42px] items-center gap-2.5 rounded-full border border-[#001b55]/10 bg-white/85 px-4 py-2 text-xs font-black uppercase tracking-[0.05em] text-[#001b55] shadow-[0_12px_28px_rgba(0,27,85,0.06)] transition hover:-translate-y-0.5 hover:border-[#008cff]/25 hover:shadow-[0_18px_36px_rgba(0,27,85,0.1)]" href="tel:0218794716">
            <SvgIcon name="phone" class="text-base text-[#ed1c24]" />
            <span>Call Centre</span>
          </a>
          <a class="inline-flex min-h-[42px] items-center gap-2.5 rounded-full border border-[#001b55]/10 bg-white/85 px-4 py-2 text-xs font-black uppercase tracking-[0.05em] text-[#001b55] shadow-[0_12px_28px_rgba(0,27,85,0.06)] transition hover:-translate-y-0.5 hover:border-[#008cff]/25 hover:shadow-[0_18px_36px_rgba(0,27,85,0.1)]" href="mailto:info@assumed.co.za">
            <SvgIcon name="message" class="text-base text-[#ed1c24]" />
            <span>Email Us</span>
          </a>
          <a class="inline-flex min-h-[42px] items-center gap-2.5 rounded-full border border-[#001b55]/10 bg-white/85 px-4 py-2 text-xs font-black uppercase tracking-[0.05em] text-[#001b55] shadow-[0_12px_28px_rgba(0,27,85,0.06)] transition hover:-translate-y-0.5 hover:border-[#008cff]/25 hover:shadow-[0_18px_36px_rgba(0,27,85,0.1)]" href="#office-map">
            <SvgIcon name="hospital" class="text-base text-[#ed1c24]" />
            <span>Find Office</span>
          </a>
        </div>
      </div>

      <div class="relative z-[1] mx-auto grid w-[calc(100%_-_3rem)] max-w-[1180px] grid-cols-[minmax(320px,1.1fr)_minmax(280px,0.9fr)] items-start gap-16 max-lg:grid-cols-1 max-lg:gap-10 max-sm:w-[calc(100%_-_1.5rem)]">
        <form class="relative grid gap-[22px] overflow-hidden rounded-[18px] bg-[radial-gradient(circle_at_92%_8%,rgba(0,140,255,0.18),transparent_45%),radial-gradient(circle_at_0%_100%,rgba(237,28,36,0.12),transparent_40%),linear-gradient(160deg,#001b55_0%,#000d2d_100%)] px-[38px] py-11 pb-[38px] text-white shadow-[0_30px_60px_-22px_rgba(0,16,48,0.5),inset_0_0_0_1px_rgba(255,255,255,0.05)] before:absolute before:left-0 before:right-0 before:top-0 before:h-1 before:bg-[linear-gradient(90deg,#ed1c24_0_48%,#008cff_52%_100%)] max-sm:px-[22px] max-sm:py-7" @submit.prevent="submitContactForm">
          <div class="grid gap-1.5">
            <p class="m-0 text-xs font-extrabold uppercase tracking-[0.18em] text-[#ff5f5f]">Send a Message</p>
            <h2 class="m-0 text-[clamp(22px,2.6vw,28px)] font-extrabold leading-tight text-white">We respond within 24 hours.</h2>
          </div>

          <div class="grid grid-cols-2 gap-[22px] max-lg:grid-cols-1">
            <label class="relative block">
              <input class="peer w-full rounded-t-[10px] border-0 bg-white/5 px-3.5 pb-2.5 pt-6 font-inherit text-white transition hover:bg-white/10 focus:bg-[#008cff]/10 focus:outline-none" type="text" name="name" placeholder=" " required />
              <span class="pointer-events-none absolute left-3.5 top-5 origin-left text-sm font-semibold tracking-[0.02em] text-white/55 transition peer-focus:-translate-y-3.5 peer-focus:scale-[0.78] peer-focus:text-[#6fb6ff] peer-[:not(:placeholder-shown)]:-translate-y-3.5 peer-[:not(:placeholder-shown)]:scale-[0.78] peer-[:not(:placeholder-shown)]:text-[#6fb6ff]">Your Name</span>
              <span class="pointer-events-none absolute bottom-0 left-0 right-0 h-0.5 bg-white/20 after:absolute after:inset-0 after:origin-left after:scale-x-0 after:bg-[linear-gradient(90deg,#008cff,#6fb6ff)] after:transition after:duration-300 peer-focus:after:scale-x-100" aria-hidden="true"></span>
            </label>
            <label class="relative block">
              <input class="peer w-full rounded-t-[10px] border-0 bg-white/5 px-3.5 pb-2.5 pt-6 font-inherit text-white transition hover:bg-white/10 focus:bg-[#008cff]/10 focus:outline-none" type="tel" name="phone" placeholder=" " required />
              <span class="pointer-events-none absolute left-3.5 top-5 origin-left text-sm font-semibold tracking-[0.02em] text-white/55 transition peer-focus:-translate-y-3.5 peer-focus:scale-[0.78] peer-focus:text-[#6fb6ff] peer-[:not(:placeholder-shown)]:-translate-y-3.5 peer-[:not(:placeholder-shown)]:scale-[0.78] peer-[:not(:placeholder-shown)]:text-[#6fb6ff]">Contact Number</span>
              <span class="pointer-events-none absolute bottom-0 left-0 right-0 h-0.5 bg-white/20 after:absolute after:inset-0 after:origin-left after:scale-x-0 after:bg-[linear-gradient(90deg,#008cff,#6fb6ff)] after:transition after:duration-300 peer-focus:after:scale-x-100" aria-hidden="true"></span>
            </label>
          </div>

          <label class="relative block">
            <input class="peer w-full rounded-t-[10px] border-0 bg-white/5 px-3.5 pb-2.5 pt-6 font-inherit text-white transition hover:bg-white/10 focus:bg-[#008cff]/10 focus:outline-none" type="email" name="email" placeholder=" " required />
            <span class="pointer-events-none absolute left-3.5 top-5 origin-left text-sm font-semibold tracking-[0.02em] text-white/55 transition peer-focus:-translate-y-3.5 peer-focus:scale-[0.78] peer-focus:text-[#6fb6ff] peer-[:not(:placeholder-shown)]:-translate-y-3.5 peer-[:not(:placeholder-shown)]:scale-[0.78] peer-[:not(:placeholder-shown)]:text-[#6fb6ff]">Email Address</span>
            <span class="pointer-events-none absolute bottom-0 left-0 right-0 h-0.5 bg-white/20 after:absolute after:inset-0 after:origin-left after:scale-x-0 after:bg-[linear-gradient(90deg,#008cff,#6fb6ff)] after:transition after:duration-300 peer-focus:after:scale-x-100" aria-hidden="true"></span>
          </label>

          <label class="relative block">
            <textarea class="peer min-h-[130px] w-full resize-y rounded-t-[10px] border-0 bg-white/5 px-3.5 pb-2.5 pt-7 font-inherit leading-normal text-white transition hover:bg-white/10 focus:bg-[#008cff]/10 focus:outline-none" name="message" rows="5" placeholder=" " required></textarea>
            <span class="pointer-events-none absolute left-3.5 top-5 origin-left text-sm font-semibold tracking-[0.02em] text-white/55 transition peer-focus:-translate-y-3.5 peer-focus:scale-[0.78] peer-focus:text-[#6fb6ff] peer-[:not(:placeholder-shown)]:-translate-y-3.5 peer-[:not(:placeholder-shown)]:scale-[0.78] peer-[:not(:placeholder-shown)]:text-[#6fb6ff]">How can we help you?</span>
            <span class="pointer-events-none absolute bottom-0 left-0 right-0 h-0.5 bg-white/20 after:absolute after:inset-0 after:origin-left after:scale-x-0 after:bg-[linear-gradient(90deg,#008cff,#6fb6ff)] after:transition after:duration-300 peer-focus:after:scale-x-100" aria-hidden="true"></span>
          </label>

          <button type="submit" class="group mt-1.5 inline-flex min-w-[200px] cursor-pointer justify-self-start rounded-full bg-[linear-gradient(135deg,#ed1c24_0%,#b00a12_100%)] px-[26px] py-3.5 text-sm font-extrabold uppercase tracking-[0.08em] text-white shadow-[0_16px_30px_-12px_rgba(237,28,36,0.55)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_36px_-12px_rgba(237,28,36,0.7)] active:translate-y-0 max-sm:w-full max-sm:justify-center">
            <span>Send Message</span>
            <SvgIcon name="arrow-right" class="ml-3 h-[18px] w-[18px] transition group-hover:translate-x-1" />
          </button>
        </form>

        <aside class="relative overflow-hidden rounded-[18px] border border-[#001b55]/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(255,255,255,0.92))] p-[34px] shadow-[0_22px_54px_rgba(0,27,85,0.1),inset_0_0_0_1px_rgba(255,255,255,0.8)] before:absolute before:left-0 before:top-0 before:h-[5px] before:w-[120px] before:bg-[linear-gradient(90deg,#ed1c24,#ffffff_48%,#008cff)] max-sm:px-[22px] max-sm:py-7">
          <h2 class="mb-[18px] text-[28px] font-black text-[#001b55]">Emergency</h2>

          <div class="grid grid-cols-[64px_auto] items-center gap-x-4 gap-y-2 rounded-2xl bg-[radial-gradient(circle_at_90%_10%,rgba(0,140,255,0.12),transparent_40%),linear-gradient(135deg,#001b55,#000d2d)] p-5 shadow-[0_18px_38px_rgba(0,27,85,0.16)] max-sm:grid-cols-[52px_auto] max-sm:p-4">
            <div class="row-span-2 grid aspect-square w-16 place-items-center rounded-full border-[3px] border-[#d92020] bg-[#ed1c24] text-[32px] font-black text-white shadow-[0_12px_24px_rgba(237,28,36,0.26)] max-sm:w-[52px] max-sm:text-2xl" aria-hidden="true">
              <SvgIcon name="phone" />
            </div>
            <p class="m-0 self-end text-[30px] font-black tracking-[0.02em] text-white max-sm:text-[23px]">24 HOUR</p>
            <div class="col-start-2">
              <p class="m-0 text-lg font-black leading-tight text-white/75 max-sm:text-sm">Call Centre</p>
              <strong class="block text-[22px] font-black leading-tight text-white max-sm:text-lg">021 879 4716</strong>
            </div>
          </div>

          <h2 class="mb-[18px] mt-9 text-[28px] font-black text-[#001b55]">Head Office</h2>

          <div class="grid grid-cols-2 gap-7 max-lg:grid-cols-1">
            <div class="rounded-[14px] border border-[#001b55]/10 bg-[linear-gradient(120deg,rgba(237,28,36,0.045),transparent_35%),#f8fbff] p-[18px]">
              <span class="mb-3 grid h-[38px] w-[38px] place-items-center rounded-xl bg-[#001b55] text-lg text-white" aria-hidden="true"><SvgIcon name="hospital" /></span>
              <h3 class="mb-2 text-sm font-extrabold text-[#001b55]">Address:</h3>
              <address class="m-0 text-sm not-italic leading-[1.6] text-[#001b55]">
                Watergate Boulevard<br />
                Watergate Villa, Lentegeur<br />
                Mitchell's Plain<br />
                Western Cape, 7785
              </address>
            </div>

            <div class="rounded-[14px] border border-[#001b55]/10 bg-[linear-gradient(120deg,rgba(237,28,36,0.045),transparent_35%),#f8fbff] p-[18px]">
              <span class="mb-3 grid h-[38px] w-[38px] place-items-center rounded-xl bg-[#001b55] text-lg text-white" aria-hidden="true"><SvgIcon name="message" /></span>
              <h3 class="mb-2 text-sm font-extrabold text-[#001b55]">Contact Details</h3>
              <p class="mb-1 text-sm leading-[1.6] text-[#001b55]"><strong>Tel:</strong> <a class="font-bold text-[#d92020]" href="tel:0218794716">021 879 4716</a></p>
              <p class="mb-1 text-sm leading-[1.6] text-[#001b55]"><strong>Email:</strong> <a class="font-bold text-[#d92020]" href="mailto:info@assumed.co.za">info@assumed.co.za</a></p>
            </div>
          </div>
        </aside>
      </div>
    </section>

    <section class="relative h-[520px] overflow-hidden border-t-[5px] border-transparent bg-[#001b55] [border-image:linear-gradient(90deg,#ed1c24,#ffffff_50%,#008cff)_1] after:pointer-events-none after:absolute after:inset-0 after:shadow-[inset_0_0_0_12px_rgba(255,255,255,0.72)] max-sm:h-[380px] max-sm:after:shadow-[inset_0_0_0_6px_rgba(255,255,255,0.72)]" id="office-map" aria-label="Office location map">
      <div class="absolute left-[max(24px,calc((100%_-_1180px)/2))] top-7 z-[2] flex items-center gap-3.5 rounded-2xl border border-[#001b55]/15 bg-white/95 px-[18px] py-4 shadow-[0_22px_44px_rgba(0,27,85,0.18)] max-sm:left-3 max-sm:right-3 max-sm:top-3 max-sm:gap-3 max-sm:px-4 max-sm:py-3">
        <span class="grid h-[46px] w-[46px] flex-none place-items-center rounded-[14px] bg-[#001b55] text-[22px] text-white max-sm:h-10 max-sm:w-10 max-sm:text-lg"><SvgIcon name="hospital" /></span>
        <div>
          <p class="m-0 text-[11px] font-black uppercase tracking-[0.1em] text-[#ed1c24]">Head Office Location</p>
          <strong class="block text-[15px] font-black text-[#001b55]">Watergate, Mitchell's Plain</strong>
        </div>
      </div>
      <iframe
        class="block h-full w-full border-0"
        src="https://www.google.com/maps?q=Watergate+Boulevard,+Lentegeur,+Mitchell%27s+Plain,+7785&output=embed"
        title="Assu-Med Ambulance Service location"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        allowfullscreen
      ></iframe>
    </section>
  </div>
</template>