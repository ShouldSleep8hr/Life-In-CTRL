<script setup lang="ts">
import SvgButton from '../components/SvgButton.vue'
import Salary from '../components/Salary.vue'
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

const allSalary = [
  // High Income
  {
    card: 'Card_Sil_Active',
    cardSelected: 'Card_Sil_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Income_High.svg', import.meta.url).href,
    title: 'รายได้สูง (Easy)',
    text: '30,000 Baht',
    amount: 30000,
    mode: 'Easy Mode',
  },
  // Average Income
  {
    card: 'Card_Sil_Active',
    cardSelected: 'Card_Sil_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Income_Average.svg', import.meta.url).href,
    title: 'รายได้ปานกลาง (Normal)',
    text: '18,000 Baht',
    amount: 18000,
    mode: 'Normal Mode',
  },
  // Low Income
  {
    card: 'Card_Sil_Active',
    cardSelected: 'Card_Sil_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Income_Min.svg', import.meta.url).href,
    title: 'รายได้เริ่มต้น (Hard)',
    text: '12,000 Baht',
    amount: 12000,
    mode: 'Hard Mode',
  },
]

// Function to handle the button click
function handleButtonClick() {
  if (selectedCardIndex.value !== null) {
    const selected = allSalary[selectedCardIndex.value]
    // status.money = selected.amount // change to start at 0
    status.salary = selected.amount
    status.mode = selected.mode

    if (status.mode === 'Hard Mode') {
      status.eat = 72000 // 6,000 * 12
      status.transport = 24000 // 2,000 * 12
    }
    else if (status.mode === 'Normal Mode') {
      status.eat = 96000 // 8,000 * 12
      status.transport = 42000 // 3,500 * 12
    }
    else if (status.mode === 'Easy Mode') {
      status.eat = 120000 // 10,000 * 12
      status.transport = 60000 // 5,000 * 12
    }

    // Then navigate or continue logic
    router.push('/start')
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
          <p class="text-2xl text-black font-prompt font-bold">Life Setup</p>
          <p class="text-sm text-black font-prompt font-light">คุณภาพชีวิตที่คุณเลือกได้เอง</p>
        </div>
        <!-- Topic -->
        <div class="z-10 h-[4rem] flex items-end justify-center">
          <div class="w-[87%]">
            <p class="text-lg text-black font-prompt font-semibold">รายได้ต่อเดือน</p>
            <p class="text-sm text-black font-prompt font-light">เลือกเงินเดือนที่ต้องการ</p>
          </div>
        </div>
        <!-- Salary Cards -->
        <div class="flex flex-col items-center justify-center space-y-2">
          <Salary
            v-for="(salary, index) in allSalary"
            :key="index"
            :card="salary.card"
            :cardSelected="salary.cardSelected"
            :icon="salary.icon"
            :title="salary.title"
            :text="salary.text"
            :selected="selectedCardIndex === index"
            @select-action="() => selectCard(index)"
          />
        </div>
        <!-- Buttons at bottom -->
        <div class="h-[10rem] flex items-center justify-center">
          <div class="w-[80%]">
            <SvgButton
              name="Button_Green_Active"
              disabledName="Button_Grey"
              :disabled="selectedCardIndex === null"
              :text="'ถัดไป'"
              @click="handleButtonClick"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
