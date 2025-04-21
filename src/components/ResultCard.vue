<script setup lang="ts">
// @ts-ignore
import { userStore } from '../stores/userStore.js'
import { ref } from 'vue'

const cardEl = ref<HTMLElement | null>(null)
defineExpose({ cardEl }) // expose to parent

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
  class: [String, Object, Array], // Optional class support
  isCapturing: {
    type: Boolean,
    default: false
  }
})

function formatMoney(amount:number) {
  const absAmount = Math.abs(amount)

  if (absAmount >= 1_000_000) {
    return (amount / 1_000_000).toFixed(2) + 'M'
  }
  if (absAmount >= 1_000) {
    return (amount / 1_000).toFixed(2) + 'K'
  }
  return amount.toFixed(2)
}

const icon = new URL(`../assets/Result Cards/SVG/${props.name}.svg`, import.meta.url).href

function getCareerStatus(percent:number) {
  if (percent <= 35) return 'สู้ต่อไปนะ!'
  else if (percent <= 60) return 'ระดับหัวหน้า' 
  else if (percent <= 85) return 'ระดับผู้บริหาร'
  else return 'ระดับ CEO'
}

function getMoneyStatus(percent:number) {
  if (percent <= 0) return 'ผู้ยากไร้'
  else if (percent <= 100000) return 'กระเป๋าแบน' 
  else if (percent <= 1000000) return 'พออยู่พอกิน'
  else if (percent <= 5000000) return 'พอใช้ไม่เดือดร้อน'
  else if (percent <= 10000000) return 'ร่ำรวย'
  else return 'เศรษฐีท่านหนึ่ง'
}

function getHealthStatus(percent:number) {
  if (percent <= 20) return 'ร่างพัง'
  else if (percent <= 40) return 'ขึ้นบันไดยังหอบ' 
  else if (percent <= 60) return 'พอไหว ถ้าไม่วิ่ง'
  else if (percent <= 80) return 'แข็งแรงพอตัว'
  else return 'สดใสในทุกวัน'
}

function getSocialStatus(percent:number) {
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

<!-- <style scoped>
img {
  object-fit: contain; 
  width: 100%;
  height: auto;
}
</style> -->

<template>
  <div ref="cardEl" class="w-full flex flex-col gap-4 items-center">
  <div class="z-10 flex items-end justify-center text-center">
    <p class="whitespace-pre-line text-xl text-black font-prompt">
      {{  status.mode }}
    </p>
  </div>
  <!-- Result Icon -->
  <div class="flex justify-center items-center w-full">
    <!-- <div class="w-[60%]"> -->
      <div class="w-[230px]">
      <img :src="icon" class="w-full" />
    </div>
  </div>

  <!-- Result Text -->
  <div class="flex justify-center items-center">
    <p class="text-sm text-center text-black w-[90%] leading-snug">
      {{ text }}
    </p>
  </div>

  <!-- Status Icons -->
  <div class=" mx-auto grid grid-cols-2 gap-x-10 gap-y-6 text-black pl-4 mb-4">
    <!-- Career -->
    <div class="flex items-center gap-3">
      <img :src="career" class="w-[40px]" />
      <div class="flex flex-col">
        <span class="text-base font-semibold">{{ status.career }}%</span>
        <span class="whitespace-pre-line text-xs font-light">สถานะ<br/> {{ getCareerStatus(status.career) }}</span>
      </div>
    </div>

    <!-- Money -->
    <div class="flex items-center gap-3 pl-3">
      <img :src="money" class="w-[40px]" />
      <div class="flex flex-col">
        <span class="text-base font-semibold">{{ formatMoney(status.money) }}</span>
        <span class="text-xs font-light">สถานะ<br/> {{ getMoneyStatus(status.money) }}</span>
      </div>
    </div>

    <!-- Health -->
    <div class="flex items-center gap-3">
      <img :src="health" class="w-[40px]" />
      <div class="flex flex-col">
        <span class="text-base font-semibold">{{ status.health }}%</span>
        <span class="text-xs font-light">สถานะ<br/> {{ getHealthStatus(status.health) }}</span>
      </div>
    </div>

    <!-- Relationship -->
    <div class="flex items-center gap-3 pl-3">
      <img :src="relationship" class="w-[40px]" />
      <div class="flex flex-col">
        <span class="text-base font-semibold">{{ status.relationship }}%</span>
        <span class="text-xs font-light">สถานะ<br/> {{ getSocialStatus(status.relationship) }}</span>
      </div>
    </div>
  </div>
</div>
</template>
