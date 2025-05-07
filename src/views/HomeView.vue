<script setup lang="ts">
import SvgButton from '../components/SvgButton.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Function to handle the button click
const handleButtonClick = () => {
  router.push('/intro')
}
const aboutButtonClick = () => {
  router.push('/about-us')
}

const ig = new URL(`../assets/Icons/PNG/Icon_Instagram.png`, import.meta.url).href
const bg = new URL(`../assets/Background/Title_Full.svg`, import.meta.url).href
</script>

<template>
  <main class="h-full flex items-center justify-center w-full">
    <!-- Phone wrapper to limit height -->
    <div class="w-full max-w-[440px] max-h-[99vh] aspect-[440/956]">
      <!-- Phone container -->
      <div
        class="w-full h-full rounded-xl shadow-lg flex flex-col justify-between p-4 bg-no-repeat bg-center bg-contain"
        :style="{ 
          backgroundImage: `url(${bg})`,
          backgroundColor: '#f0eccc'
        }"
      >
        <!-- Filler to push content down -->
        <div class="flex-1"></div>

        <!-- Buttons -->
        <div class="h-[13rem] flex justify-center">
          <div class="flex flex-col items-center w-[80%] space-y-2">
            <SvgButton name="Button_Green_Active" text="เริ่มเกม" @click="handleButtonClick" />
            <SvgButton name="Button_Blue_Active" text="เกี่ยวกับเรา" @click="aboutButtonClick" />
          </div>
        </div>

        <!-- Credit -->
        <div class="flex flex-col justify-center">
          <div class="flex items-center justify-center mb-3 space-x-2">
            <div class="w-[7%]">
              <img class="w-full" :src="ig" />
            </div>
            <p class="text-[0.64rem] text-black font-prompt text-center">
              IG: lifeinctrl.proj
            </p>
          </div>
          <p class="text-[0.64rem] text-black font-prompt text-center -mt-2">
            Designed by someone who’s still figuring life out, just like you
          </p>
        </div>
      </div>
    </div>
  </main>
</template>
