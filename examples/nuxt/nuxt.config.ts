import Unfonts from '../../src/nuxt'

export default defineNuxtConfig({
  modules: [
    Unfonts,
  ],
  unfonts: {
    google: {
      families: ['Crimson Pro', 'Open Sans', 'Material+Icons'],
    },

    custom: {
      display: 'swap',
      families: {
        'Dancing Script': './assets/fonts/DancingScript*',
      },
    },
  },
})
