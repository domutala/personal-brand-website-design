<script lang="ts" setup>
const route = useRoute();
const slug = computed(() => route.params.slug as string);
</script>

<template>
  <div>
    <ui-stack-page :key="slug?.toString()" />
  </div>
</template>
