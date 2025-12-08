<script lang="ts" setup>
const appConfig = useAppConfig();
const showAbout = ref(false);
</script>

<template>
  <div class="xl:h-screen w-full xl:flex">
    <div class="hidden xl:block">
      <div
        class="u-header xl:w-[130px] xl:h-full h-[100px] w-full bg-default justify-center relative flex items-center xl:flex-col-reverse xl:py-5 px-5 xl:px-0"
      >
        <div class="brand font-bold text-3xl leading-[0.85] w-min">
          <div>
            {{ appConfig.firstName }}
          </div>
          <div>
            {{ appConfig.lastName }}
          </div>
        </div>

        <div class="m-auto"></div>

        <div class="font-bold underline cursor-pointer text-lg">Menu</div>
      </div>
    </div>

    <div class="sticky top-0">
      <div
        class="transition-all xl:w-[calc(100vh-130px)] xl:h-full h-[502px] bg-black/7 dark:bg-white/5 flex flex-col justify-end relative"
        :class="{
          'xl:w-[442px]!': showAbout,
        }"
      >
        <div
          class="xl:h-full absolute xl:relative bottom-10 xl:bottom-[unset] left-10 xl:left-[unset] z-20 xl:block transition-all"
        >
          <!-- flex flex-col justify-end items-end pb-5 -->
          <div
            class="z-10 xl:absolute transition-all"
            :class="{
              'right-6 bottom-5 xl:translate-x-0 max-w-[70%]': showAbout,
              '-bottom-[300px] right-0 xl:translate-x-[calc(100%-179px)]':
                !showAbout,
            }"
          >
            <div
              class="text-default font-black leading-[0.85] text-5xl xl:text-8xl transition-all"
              :class="{ 'xl:text-6xl!': showAbout }"
            >
              <div class="flex items-end gap-2 relative">
                <div
                  v-html="$t('page.index.title').replaceAll('/br', '<br />')"
                ></div>
                <div
                  v-if="showAbout"
                  class="text- text-xl mb-1 cursor-pointer absolute bottom-0 left-full whitespace-nowrap text-primary"
                  variant="ghost"
                  @click="showAbout = !showAbout"
                >
                  [
                  <span class="text-default">
                    {{ showAbout ? "ESC" : "+" }}
                  </span>
                  ]
                  <!-- <u-icon name="i-lucide-plus" class="text-default" /> -->
                </div>
              </div>
            </div>
            <div class="font-black text-xl mt-1">
              {{ $t("profile") }}
            </div>
          </div>
        </div>

        <img
          srcki="https://i.pinimg.com/1200x/91/82/b9/9182b99d9fd44c2694e907975db12de1.jpg"
          :src="'/images/001.png'"
          :alt="appConfig.site.name"
          :class="{
            'xl:h-4/6!': showAbout,
          }"
          class="w-full h-full transition-all max-h-[90%] object-cover object-top grayscale"
        />
      </div>
    </div>

    <div class="w-full hidden 2xl:block">
      <div
        class="w-[90%] mx-auto transition-all"
        :class="{
          'xl:max-w-[992px] pt-32': showAbout,
          'xl:max-w-[882px] xl:pt-[470px]': !showAbout,
        }"
      >
        <AppResume />
        <button @click="showAbout = !showAbout">about</button>
      </div>
    </div>
  </div>

  <div class="py-16 2xl:hidden">
    <AppResume />
  </div>

  <div class="fixed bottom-[50px] right-[50px] hidden md:flex flex-col gap-7">
    <a
      v-for="(social, s) in appConfig.socials"
      :key="s"
      :href="social"
      target="_blank"
    >
      <u-icon :name="`i-simple-icons-${s.split('.')[1]}`" size="24" />
    </a>
  </div>
</template>

<style lang="scss">
.u-header {
  .brand {
    @media (width >= 80rem) {
      writing-mode: vertical-rl;
      rotate: 180deg;
    }
  }
}
</style>
