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
    card: new URL('../assets/Cards/Card_Sil_Active.svg', import.meta.url).href,
    icon: new URL('../assets/Icons/SVG/Icon_Income_High.svg', import.meta.url).href,
    title: 'High Income (Easy)',
    text: '30,000 Baht',
    amount: 30000,
  },
  // Average Income
  {
    card: new URL('../assets/Cards/Card_Sil_Active.svg', import.meta.url).href,
    icon: new URL('../assets/Icons/SVG/Icon_Income_Average.svg', import.meta.url).href,
    title: 'Average Income (Normal)',
    text: '15,000 Baht',
    amount: 15000,
  },
  // Low Income
  {
    card: new URL('../assets/Cards/Card_Sil_Active.svg', import.meta.url).href,
    icon: new URL('../assets/Icons/SVG/Icon_Income_Min.svg', import.meta.url).href,
    title: 'Low Income (Hard)',
    text: '9,000 Baht',
    amount: 9000,
  },
]

// Function to handle the button click
function handleButtonClick() {
  if (selectedCardIndex.value !== null) {
    const selected = allSalary[selectedCardIndex.value]
    status.money = selected.amount
    status.salary = selected.amount

    // Then navigate or continue logic
    router.push('/start')
  }
}
</script>

<template>
  <main class="h-full flex items-center justify-center bg-gray-100 w-full">
    <!-- Phone wrapper to limit height -->
    <div class="w-full max-w-[440px] max-h-[99vh] aspect-[440/956]">
      <!-- Phone container -->
      <div class="w-full h-full bg-white rounded-xl shadow-lg flex flex-col justify-between p-4">
        <!-- Title page -->
        <div class="flex-1 flex flex-col items-center justify-center text-center space-y-2 pt-12">
          <p class="text-2xl text-black font-prompt font-bold">Life Setup</p>
          <p class="text-sm text-black font-prompt font-light">Choose your starting conditions</p>
        </div>
        <!-- Topic -->
        <div class="flex-1 flex items-end justify-center pb-6">
          <div class="w-[87%]">
            <p class="text-lg text-black font-prompt font-semibold">Starting Salary</p>
            <p class="text-sm text-black font-prompt font-light">Select initial monthly income</p>
          </div>
        </div>
        <!-- Salary Cards -->
        <div class="flex-1 flex flex-col items-center justify-center space-y-2">
          <Salary
            v-for="(salary, index) in allSalary"
            :key="index"
            :card="salary.card"
            :icon="salary.icon"
            :title="salary.title"
            :text="salary.text"
            :selected="selectedCardIndex === index"
            @select-action="() => selectCard(index)"
          />
        </div>
        <!-- Buttons at bottom -->
        <div class="flex-1 flex items-end justify-center mb-12">
          <div class="w-[80%]">
            <SvgButton
              name="Button_Green_Active"
              disabledName="Button_Grey"
              :disabled="selectedCardIndex === null"
              :text="'Continue'"
              @click="handleButtonClick"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
