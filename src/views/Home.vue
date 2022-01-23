<script setup lang="ts">
import Avatar from "../components/atoms/Avatar.vue";
import { store } from "../store";
import avatarUtilsHd from "../utils/avatarUtilsHd";
import { computed, ref } from "vue";
import { Category } from "../types";
import list from "../assets/names/male.json";
import router from "../router";
import DarkModeSwitch from "../components/atoms/DarkModeSwitch.vue";

const shapes = computed(() => {
  return store.state.maleCategoriesHd as Category[];
});

let faceSequence = ref("abcdeaaaaaa");
let randomName = ref(list.names[Math.floor(Math.random() * list.names.length)]);

let isDarkMode = computed(() => {
  return store.state.isDarkMode;
});

const backgroundMode = computed(() => {
  if (isDarkMode.value) {
    return "dark";
  } else {
    return "light";
  }
});

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

function generateRandomName() {
  let rand = Math.floor(Math.random() * list.names.length);
  randomName.value = list.names[rand];
}

function goToAvatarGenerator() {
  router.push("/generator");
}

function faceSwap() {
  setTimeout(() => {
    pickrandomShape();
    generateRandomName();
    requestAnimationFrame(faceSwap);
  }, 3000);
}

requestAnimationFrame(faceSwap);
</script>

<template>
  <w-flex wrap :class="`align-center justify-center home ${backgroundMode}`">
    <w-flex wrap class="xs12 md7 align-center justify-center">
      <w-flex class="xs12 align-center justify-center">
        <Avatar
          :sequence="(avatarUtilsHd.getAvatar(`U|${faceSequence}|rgb(0,0,0)|${generateRandomColor()}|rgb(0,110,255)`) as string)"
          :class="isDarkMode ? 'home-avatar svg-dark' : 'home-avatar'"
          size="300"
          animate
        />
      </w-flex>
      <w-flex class="xs12 my5 align-center justify-center">
        <h3 :class="isDarkMode ? 'blue' : 'grey'">{{ randomName }}</h3>
      </w-flex>
    </w-flex>

    <div class="title-wrapper xs12 md5 justify-space-evenly">
      <DarkModeSwitch toggleClass="dark-mode-toggle" />

      <div class="title-inner-wrapper">
        <h1 class="title white">avatarGrid</h1>
        <h2 class="white">The ultimate pixelart avatar generator</h2>

        <a href="https://github.com/graphieros/avatar-grid" target="_blank">
          <w-button
            :height="60"
            :width="200"
            round
            outline
            color="blue"
            class="mt10 mx2"
          >
            <h2>Github Repo</h2>
          </w-button>
        </a>

        <w-button
          @click="goToAvatarGenerator()"
          :height="60"
          :width="200"
          round
          bg-color="blue"
          color="white"
          class="mt10 mx2"
        >
          <h2>Create your own</h2>
        </w-button>
      </div>
    </div>
  </w-flex>
</template>

<style lang="scss" scoped>
.home {
  height: 100vh;
}

.svg-dark {
  background: white;
}

.dark {
  background: rgb(31, 31, 31);
}

.title {
  font-size: 5rem;
}
.title-wrapper {
  align-items: center;
  background: rgb(31, 31, 31);
  display: flex;
  height: 100%;
  justify-items: space-evenly;
  position: relative;

  &::before {
    background: #5fa6e0;
    content: "";
    display: block;
    height: 100%;
    left: -20px;
    position: absolute;
    width: 100%;
    z-index: -1;
  }
}

.wave {
  height: 100%;
  left: -50px;
  position: absolute;
  top: 0;
}
.home-avatar {
  border-radius: 100%;
  padding: 20px;
}

.dark-mode-toggle {
  position: fixed;
  top: 50px;
}

@media screen and(max-width:600px) {
  .title-wrapper {
    height: 400px;
  }
  .title {
    font-size: 3rem;
  }
  .home-avatar {
    background: none;
    padding: none;
  }
}
</style>
