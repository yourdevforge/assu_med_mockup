<script setup>
import logo5 from "~/logo5.png";

useSeoMeta({
  title: "About Us",
  description:
    "Learn about Assu-Med Ambulance Services, a private Advanced Life Support provider serving Mitchell's Plain and the wider Western Cape.",
});

const companyDetails = [
  ["Business Type", "Emergency Ambulance Services (private company)"],
  ["Company Reg", "2020/252344/07"],
  ["Tax Reference", "9019328286"],
];

const profileServices = [
  { icon: "phone", label: "24/7 call centre" },
  { icon: "shield", label: "Ambulance availability" },
  { icon: "heart-pulse", label: "Event standby medical services" },
  { icon: "file-text", label: "Certification of fitness examiners" },
  {
    icon: "briefcase-medical",
    label: "Occupational health services provided by residential doctor",
  },
];
</script>

<template>
  <div>
    <AppPageHero
      title-id="about-hero-title"
      image-src="https://images.pexels.com/photos/8942117/pexels-photo-8942117.jpeg?auto=compress&cs=tinysrgb&w=1800"
      image-label="Random page background image"
      eyebrow="About"
      title="Assu-Med"
    >
      <p>
        More than 10 years of pre-hospital experience, now operating as an
        upgraded Advanced Life Support [ALS] service provider for the Mitchell's
        Plain community and the wider Western Cape.
      </p>
    </AppPageHero>

    <section
      class="relative overflow-hidden bg-[radial-gradient(circle_at_12%_4%,rgba(237,28,36,0.1),transparent_24%),radial-gradient(circle_at_86%_8%,rgba(0,140,255,0.12),transparent_26%),#ffffff] py-[86px] pb-24 max-sm:py-14"
      aria-labelledby="company-profile-title"
    >
      <div
        class="relative z-[1] mx-auto grid w-[calc(100%_-_3rem)] max-w-[1180px] grid-cols-[minmax(340px,0.92fr)_minmax(420px,1.08fr)] items-center gap-[72px] max-lg:grid-cols-1 max-lg:gap-[34px] max-sm:w-[calc(100%_-_1.5rem)]"
      >
        <div>
          <p
            class="mb-2.5 text-[13px] font-black uppercase tracking-[0.12em] text-[#ed1c24]"
          >
            Company Profile
          </p>
          <h2
            id="company-profile-title"
            class="mb-5 text-[clamp(32px,4vw,52px)] font-black leading-[1.06] text-[#001b55] max-sm:text-[28px]"
          >
            Emergency ambulance care with the people, systems and readiness to
            respond.
          </h2>
          <p class="m-0 text-base leading-[1.8] text-[#14213d]">
            Assu-Med has more than 10 years of experience in the pre-hospital
            industry and has upgraded to an Advanced Life Support [ALS] service
            provider with a highly skilled, efficient and professional team that
            can meet urgent medical needs, whether big or small.
          </p>
        </div>

        <div
          class="relative min-h-[470px] overflow-hidden rounded-[22px] border-[10px] border-white bg-[#001b55] shadow-[-18px_18px_0_rgba(237,28,36,0.09),22px_-22px_0_rgba(0,140,255,0.1),0_28px_60px_rgba(0,27,85,0.2)] after:pointer-events-none after:absolute after:inset-0 after:bg-[linear-gradient(180deg,rgba(0,27,85,0.04)_36%,rgba(0,27,85,0.82)),linear-gradient(120deg,rgba(237,28,36,0.18),transparent_36%,rgba(0,140,255,0.16))] max-sm:min-h-[320px] max-sm:rounded-2xl max-sm:border-4 max-sm:shadow-[0_18px_34px_rgba(0,27,85,0.18)]"
          aria-label="Assu-Med ambulance service profile"
        >
          <img
            class="block h-[470px] w-full object-cover max-sm:h-[320px]"
            src="https://images.pexels.com/photos/6754150/pexels-photo-6754150.jpeg?auto=compress&cs=tinysrgb&w=900"
            alt=""
          />
          <div
            class="absolute bottom-6 left-6 right-6 z-[1] rounded-[18px] bg-white/95 p-[18px] shadow-[0_18px_36px_rgba(0,27,85,0.2)] max-sm:bottom-3 max-sm:left-3 max-sm:right-3 max-sm:p-4"
          >
            <img
              class="mb-3 block h-auto w-[min(260px,70%)]"
              :src="logo5"
              alt="Assu-Med"
            />
            <span
              class="block text-[13px] font-black leading-[1.45] text-[#001b55]"
              >Watergate Boulevard, Watergate Villa, Lentegeur, Mitchell's
              Plain, Western Cape, 7785</span
            >
          </div>
        </div>
      </div>
    </section>

    <section
      class="relative overflow-hidden bg-[linear-gradient(180deg,#f3f6fb,#ffffff)] py-[84px] max-sm:py-14"
      aria-labelledby="company-details-title"
    >
      <div
        class="relative z-[1] mx-auto grid w-[calc(100%_-_3rem)] max-w-[1180px] grid-cols-[minmax(320px,1.08fr)_minmax(300px,0.92fr)] gap-7 max-lg:grid-cols-1 max-lg:gap-[34px] max-sm:w-[calc(100%_-_1.5rem)]"
      >
        <div
          class="relative overflow-hidden rounded-[18px] border border-[#001b55]/10 bg-white/95 p-[34px] shadow-[0_22px_54px_rgba(0,27,85,0.1),inset_0_0_0_1px_rgba(255,255,255,0.78)] before:absolute before:left-0 before:top-0 before:h-[5px] before:w-[120px] before:bg-[linear-gradient(90deg,#ed1c24,#ffffff_48%,#008cff)] max-sm:px-[22px] max-sm:py-7"
        >
          <p
            class="mb-2.5 text-[13px] font-black uppercase tracking-[0.12em] text-[#ed1c24]"
          >
            Registered Details
          </p>
          <h2
            id="company-details-title"
            class="mb-5 text-[clamp(32px,4vw,52px)] font-black leading-[1.06] text-[#001b55] max-sm:text-[28px]"
          >
            Company Details
          </h2>

          <dl class="m-0 grid gap-3">
            <div
              v-for="detail in companyDetails"
              :key="detail[0]"
              class="rounded-[14px] bg-[linear-gradient(120deg,rgba(237,28,36,0.045),transparent_35%),#f8fbff] p-[18px]"
            >
              <dt
                class="text-[13px] font-extrabold uppercase tracking-[0.04em] text-[#001b55]"
              >
                {{ detail[0] }}
              </dt>
              <dd class="m-0 text-sm leading-[1.6] text-[#1f2937]">
                {{ detail[1] }}
              </dd>
            </div>
          </dl>
        </div>

        <div
          class="relative overflow-hidden rounded-[18px] border border-[#001b55]/10 bg-[radial-gradient(circle_at_88%_10%,rgba(0,140,255,0.18),transparent_40%),linear-gradient(135deg,#001b55,#000d2d)] p-[34px] text-white shadow-[0_22px_54px_rgba(0,27,85,0.1),inset_0_0_0_1px_rgba(255,255,255,0.78)] before:absolute before:left-0 before:top-0 before:h-[5px] before:w-[120px] before:bg-[linear-gradient(90deg,#ed1c24,#ffffff_48%,#008cff)] max-sm:px-[22px] max-sm:py-7"
        >
          <p
            class="mb-2.5 text-[13px] font-black uppercase tracking-[0.12em] text-white"
          >
            Contact Us
          </p>
          <h2
            class="mb-5 text-[clamp(32px,4vw,52px)] font-black leading-[1.06] text-white max-sm:text-[28px]"
          >
            Ready 24/7
          </h2>
          <div class="grid gap-3.5">
            <a
              class="flex items-start gap-3 text-[15px] font-extrabold leading-[1.45] text-white/90"
              href="tel:0218794716"
            >
              <SvgIcon
                name="phone"
                class="mt-0.5 flex-none text-xl text-[#ed1c24]"
              />
              <span>021 879 4716</span>
            </a>
            <a
              class="flex items-start gap-3 text-[15px] font-extrabold leading-[1.45] text-white/90"
              href="mailto:info@assumed.co.za"
            >
              <SvgIcon
                name="message"
                class="mt-0.5 flex-none text-xl text-[#ed1c24]"
              />
              <span>info@assumed.co.za</span>
            </a>
            <p
              class="m-0 flex items-start gap-3 text-[15px] font-extrabold leading-[1.45] text-white/90"
            >
              <SvgIcon
                name="hospital"
                class="mt-0.5 flex-none text-xl text-[#ed1c24]"
              />
              <span
                >Watergate Boulevard, Watergate Villa, Lentegeur, Mitchell's
                Plain</span
              >
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      class="bg-[radial-gradient(circle_at_16%_0%,rgba(237,28,36,0.09),transparent_25%),linear-gradient(135deg,#eeeeee_0%,#e4e7ec_100%)] py-[88px] max-sm:py-14"
      aria-labelledby="company-values-title"
    >
      <div
        class="mx-auto grid w-[calc(100%_-_3rem)] max-w-[1180px] grid-cols-2 gap-7 max-lg:grid-cols-1 max-lg:gap-[34px] max-sm:w-[calc(100%_-_1.5rem)]"
      >
        <article
          class="relative overflow-hidden rounded-[18px] bg-white p-9 shadow-[0_22px_50px_rgba(0,27,85,0.09)] before:absolute before:left-0 before:top-0 before:h-[5px] before:w-[120px] before:bg-[linear-gradient(90deg,#ed1c24,#ffffff_48%,#008cff)] max-sm:px-[22px] max-sm:py-7"
        >
          <span
            class="mb-3 block text-xs font-black uppercase tracking-[0.12em] text-[#ed1c24]"
            >Our Vision</span
          >
          <h2
            id="company-values-title"
            class="mb-5 text-[clamp(32px,4vw,52px)] font-black leading-[1.06] text-[#001b55] max-sm:text-[28px]"
          >
            Quality, cost-effective medical care focused on patient outcomes.
          </h2>
          <p class="m-0 text-base leading-[1.8] text-[#14213d]">
            Assu-Med's vision is to provide quality, cost-effective medical care
            focused on patient care to all who require our services. We are
            dedicated to ensuring that patients receive the highest quality care
            available by providing the right staff for the job.
          </p>
        </article>

        <article
          class="relative overflow-hidden rounded-[18px] bg-white p-9 shadow-[0_22px_50px_rgba(0,27,85,0.09)] before:absolute before:left-0 before:top-0 before:h-[5px] before:w-[120px] before:bg-[linear-gradient(90deg,#ed1c24,#ffffff_48%,#008cff)] max-sm:px-[22px] max-sm:py-7"
        >
          <span
            class="mb-3 block text-xs font-black uppercase tracking-[0.12em] text-[#ed1c24]"
            >Our Mission</span
          >
          <h2
            class="mb-5 text-[clamp(32px,4vw,52px)] font-black leading-[1.06] text-[#001b55] max-sm:text-[28px]"
          >
            Efficient emergency care for Watergate, Mitchell's Plain and
            surrounding communities.
          </h2>
          <p class="m-0 text-base leading-[1.8] text-[#14213d]">
            Our mission is to ensure that the community is attended to
            efficiently by professional staff. Our teams constantly strive to
            improve the quality and speed of emergency medical care as needed.
          </p>
        </article>
      </div>
    </section>

    <section
      class="relative overflow-hidden bg-white py-[88px] pb-[104px] max-sm:py-14"
      aria-labelledby="company-services-title"
    >
      <div
        class="relative z-[1] mx-auto grid w-[calc(100%_-_3rem)] max-w-[1180px] grid-cols-[minmax(300px,0.78fr)_minmax(420px,1.22fr)] items-start gap-[54px] max-lg:grid-cols-1 max-lg:gap-[34px] max-sm:w-[calc(100%_-_1.5rem)]"
      >
        <div>
          <p
            class="mb-2.5 text-[13px] font-black uppercase tracking-[0.12em] text-[#ed1c24]"
          >
            Services We Provide
          </p>
          <h2
            id="company-services-title"
            class="mb-5 text-[clamp(32px,4vw,52px)] font-black leading-[1.06] text-[#001b55] max-sm:text-[28px]"
          >
            Support for emergencies, events and occupational health needs.
          </h2>
        </div>

        <ul class="m-0 grid list-none grid-cols-2 gap-4 p-0 max-lg:grid-cols-1">
          <li
            v-for="service in profileServices"
            :key="service.label"
            class="flex min-h-[82px] items-center gap-3.5 rounded-2xl border border-[#001b55]/10 bg-[linear-gradient(120deg,rgba(237,28,36,0.045),transparent_35%),#f8fbff] p-[18px] text-sm font-black leading-tight text-[#001b55] shadow-[0_16px_34px_rgba(0,27,85,0.07)]"
          >
            <SvgIcon
              :name="service.icon"
              class="flex-none text-2xl text-[#ed1c24]"
            />
            {{ service.label }}
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
