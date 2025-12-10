<script lang="ts" setup>
import { kebabCase } from "scule";

definePageMeta({
  layout: "blog",
});

const { locale } = useI18n();
const localePath = useLocalePath();
const route = useRoute();

const linkPages = ref<{ title: string; icon?: string; to: string }[]>();
const { data: page } = await useAsyncData(kebabCase(route.path), () =>
  queryCollection("content")
    .path(`/${locale.value}/stacks/${useRoute().params.slug}`)
    .first(),
);

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not founddd",
    fatal: true,
  });
}

useSeoMeta({
  title: page.value.title,
  description: page.value.description,
  ogTitle: page.value.title,
  ogDescription: page.value.description,
});

const stack = computed(() => {
  return Stacks[page.value?.meta.mainStack as "vue"];
});

const subStacks = computed(() => {
  if (!page.value) return;

  const subs = page.value.meta.subStacks as string[];

  return Object.values(Stacks).filter((stack) => subs.includes(stack.code));
});

watch(() => page.value, getLinkPages, { immediate: true });
async function getLinkPages() {
  linkPages.value = undefined;
  if (page.value?.meta.links) {
    const _links = page.value.meta.links as string[];
    const { data } = await useAsyncData(Math.random().toString(), () =>
      queryCollection("content")
        .where(
          "path",
          "IN",
          _links.map((link) => `/${locale.value}/stacks/${link}`),
        )
        .all(),
    );

    linkPages.value = data.value?.map((link) => {
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
    });
  }
}
</script>

<template>
  <UPage v-if="page">
    <UPageBody>
      <div class="py-10 px-5 light:bg-black/3 dark:bg-white/3">
        <template v-if="stack">
          <div class="mb-5">
            <div class="flex items-center gap-3 mb-2">
              <u-icon :name="stack.icon" size="62" />
              <div class="text-4xl font-bold">{{ stack.name }}</div>
            </div>
            <ui-grade :grade="stack.grade" :size="12" />
          </div>
        </template>

        <div v-else-if="page.meta.icon" class="mb-3">
          <u-icon :name="page.meta.icon" size="68" />
        </div>

        <div class="text-2xl sm:text-[38px] leading-tight">
          {{ page.title }}
        </div>

        <div
          v-if="subStacks"
          class="flex items-center justify-start flex-wrap gap-5 mt-7"
        >
          <template v-for="stack in subStacks" :key="stack.code">
            <u-tooltip :text="stack.name">
              <div>
                <u-icon :name="stack.icon" size="28" />
                <div class="text-sm">
                  {{ stack.name }}
                </div>
                <ui-grade :grade="stack.grade" :size="8" />
              </div>
            </u-tooltip>
          </template>
        </div>
      </div>

      <ContentRenderer :value="page" class="text-[16px]" />

      <div class="mt-16" v-if="linkPages">
        <UPageGrid
          class="sm:grid-cols-1! lg:grid-cols-2! xl:grid-cols-2! gap-2"
        >
          <UPageCard
            v-for="link in linkPages"
            :key="link.to"
            :ui="{
              leadingIcon: 'size-16 text-neutral',
              title: 'mt-5 text-xl',
            }"
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
    </UPageBody>

    <template #right>
      <UContentToc
        :links="page.body.toc?.links"
        :title="$t('words.on_this_page')"
        color="neutral"
        highlight
        highlight-color="neutral"
      >
        <template #leading>
          <u-icon name="i-lucide-text" size="20" />
        </template>
      </UContentToc>
    </template>
  </UPage>
</template>
