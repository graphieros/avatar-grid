<script setup lang="ts">
import Header from "../components/atoms/Header.vue";
import Selector from "../components/molecules/Selector.vue";
import { computed } from "vue";
import { store } from "../store/index";

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
  height: calc(100vh - 60px);
  margin-top: 60px;
}

.dark {
  background: rgb(46, 46, 46);
  color: rgb(192, 192, 192);
}
</style>
