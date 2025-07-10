// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  ssr: false,
  devtools: { enabled: true },
  app: {
    head: {
      title: 'K.Y & Yong CO',
      titleTemplate: '%s - Flyer',
      meta: [{ name: 'description', content: 'K.Y & Yong CO' }],
    },
    baseURL: '/ky-yong-flyer/', // Replace 'your-repo-name' with your repository name
    buildAssetsDir: 'assets',
  },
  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@nuxt/ui', '@vueuse/nuxt'],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  icon: {
    customCollections: [
      {
        prefix: 'custom',
        dir: './assets/icons',
      },
    ],
  },
})
