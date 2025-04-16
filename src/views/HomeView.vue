<script setup lang="ts">
import SvgButton from '../components/SvgButton.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Function to handle the button click
const handleButtonClick = () => {
  router.push('/warning')
}
const aboutButtonClick = () => {
  router.push('/about')
}
// const icon = new URL(`../assets/Logo_V1/Logo_V1_Full.svg`, import.meta.url).href
const bg = new URL(`../assets/Background/Title_Full.svg`, import.meta.url).href
</script>

<template>
  <main class="h-full flex items-center justify-center w-full">
    <!-- Phone wrapper to limit height -->
    <div class="w-full max-w-[440px] max-h-[99vh] aspect-[440/956]">
      <!-- Phone container -->
      <div
        class="w-full h-full rounded-xl shadow-lg flex flex-col justify-between p-4 bg-no-repeat bg-center bg-cover"
        :style="{ backgroundImage: `url(${bg})` }"
      >
        <!-- Logo in center -->
        <!-- <div class="h-[30rem] flex items-end justify-center">
          <img :src="icon" alt="Logo" class="w-[55%] h-auto" />
        </div> -->

        <div class="h-[38rem] flex items-end justify-center">
          <div class="flex flex-col items-center w-[80%] space-y-2">
            <SvgButton name="Button_Green_Active" text="เริ่มเกม" @click="handleButtonClick" />
            <SvgButton name="Button_Red_Active" text="เกี่ยวกับเรา" @click="aboutButtonClick" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
