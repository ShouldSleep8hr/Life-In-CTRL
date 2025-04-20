<script setup>
import { defineAsyncComponent } from 'vue'
import SvgButton from './SvgButton.vue'
// @ts-ignore
import { userStore } from '../stores/userStore.js'
import { useRouter } from 'vue-router'

const router = useRouter()

const status = userStore()

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true, // Text will be passed from the parent view
  },
})

function formatMoney(amount) {
  const absAmount = Math.abs(amount)

  if (absAmount >= 1_000_000) {
    return (amount / 1_000_000).toFixed(2) + 'M'
  }
  if (absAmount >= 1_000) {
    return (amount / 1_000).toFixed(2) + 'K'
  }
  return amount.toFixed(2)
}

// const icon = defineAsyncComponent(() => import(`../assets/Result Cards/SVG/${props.name}.svg`))
const icon = new URL(`../assets/Result Cards/SVG/${props.name}.svg`, import.meta.url).href

function handleButtonClick() {
  status.resetStatus()
  router.push('/')
}
const bg = new URL(`../assets/Background/Title.svg`, import.meta.url).href

function getCareerStatus(percent) {
  if (percent <= 35) return 'สู้ต่อไปนะ!'
  else if (percent <= 60) return 'ระดับหัวหน้า' 
  else if (percent <= 85) return 'ระดับผู้บริหาร'
  else return 'ระดับ CEO'
}

function getMoneyStatus(percent) {
  if (percent <= 0) return 'ผู้ยากไร้'
  else if (percent <= 100000) return 'กระเป๋าแบน' 
  else if (percent <= 1000000) return 'พออยู่พอกิน'
  else if (percent <= 5000000) return 'พอใช้ไม่เดือดร้อน'
  else if (percent <= 10000000) return 'ร่ำรวย'
  else return 'เศรษฐีท่านหนึ่ง'
}

function getHealthStatus(percent) {
  if (percent <= 20) return 'ร่างพัง'
  else if (percent <= 40) return 'ขึ้นบันไดยังหอบ' 
  else if (percent <= 60) return 'พอไหว ถ้าไม่วิ่ง'
  else if (percent <= 80) return 'แข็งแรงพอตัว'
  else return 'สดใสในทุกวัน'
}

function getSocialStatus(percent) {
  if (percent <= 20) return 'มีเพื่อนในจินตนาการ'
  else if (percent <= 40) return 'ทักแล้วแต่ยังไม่ตอบ' 
  else if (percent <= 60) return 'ไม่เหงา'
  else if (percent <= 80) return 'มีคนที่ไว้ใจได้'
  else return 'รักล้อมรอบตัว'
}

const career = new URL('../assets/Icons/SVG/Icon_Career.svg', import.meta.url).href
const money = new URL('../assets/Icons/SVG/Icon_Money.svg', import.meta.url).href
const health = new URL('../assets/Icons/SVG/Icon_Health.svg', import.meta.url).href
const relationship = new URL('../assets/Icons/SVG/Icon_Relationship.svg', import.meta.url).href

</script>

<template>
  <main class="h-full flex items-center justify-center w-full">
    <!-- Phone wrapper -->
    <div class="w-full max-w-[440px] max-h-[99vh] aspect-[440/956]">
      <!-- Phone container -->
      <div
        class="relative w-full h-full rounded-xl shadow-lg bg-no-repeat bg-center bg-cover font-prompt"
        :style="{ backgroundImage: `url(${bg})` }"
      >
        <!-- Overlay covers whole background -->
        <div class="absolute inset-0 bg-white opacity-50 rounded-xl z-0"></div>
        <!-- Scrollable content wrapper ABOVE overlay -->
        <div class="relative flex flex-col justify-between p-4 gap-8 h-full overflow-y-auto z-10">
        <!-- Title page -->
        <div class="z-10 flex items-center justify-center text-center mt-7">
          <p class="whitespace-pre-line text-2xl text-black font-prompt font-bold">
            ผลลัพธ์ของคุณ
          </p>
        </div>
        <div class="z-10 flex items-end justify-center text-center">
          <p class="whitespace-pre-line text-xl text-black font-prompt">
            {{  status.mode }}
          </p>
        </div>
        <!-- Result Icon -->
        <div class="flex justify-center items-center w-full">
          <div class="w-[60%]">
            <img :src="icon" />
          </div>
        </div>

        <!-- Result Text -->
        <div class="flex justify-center items-center">
          <p class="text-sm text-center text-black w-[90%] leading-snug">
            {{ text }}
          </p>
        </div>

        <!-- Status Icons -->
        <div class="w-full mx-auto grid grid-cols-2 gap-y-8 text-black pl-12">
          <!-- Career -->
          <div class="flex items-center gap-3">
            <img :src="career" class="w-10 h-10" />
            <div class="flex flex-col">
              <span class="text-base font-semibold">{{ status.career }}%</span>
              <span class="whitespace-pre-line text-xs font-light">สถานะ<br/> {{ getCareerStatus(status.career) }}</span>
            </div>
          </div>

          <!-- Money -->
          <div class="flex items-center gap-3 pl-3">
            <img :src="money" class="w-10 h-10" />
            <div class="flex flex-col">
              <span class="text-base font-semibold">{{ formatMoney(status.money) }}</span>
              <span class="text-xs font-light">สถานะ<br/> {{ getMoneyStatus(status.money) }}</span>
            </div>
          </div>

          <!-- Health -->
          <div class="flex items-center gap-3">
            <img :src="health" class="w-10 h-10" />
            <div class="flex flex-col">
              <span class="text-base font-semibold">{{ status.health }}%</span>
              <span class="text-xs font-light">สถานะ<br/> {{ getHealthStatus(status.health) }}</span>
            </div>
          </div>

          <!-- Relationship -->
          <div class="flex items-center gap-3 pl-3">
            <img :src="relationship" class="w-10 h-10" />
            <div class="flex flex-col">
              <span class="text-base font-semibold">{{ status.relationship }}%</span>
              <span class="text-xs font-light">สถานะ<br/> {{ getSocialStatus(status.relationship) }}</span>
            </div>
          </div>
        </div>

        <!-- Buttons -->
        <div class="flex flex-col w-[80%] mx-auto space-y-2 mb-12">
          <div class="flex gap-3 ">
            <SvgButton class="flex-1" name="Button_GreenS_Active" text="บันทึกภาพ" />
            <SvgButton class="flex-1" name="Button_GreenS_Active" text="แชร์" />
          </div>
          <SvgButton
            name="Button_Red_Active"
            text="เล่นอีกครั้ง"
            @click="handleButtonClick()"
          />
        </div>
      </div>
    </div>
  </div>
  </main>
</template>
