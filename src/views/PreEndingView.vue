<script setup lang="ts">
import SvgButton from '../components/SvgButton.vue'

import { useRouter } from 'vue-router'

const router = useRouter()

// Function to handle the button click
function handleButtonClick() {
  router.push('/result')
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

        <!-- Text -->
        <div class="z-10 flex-1 flex flex-col items-center justify-center mt-10">
          <div class="w-full flex flex-col text-sm text-black font-prompt font-light text-center">
            <div class="flex flex-col space-y-2 mb-10">
              <p>ก่อนที่คุณจะเห็นบทสรุปของชีวิตนี้...</p>
              <p>ขอให้คุณจำไว้ว่า สิ่งที่คุณกำลังจะเห็นไม่ใช่</p>
              <p>“คำตัดสิน”</p>
              <p>ไม่ใช่การบอกว่าคุณเลือกถูกหรือผิด</p>
              <p>ไม่ใช่แบบทดสอบว่าคุณเก่งพอหรือยัง</p>
              <p>มันคือเพียงเรื่องราวหนึ่งที่เกิดขึ้น</p>
              <p>จากการลองใช้ชีวิตผ่าน</p>
              <p>การตัดสินใจเล็ก ๆ หลายครั้ง</p>
              <p>ในโลกที่ปลอดภัยพอให้คุณผิดพลาดได้</p>
            </div>
            <div class="flex flex-col space-y-2">
              <p>ชีวิตจริงนั้นยืดหยุ่นกว่านี้ ซับซ้อนกว่านี้</p>
              <p>และให้อภัยได้เสมอ</p>
              <p>และไม่ว่าคุณ</p>
              <p>จะกำลังอยู่ตรงไหนของเส้นทาง</p>
              <p class="font-medium">ตราบใดที่ยังหายใจอยู่</p>
              <p class="font-medium">ก็ยังมีสิทธิ์เลือกใหม่ได้เสมอ</p>
            </div>
          </div>
        </div>
        <!-- Buttons at bottom -->
        <div class="h-[10rem] flex items-center justify-center">
          <div class="w-[80%] flex items-center justify-center h-full">
            <SvgButton name="Button_Green_Active" :text="'ดูผลลัพธ์ของคุณ'" @click="handleButtonClick" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
