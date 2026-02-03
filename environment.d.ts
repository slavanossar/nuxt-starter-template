declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production'
    NUXT_SITE_ENV: 'development' | 'staging' | 'production'
    NITRO_HOST: string
    NITRO_PORT: string
    SITE_NAME: string
    SITE_URL: string
  }
}
