<script lang="ts" setup>
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

const appConfig = useAppConfig();
const localePath = useLocalePath();
const { locale } = useI18n();

const breakpoints = useBreakpoints(breakpointsTailwind);
const lgAndSmaller = breakpoints.smallerOrEqual("lg");

const { data: stacks } = await useAsyncData(
  () => {
    return queryCollection("content")
      .where(
        "path",
        "IN",
        ["frontend", "backend", "devops", "cicd-and-tests"].map(
          (slug) => `/${locale.value}/stacks/${slug}`,
        ),
      )
      .order("meta", "DESC")
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
            slug: link.meta.slug as string,
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
  <div>
    <!-- -->
    <div class="-mt-(--ui-header-height)">
      <div
        class="bg-black/10 dark:bg-white/10 min-h-screen flex flex-col relative"
      >
        <img
          :src="'/images/003.png'"
          :alt="appConfig.site.name"
          class="w-auto h-full transition-all max-h-[85%] object-cover object-top absolute bottom-0 left-[50%] translate-x-[-50%]"
        />

        <div class="mt-(--ui-header-height) relative">
          <div class="w-full md:w-[70%] lg:w-[50%] xl:w-[40%] hidden sm:block">
            <div class="p-5">
              <h1 class="text-2xl md:text-3xl font-bold font-geist-mono">
                {{ $t("page.index.title") }}
              </h1>
              <p class="mt-5 font-geist-mono text-[18px] hidden xl:block">
                {{ $t("page.index.description") }}
              </p>

              <div class="hidden xl:flex items-center gap-2 mt-16">
                <a
                  v-for="(social, s) in appConfig.socials"
                  :key="s"
                  :href="social"
                  target="_blank"
                  class="bg-black/5 dark:bg-white/5 text-black dark:text-white size-12 flex items-center justify-center backdrop-blur-sm"
                >
                  <u-icon
                    :name="`i-simple-icons-${s.split('.')[1]}`"
                    size="24"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-auto w-full">
          <div class="w-full xl:w-[50%] lg:w-[75%] ml-auto">
            <div class="hidden sm:block">
              <UPageGrid
                v-if="stacks"
                class="sm:grid-cols-1 lg:grid-cols-2 gap-1 mx-3 sm:mx-10 mb-10"
              >
                <UPageCard
                  v-for="link in stacks
                    .filter((s) =>
                      ['frontend', 'cicd-and-tests'].includes(s.slug),
                    )
                    .slice(0, 2)"
                  :key="link.to"
                  :ui="{
                    leadingIcon: 'size-16 text-neutral',
                    title: 'mt-5 text-xl',
                  }"
                  v-bind="link"
                  class="rounded-none backdrop-blur-sm"
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

            <div class="block sm:hidden relative p-5 backdrop-blur-xl">
              <h1 class="text-3xl text-black">
                {{ $t("page.index.title") }}
              </h1>

              <div class="flex items-center justify- gap-3 mt-5">
                <a
                  v-for="(social, s) in appConfig.socials"
                  :key="s"
                  :href="social"
                  target="_blank"
                  class="text-black flex items-center justify-center"
                >
                  <u-icon
                    :name="`i-simple-icons-${s.split('.')[1]}`"
                    size="24"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <u-container class="py-5">
    <div class="mt-5 block md:hidden">
      <u-page-grid class="gap-2 grid-cols-2">
        <UPageCard
          v-for="link in stacks"
          :key="link.to"
          :ui="{
            leadingIcon: 'size-7 text-neutral',
            title: 'text-',
          }"
          orientation="horizontal"
          variant="soft"
          v-bind="link"
          class="rounded-none backdrop-blur-sm"
        >
          <template #header>
            <div class="absolute top-5 right-5">
              <u-icon name="i-lucide-arrow-up-right" />
            </div>
          </template>
        </UPageCard>
      </u-page-grid>
    </div>

    <div class="mt-10 font-geist-mono text-[18px] block xl:hidden">
      <h2 class="text-3xl mb-2">About me</h2>
      <p>
        {{ $t("page.index.description") }}
      </p>
    </div>
  </u-container>
</template>
