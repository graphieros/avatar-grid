<script setup lang="ts">
import Home from "./views/Home.vue";
</script>

<template>
  <w-app id="app">
    <router-view />
  </w-app>
</template>

<style>
@font-face {
  font-family: title;
  src: url(./assets/fonts/SairaStencilOne-Regular.ttf);
}

.title {
  font-family: title;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
