<script setup lang="ts">
import SvgButton from '../components/SvgButton.vue'
import InvestLottery from '../components/InvestLottery.vue'
import Status from '../components/Status.vue'
import { useRouter } from 'vue-router'
// @ts-ignore
import { userStore } from '../stores/userStore.js'

import { ref } from 'vue'

const selectedCardIndex = ref<number | null>(null)

const router = useRouter()

const status = userStore()

function selectCard(index: number) {
  // Remove the previous selected amount (if any)
  if (selectedCardIndex.value !== null) {
    status.minus -= allInvest[selectedCardIndex.value].amount
  }

  // Toggle selection
  if (selectedCardIndex.value === index) {
    selectedCardIndex.value = null
  } else {
    selectedCardIndex.value = index
    status.minus += allInvest[index].amount
  }
}

const allInvest = [
  {
    card: 'Card_Sil_Active',
    cardSelected: 'Card_Sil_Selected',    
    icon: new URL('../assets/Icons/SVG/Icon_Money_1k.svg', import.meta.url).href,
    title: '1,000 Baht',
    amount: -1000,
  },
  {
    card: 'Card_Sil_Active',
    cardSelected: 'Card_Sil_Selected',    
    icon: new URL('../assets/Icons/SVG/Icon_Money_5k.svg', import.meta.url).href,
    title: '5,000 Baht',
    amount: -5000,
  },
  {
    card: 'Card_Sil_Active',
    cardSelected: 'Card_Sil_Selected',    
    icon: new URL('../assets/Icons/SVG/Icon_Money_10k.svg', import.meta.url).href,
    title: '10,000 Baht',
    amount: -10000,
  },
  {
    card: 'Card_Sil_Active',
    cardSelected: 'Card_Sil_Selected',    
    icon: new URL('../assets/Icons/SVG/Icon_Money_50k.svg', import.meta.url).href,
    title: '50,000 Baht',
    amount: -50000,
  },
  {
    card: 'Card_Sil_Active',
    cardSelected: 'Card_Sil_Selected',    
    icon: new URL('../assets/Icons/SVG/Icon_Money_100k.svg', import.meta.url).href,
    title: '100,000 Baht',
    amount: -100000,
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

function formatMoneyZero(amount: number) {
  const absAmount = Math.abs(amount)

  if (absAmount >= 1_000_000) {
    return (amount / 1_000_000).toFixed(0) + 'M'
  }
  if (absAmount >= 1_000) {
    return (amount / 1_000).toFixed(0) + 'K'
  }
  return amount.toFixed(0)
}

function confirmSelection() {
  if (selectedCardIndex.value !== null) {
    const selected = allInvest[selectedCardIndex.value]
    status.stock = selected.amount

    // Then navigate or continue logic
    router.push('/action')
  }
}

function cancelSelection() {
  status.stock = 0
  if (selectedCardIndex.value !== null) {
    status.minus -= allInvest[selectedCardIndex.value].amount
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
        <div class="h-[6rem] w-[90%] flex items-center space-x-1">
          <!-- Icon -->
          <div class="w-[18%] flex justify-center">
            <img :src="money_icon" class="w-full h-auto" />
          </div>

          <!-- Title with fixed height and wrap -->
          <div class="w-full flex items-start justify-start space-x-0 mt-3.5">
            <div class="flex flex-col w-[90%]">
              <p class="text-left text-xs  font-prompt font-normal text-black leading-snug">
                เงินเก็บ:
                <b class="text-left text-lg font-prompt font-bold text-black leading-snug">
                  {{ formatMoney(status.money) }}
                </b>
              </p>
              <p class="text-left text-xs font-prompt font-normal text-black leading-snug">
                รายได้รวม 5 ปี:
                <b class="text-left text-sm  font-prompt font-bold text-green-600 leading-snug">
                  {{ formatMoney(status.money + (status.salary * 60)) }}
                </b>
              </p>
            </div>
            <div class="flex flex-col pr-4">
              <div class="h-[1.5rem]"></div>
                <p class="w-[170%] text-left text-xs font-prompt font-normal font-boldleading-snug text-black">
                  <!-- Display the total money from selected actions -->
                  รายจ่ายรวม 5 ปี: 
                  <b class="text-left text-sm font-prompt font-bold font-boldleading-snug"
                    :class="{
                      'text-green-600': status.minus > 0,
                      'text-red-500': status.minus < 0,
                      'text-gray-500': status.minus === 0
                    }"
                  >
                    {{ formatMoney(status.minus) }}
                  </b>
                </p>
                <p class="w-[140%] text-left text-[0.5rem] font-prompt font-normal text-black leading-snug">
                  *ค่าใช้จ่ายรวมค่าครองชีพต่าง ๆ แล้ว
                </p>
              </div>
            </div>
          </div>

        <!-- Topic -->
        <div class="h-[4rem] flex flex-col items-start justify-end w-[80%] mx-auto">
          <p class="text-lg text-black font-prompt font-semibold">ลงทุน</p>
          <p class="text-sm text-black font-prompt font-light">เลือกจำนวนเงินที่ต้องการลงทุน</p>
        </div>

        <!-- Invest Money -->
        <div class="flex-1 flex flex-col items-center justify-center space-y-2">
          <div class="w-[90%]">
            <InvestLottery
              v-for="(item, index) in allInvest"
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
