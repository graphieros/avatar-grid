<script setup lang="ts">
import Avatar from "../components/atoms/Avatar.vue";
import { store } from "../store";
import avatarUtilsHd from "../utils/avatarUtilsHd";
import { computed, ref } from "vue";
import { Category, RGBAColor } from "../types";

const shapes = computed(() => {
  return store.state.maleCategoriesHd as Category[];
});

let faceSequence = ref("aaaaaaaaaaa");

function pickrandomShape(): void {
  let arr = [] as any;
  shapes.value.forEach((shape, i) => {
    const rand = Math.floor(Math.random() * shape.options!!.length);
    const thatShape = shape.options as any;
    arr.push(thatShape[rand][i]);
  });
  faceSequence.value = arr.join("");
}

function generateRandomColor(): string {
  let col = [];
  for (let i = 0; i < 3; i += 1) {
    col.push(Math.floor(Math.random() * 255));
  }
  return `rgb(${col[0]},${col[1]},${col[1]})`;
}

// write a function to generate random faces

function faceSwap() {
  setTimeout(() => {
    pickrandomShape();
    requestAnimationFrame(faceSwap);
  }, 3000);
}

requestAnimationFrame(faceSwap);
</script>

<template>
  <w-flex wrap class="align-center justify-center home">
    <w-flex class="xs12 md7 align-center justify-center">
      <Avatar
        :sequence="(avatarUtilsHd.getAvatar(`U|${faceSequence}|rgb(0,0,0)|${generateRandomColor()}|rgb(0,110,255)`) as string)"
        class="home-avatar"
        size="300"
        animate
      />
    </w-flex>
    <w-flex wrap class="title-wrapper xs12 md5 justify-space-evenly">
      <w-flex class="xs12 align-center justify-center">
        <h1 class="title white">avatarGrid</h1>
      </w-flex>
      <w-flex class="align-center justify-center">
        <h2 class="white">The ultimate pixelart avatar generator</h2>
      </w-flex>
      <w-flex class="xs12 align-start justify-center">
        <w-button :height="60" :width="200" round bg-color="blue" color="white">
          <h2>Create your own</h2>
        </w-button>
      </w-flex>
    </w-flex>
  </w-flex>
</template>

<style lang="scss" scoped>
.home {
  height: 100vh;
}

.title {
  font-size: 5rem;
}
.title-wrapper {
  background: rgb(31, 31, 31);
  height: 100%;
  position: relative;
  &::before {
    z-index: -1;
    content: "";
    display: block;
    position: absolute;
    height: 100%;
    width: 100%;
    background: rgba(0, 110, 255, 0.349);
    left: -40px;
    border-radius: 10%;
  }
}

@media screen and(max-width:600px) {
  .title {
    font-size: 3rem;
  }
}
</style>
