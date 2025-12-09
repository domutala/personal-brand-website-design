<script lang="ts" setup>
const appConfig = useAppConfig();
const showAbout = ref(false);

const items = [
  "https://picsum.photos/468/468?random=1",
  "https://picsum.photos/468/468?random=2",
  "https://picsum.photos/468/468?random=3",
  "https://picsum.photos/468/468?random=4",
  "https://picsum.photos/468/468?random=5",
  "https://picsum.photos/468/468?random=6",
];

const localePath = useLocalePath();
const { data: links, pending } = await useAsyncData(
  () => {
    return queryCollection("content").all();
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
  <div
    class="min-h-screen flex flex-col items-center justify-center relative bg-black/10"
  >
    <img
      srcki="https://i.pinimg.com/1200x/91/82/b9/9182b99d9fd44c2694e907975db12de1.jpg"
      :src="'/images/003.png'"
      :alt="appConfig.site.name"
      class="w-auto h-full transition-all max-h-[90%] object-cover object-top absolute bottom-0"
    />

    <u-page-grid
      class="relative max-w-[1900px] md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 min-h-screen w-full"
    >
      <div>
        <div class="mt-16 px-16">
          <!-- v-html="$t('page.index.title').replaceAll('/br', '<br />')" -->
          <h1 class="text-4xl font-bold font-geist-mono">
            Hello, I'm Senior Frontend Developer - Vue.js/Nuxt.js Specialist
          </h1>
          <p class="mt-5 font-geist-mono text-[18px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            voluptas inventore dicta error, ducimus neque porro. Ipsum, quo esse
            nostrum vel voluptatum repudiandae! Repellendus recusandae
            aspernatur eligendi vero labore velit.
          </p>

          <div class="flex items-center gap-2 mt-7">
            <a
              v-for="(social, s) in appConfig.socials"
              :key="s"
              :href="social"
              target="_blank"
              class="bg-black/10 dark:bg-white/10 size-12 flex items-center justify-center"
            >
              <u-icon :name="`i-simple-icons-${s.split('.')[1]}`" size="24" />
            </a>
          </div>
        </div>
      </div>

      <div class="flex items-end">
        <div class="mb-16 px-16">
          <UPageGrid
            v-if="links"
            class="de:grid-cols-1! lg:grid-cols-2! xl:grid-cols-2! gap-2"
          >
            <UPageCard
              v-for="link in links.slice(0, 2)"
              :key="link.to"
              :ui="{
                leadingIcon: 'size-16 text-neutral',
                title: 'mt-5 text-xl',
              }"
              v-bind="link"
              spotlight
              spotlight-color="neutral"
              class="rounded-none!"
            >
              <template #header>
                <div class="absolute top-5 right-5">
                  <u-icon name="i-lucide-arrow-up-right" />
                </div>
              </template>
            </UPageCard>
          </UPageGrid>
        </div>

        <!-- <UCarousel
          v-slot="{ item }"
          :items="items"
          :ui="{
            item: 'basis-[234]',
            dot: 'w-6 h-1',
          }"
          dots
        >
          <img :src="item" width="234" height="234" class="rounded-0" />
        </UCarousel> -->
      </div>
    </u-page-grid>
  </div>
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
