<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
const localePath = useLocalePath();
const { locale } = useI18n();

const { data: stacks, pending } = await useAsyncData(
  () => {
    return queryCollection("content")
      .where(
        "path",
        "IN",
        ["frontend", "backend", "devops", "cicd-and-tests"].map(
          (slug) => `/${locale.value}/stacks/${slug}`,
        ),
      )
      .all();
  },
  {
    async transform(content) {
      // let links: { title: string; icon?: string; to: string }[] = [];

      const links =
        content.map((link) => {
          let icon: string | undefined;

          if (link.meta.mainStack) {
            icon = Stacks[link.meta.mainStack as "vue"]?.icon;
          } else if (link.meta.icon) {
            icon = link.meta.icon as string;
          }

          return {
            label: link.title,
            icon,
            to: localePath({
              name: "stack-slug",
              params: { slug: link.meta.slug },
            }),
          };
        }) || [];

      return links;
    },
  },
);

const items = ref<NavigationMenuItem[][]>([
  [
    // {
    //   label: "Mamadou",
    //   icon: "i-lucide-home",
    //   active: false,
    //   to: "/",
    // },
    {
      label: "Stacks",
      icon: "i-lucide-screen-share",
      children: [...(stacks.value || [])],
    },

    {
      label: "Blog",
      icon: "i-lucide-book-open",
    },

    // {
    //   label: "Composables",
    //   icon: "i-lucide-database",
    //   children: [
    //     {
    //       label: "defineShortcuts",
    //       icon: "i-lucide-file-text",
    //       description: "Define shortcuts for your application.",
    //       to: "/docs/composables/define-shortcuts",
    //     },
    //     {
    //       label: "useOverlay",
    //       icon: "i-lucide-file-text",
    //       description: "Display a modal/slideover within your application.",
    //       to: "/docs/composables/use-overlay",
    //     },
    //     {
    //       label: "useToast",
    //       icon: "i-lucide-file-text",
    //       description: "Display a toast within your application.",
    //       to: "/docs/composables/use-toast",
    //     },
    //   ],
    // },

    {
      label: "Discutons",
      icon: "i-lucide-message-square-text",
      to: "/discuss",
      active: false,
    },
  ],
  // [
  //   ...Object.keys(appConfig.socials).map((key) => ({
  //     target: "_blank",
  //     icon: `i-simple-icons-${key.split(".")[1]}`,
  //     to: appConfig.socials[key as "0.linkedin"],
  //     label: key.split(".")[1],
  //   })),
  // ],
]);
</script>

<template>
  <UHeader
    class="fixed w-full bg-transparent border-b-0"
    mode="slideover"
    :ui="{ container: 'max-w-full!' }"
  >
    <template #title>
      <div class="flex items-center gap-2">
        <img
          :src="'/images/004.png'"
          class="size-8 object-cover object-top rounded-full mb-auto ml-auto bg-black/10 dark:bg-white/10"
        />

        <div class="lg:hidden">Mamadou</div>
      </div>
    </template>

    <UNavigationMenu :items="items" />

    <template #right> </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
