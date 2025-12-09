<script setup lang="ts">
const { locale } = useI18n();
const localePath = useLocalePath();
const route = useRoute();

const { data: page, pending } = await useAsyncData(
  () => `stack-${route.params.slug}`,
  () => {
    return queryCollection("content")
      .path(`/${locale.value}/stacks/${useRoute().params.slug}`)
      .first();
  },
  {
    async transform(content) {
      let links: { title: string; icon?: string; to: string }[] = [];

      if (content?.meta.links) {
        const _links = content.meta.links as string[];
        const { data } = await useAsyncData(Math.random().toString(), () =>
          queryCollection("content")
            .where(
              "path",
              "IN",
              _links.map((link) => `/${locale.value}/stacks/${link}`),
            )
            .all(),
        );

        links =
          data.value?.map((link) => {
            let icon: string | undefined;

            if (link.meta.mainStack) {
              icon = Stacks[link.meta.mainStack as "vue"]?.icon;
            } else if (link.meta.icon) {
              icon = link.meta.icon as string;
            }

            return {
              title: link.title,
              icon,
              to: localePath({
                name: "stack-slug",
                params: { slug: link.meta.slug },
              }),
            };
          }) || [];
      }

      return { content, links };
    },
  },
);

useSeoMeta({
  title: page.value?.content?.title,
  description: page.value?.content?.description,
  ogTitle: page.value?.content?.title,
  ogDescription: page.value?.content?.description,
});

const stack = computed(() => {
  return Stacks[page.value?.content?.meta.mainStack as "vue"];
});
</script>

<template>
  <div v-if="pending">loading...</div>
  <div
    v-else-if="page?.content"
    class="pb-16 pt-0 xl:max-w-[1150px] font-geist-mono mx-auto"
  >
    <div
      class="py-10 px-5 xl:mt-16 pt-16 xl:pt-10 light:bg-black/5 dark:bg-white/5"
    >
      <template v-if="stack">
        <div class="mb-5">
          <div class="flex items-center gap-3 mb-2">
            <u-icon :name="stack.icon" size="62" />
            <div class="text-4xl font-bold">{{ stack.name }}</div>
          </div>
          <ui-grade :grade="stack.grade" :size="12" />
        </div>
      </template>

      <div v-else-if="page.content.meta.icon" class="mb-3">
        <u-icon :name="page.content.meta.icon" size="68" />
      </div>

      <div class="text-2xl sm:text-[38px] leading-tight">
        {{ page.content.title }}
      </div>

      <div
        v-if="page.content.meta.subStacks"
        class="flex items-center justify-start flex-wrap gap-5 mt-7"
      >
        <template v-for="stack in page.content.meta.subStacks" :key="stack">
          <u-tooltip :text="Stacks[stack].name">
            <div>
              <u-icon :name="Stacks[stack].icon" size="28" />
              <div class="text-sm">
                {{ Stacks[stack].name }}
              </div>
              <ui-grade :grade="Stacks[stack].grade" :size="8" />
            </div>
          </u-tooltip>
        </template>
      </div>
    </div>

    <div class="p-5 mb-8">
      <ContentRenderer :value="page.content" class="text-[16px]" />

      <div class="mt-16">
        <UPageGrid
          class="sm:grid-cols-1! lg:grid-cols-2! xl:grid-cols-2! gap-4"
        >
          <UPageCard
            v-for="link in page.links"
            :key="link.to"
            :ui="{ leadingIcon: 'size-16 text-neutral', title: 'mt-5 text-xl' }"
            v-bind="link"
            class="rounded-none!"
            variant="soft"
          >
            <template #header>
              <div class="absolute top-5 right-5">
                <u-icon name="i-lucide-arrow-up-right" />
              </div>
            </template>
          </UPageCard>
        </UPageGrid>
      </div>
    </div>
  </div>
</template>
