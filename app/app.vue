<script lang="ts" setup>
import { en, fr } from "@nuxt/ui/locale";
const { locale, setLocale } = useI18n();

useHead({
  meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
  link: [{ rel: "icon", href: "/favicon.ico" }],
  htmlAttrs: {
    lang: "en",
  },
});

const appConfig = useAppConfig();
const title = appConfig.site.name;
const description = appConfig.site.description;

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: "https://ui.nuxt.com/assets/templates/nuxt/starter-light.png",
});

onMounted(() => {
  useCookieConsent().init();
});
</script>

<template>
  <UApp>
    <u-header class="border-b-0">
      <template #title> @domutala </template>

      <template #right>
        <UColorModeSelect />

        <ULocaleSelect
          :model-value="locale"
          :locales="[en, fr]"
          @update:model-value="setLocale($event as 'fr')"
        />
      </template>
    </u-header>

    <UMain>
      <NuxtPage />
    </UMain>

    <ui-footer />
  </UApp>
</template>
