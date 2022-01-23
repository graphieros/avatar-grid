<script setup lang="ts">
defineProps<{
  size: string;
  sequence: string;
  id?: string;
  animate?: boolean;
}>();
</script>

<template>
  <svg
    version="1.1"
    baseProfile="full"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 52 52"
    :height="size"
    :width="size"
    :id="id"
  >
    <g v-html="sequence" :class="animate ? 'animate' : ''" />
  </svg>
</template>

<style lang="scss">
.animate {
  rect {
    animation: fade 1.5s infinite alternate linear;
  }
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
