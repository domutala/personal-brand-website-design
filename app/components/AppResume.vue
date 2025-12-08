<script setup lang="ts">
const cards = ref([
  {
    title: "Stack",
    description:
      "Nuxt UI integrates with Nuxt Icon to access over 200,000+ icons from Iconify.",
    icon: "i-lucide-smile",
    to: "/docs/getting-started/integrations/icons",
  },
  {
    title: "Fonts",
    description:
      "Nuxt UI integrates with Nuxt Fonts to provide plug-and-play font optimization.",
    icon: "i-lucide-a-large-small",
    to: "/docs/getting-started/integrations/fonts",
  },
  {
    title: "Color Mode",
    description:
      "Nuxt UI integrates with Nuxt Color Mode to switch between light and dark.",
    icon: "i-lucide-sun-moon",
    to: "/docs/getting-started/integrations/color-mode",
  },
]);
</script>

<template>
  <u-container>
    <div class="mb-8">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia illo
      cupiditate itaque neque, labore porro! Dignissimos, eligendi praesentium
      minima iste iure, velit incidunt quasi tenetur explicabo assumenda
    </div>

    <UPageGrid :ui="{}" class="gap-3!">
      <UPageCard class="col-span-3" variant="ghost">
        <template #default>
          <div class="flex flex-wrap gap-8">
            <u-icon name="i-simple-icons-nuxt" size="62" />
            <u-icon :name="`i-file-icons-nestjs`" size="62" />
            <u-icon name="i-ri-nodejs-fill" size="62" />
            <div class="w-full"></div>

            <u-icon :name="`i-file-icons-vue`" size="42" />
            <u-icon name="i-simple-icons-adonisjs" size="42" />
            <u-icon name="i-simple-icons-javascript" size="42" />
            <u-icon name="i-simple-icons-typescript" size="42" />
            <u-icon name="i-simple-icons-html5" size="42" />
            <u-icon name="i-simple-icons-css" size="42" />
            <u-icon name="i-simple-icons-vuetify" size="42" />
            <u-icon name="i-simple-icons-express" size="42" />
            <u-icon name="i-simple-icons-tailwindcss" size="42" />
            <u-icon name="i-simple-icons-pwa" size="42" />
            <u-icon name="i-simple-icons-pinia" size="42" />

            <div class="w-full"></div>

            <u-icon name="i-simple-icons-netlify" size="28" />
            <u-icon name="i-simple-icons-clevercloud" size="28" />
            <u-icon name="i-simple-icons-cloudflare" size="28" />
            <u-icon name="i-simple-icons-firebase" size="28" />
            <u-icon name="i-simple-icons-typeorm" size="28" />
            <u-icon name="i-simple-icons-drizzle" size="28" />
            <u-icon name="i-simple-icons-python" size="28" />
            <u-icon name="i-simple-icons-postgresql" size="28" />
            <u-icon name="i-simple-icons-mongodb" size="28" />
            <u-icon name="i-simple-icons-mysql" size="28" />
            <u-icon name="i-simple-icons-redhat" size="28" />
            <u-icon name="i-simple-icons-github" size="28" />
            <u-icon name="i-simple-icons-gitlab" size="28" />
            <u-icon name="i-simple-icons-docker" size="28" />
            <u-icon name="i-simple-icons-googlecloud" size="28" />
            <u-icon name="i-simple-icons-ovh" size="28" />
            <u-icon name="i-simple-icons-linux" size="28" />
            <u-icon name="i-simple-icons-jenkins" size="28" />
            <u-icon name="i-simple-icons-sass" size="28" />
            <u-icon name="i-simple-icons-flutter" size="28" />
            <u-icon name="i-simple-icons-cypress" size="28" />
            <u-icon name="i-simple-icons-vitest" size="28" />
            <u-icon name="i-simple-icons-jest" size="28" />
            <u-icon name="i-simple-icons-keycloak" size="28" />
            <u-icon name="i-simple-icons-ionic" size="28" />
            <u-icon name="i-simple-icons-capacitor" size="28" />
            <u-icon name="i-simple-icons-electron" size="28" />
            <u-icon name="i-simple-icons-pug" size="28" />
            <u-icon name="i-simple-icons-webpack" size="28" />
            <u-icon name="i-simple-icons-vite" size="28" />
            <u-icon name="i-simple-icons-esbuild" size="28" />

            <u-icon name="i-simple-icons-flask" size="28" />
            <u-icon name="i-simple-icons-jira" size="28" />
            <u-icon name="i-simple-icons-notion" size="28" />
            <u-icon name="i-simple-icons-storyblok" size="28" />
            <u-icon name="i-simple-icons-wordpress" size="28" />
            <u-icon name="i-simple-icons-strapi" size="28" />
            <u-icon name="i-simple-icons-directus" size="28" />
            <u-icon name="i-simple-icons-zod" size="28" />
          </div>
        </template>
      </UPageCard>

      <!-- <UPageCard v-for="(card, index) in cards" :key="index" v-bind="card" /> -->
    </UPageGrid>
  </u-container>
</template>
