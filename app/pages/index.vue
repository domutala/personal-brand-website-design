<script lang="ts" setup>
const appConfig = useAppConfig();
const localePath = useLocalePath();
const { locale } = useI18n();

const { data: stacks } = await useAsyncData(
  () => {
    return queryCollection("content")
      .where(
        "path",
        "IN",
        ["frontend"].map((slug) => `/${locale.value}/stacks/${slug}`),
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
            title: link.title,
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
</script>

<template>
  <div class="flex flex-col items-center justify-center relative bg-black/10">
    <img
      :src="'/images/003.png'"
      :alt="appConfig.site.name"
      class="w-auto h-full transition-all max-h-[80%] object-cover object-top absolute bottom-0 grayscale"
    />

    <u-page-grid
      class="relative max-w-[1900px] md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 min-h-screen w-full mx-auto"
    >
      <div>
        <div class="mt-16 sm:mt-32 px-5 sm:px-16 mr-0 sm:mr-16">
          <h1 class="text-xl sm:text-4xl lg:text-5xl font-bold font-geist-mono">
            {{ $t("page.index.title") }}
          </h1>
          <p class="mt-5 font-geist-mono text-[18px] hidden lg:block">
            {{ $t("page.index.description") }}
          </p>

          <div class="flex items-center gap-2 mt-7">
            <a
              v-for="(social, s) in appConfig.socials"
              :key="s"
              :href="social"
              target="_blank"
              class="bg-black/10 dark:bg-white/10 text-black dark:text-white size-12 flex items-center justify-center backdrop-blur-sm"
            >
              <u-icon :name="`i-simple-icons-${s.split('.')[1]}`" size="24" />
            </a>
          </div>
        </div>
      </div>

      <div class="flex items-end">
        <div class="mb-16 px-5 sm:px-16">
          <UPageGrid
            v-if="stacks"
            class="sm:grid-cols-1! lg:grid-cols-2! xl:grid-cols-2! gap-2"
          >
            <UPageCard
              v-for="link in stacks.slice(0, 1)"
              :key="link.to"
              :ui="{
                leadingIcon: 'size-16 text-neutral',
                title: 'mt-5 text-xl',
              }"
              v-bind="link"
              spotlight
              spotlight-color="neutral"
              class="rounded-none backdrop-blur-sm"
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
    </u-page-grid>
  </div>

  <u-container class="py-5">
    <p class="mt-5 font-geist-mono text-[18px] block lg:hidden">
      {{ $t("page.index.description") }}
    </p>
  </u-container>
</template>

<style lang="scss">
.oblique-box {
  width: 250px;
  background: currentColor;
  position: relative;
}

.oblique-box::before {
  content: "";
  position: absolute;
  top: -40px;
  left: 0;
  width: 0;
  height: 0;
  border-left: 250px solid transparent;
  border-bottom: 40px solid currentColor;
}

.u-header {
  .brand {
    @media (width >= 80rem) {
      writing-mode: vertical-rl;
      rotate: 180deg;
    }
  }
}
</style>
