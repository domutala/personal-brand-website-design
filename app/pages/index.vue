<script lang="ts" setup>
const appConfig = useAppConfig();
const showAbout = ref(false);
</script>

<template>
  <div class="h-screen w-screen xl:flex">
    <div>
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

    <div>
      <div
        class="transition-all xl:w-[calc(100vh-130px)] xl:h-full h-[502px] bg-black/7 dark:bg-white/5 flex flex-col justify-end relative"
        :class="{
          'xl:w-[442px]!': showAbout,
        }"
      >
        <div class="h-full relative transition-all hidden xl:block">
          <!-- flex flex-col justify-end items-end pb-5 -->
          <div
            class="z-10 absolute transition-all"
            :class="{
              'right-0 bottom-5 translate-x-0': showAbout,
              '-bottom-[300px] right-0 translate-x-[calc(100%-120px)]':
                !showAbout,
            }"
          >
            <div
              class="text-default font-black leading-[0.85] text-8xl transition-all"
              :class="{ 'text-8xl!': showAbout }"
            >
              <div>
                {{ appConfig.firstName }}
              </div>
              <div class="flex items-end gap-2 relative">
                {{ appConfig.lastName }}

                <div
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
              {{ appConfig.profil }}
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

    <div></div>
  </div>

  <div class="fixed bottom-[50px] right-[50px] flex flex-col gap-7">
    <a
      v-for="(social, s) in appConfig.socials"
      :key="s"
      :href="social"
      target="_blank"
    >
      <u-icon :name="`i-simple-icons-${s.split('.')[1]}`" size="24" />
    </a>
  </div>

  <div class="fixed top-[30px] right-[50px] z-20">
    <UColorModeSelect class="rounded-full" />
    <!-- <UColorModeButton /> -->
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
