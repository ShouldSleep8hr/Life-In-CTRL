<script setup lang="ts">
import SvgButton from '../components/SvgButton.vue'
import StatusUpdate from '../components/StatusUpdate.vue'
// @ts-ignore
import { userStore } from '../stores/userStore.js'
import { useRouter } from 'vue-router'

const router = useRouter()

const status = userStore()

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

function formatSalary(amount: number) {
  const absAmount = Math.abs(amount)

  if (absAmount >= 1_000_000) {
    return (amount / 1_000_000).toFixed(0) + 'M'
  }
  if (absAmount >= 1_000) {
    return (amount / 1_000).toFixed(0) + 'K'
  }
  return amount.toFixed(0)
}

const allStatusCard = [
  {
    card: new URL('../assets/Cards/Card_Career_Active.svg', import.meta.url).href,
    icon: new URL('../assets/Icons/SVG/Icon_Career.svg', import.meta.url).href,
    title: 'ความ\nก้าวหน้า',
    text: status.career_level,
    value: status.career + '%',
  },
  {
    card: new URL('../assets/Cards/Card_Money_Active.svg', import.meta.url).href,
    icon: new URL('../assets/Icons/SVG/Icon_Money.svg', import.meta.url).href,
    title: 'เงิน',
    text: formatMoney(status.money) + ' ' + formatSalary(status.salary) + '/เดือน',
    value: getMoneyStatus(status.money),
  },
  {
    card: new URL('../assets/Cards/Card_Health_Active.svg', import.meta.url).href,
    icon: new URL('../assets/Icons/SVG/Icon_Income_Min.svg', import.meta.url).href,
    title: 'สุขภาพ',
    text: getHealthStatus(status.health),
    value: status.health + '%',
  },
  {
    card: new URL('../assets/Cards/Card_Rela_Active.svg', import.meta.url).href,
    icon: new URL('../assets/Icons/SVG/Icon_Relationship.svg', import.meta.url).href,
    title: 'สังคม',
    text: getSocialStatus(status.relationship),
    value: status.relationship + '%',
  },
]

// Function to handle the button click
function handleButtonClick() {
  // console.log('after event')
  // console.log('career: ', status.career)
  // console.log('money: ', status.money)
  // console.log('health: ', status.health)
  // console.log('relationship: ', status.relationship)
  // console.log('salary: ', status.salary)
  // console.log('result:', status.result)


  // console.log('course count:', status.courseCount)
  if (status.courseCount >= 3 && !status.achievement.includes('Forever Learner')) {
    status.achievement.push('Forever Learner');
  }

  if (status.career < 20 && status.age > 40) {
    status.late_bloomer = true
  } 

  if (status.age === 60) {
    if (status.health < 5) {
      status.result = 7
    }
    else if (status.age > 40 && status.money <= -100000) {
      status.result = 12
    }
    else if (status.money >= 30000000 && status.relationship > 50 && status.career_level === 'ระดับ CEO') {
      status.result = 6
    }
    else if (
      status.career >= 50 && status.health >= 50 && status.relationship >= 50 &&
      status.money >= 10000000 &&
      Math.abs(status.career - status.health) <= 25 &&
      Math.abs(status.career - status.relationship) <= 25)
    {
      status.result = 1
    }
    else if (status.late_bloomer) {
      status.result = 8
    }
    else if (status.money >= 50000000) {
      status.result = 3
    }
    else if (status.health > 85) {
      status.result = 4
    }
    else if (status.career > 85) 
    {
      status.result = 2
    }
    else if (status.relationship > 90) {
      status.result = 5
    }
    else if (
      status.career < 20 && status.health < 20 && 
      status.health < 20 && status.relationship < 20 && 
      status.money < 20) 
    {
      status.result = 10
    } 
    else {
      status.result = 11
    }

    router.push('/pre-ending')
  } 
  else {
    if (status.result === 9) {
      router.push('/result')
    } 
    else if (status.health < 5) {
      status.result = 7
      router.push('/result')
    } 
    else if (status.age > 40 && status.money <= -100000) {
      status.result = 12
      router.push('/result')
    }
    else{
      router.push('/action')
    }
  }
}


function getMoneyStatus(percent: number) {
  if (percent <= 0) return 'ผู้ยากไร้'
  else if (percent <= 100000) return 'กระเป๋าแบน' 
  else if (percent <= 1000000) return 'พออยู่พอกิน'
  else if (percent <= 5000000) return 'พอใช้ไม่เดือดร้อน'
  else if (percent <= 10000000) return 'ร่ำรวย'
  else return 'เศรษฐีท่านหนึ่ง'
}

function getHealthStatus(percent: number) {
  if (percent <= 20) return 'ร่างพัง'
  else if (percent <= 40) return 'ขึ้นบันไดยังหอบ' 
  else if (percent <= 60) return 'พอไหว ถ้าไม่วิ่ง'
  else if (percent <= 80) return 'แข็งแรงพอตัว'
  else return 'สดใสในทุกวัน'
}

function getSocialStatus(percent: number) {
  if (percent <= 20) return 'มีเพื่อนในจินตนาการ'
  else if (percent <= 40) return 'ทักแล้วแต่ยังไม่ตอบ' 
  else if (percent <= 60) return 'ไม่เหงา'
  else if (percent <= 80) return 'มีคนที่ไว้ใจได้'
  else return 'รักล้อมรอบตัว'
}

const static_card = new URL('../assets/Cards/Card_Static.svg', import.meta.url).href
const bg = new URL(`../assets/Background/Title.svg`, import.meta.url).href

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
        
          <!-- Title page -->
        <div class="h-[10rem] flex flex-col items-center justify-center text-center space-y-2">
          <p class="text-2xl text-black font-prompt font-bold">Life Update</p>
          <p class="text-sm text-black font-prompt font-light">
            อายุ {{ status.age }} • รอบที่ {{ status.round }}
          </p>
        </div>
        <!-- Status Cards -->
        <div class="whitespace-pre-line h-[13rem] grid grid-cols-2 gap-1 w-[85%] mx-auto">
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
        <div class="h-[8rem] flex items-end justify-center">
          <div class="w-[82%]">
            <p class="text-[0.9rem] text-black font-prompt font-medium">เหตุการณ์สำคัญใน 5 ปีที่ผ่านมา</p>
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
                class="list-disc list-outside pl-6 text-left w-full text-sm text-black font-prompt font-light"
              >
                <li v-if="status.round === status.wedding_round">
                  คุณได้แต่งงาน
                </li>
                <li v-for="(event, index) in status.events" :key="index">
                  {{ event.title }}
                </li>
                <li v-if="status.round < status.buy_home_round + 4">
                  คุณกำลังผ่อนบ้าน
                </li>
                <li v-if="status.round < status.buy_condo_round + 4">
                  คุณกำลังผ่อนคอนโด
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Buttons at bottom -->
        <div class="h-[10rem] flex items-center justify-center">
          <div class="w-[80%] flex items-center justify-center h-full">
            <SvgButton name="Button_Green_Active" :text="'ไปกันต่อ'" @click="handleButtonClick" />
          </div>
        </div>
      </div>
    </div>
    </div>
  </main>
</template>
