<script setup lang="ts">
import router from "../../router";
import DarkModeSwitch from "./DarkModeSwitch.vue";

function goHome() {
  router.push("/");
}
</script>

<template>
  <header class="header">
    <DarkModeSwitch toggleClass="header-switch" />
    <h1 @click="goHome()" class="title white ml5 mt1">avatarGrid</h1>
  </header>
</template>

<style lang="scss" scoped>
.header {
  z-index: 100;
  background: rgb(31, 31, 31);
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  width: 100%;
  display: flex;
  h1 {
    cursor: pointer;
  }
}
</style>
