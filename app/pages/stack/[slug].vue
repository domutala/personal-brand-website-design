<script setup lang="ts">
const { locale } = useI18n();

const { data: page } = await useAsyncData(() =>
  queryCollection("content")
    .path(`/${locale.value}/stacks/${useRoute().params.slug}`)
    .first(),
);

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description,
  ogTitle: page.value?.title,
  ogDescription: page.value?.description,
});

const stack = computed(() => {
  return Stacks[page.value?.meta.mainStack as "vue"];
});
</script>

<template>
  <u-container v-if="page" class="py-16">
    <div class="rounded- border-accented mb-5 overflow-hidden font-geist-mono">
      <div class="p-10 bg-neutral-500/10">
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

        <div class="text-[38px] leading-tight">
          {{ page.title }}
        </div>

        <div
          v-if="page.meta.subStacks"
          class="flex items-center justify-start flex-wrap gap-5 mt-7"
        >
          <template v-for="stack in page.meta.subStacks" :key="stack">
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

      <div class="p-8 mb-8 font-geist-mono text-[16px]">
        <ContentRenderer :value="page" />
      </div>
    </div>
  </u-container>
</template>
