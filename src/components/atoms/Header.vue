<script setup lang="ts">
import router from "../../router";
import DarkModeSwitch from "./DarkModeSwitch.vue";
import Avatar from "./Avatar.vue";
import avatarUtilsHd from "../../utils/avatarUtilsHd";
import { store } from "../../store";
import { computed } from "vue";

const userAvatar = computed(() => {
  return store.state.userAvatar;
});

function goHome() {
  router.push("/");
}
</script>

<template>
  <header class="header">
    <DarkModeSwitch toggleClass="header-switch" />
    <h1 @click="goHome()" class="title white ml5 mt1">avatarGrid</h1>
    <Avatar
      :sequence="(avatarUtilsHd.getAvatar(`U|${userAvatar}|rgb(0,0,0)|rgb(255,0,0)|rgb(255,0,0)`) as string)"
      class="avatar-small"
      size="40"
    />
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

.avatar-small {
  background: white;
  border-radius: 100%;
  margin-top: 10px;
  margin-left: 5px;
}
</style>
