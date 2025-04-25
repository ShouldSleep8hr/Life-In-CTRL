<script setup lang="ts">
import SvgButton from '../components/SvgButton.vue'
import InvestLottery from '@/components/InvestLottery.vue'
// @ts-ignore
import { userStore } from '../stores/userStore.js'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()

const status = userStore()

const selectedCardIndex = ref<number | null>(null)

function selectCard(index: number) {
  if (selectedCardIndex.value === index) {
    // Deselect if same card is clicked again (toggle off)
    selectedCardIndex.value = null
  } else {
    selectedCardIndex.value = index
  }
}

const allGoal = [
  {
    card: 'Card_Sil_Active',
    cardSelected: 'Card_Sil_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Career.svg', import.meta.url).href,
    title: 'ประสบความสำเร็จในหน้าที่การงาน',
  },
  {
    card: 'Card_Sil_Active',
    cardSelected: 'Card_Sil_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Money.svg', import.meta.url).href,
    title: 'มีอิสระทางการเงิน',
  },
  {
    card: 'Card_Sil_Active',
    cardSelected: 'Card_Sil_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Relationship.svg', import.meta.url).href,
    title: 'มีความสัมพันธ์ที่ดีและไม่โดดเดี่ยว',
  },
  {
    card: 'Card_Sil_Active',
    cardSelected: 'Card_Sil_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Health.svg', import.meta.url).href,
    title: 'มีสุขภาพกายและใจที่ดีในระยะยาว',
  },
  {
    card: 'Card_Sil_Active',
    cardSelected: 'Card_Sil_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Goal_Balance.svg', import.meta.url).href,
    title: 'มีชีวิตที่สมดุลในทุกด้าน',
  },
  {
    card: 'Card_Sil_Active',
    cardSelected: 'Card_Sil_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Goal_Live.svg', import.meta.url).href,
    title: 'ขอแค่ยังได้ใช้ชีวิตของตัวเองก็เพียงพอแล้ว',
  },
]

// Function to handle the button click
function handleButtonClick() {
  if (selectedCardIndex.value !== null) {
    const selected = allGoal[selectedCardIndex.value]
    status.goal = selected.title

    // Then navigate or continue logic
    router.push('/setup')
  }
}
const bg = new URL(`../assets/Background/Title.svg`, import.meta.url).href
</script>

<template>
  <main class="h-full flex items-center justify-center w-full">
    <!-- Phone wrapper to limit height -->
    <div class="w-full max-w-[440px] max-h-[99vh] aspect-[440/956]">
      <!-- Phone container -->
      <div
        class="relative w-full h-full rounded-xl shadow-lg flex flex-col justify-between p-4 space-y-2 bg-no-repeat bg-center bg-cover"
        :style="{ backgroundImage: `url(${bg})` }"
      >
        <!-- Overlay to control background opacity -->
        <div class="absolute inset-0 bg-white opacity-75 rounded-xl z-0"></div>
        <!-- Title page -->
        <div class="z-10 h-[10rem] flex flex-col items-center justify-center text-center space-y-2">
          <p class="text-2xl text-black font-prompt font-bold">Life Goal</p>
          <p class="text-sm text-black font-prompt font-light">เป้าหมายในชีวิตของคุณคืออะไร?</p>
        </div>
        <!-- Life Goal Cards -->
        <div class="flex flex-col items-center justify-center space-y-2">
          <div class="w-[90%]">
            <InvestLottery
              v-for="(item, index) in allGoal"
              :key="index"
              :card="item.card"
              :cardSelected="item.cardSelected"
              :icon="item.icon"
              :title="item.title"
              :selected="selectedCardIndex === index"
              @select-action="() => selectCard(index)"
            />
          </div>
        </div>
        <!-- Buttons at bottom -->
        <div class="h-[10rem] flex items-center justify-center">
          <div class="w-[80%]">
            <SvgButton
              name="Button_Green_Active"
              disabledName="Button_Grey"
              :disabled="selectedCardIndex === null"
              :text="'ยืนยัน'"
              @click="handleButtonClick"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
