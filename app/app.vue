<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { UseSeoMetaInput } from '@unhead/vue'

const config = useRuntimeConfig()
const themeColour = '#000000'

/**
 * SEO / Meta
 */
const seoMeta: UseSeoMetaInput = {
  ogImageWidth: 1200,
  ogImageHeight: 630,
  twitterCard: 'summary_large_image',
}

seoMeta.title = seoMeta.ogTitle = seoMeta.twitterTitle = config.public.siteName

seoMeta.titleTemplate = (titleChunk) => {
  const baseTitle = typeof seoMeta.title === 'string' ? seoMeta.title : null

  return titleChunk ? [titleChunk, baseTitle].join(' · ') : baseTitle
}

seoMeta.description =
  seoMeta.ogDescription =
  seoMeta.twitterDescription =
    'A Nuxt 4 starter template.'

seoMeta.ogImage = '/img/opengraph.jpg'

useSeoMeta(seoMeta)

/**
 * Head
 */
useHead({
  bodyAttrs: {
    class: 'min-h-full font-body antialiased bg-black text-white',
  },
  htmlAttrs: {
    class: 'h-full',
    lang: 'en',
  },
  meta: [
    { charset: 'utf-8' },
    {
      name: 'viewport',
      content:
        'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
    },
    { name: 'theme-color', content: themeColour },
    {
      name: 'facebook-domain-verification',
      content: 'f28iui2rltx9blb0oochigb6mojhif',
    },
  ],
  // Use https://realfavicongenerator.net/ to generate favicon.
  link: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/favicon/apple-touch-icon.png?v2',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '96x96',
      href: '/favicon/favicon-96x96.png?v2',
    },
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/favicon/favicon.svg?v2',
    },
    {
      rel: 'shortcut icon',
      href: '/favicon/favicon.ico?v2',
    },
    { rel: 'manifest', href: '/favicon/site.webmanifest' },
  ],
})
</script>
