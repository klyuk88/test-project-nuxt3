// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Компания Avalon производит понтонные катера с 1972 года. Ознакомьтесь с полной линейкой моделей понтонных катеров Avalon 2022.' },
        { name: 'keywords', content: 'avalon, понтонные катера, заказать понтонный катер, заказать катер avalon' },

      ],
      link: [{
        rel: 'icon',
        type: 'image/png',
        href: '/favicon.png'
      },
      ],
    }
  },
  css: [
    "@/assets/fonts/font.css",
    "@/assets/css/bootstrap.min.css",
    "@/assets/css/style.css",
  ],
  modules: [
    '@nuxtjs/i18n'
  ],
  i18n: {
    locales: [
      {
        name: 'En',
        code: 'en',
        domain: 'en.localhost:3000',
        file: 'en-US.json'
      },
      {
        name: 'Ru',
        code: 'ru',
        domain: 'http://localhost:3000',
        file: 'ru-RU.json'
      }
    ],
    langDir: 'langs',
    defaultLocale: 'ru',
    differentDomains: true,
    detectBrowserLanguage: false,
  }

})
