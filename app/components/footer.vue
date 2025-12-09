<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items: NavigationMenuItem[] = [
  {
    label: "Figma Kit",
    to: "https://go.nuxt.com/figma-ui",
    target: "_blank",
  },
  {
    label: "Playground",
    to: "https://stackblitz.com/edit/nuxt-ui",
    target: "_blank",
  },
  {
    label: "Releases",
    to: "https://github.com/nuxt/ui/releases",
    target: "_blank",
  },
];

const appConfig = useAppConfig();
</script>

<template>
  <UFooter>
    <template #left>
      <p class="text-muted text-sm">© {{ new Date().getFullYear() }}</p>
    </template>

    <UNavigationMenu :items="items" variant="link" />

    <template #right>
      <u-button
        v-for="(social, s) in appConfig.socials"
        :key="s"
        :href="social"
        :aria-label="social"
        :icon="`i-simple-icons-${s.split('.')[1]}`"
        target="_blank"
        color="neutral"
        variant="ghost"
        size="md"
      >
      </u-button>
    </template>
  </UFooter>
</template>
