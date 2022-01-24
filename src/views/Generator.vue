<script setup lang="ts">
import { store } from "../store/index";
import { computed } from "vue";
import Header from "../components/atoms/Header.vue";
import Selector from "../components/molecules/Selector.vue";

const isDarkMode = computed<boolean>(() => {
  return store.state.isDarkMode;
});
</script>

<template>
  <Header />
  <div :class="isDarkMode ? 'generator dark' : 'generator'">
    <Selector />
  </div>
</template>

<style lang="scss" scoped>
.generator {
  margin-top: 60px;
  height: calc(100vh - 60px);
}

.dark {
  background: rgb(46, 46, 46);
  color: rgb(192, 192, 192);
}
</style>
