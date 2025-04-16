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
    cardSelected: 'Card_SilL_Pressed',
    icon: 'Icon_Res_House',
    title: 'Live with Family',
    text: 'ไม่เสียเงิน แต่เสียสุขภาพจิต',
    icon_1: 'Health',
    arrow_1: 'Down',
    text_1: 'สุขภาพ -5',
    icon_2: 'Relationship',
    arrow_2: 'Up',
    text_2: 'สังคม +5',
    type: 'home',
  },
  // Condo
  {
    card: 'Card_SilL_Active',
    cardSelected: 'Card_SilL_Pressed',
    icon: 'Icon_Res_Condo',
    title: 'Rent a condo',
    text: 'เสียเงินเพื่อความเป็นส่วนตัว',
    icon_1: 'Health',
    arrow_1: 'Up',
    text_1: 'สุขภาพ +5',
    icon_2: 'Relationship',
    arrow_2: 'Down',
    text_2: 'สังคม -5',
    icon_3: 'Money',
    arrow_3: 'Down',
    text_3: 'เงิน -10K',
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

const title = 'นี่คือ\nชีวิตของคุณ'
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
          <p class="whitespace-pre-line text-2xl text-black font-prompt font-bold">
            {{ title }}
          </p>
          <p class="text-sm text-black font-prompt font-light">คุณภาพชีวิตที่คุณเลือกได้เอง</p>
        </div>
        <!-- Topic -->
        <div class="z-10 h-[4rem] flex items-end justify-center">
          <div class="w-[87%]">
            <p class="text-lg text-black font-prompt font-semibold">ที่พักอาศัยเริ่มต้น</p>
            <p class="text-sm text-black font-prompt font-light">เลือกที่อยู่ของคุณ</p>
          </div>
        </div>
        <!-- Residence Cards -->
        <div class="flex flex-col items-center justify-center space-y-2">
          <Residence
            v-for="(residence, index) in allResidence"
            :key="index"
            :card="residence.card"
            :cardSelected="residence.cardSelected"
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
        <div class="z-10 h-[5rem] flex items-center justify-center gap-x-1.5">
          <div class="w-[10%]">
            <img class="w-full" :src="fyi" />
          </div>
          <p class="text-[0.8rem] text-black font-prompt font-light">
            ค่าต่าง ๆ จะถูกนำไปใช้ในตอนท้ายของแต่ละรอบ
          </p>
        </div>
        <!-- Buttons at bottom -->
        <div class="h-[10rem] flex items-center justify-center">
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
