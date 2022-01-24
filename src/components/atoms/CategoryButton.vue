<script setup lang="ts">
defineProps<{
  action: () => void;
  svgHeight: string;
  boxWidth: string;
  boxHeight: string;
  text: string;
}>();
</script>

<template>
  <w-button class="category-button" color="white" outline @click="action">
    <small class="category-name blue-light3"> {{ text }} </small><br />
    <svg
      class=""
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      baseProfile="full"
      :height="svgHeight"
      :viewBox="`0 0 ${boxWidth} ${boxHeight}`"
    >
      <slot></slot>
    </svg>
  </w-button>
</template>
<style lang="scss" scoped>
.category-button {
  height: 100%;
  outline: none;
  position: relative;
  width: 100%;
  svg {
    margin: 0 auto;
  }
  .category-name {
    bottom: 10px;
    position: absolute;
  }
}
</style>
