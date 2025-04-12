<script setup lang="ts">
import SvgButton from '../components/SvgButton.vue'
import Residence from '../components/Residence.vue'
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

const fyi = new URL('../assets/Icons/SVG/Icon_Info.svg', import.meta.url).href

const allResidence = [
  // Home
  {
    card: 'Card_SilL_Active',
    icon: 'Icon_Res_House',
    title: 'Live with Family',
    text: 'ไม่เสียเงิน แต่เสียสุขภาพจิต',
    icon_1: 'Health',
    arrow_1: 'Down',
    text_1: 'Health -5',
    icon_2: 'Relationship',
    arrow_2: 'Up',
    text_2: 'Relationship +5',
    type: 'home',
  },
  // Condo
  {
    card: 'Card_SilL_Active',
    icon: 'Icon_Res_Condo',
    title: 'Rent a condo',
    text: 'เสียเงินเพื่อความเป็นส่วนตัว',
    icon_1: 'Health',
    arrow_1: 'Up',
    text_1: 'Health +5',
    icon_2: 'Relationship',
    arrow_2: 'Down',
    text_2: 'Relationship -5',
    icon_3: 'Money',
    arrow_3: 'Down',
    text_3: 'Money -5',
    type: 'condo,',
  },
]

// Function to handle the button click
function handleButtonClick() {
  if (selectedCardIndex.value !== null) {
    const selected = allResidence[selectedCardIndex.value]
    status.residence = selected.type

    // Then navigate or continue logic
    router.push('/action')
  }
}

const title = 'This is\nYour Life'
</script>

<template>
  <main class="h-full flex items-center justify-center bg-gray-100 w-full">
    <!-- Phone wrapper to limit height -->
    <div class="w-full max-w-[440px] max-h-[99vh] aspect-[440/956]">
      <!-- Phone container -->
      <div class="w-full h-full bg-white rounded-xl shadow-lg flex flex-col justify-between p-4">
        <!-- Title page -->
        <div class="flex-1 flex flex-col items-center justify-center text-center space-y-2 pt-12">
          <p class="whitespace-pre-line text-2xl text-black font-prompt font-bold">
            {{ title }}
          </p>
          <p class="text-sm text-black font-prompt font-light">This is your starting conditions</p>
        </div>
        <!-- Topic -->
        <div class="flex-1 flex items-end justify-center pb-6">
          <div class="w-[87%]">
            <p class="text-lg text-black font-prompt font-semibold">Starting Residence</p>
            <p class="text-sm text-black font-prompt font-light">Select initial residence</p>
          </div>
        </div>
        <!-- Residence Cards -->
        <div class="flex-1 flex flex-col items-center justify-center space-y-2">
          <Residence
            v-for="(residence, index) in allResidence"
            :key="index"
            :card="residence.card"
            :icon="residence.icon"
            :title="residence.title"
            :text="residence.text"
            :icon_1="residence.icon_1"
            :arrow_1="residence.arrow_1"
            :text_1="residence.text_1"
            :icon_2="residence.icon_2"
            :arrow_2="residence.arrow_2"
            :text_2="residence.text_2"
            :icon_3="residence.icon_3"
            :arrow_3="residence.arrow_3"
            :text_3="residence.text_3"
            :selected="selectedCardIndex === index"
            @select-action="() => selectCard(index)"
          />
        </div>
        <!-- fyi -->
        <div class="flex-1 flex items-center justify-start gap-x-2 pl-5">
          <div class="w-[10%]">
            <img class="w-full" :src="fyi" />
          </div>
          <p class="text-sm text-black font-prompt font-light">
            Stats will be apply at the end of each round
          </p>
        </div>
        <!-- Buttons at bottom -->
        <div class="flex-1 flex items-end justify-center mb-12">
          <div class="w-[80%]">
            <SvgButton
              name="Button_Green_Active"
              disabledName="Button_Grey"
              :disabled="selectedCardIndex === null"
              :text="'Start my life'"
              @click="handleButtonClick"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
