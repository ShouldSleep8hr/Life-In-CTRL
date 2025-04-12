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
  if (selectedCardIndex.value === index) {
    // Deselect if same card is clicked again (toggle off)
    selectedCardIndex.value = null
  } else {
    selectedCardIndex.value = index
  }
}

const router = useRouter()

const status = userStore()

const allLottery = [
  {
    card: new URL('../assets/Cards/Card_Sil_Active.svg', import.meta.url).href,
    icon: new URL('../assets/Icons/SVG/Icon_Ticket_1.svg', import.meta.url).href,
    title: '1 Ticket (100 Baht)',
    amount: 1,
  },
  {
    card: new URL('../assets/Cards/Card_Sil_Active.svg', import.meta.url).href,
    icon: new URL('../assets/Icons/SVG/Icon_Ticket_5.svg', import.meta.url).href,
    title: '5 Tickets (500 Baht)',
    amount: 5,
  },
  {
    card: new URL('../assets/Cards/Card_Sil_Active.svg', import.meta.url).href,
    icon: new URL('../assets/Icons/SVG/Icon_Ticket_10.svg', import.meta.url).href,
    title: '10 Tickets\n(1,000 Baht)',
    amount: 10,
  },
  {
    card: new URL('../assets/Cards/Card_Sil_Active.svg', import.meta.url).href,
    icon: new URL('../assets/Icons/SVG/Icon_Ticket_50.svg', import.meta.url).href,
    title: '50 Tickets\n(5,000 Baht)',
    amount: 50,
  },
  {
    card: new URL('../assets/Cards/Card_Sil_Active.svg', import.meta.url).href,
    icon: new URL('../assets/Icons/SVG/Icon_Ticket_100.svg', import.meta.url).href,
    title: '100 Tickets\n(10,000 Baht)',
    amount: 100,
  },
]

function formatMoney(amount: number) {
  if (amount >= 1000000) {
    return amount / 1000000 + 'M'
  }
  if (amount >= 1000) {
    return amount / 1000 + 'K'
  }
  return amount
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
  router.push('/action')
}
</script>

<template>
  <main class="h-full flex items-center justify-center bg-gray-100 w-full">
    <!-- Phone wrapper -->
    <div class="w-full max-w-[440px] max-h-[99vh] aspect-[440/956]">
      <!-- Phone container -->
      <div
        class="w-full h-full bg-white rounded-xl shadow-lg flex flex-col p-4 gap-4 overflow-y-auto"
      >
        <!-- Status Bar -->
        <div class="flex items-center justify-center w-full">
          <div class="w-[90%]">
            <Status
              :text_career="status.career + '%'"
              :text_money="formatMoney(status.money)"
              :text_health="status.health + '%'"
              :text_relationship="status.relationship + '%'"
            />
          </div>
        </div>

        <!-- Topic -->
        <div class="h-[4rem] flex flex-col items-start justify-end w-[80%] mx-auto">
          <p class="text-lg text-black font-prompt font-semibold">Lottery</p>
          <p class="text-sm text-black font-prompt font-light">Select amount of lottery to buy</p>
        </div>

        <!-- Invest Money -->
        <div class="flex-1 flex flex-col items-center justify-center space-y-2">
          <div class="w-[90%]">
            <InvestLottery
              v-for="(item, index) in allLottery"
              :key="index"
              :card="item.card"
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
            <SvgButton name="Button_RedS_Active" text="Cancel" @click="cancelSelection" />
            <SvgButton
              name="Button_GreenS_Active"
              disabledName="Button_GreyS"
              :disabled="selectedCardIndex === null"
              text="Confirm"
              @click="confirmSelection"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
