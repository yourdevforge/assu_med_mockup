<script setup>
import logo5 from "~/logo5.png";

const menuOpen = ref(false);
const route = useRoute();

const navLinks = [
  { to: "/", label: "Home", exact: true },
  { to: "/who-we-are", label: "Who We Are" },
  { to: "/services-offered", label: "Services Offered" },
  { to: "/blog", label: "Blog" },
  { to: "/gallery", label: "Gallery" },
  { to: "/vacancies", label: "Vacancies" },
  { to: "/contact", label: "Contact Us" },
  { to: "/about", label: "About Us" },
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
  const email = String(formData.get("email") || "").trim();

  if (!email) {
    return;
  }

  const subject = encodeURIComponent("Newsletter subscription request");
  const body = encodeURIComponent(
    `Please add ${email} to the Assu-Med newsletter.`,
  );

  window.location.href = `mailto:info@assumed.co.za?subject=${subject}&body=${body}`;
}
</script>

<template>
  <div class="min-h-screen">
    <header
      class="relative z-20 bg-white shadow-[0_16px_44px_rgba(0,27,85,0.08)]"
    >
      <div
        class="relative overflow-hidden bg-[#111827] font-['Asap','Segoe_UI','Helvetica_Neue',Arial,sans-serif] text-xs font-semibold leading-tight tracking-[0.02em] text-white before:absolute before:inset-x-0 before:bottom-0 before:h-px before:bg-[linear-gradient(90deg,transparent,rgba(237,28,36,0.72),rgba(0,140,255,0.62),transparent)] max-sm:text-[11px]"
      >
        <div
          class="mx-auto flex min-h-[39px] w-[calc(100%_-_2rem)] max-w-[1060px] items-center justify-between gap-6 max-lg:justify-center max-lg:text-center max-sm:w-[calc(100%_-_1.5rem)] max-sm:py-2"
        >
          <div
            class="flex flex-wrap items-center gap-3 max-lg:hidden"
            aria-label="Contact details"
          >
            <a
              class="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 transition hover:border-[#ed1c24]/45 hover:bg-[#ed1c24]/10 hover:text-[#ffb3b3]"
              href="mailto:info@assumed.co.za"
            >
              <SvgIcon name="message" class="text-[#ed1c24]" />
              <span>info@assumed.co.za</span>
            </a>
            <NuxtLink
              class="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 transition hover:border-[#008cff]/45 hover:bg-[#008cff]/10 hover:text-[#b9dcff]"
              to="/contact#office-map"
            >
              <SvgIcon name="hospital" class="text-[#ed1c24]" />
              <span>Find our location</span>
            </NuxtLink>
          </div>
          <strong
            class="inline-flex items-center gap-2 font-bold tracking-[0.025em] max-sm:max-w-[280px] max-sm:leading-snug"
          >
            <span
              class="h-2 w-2 rounded-full bg-[#ed1c24] shadow-[0_0_0_5px_rgba(237,28,36,0.18)]"
              aria-hidden="true"
            ></span>
            24 HOUR AMBULANCE SERVICES - CALL CENTRE 021 879 4716
          </strong>
        </div>
      </div>

      <nav
        class="relative mx-auto flex min-h-[104px] w-[calc(100%_-_0.75rem)] max-w-[1760px] items-center justify-start gap-[28px] max-lg:min-h-[86px] max-lg:w-[calc(100%_-_1.5rem)] max-sm:w-[calc(100%_-_1rem)] max-sm:gap-3"
        aria-label="Primary navigation"
      >
        <NuxtLink
          class="group inline-flex min-w-0 flex-none items-center max-lg:w-[340px] max-lg:max-w-[calc(100%_-_64px)] max-sm:max-w-[calc(100%_-_56px)]"
          to="/"
          aria-label="Assu-Med home"
          @click="closeMenu"
        >
          <img
            class="block h-auto w-[340px] max-w-[min(22vw,340px)] flex-none drop-shadow-[0_12px_18px_rgba(0,27,85,0.12)] transition duration-200 group-hover:-translate-y-0.5 max-lg:max-w-full"
            :src="logo5"
            alt="Assu-Med"
          />
        </NuxtLink>

        <div class="hidden min-w-0 flex-1 justify-center lg:flex">
          <span
            class="group inline-flex items-center gap-2.5 whitespace-nowrap rounded-full border border-[#001b55]/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(244,248,255,0.92))] px-3.5 py-1.5 font-['Asap','Segoe_UI',Arial,sans-serif] text-[clamp(10px,0.72vw,13px)] font-black uppercase leading-tight tracking-[0.11em] text-[#001b55] shadow-[0_10px_22px_rgba(0,27,85,0.1),inset_0_1px_0_rgba(255,255,255,0.9)] transition hover:-translate-y-0.5 hover:border-[#ed1c24]/25 hover:text-[#ed1c24] max-xl:px-3 max-xl:tracking-[0.08em]"
          >
            <span class="relative h-2 w-8 overflow-hidden rounded-full bg-[#001b55]/10" aria-hidden="true">
              <span class="absolute inset-y-0 left-0 w-3 rounded-full bg-[#ed1c24] shadow-[12px_0_0_#008cff] transition group-hover:w-5"></span>
            </span>
            Your health is our concern
          </span>
        </div>

        <button
          class="grid h-[46px] w-[46px] cursor-pointer place-items-center rounded-full bg-[linear-gradient(135deg,#001b55,#004ba0)] p-3 text-white shadow-[0_12px_24px_rgba(0,27,85,0.24),inset_0_1px_0_rgba(255,255,255,0.18)] ring-1 ring-[#001b55]/10 transition hover:-translate-y-0.5 hover:shadow-[0_16px_28px_rgba(0,27,85,0.28)] lg:hidden"
          type="button"
          :aria-expanded="menuOpen"
          aria-controls="primary-menu"
          aria-label="Toggle menu"
          @click="menuOpen = !menuOpen"
        >
          <span class="grid w-full gap-[5px]" aria-hidden="true">
            <span
              class="h-0.5 w-full bg-white transition"
              :class="menuOpen ? 'translate-y-[7px] rotate-45' : ''"
            ></span>
            <span
              class="h-0.5 w-full bg-white transition"
              :class="menuOpen ? 'opacity-0' : ''"
            ></span>
            <span
              class="h-0.5 w-full bg-white transition"
              :class="menuOpen ? '-translate-y-[7px] -rotate-45' : ''"
            ></span>
          </span>
        </button>

        <ul
          id="primary-menu"
          class="ml-auto hidden min-w-0 flex-none list-none items-center justify-end gap-1 rounded-full border border-[#001b55]/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(246,249,255,0.9))] p-1.5 shadow-[0_18px_40px_rgba(0,27,85,0.1),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur lg:flex"
        >
          <li v-for="link in navLinks" :key="link.to">
            <NuxtLink
              :to="link.to"
              class="relative inline-flex min-h-[46px] items-center overflow-hidden rounded-full px-[clamp(11px,0.9vw,16px)] font-['Asap','Segoe_UI',Arial,sans-serif] text-[clamp(13px,1vw,16px)] font-bold uppercase tracking-[0.02em] text-[#071c63] transition duration-200 before:absolute before:inset-0 before:-z-[1] before:rounded-full before:bg-[linear-gradient(135deg,#ed1c24,#b40d15)] before:opacity-0 before:transition-opacity before:duration-200 after:absolute after:bottom-2 after:left-1/2 after:h-1 after:w-1 after:-translate-x-1/2 after:rounded-full after:bg-white after:opacity-0 after:transition-opacity after:content-[''] hover:-translate-y-0.5 hover:bg-white hover:text-[#d92020] focus-visible:outline focus-visible:outline-4 focus-visible:outline-[#008cff]/25"
              :class="
                isActiveLink(link)
                  ? 'text-white shadow-[0_12px_24px_rgba(237,28,36,0.22)] before:opacity-100 after:opacity-90'
                  : ''
              "
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
            class="absolute left-0 right-0 top-full z-30 m-0 grid max-h-[calc(100vh_-_126px)] list-none gap-2 overflow-y-auto rounded-b-2xl border border-t-0 border-[#001b55]/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,248,255,0.98))] p-4 shadow-[0_22px_48px_rgba(0,27,85,0.18)] backdrop-blur lg:hidden"
          >
            <li v-for="link in navLinks" :key="`mobile-${link.to}`">
              <NuxtLink
                :to="link.to"
                class="flex min-h-12 items-center rounded-xl border border-transparent px-4 font-['Asap','Segoe_UI',Arial,sans-serif] text-sm font-bold uppercase tracking-[0.04em] text-[#071c63] transition hover:border-[#ed1c24]/20 hover:bg-white hover:text-[#d92020] hover:shadow-[0_10px_20px_rgba(0,27,85,0.08)]"
                :class="
                  isActiveLink(link)
                    ? 'border-[#ed1c24]/25 bg-white !font-black !text-[#001b55] shadow-[0_10px_22px_rgba(0,27,85,0.1)]'
                    : ''
                "
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

    <footer
      id="contact"
      class="relative overflow-hidden bg-[radial-gradient(circle_at_18%_0%,rgba(0,140,255,0.22),transparent_28%),linear-gradient(135deg,#001235_0%,#002c6f_54%,#005fae_100%)] text-white before:absolute before:left-0 before:right-0 before:top-0 before:h-1 before:bg-[linear-gradient(90deg,#ed1c24_0%,#ed1c24_48%,#008cff_52%,#008cff_100%)]"
    >
      <div
        class="relative mx-auto grid w-[calc(100%_-_3rem)] max-w-[1180px] grid-cols-[1.25fr_1fr_0.9fr_1.1fr] items-start gap-[52px] py-16 pb-[42px] max-lg:grid-cols-2 max-lg:gap-8 max-sm:w-[calc(100%_-_1.5rem)] max-sm:grid-cols-1 max-sm:gap-7 max-sm:py-10"
      >
        <div>
          <h3
            class="mb-3 text-[clamp(22px,2vw,28px)] font-extrabold tracking-[0.01em] text-white"
          >
            Emergency
          </h3>
          <p class="mb-5 text-sm font-medium text-white/75">
            Contact Centre &amp; Road Operations
          </p>
          <div
            class="mb-3 flex items-center gap-3.5 border border-white/15 bg-white/10 p-[18px] shadow-[0_18px_34px_rgba(0,0,0,0.18)]"
          >
            <div
              class="grid aspect-square w-14 place-items-center rounded-full border-[3px] border-white/80 bg-white/10 text-[28px] font-black"
              aria-hidden="true"
            >
              <SvgIcon name="phone" />
            </div>
            <div
              class="text-[clamp(24px,2.6vw,32px)] font-black tracking-[0.02em]"
            >
              24 HOUR
            </div>
          </div>
          <p class="mt-2.5 mb-0 text-base font-bold text-white/80">
            Call Centre
          </p>
          <p
            class="mt-0.5 text-[clamp(28px,3.2vw,36px)] font-black tracking-[0.01em] text-white"
          >
            021 879 4716
          </p>
        </div>

        <div>
          <h3
            class="mb-3 text-[clamp(22px,2vw,28px)] font-extrabold tracking-[0.01em] text-white"
          >
            Head Office
          </h3>
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
          <p class="mb-2 text-sm leading-[1.6] text-white/80">
            <strong>Tel:</strong> 021 879 4716
          </p>
          <p class="mb-2 text-sm leading-[1.6] text-white/80">
            <strong>E-mail:</strong>
            <a class="text-white" href="mailto:info@assumed.co.za"
              >info@assumed.co.za</a
            >
          </p>
        </div>

        <div>
          <h3
            class="mb-3 text-[clamp(22px,2vw,28px)] font-extrabold tracking-[0.01em] text-white"
          >
            Newsletter
          </h3>
          <p class="mb-5 text-sm font-medium text-white/75">
            Stay informed - sign up to our Newsletter.
          </p>
          <form
            class="mt-3.5 flex max-w-80 border border-white/15 bg-white/10 p-[5px] max-sm:max-w-none"
            @submit.prevent="submitNewsletter"
          >
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
        <p
          class="mx-auto my-0 w-[calc(100%_-_3rem)] max-w-[1180px] py-5 pr-14 text-[13px] text-white/65 max-sm:w-[calc(100%_-_1.5rem)]"
        >
          &copy; 2025 Assu-Med Ambulance Services Pty (Ltd). All Rights
          Reserved.
        </p>
        <a
          class="absolute bottom-3 right-6 grid h-[42px] w-[42px] place-items-center border border-white/15 bg-[#ed1c24]/95 text-sm text-white transition hover:-translate-y-0.5 hover:bg-[#ff2a32]"
          href="#top"
          aria-label="Back to top"
        >
          <SvgIcon name="arrow-up" />
        </a>
      </div>
    </footer>
  </div>
</template>
