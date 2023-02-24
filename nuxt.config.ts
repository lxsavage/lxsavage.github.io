// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  telemetry: false,
  modules: ['@nuxtjs/tailwindcss'],
  plugins: [
    { src: '~/plugins/font-awesome' }
  ],
  css: ['@fortawesome/fontawesome-svg-core/styles.css']
})
