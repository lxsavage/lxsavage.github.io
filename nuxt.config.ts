// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  mode: 'static',
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  telemetry: false,
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  buildModules: [
    '@nuxtjs/fontawesome',
  ],
  fontawesome: {
    icons: {
      solid: ['faLocationDot', 'faEnvelope'],
      brands: ['faGithub', 'faLinkedinIn']
    }
  },
  css: [
    '@/assets/css/main.css',
  ],
}
