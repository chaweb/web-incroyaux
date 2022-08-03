export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'web-incroyaux',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Les incroayaux, une serveur minecraft rp, medieval' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~assets/reset.scss",
    "~assets/variable/__Amain.sass",
    "assets/style/__Amain.sass",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/fontawesome.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [{ path: '~/components/layout/', prefix: 'layout' },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    ['@nuxtjs/color-mode', {classSuffix: ''}],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    ['nuxt-socket-io', {
      sockets: [ // Required
      { // At least one entry is required
        name: 'home',
        default: true,
        vuex:{actions: ["dataDisord","sendData"]} ,
        namespaces: { /* see section below */ }
      }, 
    ]
    }]
  ],

  styleResources: {
    sass: ['~/assets/variable/__Amain.sass'],
    hoistUseStatements: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  //server 
  server: {
    port: 80,
    host: "0.0.0.0"
  }
}
