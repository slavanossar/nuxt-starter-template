/** Vite Plugins */
import tailwindPlugin from '@tailwindcss/vite'

const { SITE_NAME, SITE_URL } = process.env
const isDev = process.env.NODE_ENV === 'development'

export default defineNuxtConfig({
  compatibilityDate: '2026-02-03',
  devtools: { enabled: isDev },
  telemetry: { enabled: false },
  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/devtools', '@nuxtjs/seo', '@pinia/nuxt', '@vueuse/nuxt'],
  robots: {},
  site: {
    url: SITE_URL,
    name: SITE_NAME,
    defaultLocale: 'en-AU',
  },
  sitemap: {},
  runtimeConfig: {
    public: {
      siteName: SITE_NAME,
      siteUrl: SITE_URL,
    },
  },
  build: { transpile: [] },
  vite: {
    plugins: [tailwindPlugin()],
  },
})
