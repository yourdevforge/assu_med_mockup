<script setup>
const posts = [
  {
    id: 1,
    date: 'July 16, 2025',
    title: "Assu-Med provides emergency services and health checks at UCT's mineral resources event",
    excerpt: "Assu-Med's emergency paramedic team recently had the opportunity to showcase their expertise at a prestigious event held at the University of Cape Town in",
    comments: 106,
    tone: 'navy',
  },
  {
    id: 2,
    date: 'July 14, 2025',
    title: '8th of July — World Paramedic Day: celebrating the lifesavers on the frontline',
    excerpt: "As we commemorated World Paramedic Day on the 8th of July, we take this opportunity to pay tribute to the incredible men and women who serve",
    comments: 52,
    tone: 'green',
  },
  {
    id: 3,
    date: 'July 6, 2025',
    title: 'Common misconceptions about paramedics',
    excerpt: "Paramedics and emergency medical services (EMS) are important for saving lives during emergencies. Unfortunately, there are some misunderstandings about their work that need to be explained.",
    comments: 5,
    tone: 'red',
  },
  {
    id: 4,
    date: 'June 28, 2025',
    title: 'Health Check campaign rolls into Mitchell\'s Plain',
    excerpt: "Assu-Med's clinical team partnered with local community centres to offer free blood pressure, glucose and BMI checks to residents in Lentegeur and Watergate. The response was",
    comments: 18,
    tone: 'blue',
  },
  {
    id: 5,
    date: 'June 12, 2025',
    title: 'Behind the scenes: a day in the life of an Assu-Med paramedic',
    excerpt: "Ever wondered what really happens between calls? We spent a 12-hour shift with one of our crews to capture the rhythm, the readiness and the camaraderie that defines",
    comments: 41,
    tone: 'navy',
  },
  {
    id: 6,
    date: 'May 30, 2025',
    title: 'New ALS training programme for Assu-Med staff',
    excerpt: "All operational crew members have completed an updated Advanced Life Support refresher course aligned with the latest HPCSA protocols. The programme covered airway management,",
    comments: 12,
    tone: 'red',
  },
  {
    id: 7,
    date: 'May 14, 2025',
    title: 'Community CPR awareness drive: training 200 residents in two weekends',
    excerpt: "Bystander CPR can triple a cardiac-arrest survival rate. That's why Assu-Med ran free CPR demonstration sessions at the Mitchell's Plain town centre. We trained over",
    comments: 73,
    tone: 'green',
  },
  {
    id: 8,
    date: 'April 22, 2025',
    title: 'Assu-Med expands ambulance fleet',
    excerpt: "This week the Assu-Med team received good news that we will be expanding our fleet by adding another fully-kitted ALS ambulance. The new vehicle will be deployed to",
    comments: 3,
    tone: 'blue',
  },
  {
    id: 9,
    date: 'April 5, 2025',
    title: "Assu-Med set to provide 'ULTRA' care at the festival circuit",
    excerpt: "The ULTRA music festival is heading back to Cape Town and Assu-Med has been appointed to provide on-site advanced life support medical services for the duration of the event.",
    comments: 291,
    tone: 'red',
  },
  {
    id: 10,
    date: 'March 18, 2025',
    title: "Assu-Med's sprint to the top",
    excerpt: "On Monday, the Assu-Med Ambulance Service received multiple call-outs and requests for assistance in Salt River, Cape Town. The call-out was part of",
    comments: 28,
    tone: 'navy',
  },
  {
    id: 11,
    date: 'February 27, 2025',
    title: 'Top 10 home safety tips to keep your family protected',
    excerpt: "Most emergencies we respond to start at home. From kitchen burns to slips and falls, a few simple changes around the house can prevent serious injuries. Our paramedics",
    comments: 9,
    tone: 'green',
  },
  {
    id: 12,
    date: 'February 6, 2025',
    title: 'Why response time matters — every second counts',
    excerpt: "In a cardiac arrest, brain damage begins within four minutes of oxygen deprivation. Our regional dispatch model and Lentegeur base station are designed to shorten that gap.",
    comments: 47,
    tone: 'blue',
  },
];

const postImages = [8942234, 8941917, 8948289, 6754150, 8942117, 8942092, 8943102, 6754146, 6520101, 8942234, 8941917, 6754150];
const postCategories = ['Event standby', 'People', 'Education', 'Community', 'Behind the scenes', 'Training', 'Community', 'Fleet', 'Event standby', 'Operations', 'Health tips', 'Response care'];
const postReadTimes = ['4 min read', '3 min read', '5 min read', '4 min read', '6 min read', '3 min read', '5 min read', '2 min read', '4 min read', '3 min read', '5 min read', '4 min read'];
const cleanTitle = (title) => title.replace(/â€”/g, '-');
</script>

<template>
  <div>
    <section class="page-hero" aria-labelledby="blog-hero-title">
      <div class="page-hero__placeholder" role="img" aria-label="Random page background image">
        <img src="https://images.pexels.com/photos/8942092/pexels-photo-8942092.jpeg?auto=compress&cs=tinysrgb&w=1800" alt="" />
      </div>

      <div class="page-hero__inner">
        <div class="page-hero__content">
          <h1 id="blog-hero-title" class="page-hero__title">
            <span class="page-hero__title-faint">OUR</span>
            <span class="page-hero__title-strong">BLOG</span>
          </h1>

          <p class="page-hero__copy">
            News, stories and health tips from the Assu-Med team. Stay up to date with what's
            happening on the road and in the community.
          </p>
        </div>

        <div class="page-hero__call-centre" aria-label="Call centre">
          <div class="page-hero__call-icon" aria-hidden="true"><SvgIcon name="phone" /></div>
          <div>
            <p>Call Centre</p>
            <strong>021 879 4716</strong>
          </div>
        </div>
      </div>
    </section>

    <section class="blog-list">
      <div class="blog-list__header">
        <p class="blog-list__eyebrow">Latest from Assu-Med</p>
        <h2>Emergency care stories, operational updates and practical health advice.</h2>
        <div class="blog-list__filters" aria-label="Blog categories">
          <span>Response</span>
          <span>Community</span>
          <span>Training</span>
          <span>Health tips</span>
        </div>
      </div>

      <div class="blog-list__inner">
        <article v-for="post in posts" :key="post.id" :class="['blog-card', { 'blog-card--featured': post.id === 1 }]">
          <div :class="['blog-card__media', `blog-card__media--${post.tone}`]" role="img" :aria-label="`Image for ${post.title}`">
            <img :src="`https://images.pexels.com/photos/${postImages[post.id - 1]}/pexels-photo-${postImages[post.id - 1]}.jpeg?auto=compress&cs=tinysrgb&w=760`" alt="" />
            <span class="blog-card__category">{{ postCategories[post.id - 1] }}</span>
          </div>

          <div class="blog-card__body">
            <div class="blog-card__meta">
              <p class="blog-card__date">{{ post.date }}</p>
              <span>{{ postReadTimes[post.id - 1] }}</span>
            </div>
            <h2 class="blog-card__title">{{ cleanTitle(post.title) }}</h2>
            <p class="blog-card__excerpt">{{ post.excerpt }} <span class="blog-card__more">[...]</span></p>

            <div class="blog-card__footer">
              <span class="blog-card__comments" aria-label="Comments">
                <SvgIcon name="message" /> {{ post.comments }}
              </span>
              <a class="blog-card__read" :href="`#post-${post.id}`">
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
