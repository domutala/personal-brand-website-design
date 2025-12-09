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
  </u-container>
</template>
