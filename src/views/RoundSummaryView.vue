<script setup lang="ts">
import SvgButton from '../components/SvgButton.vue'
import StatusUpdate from '../components/StatusUpdate.vue'
// @ts-ignore
import { userStore } from '../stores/userStore.js'
import { useRouter } from 'vue-router'

const router = useRouter()

const status = userStore()

function formatMoney(amount: number) {
  if (amount >= 1000000) {
    return amount / 1000000 + 'M'
  }
  if (amount >= 1000) {
    return amount / 1000 + 'K'
  }
  return amount
}

const allStatusCard = [
  {
    card: new URL('../assets/Cards/Card_Career_Active.svg', import.meta.url).href,
    icon: new URL('../assets/Icons/SVG/Icon_Career.svg', import.meta.url).href,
    title: 'Career',
    text: status.career_level,
    value: status.career + '%',
  },
  {
    card: new URL('../assets/Cards/Card_Money_Active.svg', import.meta.url).href,
    icon: new URL('../assets/Icons/SVG/Icon_Money.svg', import.meta.url).href,
    title: 'Money',
    text: status.salary + '/month',
    value: formatMoney(status.money),
  },
  {
    card: new URL('../assets/Cards/Card_Health_Active.svg', import.meta.url).href,
    icon: new URL('../assets/Icons/SVG/Icon_Income_Min.svg', import.meta.url).href,
    title: 'Health',
    text:
      status.health <= 25
        ? 'วิกฤต'
        : status.health <= 50
          ? 'อ่อนแอ'
          : status.health <= 75
            ? 'คงที่'
            : 'แข็งแรง',
    value: status.health + '%',
  },
  {
    card: new URL('../assets/Cards/Card_Rela_Active.svg', import.meta.url).href,
    icon: new URL('../assets/Icons/SVG/Icon_Relationship.svg', import.meta.url).href,
    title: 'Social',
    text:
      status.relationship <= 25
        ? 'โดดเดี่ยว'
        : status.relationship <= 50
          ? 'ห่างเหิน'
          : status.relationship <= 75
            ? 'อบอุ่น'
            : 'แน่นแฟ้น',
    value: status.relationship + '%',
  },
]

// Function to handle the button click
function handleButtonClick() {
  if (status.health < 10 && status.age <= 45) {
    router.push('/result/6')
  } else if (status.health < 5 && status.age < 60) {
    router.push('/result/8')
  } else if (status.career < 20 && status.age > 40) {
    status.late_bloomer = true
  }

  if (status.age === 60) {
    if (status.late_bloomer) {
      router.push('/result/9')
    } else if (
      status.career >= 50 &&
      status.career <= 70 &&
      status.health >= 50 &&
      status.health <= 70 &&
      status.relationship >= 50 &&
      status.relationship <= 70 &&
      status.money >= 2000000 &&
      status.money <= 4000000
    ) {
      router.push('/result/1')
    } else if (
      status.career > 80 &&
      status.health < 30 &&
      status.relationship < 30 &&
      status.money >= 2000000 &&
      status.money <= 4000000
    ) {
      router.push('/result/2')
    } else if (status.money >= 8000000 && status.health < 40 && status.relationship < 20) {
      router.push('/result/3')
    } else if (status.health > 85) {
      router.push('/result/4')
    } else if (status.relationship > 85) {
      router.push('/result/5')
    } else if (status.health < 10) {
      router.push('/result/6')
    } else if (status.money >= 6000000 && status.relationship > 50) {
      router.push('/result/7')
    } else if (status.health < 5) {
      router.push('/result/8')
    }
    // else {
    //   router.push('/result/10')
    // }
    // รถชนหรือเหตุการณ์ร้ายแรงก่อนอายุ 60 โดยที่ไม่ได้ซื้อประกันไว้
  } else {
    router.push('/action')
  }
}

const static_card = new URL('../assets/Cards/Card_Static.svg', import.meta.url).href
</script>

<template>
  <main class="h-full flex items-center justify-center bg-gray-100 w-full">
    <!-- Phone wrapper to limit height -->
    <div class="w-full max-w-[440px] max-h-[99vh] aspect-[440/956]">
      <!-- Phone container -->
      <div class="w-full h-full bg-white rounded-xl shadow-lg flex flex-col justify-between p-4">
        <!-- Title page -->
        <div class="h-[10rem] flex flex-col items-center justify-center text-center space-y-2">
          <p class="text-2xl text-black font-prompt font-bold">Life Update</p>
          <p class="text-sm text-black font-prompt font-light">
            Age {{ status.age }} • Round {{ status.round }}
          </p>
        </div>
        <!-- Status Cards -->
        <div class="h-[13rem] grid grid-cols-2 gap-1 w-[85%] mx-auto">
          <StatusUpdate
            v-for="(item, index) in allStatusCard"
            :key="index"
            :card="item.card"
            :icon="item.icon"
            :title="item.title"
            :text="item.text"
            :value="item.value"
          />
        </div>
        <!-- Topic -->
        <div class="h-[8rem] flex items-end justify-center pb-2">
          <div class="w-[82%]">
            <p class="text-[0.9rem] text-black font-prompt font-medium">Key Events</p>
          </div>
        </div>
        <!-- Action Card -->
        <div class="h-[15rem] w-full flex flex-col items-center justify-center">
          <!-- Card container -->
          <div class="relative w-[85%]">
            <img :src="static_card" class="w-full h-auto" />

            <!-- Overlay content -->
            <div
              class="absolute inset-0 flex flex-col items-center justify-start p-4 pointer-events-none"
            >
              <ul
                class="list-disc list-inside text-left w-full text-sm text-black font-prompt font-light"
              >
                <li v-for="(event, index) in status.events" :key="index">{{ event.title }}</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Buttons at bottom -->
        <div class="h-[10rem] flex items-center justify-center">
          <div class="w-[80%] flex items-center justify-center h-full">
            <SvgButton name="Button_Green_Active" :text="'Continue'" @click="handleButtonClick" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
