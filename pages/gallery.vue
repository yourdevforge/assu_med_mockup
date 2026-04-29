<script setup>
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
    <section class="hero" aria-labelledby="gallery-hero-title">
      <div class="hero__placeholder" role="img" aria-label="Random ambulance background image">
        <img src="https://images.pexels.com/photos/6754146/pexels-photo-6754146.jpeg?auto=compress&cs=tinysrgb&w=1800" alt="" />
      </div>

      <div class="hero__inner">
        <div class="hero__content">
          <p class="hero__kicker">24 Hour</p>
          <h1 id="gallery-hero-title">Ambulance Services</h1>
          <p class="hero__copy">
            Assu-Med is a privately-owned emergency ambulance service based in Mitchell's Plain,
            Western Cape. We provide primary emergency response services as well as inter-hospital/
            facility transfer services with advanced life support capabilities to both medical aid
            and private patients.
          </p>
          <a class="hero__button" href="#gallery-videos">Learn more</a>
        </div>

        <div class="call-centre" aria-label="Call centre">
          <div class="call-centre__icon" aria-hidden="true"><SvgIcon name="phone" /></div>
          <div>
            <p>Call Centre</p>
            <strong>021 879 4716</strong>
          </div>
        </div>
      </div>
    </section>

    <section class="gallery-videos" id="gallery-videos" aria-label="Video gallery">
      <div class="gallery-videos__header">
        <p class="gallery-videos__eyebrow">Media Gallery</p>
        <h2>Assu-Med in action, from response crews to clinical care.</h2>
        <div class="gallery-videos__stats" aria-label="Gallery statistics">
          <span><strong>06</strong> clips</span>
          <span><strong>24/7</strong> coverage</span>
          <span><strong>ALS</strong> ready</span>
        </div>
      </div>

      <div class="gallery-videos__inner">
        <div v-for="video in videos" :key="video.id" :class="['video-card', { 'video-card--featured': video.id === 1 }]" role="img" :aria-label="video.title">
          <img :src="`https://images.pexels.com/photos/${videoImages[video.id - 1]}/pexels-photo-${videoImages[video.id - 1]}.jpeg?auto=compress&cs=tinysrgb&w=900`" alt="" />
          <div class="video-card__label">
            <span>{{ video.label }}</span>
            <strong>{{ video.title }}</strong>
          </div>
          <div class="video-card__controls">
            <button class="video-card__play" type="button" aria-label="Play">
              <SvgIcon name="play" />
            </button>
            <span class="video-card__time">{{ video.duration }}</span>
            <span class="video-card__spacer" aria-hidden="true"></span>
            <button class="video-card__icon" type="button" aria-label="Mute">
              <SvgIcon name="volume-off" />
            </button>
            <button class="video-card__icon" type="button" aria-label="Fullscreen">
              <SvgIcon name="maximize" />
            </button>
            <button class="video-card__icon" type="button" aria-label="More options">
              <SvgIcon name="more-vertical" />
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
