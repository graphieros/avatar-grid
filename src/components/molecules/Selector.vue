<script setup lang="ts">
import { computed, ref } from "vue";
import { store } from "../../store";
import Accessories from "../shapes/Accessories.vue";
import Brows from "../shapes/Brows.vue";
import Ears from "../shapes/Ears.vue";
import Eyes from "../shapes/Eyes.vue";
import Hair from "../shapes/Hair.vue";
import Lines from "../shapes/Lines.vue";
import Mouth from "../shapes/Mouth.vue";
import Neck from "../shapes/Neck.vue";
import Nose from "../shapes/Nose.vue";
import Shape from "../shapes/Shape.vue";
import Stache from "../shapes/Stache.vue";
import CategoryButton from "../atoms/CategoryButton.vue";
import { Category } from "../../types";
import Avatar from "../atoms/Avatar.vue";
import avatarUtilsHd from "../../utils/avatarUtilsHd";

let isCategoryVisible = ref(false);
let userAvatarSequence = ref<string>("aaaaaaaaaaaa");
let isResetRequested = ref(false);
let mockDownload = ref<HTMLAnchorElement>();

function closeDrawer() {
  isCategoryVisible.value = !isCategoryVisible.value;
}

let selectedCategory = ref<Category>({
  name: "",
  options: [],
  index: 0,
});

const categories = computed(() => {
  return store.state.maleCategoriesHd;
});

function showCategory(part: string) {
  isCategoryVisible.value = !isCategoryVisible.value;

  const category = categories.value.filter((cat: { name: string }) => {
    return cat.name === part;
  })[0];

  selectedCategory.value = category;
}

function setUserChosenSequence(sequence: string) {
  store.commit("SET_USER_AVATAR", sequence);
}

function selectOption(option: string, index: number): void {
  let splitUserSequence = userAvatarSequence.value.split("");
  let splitOption = option.split("");
  splitUserSequence[index] = splitOption[index];
  userAvatarSequence.value = splitUserSequence.join("");

  setUserChosenSequence(userAvatarSequence.value);
  closeDrawer();
}

const userAvatar = computed(() => {
  return store.state.userAvatar;
});

function capitalize(title: string): string {
  let text = title;
  if (title === "lines") {
    text = "wrinkles";
  }
  return text.charAt(0).toUpperCase() + text.substring(1);
}

function resetAvatar(): void {
  userAvatarSequence.value = "aaaaaaaaaaaa";
  store.commit("SET_USER_AVATAR", userAvatarSequence.value);
  isResetRequested.value = false;
}

function triggerDownload(imgURI: string): void {
  const fakeDownload = mockDownload.value as HTMLAnchorElement;
  if (fakeDownload) {
    const evt = new MouseEvent("click", {
      view: window,
      bubbles: false,
      cancelable: true,
    });

    fakeDownload?.setAttribute("download", "avatar.png");
    fakeDownload?.setAttribute("href", imgURI);
    fakeDownload?.setAttribute("target", "_blank");

    fakeDownload?.dispatchEvent(evt);
  }
}

function downloadAvatar(): void {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d");
  let data = "";
  data = new XMLSerializer().serializeToString(
    document.getElementById("avatarResult") as Node
  );
  const DOMURL = window.URL || window.webkitURL || window;

  const img = new Image();
  const svgBlob = new Blob([data], { type: "image/svg+xml;charset=utf-8" });
  const url = DOMURL.createObjectURL(svgBlob);

  img.onload = () => {
    ctx?.drawImage(img, 0, 0);
    const imgData = ctx?.getImageData(
      0,
      0,
      canvas.width,
      canvas.height
    ) as ImageData;

    const data = imgData?.data || [];
    for (let i = 0; i < data.length; i += 4) {
      if (data[i + 3] < 255) {
        data[i] = 255;
        data[i + 1] = 255;
        data[i + 2] = 255;
        data[i + 3] = 255;
      }
    }

    ctx?.putImageData(imgData, 0, 0);
    DOMURL.revokeObjectURL(url);

    const imgURI = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");

    triggerDownload(imgURI);
    ctx?.clearRect(0, 0, canvas.width, canvas.height);
  };

  img.src = url;
}
</script>

<template>
  <w-flex wrap>
    <w-flex wrap class="xs12 md8">
      <w-flex class="xs12 align-center justify-center">
        <Avatar
          :sequence="(avatarUtilsHd.getAvatar(`U|${userAvatar}|rgb(0,0,0)|rgb(255,0,0)|rgb(255,0,0)`) as string)"
          class="avatar-result"
          size="400"
          id="avatarResult"
        />
      </w-flex>
      <w-flex class="xs12 my5 align-center justify-center">
        <w-button
          @click="isResetRequested = !isResetRequested"
          color="blue"
          xl
          outline
          round
        >
          <w-icon class="mr2">mdi mdi-recycle</w-icon>Reset
        </w-button>
      </w-flex>
    </w-flex>

    <!-- ADD A RESET BUTTON -->

    <w-flex class="xs12 md4">
      <div class="category-wrapper">
        <CategoryButton
          :action="() => showCategory('props')"
          svgHeight="25"
          boxWidth="11"
          boxHeight="5"
          text="Accessories"
        >
          <Accessories fill="white" />
        </CategoryButton>
        <CategoryButton
          :action="() => showCategory('brows')"
          svgHeight="20"
          boxWidth="7"
          boxHeight="4"
          text="Brows"
        >
          <Brows fill="white" />
        </CategoryButton>
        <CategoryButton
          :action="() => showCategory('ears')"
          svgHeight="40"
          boxWidth="5"
          boxHeight="6"
          text="Ears"
        >
          <Ears fill="white" />
        </CategoryButton>
        <CategoryButton
          :action="() => showCategory('eyes')"
          svgHeight="25"
          boxWidth="8"
          boxHeight="4"
          text="Eyes"
        >
          <Eyes fill="white" />
        </CategoryButton>
        <CategoryButton
          :action="() => showCategory('hairs')"
          svgHeight="40"
          boxWidth="6"
          boxHeight="8"
          text="Hair"
        >
          <Hair fill="white" />
        </CategoryButton>
        <CategoryButton
          :action="() => showCategory('lines')"
          svgHeight="40"
          boxWidth="6"
          boxHeight="8"
          text="Wrinkles"
        >
          <Lines fill="white" />
        </CategoryButton>
        <CategoryButton
          :action="() => showCategory('mouths')"
          svgHeight="35"
          boxWidth="6"
          boxHeight="5"
          text="Mouths"
        >
          <Mouth fill="white" />
        </CategoryButton>
        <CategoryButton
          :action="() => showCategory('necks')"
          svgHeight="40"
          boxWidth="5"
          boxHeight="5"
          text="Necks"
        >
          <Neck fill="white" />
        </CategoryButton>
        <CategoryButton
          :action="() => showCategory('noses')"
          svgHeight="40"
          boxWidth="6"
          boxHeight="4"
          text="Noses"
        >
          <Nose fill="white" />
        </CategoryButton>
        <CategoryButton
          :action="() => showCategory('shapes')"
          svgHeight="40"
          boxWidth="6"
          boxHeight="7"
          text="Shapes"
        >
          <Shape fill="white" />
        </CategoryButton>
        <CategoryButton
          :action="() => showCategory('staches')"
          svgHeight="40"
          boxWidth="13"
          boxHeight="7"
          text="Staches"
        >
          <Stache fill="white" />
        </CategoryButton>
        <w-button
          @click="downloadAvatar()"
          height="50px"
          round
          bg-color="blue"
          color="white"
        >
          <h3 class="white">Download Avatar !</h3>
        </w-button>
      </div>
    </w-flex>
  </w-flex>

  <w-drawer v-model="isCategoryVisible" right>
    <div class="avatar-option-grid">
      <w-flex class="category-name justify-space-between">
        <h1 class="blue-light3">
          {{ capitalize(selectedCategory.name as string) }}
        </h1>

        <w-button
          @click="closeDrawer()"
          icon="mdi mdi-close"
          bg-color="blue"
          color="white"
        ></w-button>
      </w-flex>
      <div
        class="avatar-option-wrapper"
        v-for="(option, i) in selectedCategory.options"
        :key="`option_${i}`"
      >
        <w-button
          height="100%"
          class="option-button"
          @click="() => selectOption(option, Number(selectedCategory.index))"
          >)
          <Avatar
            :sequence="(avatarUtilsHd.getAvatar(`U|${option}|rgb(0,0,0)|rgb(255,0,0)|rgb(255,0,0)`) as string)"
            class="avatar-option"
            size="200"
          />
        </w-button>
      </div>
    </div>
  </w-drawer>

  <!-- RESET REQUEST MODAL -->

  <w-dialog v-model="isResetRequested" width="400">
    <w-card bg-color="error">
      <h4 align="left">
        This will reset your avatar, your changes will be lost.
      </h4>
      <w-flex class="justify-space-between align-center mt5">
        <w-button
          color="white"
          outline
          round
          xl
          @click="isResetRequested = !isResetRequested"
          ><w-icon class="mr1">mdi mdi-close</w-icon>CANCEL</w-button
        >
        <w-button bg-color="red-dark4" round xl @click="resetAvatar()"
          ><w-icon class="mr1">mdi mdi-recycle</w-icon>RESET</w-button
        >
      </w-flex>
    </w-card>
  </w-dialog>

  <!-- INVISIBLE CANVAS & ANCHOR TAG  FOR DOWNLOAD -->
  <canvas height="400" width="400" id="canvas" style="display: none"></canvas>
  <a ref="mockDownload" style="display: none"></a>
</template>

<style lang="scss" scoped>
.category-wrapper {
  background: rgb(31, 31, 31);
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(6, 1fr);
  height: calc(100vh - 60px);
  padding: 10px;
  width: 100%;
}

svg {
  width: 100%;
}

.avatar-option-grid {
  background: rgb(31, 31, 31);
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  overflow-y: scroll;
  padding: 10px;
}
.category-name {
  grid-column: span 2;
}
.option-button {
  background: white;
  width: 100% !important;
}

.avatar-result {
  background: white;
  border-radius: 3px;
  max-width: 400px;
  padding: 20px;
  width: 100%;
}
</style>
