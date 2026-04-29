<script setup>
useSeoMeta({
  title: 'Blog',
  description:
    'Read Assu-Med news, emergency care stories, community updates, and practical health advice from the ambulance services team.',
});

const posts = [
  {
    id: 1,
    date: 'July 16, 2025',
    title: "Assu-Med provides emergency services and health checks at UCT's mineral resources event",
    excerpt: "Assu-Med's emergency paramedic team recently had the opportunity to showcase their expertise at a prestigious event held at the University of Cape Town in",
    comments: 106,
  },
  {
    id: 2,
    date: 'July 14, 2025',
    title: '8th of July - World Paramedic Day: celebrating the lifesavers on the frontline',
    excerpt: 'As we commemorated World Paramedic Day on the 8th of July, we take this opportunity to pay tribute to the incredible men and women who serve',
    comments: 52,
  },
  {
    id: 3,
    date: 'July 6, 2025',
    title: 'Common misconceptions about paramedics',
    excerpt: 'Paramedics and emergency medical services (EMS) are important for saving lives during emergencies. Unfortunately, there are some misunderstandings about their work that need to be explained.',
    comments: 5,
  },
  {
    id: 4,
    date: 'June 28, 2025',
    title: "Health Check campaign rolls into Mitchell's Plain",
    excerpt: "Assu-Med's clinical team partnered with local community centres to offer free blood pressure, glucose and BMI checks to residents in Lentegeur and Watergate. The response was",
    comments: 18,
  },
  {
    id: 5,
    date: 'June 12, 2025',
    title: 'Behind the scenes: a day in the life of an Assu-Med paramedic',
    excerpt: 'Ever wondered what really happens between calls? We spent a 12-hour shift with one of our crews to capture the rhythm, the readiness and the camaraderie that defines',
    comments: 41,
  },
  {
    id: 6,
    date: 'May 30, 2025',
    title: 'New ALS training programme for Assu-Med staff',
    excerpt: 'All operational crew members have completed an updated Advanced Life Support refresher course aligned with the latest HPCSA protocols. The programme covered airway management,',
    comments: 12,
  },
  {
    id: 7,
    date: 'May 14, 2025',
    title: 'Community CPR awareness drive: training 200 residents in two weekends',
    excerpt: "Bystander CPR can triple a cardiac-arrest survival rate. That's why Assu-Med ran free CPR demonstration sessions at the Mitchell's Plain town centre. We trained over",
    comments: 73,
  },
  {
    id: 8,
    date: 'April 22, 2025',
    title: 'Assu-Med expands ambulance fleet',
    excerpt: 'This week the Assu-Med team received good news that we will be expanding our fleet by adding another fully-kitted ALS ambulance. The new vehicle will be deployed to',
    comments: 3,
  },
  {
    id: 9,
    date: 'April 5, 2025',
    title: "Assu-Med set to provide 'ULTRA' care at the festival circuit",
    excerpt: 'The ULTRA music festival is heading back to Cape Town and Assu-Med has been appointed to provide on-site advanced life support medical services for the duration of the event.',
    comments: 291,
  },
  {
    id: 10,
    date: 'March 18, 2025',
    title: "Assu-Med's sprint to the top",
    excerpt: 'On Monday, the Assu-Med Ambulance Service received multiple call-outs and requests for assistance in Salt River, Cape Town. The call-out was part of',
    comments: 28,
  },
  {
    id: 11,
    date: 'February 27, 2025',
    title: 'Top 10 home safety tips to keep your family protected',
    excerpt: 'Most emergencies we respond to start at home. From kitchen burns to slips and falls, a few simple changes around the house can prevent serious injuries. Our paramedics',
    comments: 9,
  },
  {
    id: 12,
    date: 'February 6, 2025',
    title: 'Why response time matters - every second counts',
    excerpt: 'In a cardiac arrest, brain damage begins within four minutes of oxygen deprivation. Our regional dispatch model and Lentegeur base station are designed to shorten that gap.',
    comments: 47,
  },
];

const postImages = [8942234, 8941917, 8948289, 6754150, 8942117, 8942092, 8943102, 6754146, 6520101, 8942234, 8941917, 6754150];
const postCategories = ['Event standby', 'People', 'Education', 'Community', 'Behind the scenes', 'Training', 'Community', 'Fleet', 'Event standby', 'Operations', 'Health tips', 'Response care'];
const postReadTimes = ['4 min read', '3 min read', '5 min read', '4 min read', '6 min read', '3 min read', '5 min read', '2 min read', '4 min read', '3 min read', '5 min read', '4 min read'];
</script>

<template>
  <div>
    <AppPageHero
      title-id="blog-hero-title"
      image-src="https://images.pexels.com/photos/8942092/pexels-photo-8942092.jpeg?auto=compress&cs=tinysrgb&w=1800"
      image-label="Random page background image"
      eyebrow="Our"
      title="Blog"
    >
      <p>
        News, stories and health tips from the Assu-Med team. Stay up to date with what's
        happening on the road and in the community.
      </p>
    </AppPageHero>

    <section class="relative overflow-hidden bg-[radial-gradient(circle_at_12%_2%,rgba(237,28,36,0.1),transparent_24%),radial-gradient(circle_at_88%_4%,rgba(0,140,255,0.12),transparent_26%),linear-gradient(180deg,#ffffff_0%,#f5f7fb_100%)] py-[72px] pb-[104px] max-sm:py-14" aria-label="Blog posts">
      <div class="relative z-[1] mx-auto mb-[34px] w-[calc(100%_-_3rem)] max-w-[1180px] max-sm:w-[calc(100%_-_1.5rem)]">
        <p class="mb-2.5 text-[13px] font-black uppercase tracking-[0.12em] text-[#ed1c24]">Latest from Assu-Med</p>
        <h2 class="m-0 max-w-[740px] text-[clamp(30px,3.6vw,48px)] font-black leading-[1.08] text-[#001b55] max-sm:text-[28px]">Emergency care stories, operational updates and practical health advice.</h2>
        <div class="mt-6 flex flex-wrap gap-2.5" aria-label="Blog categories">
          <span class="inline-flex min-h-[34px] items-center rounded-full border border-[#001b55]/15 bg-white/80 px-3.5 py-1.5 text-xs font-black uppercase tracking-[0.04em] text-[#001b55]">Response</span>
          <span class="inline-flex min-h-[34px] items-center rounded-full border border-[#001b55]/15 bg-white/80 px-3.5 py-1.5 text-xs font-black uppercase tracking-[0.04em] text-[#001b55]">Community</span>
          <span class="inline-flex min-h-[34px] items-center rounded-full border border-[#001b55]/15 bg-white/80 px-3.5 py-1.5 text-xs font-black uppercase tracking-[0.04em] text-[#001b55]">Training</span>
          <span class="inline-flex min-h-[34px] items-center rounded-full border border-[#001b55]/15 bg-white/80 px-3.5 py-1.5 text-xs font-black uppercase tracking-[0.04em] text-[#001b55]">Health tips</span>
        </div>
      </div>

      <div class="relative z-[1] mx-auto grid w-[calc(100%_-_3rem)] max-w-[1180px] grid-cols-3 gap-x-8 gap-y-9 max-lg:grid-cols-2 max-sm:w-[calc(100%_-_1.5rem)] max-sm:grid-cols-1">
        <article
          v-for="post in posts"
          :id="`post-${post.id}`"
          :key="post.id"
          :class="[
            'group relative overflow-hidden rounded-[14px] border border-[#001b55]/10 bg-white shadow-[0_18px_44px_rgba(0,27,85,0.09),inset_0_0_0_1px_rgba(255,255,255,0.72)] transition hover:-translate-y-1.5 hover:border-[#008cff]/25 hover:shadow-[0_26px_58px_rgba(0,27,85,0.14),0_0_34px_rgba(0,140,255,0.08)]',
            post.id === 1
              ? 'col-span-2 grid min-h-[430px] grid-cols-[1.08fr_0.92fr] bg-[linear-gradient(135deg,#ffffff_0%,#f8fbff_100%)] max-lg:grid-cols-1 max-sm:col-span-1 max-sm:min-h-0'
              : 'flex flex-col',
          ]"
        >
          <div
            :class="[
              'relative block overflow-hidden bg-[#001b55] before:absolute before:left-[18px] before:top-[18px] before:z-[2] before:h-[5px] before:w-[82px] before:rounded-full before:bg-[linear-gradient(90deg,#ed1c24,#ffffff_48%,#008cff)] after:pointer-events-none after:absolute after:inset-0 after:bg-[linear-gradient(180deg,rgba(0,27,85,0)_44%,rgba(0,27,85,0.64)),linear-gradient(90deg,rgba(237,28,36,0.13),transparent_34%,rgba(0,140,255,0.14))]',
              post.id === 1 ? 'min-h-full max-lg:aspect-video max-sm:min-h-0' : 'aspect-[4/3]',
            ]"
            role="img"
            :aria-label="`Image for ${post.title}`"
          >
            <img class="block h-full w-full object-cover transition duration-300 group-hover:scale-[1.04]" :src="`https://images.pexels.com/photos/${postImages[post.id - 1]}/pexels-photo-${postImages[post.id - 1]}.jpeg?auto=compress&cs=tinysrgb&w=760`" alt="" />
            <span class="absolute bottom-[18px] left-[18px] z-[3] inline-flex min-h-8 items-center rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.06em] text-[#001b55] shadow-[0_10px_22px_rgba(0,27,85,0.18)]">{{ postCategories[post.id - 1] }}</span>
          </div>

          <div :class="post.id === 1 ? 'flex flex-1 flex-col p-9 max-sm:p-6' : 'flex flex-1 flex-col p-6 pb-[26px]'">
            <div class="mb-3.5 flex flex-wrap items-center gap-x-3.5 gap-y-2">
              <p class="m-0 text-xs font-black uppercase tracking-[0.06em] text-[#ed1c24]">{{ post.date }}</p>
              <span class="text-xs font-extrabold text-[#001b55]/60">{{ postReadTimes[post.id - 1] }}</span>
            </div>
            <h2 :class="post.id === 1 ? 'mb-3.5 text-[clamp(28px,3vw,38px)] font-black leading-[1.08] tracking-normal text-[#001b55]' : 'mb-3.5 text-xl font-black leading-[1.18] tracking-normal text-[#001b55]'">
              {{ post.title }}
            </h2>
            <p :class="post.id === 1 ? 'mb-[22px] text-[15px] leading-[1.72] text-[#24324f]' : 'mb-[22px] text-sm leading-[1.72] text-[#24324f]'">
              {{ post.excerpt }} <span class="font-bold text-[#d92020]">[...]</span>
            </p>

            <div class="mt-auto flex items-center justify-between gap-4 max-sm:flex-wrap">
              <span class="inline-flex items-center gap-1.5 rounded-full bg-[#001b55]/10 px-3 py-1.5 text-xs font-black text-[#001b55]" aria-label="Comments">
                <SvgIcon name="message" /> {{ post.comments }}
              </span>
              <a class="inline-flex min-h-[38px] items-center gap-2 rounded-full bg-[linear-gradient(135deg,#ed1c24,#b90f18)] px-[15px] py-2 text-xs font-black uppercase tracking-[0.03em] text-white shadow-[0_12px_22px_rgba(237,28,36,0.18)] transition hover:bg-[linear-gradient(135deg,#ff2a32,#c9141e)] max-sm:flex-none" :href="`#post-${post.id}`">
                <SvgIcon name="file-text" />
                <span>Read more</span>
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>