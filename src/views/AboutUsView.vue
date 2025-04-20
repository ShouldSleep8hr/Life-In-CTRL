<script setup lang="ts">
import SvgButton from '../components/SvgButton.vue'

import { useRouter } from 'vue-router'

const router = useRouter()

// Function to handle the button click
function handleButtonClick() {
  router.push('/')
}
const bg = new URL(`../assets/Background/Title.svg`, import.meta.url).href
</script>

<template>
  <main class="h-full flex items-center justify-center w-full">
    <!-- Phone wrapper to limit height -->
    <div class="w-full max-w-[440px] max-h-[99vh] aspect-[440/956]">
      <!-- Phone container -->
      <div
        class="relative w-full h-full rounded-xl shadow-lg flex flex-col justify-between p-4 gap-4 overflow-y-auto bg-no-repeat bg-center bg-cover"
        :style="{ backgroundImage: `url(${bg})` }"
      >
        <!-- Overlay to control background opacity -->
        <div class="absolute inset-0 bg-white opacity-80 rounded-xl z-0"></div>
        <!-- Title page -->
        <div class="z-10 h-[10rem] flex items-center justify-center text-center">
          <p class="text-2xl text-black font-prompt font-bold">About Us</p>
        </div>
        <!-- Text -->
        <div class="z-10 flex flex-col items-center justify-center">
          <div class="w-[90%] flex flex-col space-y-10">
            <p class="whitespace-pre-line text-sm text-black font-prompt font-bold text-center">
              Credit
            </p>
            <p class="whitespace-pre-line text-xs text-black font-prompt font-light text-center">
              <b class="whitespace-pre-line text-sm text-black font-prompt font-bold text-center">
                Project Owner & Game Designer<br/>
              </b>
              <b class="whitespace-pre-line text-sm text-black font-prompt font-semibold text-center">
                Natchaphan Assadonmingmit<br/>
              </b>
              natchaa.forwork@gmail.com <br/><br/>
              “Built from overthinking, 2AM existential crisis, and a lot of Ctrl+Z”
            </p>
            <p class="whitespace-pre-line text-xs text-black font-prompt font-light text-center">
              <b class="whitespace-pre-line text-sm text-black font-prompt font-bold text-center">
                Developer<br/>
              </b>
              <b class="whitespace-pre-line text-sm text-black font-prompt font-semibold text-center">
                Piraya Jangprai<br/>
              </b>
              pearanuban@gmail.com <br/><br/>
              "if it works, don’t touch it"
            </p>
            <p class="whitespace-pre-line text-xs text-black font-prompt font-light text-center">
              <b class="whitespace-pre-line text-sm text-black font-prompt font-bold text-center">
                Graphic Designer<br/>
              </b>
              <b class="whitespace-pre-line text-sm text-black font-prompt font-semibold text-center">
                Tanatorn Wanjeeravilai<br/>
              </b>
              Tanatorn.tw@gmail.com <br/><br/>
              “All Illustration are hand (mouse) drawn.
              No Stock, No Ai”
            </p>
            <p class="whitespace-pre-line text-[0.8rem] text-black font-prompt font-light text-center">
              โปรเจกต์นี้เป็นผลงานปริญญานิพนธ์ของ<br/>
              นางสาว ณัฐฌาพรรณ อัสดรมิ่งมิตร<br/>
              ภาควิชาวารสารสนเทศและสื่อใหม่ คณะนิเทศศาสตร์<br/>
              จุฬาลงกรณ์มหาวิทยาลัย<br/>
              ขอขอบคุณทีมงานและผู้เกี่ยวข้องทุกท่าน
            </p>
          </div>
        </div>
        <!-- Buttons at bottom -->
        <div class="h-[14rem] flex items-center justify-center">
          <div class="w-[80%] flex items-center justify-center h-full">
            <SvgButton name="Button_Red_Active" :text="'ย้อนกลับ'" @click="handleButtonClick" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
