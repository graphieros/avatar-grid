<script setup lang="ts">
import Header from "../components/atoms/Header.vue";
import { store } from "../store/index";
import { computed } from "vue";

const isDarkMode = computed<boolean>(() => {
  return store.state.isDarkMode;
});
</script>

<template>
  <Header />
  <div :class="isDarkMode ? 'generator dark' : 'generator'">
    <!-- place avatar render on the left, and choices on the right -->
    <!-- find a cool way of clicking on an option and displaying the choices on right side drawer -->
    <!-- save image as a feature -->
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
