<script setup lang="ts">
defineProps<{
  fill: string;
}>();
</script>

<template>
  <g>
    <rect :fill="fill" x="3" y="4" height="1" width="1" />
    <rect :fill="fill" x="4" y="4" height="1" width="1" />
    <rect :fill="fill" x="5" y="4" height="1" width="1" />
    <rect :fill="fill" x="6" y="4" height="1" width="1" />
    <rect :fill="fill" x="7" y="4" height="1" width="1" />
    <rect :fill="fill" x="8" y="4" height="1" width="1" />
    <rect :fill="fill" x="9" y="4" height="1" width="1" />

    <rect :fill="fill" x="2" y="3" height="1" width="1" />
    <rect :fill="fill" x="3" y="3" height="1" width="1" />
    <rect :fill="fill" x="4" y="3" height="1" width="1" />
    <rect :fill="fill" x="5" y="3" height="1" width="1" />
    <rect :fill="fill" x="6" y="3" height="1" width="1" />
    <rect :fill="fill" x="7" y="3" height="1" width="1" />
    <rect :fill="fill" x="8" y="3" height="1" width="1" />
    <rect :fill="fill" x="9" y="3" height="1" width="1" />
    <rect :fill="fill" x="10" y="3" height="1" width="1" />

    <rect :fill="fill" x="1" y="2" height="1" width="1" />
    <rect :fill="fill" x="11" y="2" height="1" width="1" />

    <rect :fill="fill" x="1" y="1" height="1" width="1" />
    <rect :fill="fill" x="11" y="1" height="1" width="1" />

    <rect :fill="fill" x="2" y="0" height="1" width="1" />
    <rect :fill="fill" x="10" y="0" height="1" width="1" />

    <rect :fill="fill" x="3" y="1" height="1" width="1" />
    <rect :fill="fill" x="9" y="1" height="1" width="1" />
  </g>
</template>
