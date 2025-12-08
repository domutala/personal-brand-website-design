<script lang="ts" setup>
defineProps({
  size: { type: Number, default: 10 },
  grade: { type: Number, required: true },
});
</script>

<template>
  <div class="flex gap-0.5">
    <div
      v-for="i in 5"
      :key="i"
      :style="{ width: `${size}px`, height: `${size}px` }"
      class="border border- rounded-full"
      :class="{
        'dark:bg-white light:bg-black': grade >= i,
        'bg-accented': grade < i,
      }"
    ></div>
  </div>
</template>
