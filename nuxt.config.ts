// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  mode: 'static',
  router: {
    base: '/lxsavage.github.io/',
  },
  telemetry: false,
  modules: [
      '@nuxtjs/tailwindcss',
  ],
  buildModules: [
    '@nuxtjs/fontawesome'
  ],
  fontawesome: {
    icons: {
      solid: ['faLocationDot', 'faEnvelope'],
      brands: ['faGithub', 'faLinkedinIn']
    }
  }
}
