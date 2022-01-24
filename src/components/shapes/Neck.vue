<script setup lang="ts">
defineProps<{
  fill: string;
}>();
</script>

<template>
  <g>
    <rect :fill="fill" x="1" y="1" height="1" width="1" />
    <rect :fill="fill" x="1" y="2" height="1" width="1" />
    <rect :fill="fill" x="1" y="3" height="1" width="1" />
    <rect :fill="fill" x="3" y="1" height="1" width="1" />
    <rect :fill="fill" x="3" y="2" height="1" width="1" />
    <rect :fill="fill" x="3" y="3" height="1" width="1" />
  </g>
</template>
