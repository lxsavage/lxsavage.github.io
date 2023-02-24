// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  ssr: true,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  telemetry: false,
  buildModules: [
    '@nuxtjs/fontawesome',
    '@nuxtjs/tailwindcss'
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
}
