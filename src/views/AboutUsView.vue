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
          <div class="w-[90%] flex flex-col space-y-6">
            <p class="whitespace-pre-line text-sm text-black font-prompt font-light text-center">
              <b
                class="whitespace-pre-line text-sm text-black font-prompt font-semibold text-center"
                >"Life in Ctrl"</b
              ><br />
              คือเกมจำลองชีวิตที่เปิดพื้นที่ให้คุณได้ลองเลือกเส้นทางของตัวเอง ไม่ใช่เพื่อหาคำตอบที่
              ‘ถูกต้องที่สุด’ แต่เพื่อเข้าใจว่าในชีวิตจริงนั้น ไม่มีใครใช้ชีวิตผิด
              เพียงแค่ใช้ชีวิตต่างกัน
            </p>
            <p class="whitespace-pre-line text-sm text-black font-prompt font-light text-center">
              คุณจะได้ตัดสินใจในทุก ๆ 5 ปีของชีวิต บริหารเวลา งาน เงิน สุขภาพ และความสัมพันธ์
              ภายใต้ข้อจำกัดที่ทุกคนต้องเผชิญ เพื่อดูว่าชีวิตของคุณจะออกมาเป็นแบบไหน
              และต้องแลกอะไรมาบ้าง
            </p>
            <p class="whitespace-pre-line text-sm text-black font-prompt font-light text-center">
              เกมนี้เป็นส่วนหนึ่งของปริญญานิพนธ์ของนิสิตชั้นปีที่ 4 คณะนิเทศศาสตร์
              จุฬาลงกรณ์มหาวิทยาลัย โดยสร้างขึ้นจากความเชื่อที่ว่า
            </p>
            <p class="whitespace-pre-line text-sm text-black font-prompt font-semibold text-center">
              “ชีวิตคือการเลือก และทุกทางเลือกมีราคาที่ต้องจ่าย แต่ไม่ว่าคุณจะเลือกทางไหน
              ตราบใดที่ยังหายใจ ก็ยังมีสิทธิ์เลือกใหม่ได้เสมอ”
            </p>
            <p class="whitespace-pre-line text-sm text-black font-prompt font-light text-center">
              ไม่มีตอนจบที่ดีที่สุด แค่อยากให้คุณได้ลอง เลือก ล้ม เรียนรู้
              และอาจให้อภัยตัวเองมากขึ้น ในพื้นที่ที่ปลอดภัยพอสำหรับความไม่สมบูรณ์แบบ
            </p>
          </div>
        </div>
        <!-- Buttons at bottom -->
        <div class="h-[10rem] flex items-center justify-center">
          <div class="w-[80%] flex items-center justify-center h-full">
            <SvgButton name="Button_Red_Active" :text="'ย้อนกลับ'" @click="handleButtonClick" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
