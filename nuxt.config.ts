// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/eslint", "@nuxt/ui", "@nuxtjs/i18n", "@nuxt/content"],

  devtools: {
    enabled: true,
  },

  css: ["~/assets/css/main.css", "~/assets/css/main.scss"],

  components: [{ path: "~/components", global: true, prefix: "ui" }],

  routeRules: {
    "/": { prerender: true },
  },

  compatibilityDate: "2025-01-15",

  colorMode: {
    preference: "light",
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },

  i18n: {
    defaultLocale: "fr",
    strategy: "prefix_and_default",

    locales: [
      { code: "en", name: "English", file: "en.json", dir: "ltr" },
      { code: "fr", name: "Français", file: "fr.json", dir: "ltr" },
    ],
  },
});
