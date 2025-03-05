export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ScrumLaunch',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      {
        charset: 'utf-8',
        hid: 'charset'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        property: 'og:site_name',
        content: 'ScrumLaunch'
      },
      {
        hid: 'og:title',
        name: 'og:title',
        property: 'og:title',
        content: 'ScrumLaunch'
      },
      {
        hid: 'og:description',
        name: 'description',
        property: 'og:description',
        content: 'ScrumLaunch enables start-ups, businesses, and organizations to hire developers from a growing network of top talent in the world. Our React, Python, PHP, Kotlin experts ready to work full-time, part-time, or hourly who will seamlessly integrate into your team.'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      },
      {
        hid: 'apple-mobile-web-app-title',
        name: 'apple-mobile-web-app-title',
        content: 'ScrumLaunch'
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
    script: [{
      id: "hs-script-loader",
      type: "text/javascript",
      src: 'https:////js.hs-scripts.com/43665306.js',
      async: true,
      defer: true,
    }, {
      charset: "utf-8",
      type: "text/javascript",
      src: "//js.hsforms.net/forms/embed/v2.js",
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.scss',
    'vue-slick-carousel/dist/vue-slick-carousel.css',
    'vue-slick-carousel/dist/vue-slick-carousel-theme.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/hotjar.js', mode: 'client' },
    { src: '~/plugins/vue-html2pdf.js', mode: 'client' },
    '~/plugins/vue-social-sharing.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    // Equivalent to { path: '~/components' }
    '~/components',
    { path: '~/components/ui', extensions: ['vue'] },
    { path: '~/components/animations', extensions: ['vue'] }
  ],

  image: {
    provider: 'ipx',
    ipx: {}
  },

  serverMiddleware: [
    { path: '/api', handler: '~/api' },
    { path: '/_ipx', handler: '~/server/middleware/ipx.js' },
    '~/server/middleware/redirect.js',
  ],

  // serverMiddleware: [{ path: '/api', handler: '~/api' }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/date-fns',
    '@nuxtjs/style-resources',
    '@nuxt/postcss8',
  ],

  sitemap: {
    hostname: 'https://www.scrumlaunch.com/',
  },

  styleResources: {
    scss: ['~/assets/css/variables.scss'],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://github.com/nuxt-community/gtm-module
    '@nuxtjs/gtm',
    '@nuxt/image',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',

    ['~/io'],
  ],

  gtm: {
    id: 'GTM-XXXXXXX' // Used as fallback if no runtime config is provided
  },

  publicRuntimeConfig: {
    gtm: {
      id: process.env.GOOGLE_TAG_MANAGER_ID,
    },
    scrumTeamsAPI: process.env.ST_API,
    scrumTeamsAPI_KEY: process.env.HTTP_API_KEY
  },

  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false
  },

  robots: {
    UserAgent: '*',
    Allow: '/',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API_URL || 'http://localhost:3000',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: {
      ignoreOrder: false
    },
  },
}
