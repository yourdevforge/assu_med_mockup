<script setup>
const menuOpen = ref(false);
const route = useRoute();

const navLinks = [
  { to: '/', label: 'Home', exact: true },
  { to: '/who-we-are', label: 'Who We Are' },
  { to: '/services-offered', label: 'Services Offered' },
  { to: '/blog', label: 'Blog' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/vacancies', label: 'Vacancies' },
  { to: '/contact', label: 'Contact Us' },
  { to: '/about', label: 'About Us' },
];

function closeMenu() {
  menuOpen.value = false;
}

function isActiveLink(link) {
  if (link.exact) {
    return route.path === link.to;
  }

  return route.path === link.to || route.path.startsWith(`${link.to}/`);
}

function submitNewsletter(event) {
  const formData = new FormData(event.currentTarget);
  const email = String(formData.get('email') || '').trim();

  if (!email) {
    return;
  }

  const subject = encodeURIComponent('Newsletter subscription request');
  const body = encodeURIComponent(`Please add ${email} to the Assu-Med newsletter.`);

  window.location.href = `mailto:info@assumed.co.za?subject=${subject}&body=${body}`;
}
</script>

<template>
  <div class="min-h-screen">
    <header class="relative z-20 bg-white">
      <div class="bg-[#252525] font-['Bahnschrift','Segoe_UI','Helvetica_Neue',Arial,sans-serif] text-xs font-semibold leading-tight tracking-[0.02em] text-white max-sm:text-[11px]">
        <div class="mx-auto flex min-h-[39px] w-[calc(100%_-_2rem)] max-w-[1060px] items-center justify-between gap-6 max-lg:justify-center max-lg:text-center max-sm:w-[calc(100%_-_1.5rem)] max-sm:py-2">
          <div class="flex flex-wrap items-center gap-3 max-lg:hidden" aria-label="Contact details">
            <a class="inline-flex items-center gap-1.5 transition hover:text-[#ff5f5f]" href="mailto:info@assumed.co.za">
              <SvgIcon name="message" class="text-[#ed1c24]" />
              <span>info@assumed.co.za</span>
            </a>
            <NuxtLink class="inline-flex items-center gap-1.5 transition hover:text-[#ff5f5f]" to="/contact#office-map">
              <SvgIcon name="hospital" class="text-[#ed1c24]" />
              <span>Find our location</span>
            </NuxtLink>
          </div>
          <strong class="font-bold tracking-[0.025em] max-sm:max-w-[280px] max-sm:leading-snug">24 HOUR AMBULANCE SERVICES - CALL CENTRE 021 879 4716</strong>
        </div>
      </div>

      <nav class="relative mx-auto flex min-h-[104px] w-[calc(100%_-_1.5rem)] max-w-[1540px] items-center justify-between gap-[34px] max-lg:min-h-[86px] max-sm:w-[calc(100%_-_1rem)] max-sm:gap-3" aria-label="Primary navigation">
        <NuxtLink class="inline-flex min-w-0 flex-none flex-col items-start gap-1 max-lg:w-[340px] max-lg:max-w-[calc(100%_-_64px)] max-sm:max-w-[calc(100%_-_56px)]" to="/" aria-label="Assu-Med home" @click="closeMenu">
          <img class="block h-auto w-[340px] max-w-[min(22vw,340px)] flex-none max-lg:max-w-full" src="/images/logo4.png" alt="Assu-Med" />
          <span class="ml-14 whitespace-nowrap font-['Bahnschrift','Segoe_UI',Arial,sans-serif] text-[clamp(12px,0.9vw,14px)] font-extrabold uppercase leading-tight tracking-[0.08em] text-[#001b55] max-lg:hidden">YOUR HEALTH IS OUR CONCERN</span>
        </NuxtLink>

        <button
          class="grid h-[42px] w-[42px] cursor-pointer place-items-center bg-[#001b55] p-2.5 text-white lg:hidden"
          type="button"
          :aria-expanded="menuOpen"
          aria-controls="primary-menu"
          aria-label="Toggle menu"
          @click="menuOpen = !menuOpen"
        >
          <span class="grid w-full gap-[5px]" aria-hidden="true">
            <span class="h-0.5 w-full bg-white transition" :class="menuOpen ? 'translate-y-[7px] rotate-45' : ''"></span>
            <span class="h-0.5 w-full bg-white transition" :class="menuOpen ? 'opacity-0' : ''"></span>
            <span class="h-0.5 w-full bg-white transition" :class="menuOpen ? '-translate-y-[7px] -rotate-45' : ''"></span>
          </span>
        </button>

        <ul id="primary-menu" class="m-0 hidden min-w-0 list-none items-center justify-end gap-[clamp(18px,1.7vw,30px)] p-0 lg:flex">
          <li v-for="link in navLinks" :key="link.to">
            <NuxtLink
              :to="link.to"
              class="relative inline-flex min-h-[50px] items-center whitespace-nowrap font-['Bahnschrift','Segoe_UI',Arial,sans-serif] text-xl font-semibold uppercase tracking-[0.025em] text-[#071c63] transition after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:bg-[#ff2a2a] after:transition-transform after:duration-200 after:content-[''] hover:text-[#d92020] focus-visible:text-[#d92020]"
              :class="isActiveLink(link) ? 'after:scale-x-100 !font-black !text-[#001b55]' : 'after:scale-x-0'"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>

        <Transition
          enter-active-class="transition duration-150 ease-out"
          enter-from-class="opacity-0 -translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-2"
        >
          <ul
            v-if="menuOpen"
            class="absolute left-0 right-0 top-full z-30 m-0 grid max-h-[calc(100vh_-_126px)] list-none gap-1 overflow-y-auto border-t border-[#001b55]/10 bg-white p-4 shadow-[0_18px_40px_rgba(0,27,85,0.16)] lg:hidden"
          >
            <li v-for="link in navLinks" :key="`mobile-${link.to}`">
              <NuxtLink
                :to="link.to"
                class="flex min-h-11 items-center border-l-4 border-transparent px-3 font-['Bahnschrift','Segoe_UI',Arial,sans-serif] text-sm font-bold uppercase tracking-[0.04em] text-[#071c63] transition hover:border-[#ff2a2a] hover:bg-[#f8fbff] hover:text-[#d92020]"
                :class="isActiveLink(link) ? 'border-[#ff2a2a] bg-[#f8fbff] !font-black !text-[#001b55]' : ''"
                @click="closeMenu"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </Transition>
      </nav>
    </header>

    <slot />

    <footer id="contact" class="relative overflow-hidden bg-[radial-gradient(circle_at_18%_0%,rgba(0,140,255,0.22),transparent_28%),linear-gradient(135deg,#001235_0%,#002c6f_54%,#005fae_100%)] text-white before:absolute before:left-0 before:right-0 before:top-0 before:h-1 before:bg-[linear-gradient(90deg,#ed1c24_0%,#ed1c24_48%,#008cff_52%,#008cff_100%)]">
      <div class="relative mx-auto grid w-[calc(100%_-_3rem)] max-w-[1180px] grid-cols-[1.25fr_1fr_0.9fr_1.1fr] items-start gap-[52px] py-16 pb-[42px] max-lg:grid-cols-2 max-lg:gap-8 max-sm:w-[calc(100%_-_1.5rem)] max-sm:grid-cols-1 max-sm:gap-7 max-sm:py-10">
        <div>
          <h3 class="mb-3 text-[clamp(22px,2vw,28px)] font-extrabold tracking-[0.01em] text-white">Emergency</h3>
          <p class="mb-5 text-sm font-medium text-white/75">Contact Centre &amp; Road Operations</p>
          <div class="mb-3 flex items-center gap-3.5 border border-white/15 bg-white/10 p-[18px] shadow-[0_18px_34px_rgba(0,0,0,0.18)]">
            <div class="grid aspect-square w-14 place-items-center rounded-full border-[3px] border-white/80 bg-white/10 text-[28px] font-black" aria-hidden="true">
              <SvgIcon name="phone" />
            </div>
            <div class="text-[clamp(24px,2.6vw,32px)] font-black tracking-[0.02em]">24 HOUR</div>
          </div>
          <p class="mt-2.5 mb-0 text-base font-bold text-white/80">Call Centre</p>
          <p class="mt-0.5 text-[clamp(28px,3.2vw,36px)] font-black tracking-[0.01em] text-white">021 879 4716</p>
        </div>

        <div>
          <h3 class="mb-3 text-[clamp(22px,2vw,28px)] font-extrabold tracking-[0.01em] text-white">Head Office</h3>
          <address class="mb-5 text-sm not-italic leading-[1.7] text-white/80">
            Assu-Med Ambulance Services<br />
            Watergate Boulevard<br />
            Watergate Villa, Lentegeur<br />
            Mitchell's Plain<br />
            Western Cape, 7785
          </address>
          <p class="mb-5 text-sm leading-[1.7] text-white/80">
            <strong>Company Reg:</strong> 2020/252344/07<br />
            <strong>Tax Ref:</strong> 9019328286
          </p>
        </div>

        <div>
          <p class="mb-2 text-sm leading-[1.6] text-white/80"><strong>Tel:</strong> 021 879 4716</p>
          <p class="mb-2 text-sm leading-[1.6] text-white/80">
            <strong>E-mail:</strong>
            <a class="text-white" href="mailto:info@assumed.co.za">info@assumed.co.za</a>
          </p>
        </div>

        <div>
          <h3 class="mb-3 text-[clamp(22px,2vw,28px)] font-extrabold tracking-[0.01em] text-white">Newsletter</h3>
          <p class="mb-5 text-sm font-medium text-white/75">Stay informed - sign up to our Newsletter.</p>
          <form class="mt-3.5 flex max-w-80 border border-white/15 bg-white/10 p-[5px] max-sm:max-w-none" @submit.prevent="submitNewsletter">
            <input
              type="email"
              name="email"
              class="h-[42px] min-w-0 flex-1 bg-transparent px-3.5 text-[13px] text-white placeholder:text-white/85 focus:outline-none"
              placeholder="Your Email Address"
              aria-label="Your Email Address"
              required
            />
            <button
              type="submit"
              class="grid h-[42px] w-[42px] cursor-pointer place-items-center bg-[linear-gradient(135deg,#ed1c24,#b80e16)] text-white transition hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(237,28,36,0.28)]"
              aria-label="Subscribe"
            >
              <SvgIcon name="lock" />
            </button>
          </form>
        </div>
      </div>

      <div class="relative border-t border-white/15 bg-black/20">
        <p class="mx-auto my-0 w-[calc(100%_-_3rem)] max-w-[1180px] py-5 pr-14 text-[13px] text-white/65 max-sm:w-[calc(100%_-_1.5rem)]">
          &copy; 2025 Assu-Med Ambulance Services Pty (Ltd). All Rights Reserved.
        </p>
        <a class="absolute bottom-3 right-6 grid h-[42px] w-[42px] place-items-center border border-white/15 bg-[#ed1c24]/95 text-sm text-white transition hover:-translate-y-0.5 hover:bg-[#ff2a32]" href="#top" aria-label="Back to top">
          <SvgIcon name="arrow-up" />
        </a>
      </div>
    </footer>
  </div>
</template>