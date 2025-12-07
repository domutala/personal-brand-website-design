<script lang="ts" setup>
const appConfig = useAppConfig();
</script>

<template>
  <div class="h-screen w-screen xl:flex">
    <div>
      <div
        class="u-header xl:w-[130px] xl:h-full h-[100px] w-full bg-default justify-center relative flex items-center xl:flex-col-reverse xl:py-5 px-5 xl:px-0"
      >
        <div class="brand font-bold text-3xl leading-none w-min">
          <div>
            {{ appConfig.firstName }}
          </div>
          <div>
            {{ appConfig.lastName }}
          </div>
        </div>

        <div class="m-auto"></div>

        <div class="font-bold underline">Menu</div>

        <!-- <UColorModeSwitch /> -->
      </div>
    </div>

    <div>
      <div
        class="xl:w-[calc(100vh-130px)] xl:h-full h-[502px] bg-black/7 dark:bg-white/5 flex flex-col justify-end"
      >
        <img
          srcki="https://i.pinimg.com/1200x/91/82/b9/9182b99d9fd44c2694e907975db12de1.jpg"
          :src="'/images/001.png'"
          :alt="appConfig.site.name"
          class="w-full max-h-[90%] object-cover object-top grayscale"
        />
      </div>
    </div>

    <div>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni aspernatur
      officia laboriosam necessitatibus nam accusamus, temporibus inventore!
      Quaerat maiores reprehenderit facere a dolores magnam iure, possimus
      accusantium ipsum tenetur praesentium?
    </div>
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
