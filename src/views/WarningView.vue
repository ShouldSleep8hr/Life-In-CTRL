<script setup lang="ts">
import SvgButton from '../components/SvgButton.vue'

import { useRouter } from 'vue-router'

const router = useRouter()

// Function to handle the button click
function handleButtonClick() {
  router.push('/intro')
}
const title = 'Content\nWarning'
const bg = new URL(`../assets/Background/Title.svg`, import.meta.url).href
const list_1 = `เกมนี้นำเสนอความไม่แน่นอนและผลกระทบจากการตัดสินใจ
การเลือกบางอย่างอาจนำไปสู่เหตุการณ์ที่ไม่คาดคิด ซึ่งเป็นส่วนหนึ่งของแนวคิดเกี่ยวกับความไม่แน่นอนของชีวิต
ไม่มี "ทางเลือกที่ถูกต้องที่สุด" ทุกการตัดสินใจมีผลกระทบทั้งด้านดีและด้านลบ`

const listItems_1 = list_1.split('\n')

const list_2 = `หากรู้สึกไม่สบายใจระหว่างเล่น คุณสามารถหยุดพักหรือออกจากเกมได้ตลอดเวลา
  หากคุณเคยมีประสบการณ์ด้านสุขภาพจิตหรือ ภาวะซึมเศร้า โปรดเล่นเกมด้วยความระมัดระวัง และขอคำแนะนำจากผู้เชี่ยวชาญหากเนื้อหาในเกม ส่งผลต่ออารมณ์ของคุณ`

const listItems_2 = list_2.split('\n')

const warning = new URL(`../assets/Icons/SVG/Icon_Info.svg`, import.meta.url).href
const recommend = new URL(`../assets/Icons/SVG/Icon_Action_Study.svg`, import.meta.url).href
</script>

<template>
  <main class="h-full flex items-center justify-center w-full">
    <!-- Phone wrapper to limit height -->
    <div class="w-full max-w-[440px] max-h-[99vh] aspect-[440/956]">
      <!-- Phone container -->
      <div
        class="relative w-full h-full rounded-xl shadow-lg bg-no-repeat bg-center bg-cover"
        :style="{ backgroundImage: `url(${bg})` }"
      >
        <!-- Overlay covers whole background -->
        <div class="absolute inset-0 bg-white opacity-80 rounded-xl z-0"></div>

        <!-- Scrollable content wrapper ABOVE overlay -->
        <div class="relative flex flex-col justify-between p-4 gap-4 h-full overflow-y-auto z-10">
          <!-- Title page -->
          <div class="z-10 flex flex-col items-center justify-start mb-1 gap-y-1.5">
            <div class="w-[15%]">
              <img class="w-full" :src="warning" />
            </div>
            <p class="whitespace-pre-line text-2xl text-black font-prompt font-bold">{{ title }}</p>
          </div>
          <!-- Text -->
          <div class="z-10 flex flex-col items-center justify-center">
            <div class="w-[90%] flex flex-col">
              <div class="flex flex-col items-center justify-star mb-10 gap-y-3">
                <p class="whitespace-pre-line text-sm text-black font-prompt font-light text-left">
                  เกมนี้ได้รับการออกแบบมาเพื่อจำลองสถานการณ์ในชีวิตจริง
                  และนำเสนอผลลัพธ์ของการตัดสินใจในมิติต่าง ๆ
                  โดยอาจมีเนื้อหาที่ส่งผลกระทบต่ออารมณ์และความรู้สึก ของผู้เล่น
                  โปรดพิจารณาเนื้อหาต่อไปนี้ก่อนเล่น
                </p>
                <ul
                  class="list-disc list-outside pl-5 text-sm text-black font-prompt font-light space-y-1"
                >
                  <li v-for="(item, index) in listItems_1" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>

              <div class="flex flex-col items-start justify-center mb-6 gap-y-3">
                <div class="z-10 flex items-center justify-start gap-x-1.5">
                  <div class="w-[10%]">
                    <img class="w-full" :src="recommend" />
                  </div>
                  <p class="text-base text-black font-prompt font-semibold text-left">
                    คำแนะนำสำหรับผู้เล่น
                  </p>
                </div>

                <p class="whitespace-pre-line text-sm text-black font-prompt font-light text-left">
                  โปรดใช้วิจารณญาณในการเล่น นี่คือเกมที่สะท้อนแนวคิดเกี่ยวกับชีวิต
                  ไม่ใช่การทำนายอนาคตและอย่าลืมว่าทุกการตัดสินใจในเกม
                  ไม่ได้สะท้อนคุณค่าในชีวิตจริงของคุณ
                </p>
                <ul
                  class="list-disc list-outside pl-5 text-sm text-black font-prompt font-light space-y-1"
                >
                  <li v-for="(item, index) in listItems_2" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="flex items-center justify-center mb-6">
                <p
                  class="whitespace-pre-line text-xs text-black font-prompt font-light text-center"
                >
                  หากคุณหรือคนรอบข้างกำลังเผชิญกับความเครียด ความกดดัน หรือภาวะซึมเศร้า
                  โปรดอย่าลังเลที่จะขอความช่วยเหลือจากผู้เชี่ยวชาญ หรือโทรหาสายด่วนสุขภาพจิต 1323
                  (ประเทศไทย)
                </p>
              </div>
            </div>
          </div>
          <!-- Buttons at bottom -->
          <div class="h-[10rem] flex items-center justify-center">
          <div class="w-[80%] flex items-center justify-center h-full">
            <SvgButton name="Button_Green_Active" :text="'รับทราบ'" @click="handleButtonClick" />
          </div>
        </div>
        </div>
      </div>
    </div>
  </main>
</template>
