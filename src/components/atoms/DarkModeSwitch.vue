<script setup lang="ts">
import { computed } from "vue";
import { store } from "../../store";

defineProps<{
  toggleClass: string;
}>();

function toggleDarkMode() {
  store.commit("TOGGLE_DARK_MODE");
}

let isDarkMode = computed({
  get() {
    return store.state.isDarkMode;
  },
  set() {
    () => null;
  },
});
</script>

<template>
  <div :class="toggleClass">
    <label for="toggle" @click="toggleDarkMode">
      <w-icon :class="isDarkMode ? 'mx3 grey' : 'blue mx3'"
        >mdi mdi-weather-sunny</w-icon
      >
    </label>

    <w-switch
      name="toggle"
      @change="toggleDarkMode"
      color="blue"
      v-model="isDarkMode"
    ></w-switch>
    <label for="toggle" @click="toggleDarkMode">
      <w-icon :class="isDarkMode ? 'mx3 blue' : 'mx3 grey'"
        >mdi mdi-weather-night</w-icon
      >
    </label>
  </div>
</template>

<style lang="scss" scoped>
.dark-mode-toggle {
  position: fixed;
  top: 50px;
}
.header-switch {
  position: fixed;
  right: 20px;
  top: 20px;
}
</style>
