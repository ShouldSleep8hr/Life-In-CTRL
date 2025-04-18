<script setup lang="ts">
import SvgButton from '../components/SvgButton.vue'
import InvestLottery from '../components/InvestLottery.vue'
import Status from '../components/Status.vue'
import { useRouter } from 'vue-router'
// @ts-ignore
import { userStore } from '../stores/userStore.js'

import { ref } from 'vue'

const selectedCardIndex = ref<number | null>(null)

function selectCard(index: number) {
  // Remove the previous selected amount (if any)
  if (selectedCardIndex.value !== null) {
    status.minus -= allLottery[selectedCardIndex.value].amount * 100
  }

  // Toggle selection
  if (selectedCardIndex.value === index) {
    selectedCardIndex.value = null
  } else {
    selectedCardIndex.value = index
    status.minus += allLottery[index].amount * 100
  }
}

const router = useRouter()

const status = userStore()

const allLottery = [
  {
    card: 'Card_Sil_Active',
    cardSelected: 'Card_Sil_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Ticket_1.svg', import.meta.url).href,
    title: '1 Ticket (100 Baht)',
    amount: -1,
  },
  {
    card: 'Card_Sil_Active',
    cardSelected: 'Card_Sil_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Ticket_5.svg', import.meta.url).href,
    title: '5 Tickets (500 Baht)',
    amount: -5,
  },
  {
    card: 'Card_Sil_Active',
    cardSelected: 'Card_Sil_Selected',    
    icon: new URL('../assets/Icons/SVG/Icon_Ticket_10.svg', import.meta.url).href,
    title: '10 Tickets\n(1,000 Baht)',
    amount: -10,
  },
  {
    card: 'Card_Sil_Active',
    cardSelected: 'Card_Sil_Selected',    
    icon: new URL('../assets/Icons/SVG/Icon_Ticket_50.svg', import.meta.url).href,
    title: '50 Tickets\n(5,000 Baht)',
    amount: -50,
  },
  {
    card: 'Card_Sil_Active',
    cardSelected: 'Card_Sil_Selected',    
    icon: new URL('../assets/Icons/SVG/Icon_Ticket_100.svg', import.meta.url).href,
    title: '100 Tickets\n(10,000 Baht)',
    amount: -100,
  },
]

function formatMoney(amount: number) {
  const absAmount = Math.abs(amount)

  if (absAmount >= 1_000_000) {
    return (amount / 1_000_000).toFixed(2) + 'M'
  }
  if (absAmount >= 1_000) {
    return (amount / 1_000).toFixed(2) + 'K'
  }
  return amount.toFixed(2)
}

function confirmSelection() {
  if (selectedCardIndex.value !== null) {
    const selected = allLottery[selectedCardIndex.value]
    const ticketAmount = selected.amount
    status.lottery = ticketAmount * 100

    // Then navigate or continue logic
    router.push('/action')
  }
}

function cancelSelection() {
  status.lottery = 0
  if (selectedCardIndex.value !== null) {
    status.minus -= allLottery[selectedCardIndex.value].amount
  }
  router.push('/action')
}

const bg = new URL(`../assets/Background/Title.svg`, import.meta.url).href
const money_icon = new URL(`../assets/Icons/SVG/Icon_Money.svg`, import.meta.url).href

</script>

<template>
  <main class="h-full flex items-center justify-center w-full">
    <!-- Phone wrapper -->
    <div class="w-full max-w-[440px] max-h-[99vh] aspect-[440/956]">
      <!-- Phone container -->
      <div
        class="relative w-full h-full rounded-xl shadow-lg bg-no-repeat bg-center bg-cover"
        :style="{ backgroundImage: `url(${bg})` }"
      >
        <!-- Overlay covers whole background -->
        <div class="absolute inset-0 bg-white opacity-50 rounded-xl z-0"></div>
        <!-- Scrollable content wrapper ABOVE overlay -->
        <div class="relative flex flex-col justify-between p-4 gap-4 h-full overflow-y-auto z-10">

        <!-- Status Bar -->
        <!-- <div class="flex items-center justify-center w-full">
          <div class="w-[90%]">
            <Status
              :text_career="status.career + '%'"
              :text_money="formatMoney(status.money)"
              :text_health="status.health + '%'"
              :text_relationship="status.relationship + '%'"
            />
          </div>
        </div> -->

        <!-- Money Status -->
        <div class="h-[5rem] w-[90%] flex items-center space-x-2 pl-3">
            <!-- Icon -->
            <div class="w-[15%] flex justify-center">
              <img :src="money_icon" class="w-full h-auto" />
            </div>

            <!-- Title with fixed height and wrap -->
            <div class="w-[75%] h-[2rem] flex items-center space-x-3">
              <p class="text-left text-lg font-prompt font-bold text-black leading-snug">
                {{ formatMoney(status.money) }}
              </p>
              <p class="text-left text-lg font-prompt font-bold leading-snug"
                :class="{
                    'text-green-500': status.minus > 0,
                    'text-red-500': status.minus < 0,
                    'text-gray-500': status.minus === 0
                  }"
              >
                <!-- Display the total money from selected actions -->
                ({{ formatMoney(status.minus) }})
              </p>
            </div>
          </div>

        <!-- Topic -->
        <div class="h-[4rem] flex flex-col items-start justify-end w-[80%] mx-auto">
          <p class="text-lg text-black font-prompt font-semibold">ซื้อหวย</p>
          <p class="text-sm text-black font-prompt font-light">เลือกจำนวนลอตเตอรี่ที่ต้องการซื้อ</p>
        </div>

        <!-- Invest Money -->
        <div class="flex-1 flex flex-col items-center justify-center space-y-2">
          <div class="w-[90%]">
            <InvestLottery
              v-for="(item, index) in allLottery"
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

        <!-- Confirm Button -->
        <div class="h-[10rem] flex items-start justify-center w-full">
          <div class="w-[80%] flex gap-3">
            <SvgButton name="Button_RedS_Active" text="ยกเลิก" @click="cancelSelection" />
            <SvgButton
              name="Button_GreenS_Active"
              disabledName="Button_GreyS"
              :disabled="selectedCardIndex === null"
              text="ยืนยัน"
              @click="confirmSelection"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  </main>
</template>
