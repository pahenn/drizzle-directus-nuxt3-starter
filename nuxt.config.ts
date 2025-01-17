// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  modules: ["@nuxt/ui-pro", "@nuxt/image", "@pinia/nuxt"],
  css: ["~/assets/css/main.css"],

  ui: {
    colorMode: false,
  },

  runtimeConfig: {
    public: {
      directus: {
        url: "",
        readMe: "id, email, role, first_name, last_name",
      },
    },
  },

  compatibilityDate: "2024-12-30",
})
