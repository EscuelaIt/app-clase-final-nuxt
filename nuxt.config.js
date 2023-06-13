import { fileURLToPath } from "url";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/supabase'],
  srcDir: './src',
  alias: {
    '@': fileURLToPath(new URL('./src', import.meta.url))
  }
})
