// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  telemetry: false,
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
    '@/assets/css/tailwind.css'
  ],
  modules: [
      '@nuxtjs/tailwindcss'
  ]
}
