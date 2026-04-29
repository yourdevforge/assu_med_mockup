export default defineNuxtConfig({
  compatibilityDate: '2025-01-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en-ZA',
      },
      title: 'Assu-Med Ambulance Services',
      titleTemplate: '%s | Assu-Med',
      meta: [
        {
          name: 'description',
          content:
            'Assu-Med provides 24-hour ambulance services, emergency response, patient transfer, and on-site medical support in the Western Cape.',
        },
        { name: 'theme-color', content: '#001b55' },
        { property: 'og:site_name', content: 'Assu-Med Ambulance Services' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/images/assu-med-logo.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Asap:wght@400;500;600;700;800;900&display=swap',
        },
      ],
    },
  },
})
