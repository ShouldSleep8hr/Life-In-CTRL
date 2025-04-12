<script setup lang="ts">
import SvgButton from '../components/SvgButton.vue'
import Status from '../components/Status.vue'
import IconUpDown from '../components/IconUpDown.vue'
import { useRouter } from 'vue-router'
import { ref, computed, onMounted } from 'vue'

// @ts-ignore
import { userStore } from '../stores/userStore.js'

const router = useRouter()

const status = userStore()

function formatMoney(amount: number) {
  if (amount >= 1000000) {
    return amount / 1000000 + 'M'
  } else if (amount >= 1000) {
    return amount / 1000 + 'K'
  }
  return amount
}

const card = new URL(`../assets/Result Cards/SVG/ResultCards_Back.svg`, import.meta.url).href

const currentIndex = ref(0)
const currentEvent = computed(() => {
  return status.events?.[currentIndex.value] || null
})

const events = {
  'ได้เลื่อนตำแหน่ง ': {
    eventImage: new URL(
      `../assets/Random Events Cards Illus/SVG/RandomEventsCardsIllus_01.svg`,
      import.meta.url,
    ).href,
    title: 'ได้เลื่อนตำแหน่ง',
    description: 'บริษัทเห็นศักยภาพคุณจาก ผลงานที่ผ่านมา คุณได้เลื่อนขั้น',
    effects: [
      { icon: 'Career', arrow: 'Up' }, //+10
      { icon: 'Money', arrow: 'Up' }, //50% of salary
      { icon: 'Health' },
      { icon: 'Relationship' },
    ],
  },
  'บริษัทลดพนักงาน ': {
    eventImage: new URL(
      `../assets/Random Events Cards Illus/SVG/RandomEventsCardsIllus_02.svg`,
      import.meta.url,
    ).href,
    title: 'ภาวะเศรษฐกิจถดถอย บริษัทลดพนักงาน',
    description: 'บริษัทปรับโครงสร้าง คุณถูกเลิกจ้าง',
    effects: [
      { icon: 'Career', arrow: 'Down' }, //-5
      { icon: 'Money', arrow: 'Down' }, //-10K
      { icon: 'Health' },
      { icon: 'Relationship' },
    ],
  },
  'ได้โบนัสก้อนใหญ่ ': {
    eventImage: new URL(
      `../assets/Random Events Cards Illus/SVG/RandomEventsCardsIllus_03.svg`,
      import.meta.url,
    ).href,
    title: 'ได้โบนัสก้อนใหญ่',
    description: 'บริษัทแจกโบนัสประจำปี',
    effects: [
      { icon: 'Career' },
      { icon: 'Money', arrow: 'Up' }, //10% of salary
      { icon: 'Health' },
      { icon: 'Relationship' },
    ],
  },
  'เจ็บป่วยหนัก ': {
    eventImage: new URL(
      `../assets/Random Events Cards Illus/SVG/RandomEventsCardsIllus_04.svg`,
      import.meta.url,
    ).href,
    title: 'เจ็บป่วยหนัก',
    description: 'ป่วยต้องเข้าโรงพยาบาล',
    effects: [
      { icon: 'Career' },
      { icon: 'Money', arrow: 'Down' }, //-3K
      { icon: 'Health', arrow: 'Down' }, //-10
      { icon: 'Relationship' },
    ],
  },
  'เพื่อนแต่งงาน ': {
    eventImage: new URL(
      `../assets/Random Events Cards Illus/SVG/RandomEventsCardsIllus_05.svg`,
      import.meta.url,
    ).href,
    title: 'เพื่อนแต่งงาน',
    description: 'ได้รับเชิญไปร่วมงานแต่งของเพื่อน',
    effects: [
      { icon: 'Career' },
      { icon: 'Money', arrow: 'Down' }, //-2K
      { icon: 'Health' },
      { icon: 'Relationship', arrow: 'Up' }, //+5
    ],
  },
  'ได้ลูก ': {
    eventImage: new URL(
      `../assets/Random Events Cards Illus/SVG/RandomEventsCardsIllus_06.svg`,
      import.meta.url,
    ).href,
    title: 'ได้ลูก',
    description: 'ครอบครัวขยายตัว',
    effects: [
      { icon: 'Career' },
      { icon: 'Money', arrow: 'Down' }, //-5K
      { icon: 'Health', arrow: 'Down' }, //-2
      { icon: 'Relationship', arrow: 'Up' }, //+7
    ],
  },
  'ได้งานใหม่ที่เงินเดือนสูงขึ้น ': {
    eventImage: new URL(
      `../assets/Random Events Cards Illus/SVG/RandomEventsCardsIllus_07.svg`,
      import.meta.url,
    ).href,
    title: 'ได้งานใหม่ที่เงินเดือนสูงขึ้น',
    description: 'เปลี่ยนงานและได้ค่าตอบแทนดีกว่า',
    effects: [
      { icon: 'Career', arrow: 'Up' }, //+5
      { icon: 'Money', arrow: 'Up' }, //20% of salary
      { icon: 'Health' },
      { icon: 'Relationship' },
    ],
  },
  'สูญเสียคนสำคัญ ': {
    eventImage: new URL(
      `../assets/Random Events Cards Illus/SVG/RandomEventsCardsIllus_08.svg`,
      import.meta.url,
    ).href,
    title: 'สูญเสียคนสำคัญ',
    description: 'คนที่คุณรักจากไป',
    effects: [
      { icon: 'Career' },
      { icon: 'Money', arrow: 'Down' }, //-10K
      { icon: 'Health', arrow: 'Down' }, //-10
      { icon: 'Relationship', arrow: 'Down' }, //-10
    ],
  },
  'ถูกคอลเซ็นเตอร์โกงเงิน ': {
    eventImage: new URL(
      `../assets/Random Events Cards Illus/SVG/RandomEventsCardsIllus_09.svg`,
      import.meta.url,
    ).href,
    title: 'ถูกคอลเซ็นเตอร์โกงเงิน',
    description: 'ลงทุนผิดพลาดหรือโดนโกง',
    effects: [
      { icon: 'Career' },
      { icon: 'Money', arrow: 'Down' }, //-10K
      { icon: 'Health' },
      { icon: 'Relationship' },
    ],
  },
  'ถูกหวยรางวัลใหญ่ ': {
    eventImage: new URL(
      `../assets/Random Events Cards Illus/SVG/RandomEventsCardsIllus_10.svg`,
      import.meta.url,
    ).href,
    title: 'ถูกหวยรางวัลใหญ่',
    description: 'ได้เงินก้อนโตจากโชค',
    effects: [
      { icon: 'Career' },
      { icon: 'Money', arrow: 'Up' }, //รางวัลที่ 1 = 6M รางวัลที่ 2 = 200K
      { icon: 'Health' },
      { icon: 'Relationship' },
    ],
  },
  'ถูกปล้น ': {
    eventImage: new URL(
      `../assets/Random Events Cards Illus/SVG/RandomEventsCardsIllus_11.svg`,
      import.meta.url,
    ).href,
    title: 'ถูกปล้น',
    description: 'สูญเสียทรัพย์สินจากอาชญากรรม',
    effects: [
      { icon: 'Career' },
      { icon: 'Money', arrow: 'Down' }, //-4K
      { icon: 'Health', arrow: 'Down' }, //-5
      { icon: 'Relationship' },
    ],
  },
  'หย่าร้าง ': {
    eventImage: new URL(
      `../assets/Random Events Cards Illus/SVG/RandomEventsCardsIllus_12.svg`,
      import.meta.url,
    ).href,
    title: 'หย่าร้าง',
    description: 'ความสัมพันธ์จบลง',
    effects: [
      { icon: 'Career' },
      { icon: 'Money' },
      { icon: 'Health', arrow: 'Up' }, //+10
      { icon: 'Relationship', arrow: 'Down' }, //-20
    ],
  },
  'รถเสีย ': {
    eventImage: new URL(
      `../assets/Random Events Cards Illus/SVG/RandomEventsCardsIllus_13.svg`,
      import.meta.url,
    ).href,
    title: 'รถเสีย',
    description: 'รถเสียกะทันหัน',
    effects: [
      { icon: 'Career' },
      { icon: 'Money', arrow: 'Down' }, //-5K
      { icon: 'Health' },
      { icon: 'Relationship' },
    ],
  },
  'อุบัติเหตุรถชน ': {
    eventImage: new URL(
      `../assets/Random Events Cards Illus/SVG/RandomEventsCardsIllus_14.svg`,
      import.meta.url,
    ).href,
    title: 'อุบัติเหตุรถชน',
    description: 'ต้องเข้าโรงพยาบาลและเสียเงินค่ารักษา',
    effects: [
      { icon: 'Career' },
      { icon: 'Money', arrow: 'Down' }, //-10K
      { icon: 'Health', arrow: 'Down' }, //-10
      { icon: 'Relationship' },
    ],
  },
  'ได้เจอเพื่อนเก่าที่ห่างหาย ': {
    eventImage: new URL(
      `../assets/Random Events Cards Illus/SVG/RandomEventsCardsIllus_15.svg`,
      import.meta.url,
    ).href,
    title: 'ได้เจอเพื่อนเก่าที่ห่างหาย',
    description: 'รื้อฟื้นมิตรภาพอีกครั้ง',
    effects: [
      { icon: 'Career' },
      { icon: 'Money' },
      { icon: 'Health' },
      { icon: 'Relationship', arrow: 'Up' }, //+5
    ],
  },
  'ตกหลุมรัก ': {
    eventImage: new URL(
      `../assets/Random Events Cards Illus/SVG/RandomEventsCardsIllus_16.svg`,
      import.meta.url,
    ).href,
    title: 'ตกหลุมรัก',
    description: 'พบคู่ชีวิตที่ใช่',
    effects: [
      { icon: 'Career' },
      { icon: 'Money' },
      { icon: 'Health' },
      { icon: 'Relationship', arrow: 'Up' }, //+15
    ],
  },
  'ป่วยเป็นโรคเรื้อรัง ': {
    eventImage: new URL(
      `../assets/Random Events Cards Illus/SVG/RandomEventsCardsIllus_17.svg`,
      import.meta.url,
    ).href,
    title: 'ป่วยเป็นโรคเรื้อรัง',
    description: 'ต้องรักษาระยะยาว',
    effects: [
      { icon: 'Career' },
      { icon: 'Money' }, //-20K
      { icon: 'Health' }, //-15
      { icon: 'Relationship', arrow: 'Up' }, //-5
    ],
  },
}

onMounted(() => {
  const guaranteedEvents = []
  // const randomEvents = []

  if (
    status.lastest_choices.includes('ขอเลื่อนตำแหน่งเป็นหัวหน้า') ||
    status.lastest_choices.includes('ขอเลื่อนตำแหน่งเป็นผู้บริหาร') ||
    status.lastest_choices.includes('ขอเลื่อนตำแหน่งเป็น CEO')
  ) {
    guaranteedEvents.push(events['ได้เลื่อนตำแหน่ง '])
  }

  if (
    status.lastest_choices.includes('เพื่อนแต่งงาน') &&
    !status.shownEvents.includes('เพื่อนแต่งงาน')
  ) {
    // @ts-ignore
    guaranteedEvents.push(events['เพื่อนแต่งงาน '])
  }

  // Conditional RANDOM events
  // @ts-ignore
  const possibleRandoms: { event: any; weight: number }[] = []

  if (status.career < 30 && !status.shownEvents.includes('บริษัทลดพนักงาน')) {
    // @ts-ignore
    possibleRandoms.push({ event: events['บริษัทลดพนักงาน '], weight: 2 })
  }
  if (status.career > 50 && !status.events.includes('ได้โบนัสก้อนใหญ่')) {
    // @ts-ignore
    possibleRandoms.push({ event: events['ได้โบนัสก้อนใหญ่ '], weight: 5 })
  }
  if (status.health < 50 && !status.shownEvents.includes('เจ็บป่วยหนัก')) {
    // @ts-ignore
    possibleRandoms.push({ event: events['เจ็บป่วยหนัก '], weight: 3 })
  }
  if (
    status.choices.includes('ปาร์ตี้') ||
    status.choices.includes('ไปงานเลี้ยงรุ่น') ||
    status.choices.includes('ไปงานแต่งงานเพื่อน') ||
    status.choices.includes('นัดเจอเพื่อนเก่า')
  ) {
    // @ts-ignore
    possibleRandoms.push({ event: events['ได้เจอเพื่อนเก่าที่ห่างหาย '], weight: 2 })
  }
  if (status.choices.includes('ซื้อรถ')) {
    // @ts-ignore
    possibleRandoms.push({ event: events['รถเสีย '], weight: 2 })
  }
  if (status.health < 30 && status.age >= 40 && status.age <= 60) {
    // @ts-ignore
    possibleRandoms.push({ event: events['ป่วยเป็นโรคเรื้อรัง '], weight: 2 })
  }
  if (status.choices.includes('ซื้อหวย')) {
    // @ts-ignore
    possibleRandoms.push({ event: events['ถูกหวยรางวัลใหญ่ '], weight: 0.1 })
  }

  // Normal random event always in the pool
  if (!status.shownEvents.includes('ตกหลุมรัก')) {
    // @ts-ignore
    possibleRandoms.push({ event: events['ตกหลุมรัก '], weight: 4 })
  }
  possibleRandoms.push({ event: events['ถูกคอลเซ็นเตอร์โกงเงิน '], weight: 1 })
  possibleRandoms.push({ event: events['ถูกปล้น '], weight: 1 })
  possibleRandoms.push({ event: events['อุบัติเหตุรถชน '], weight: 1 })

  // random
  const eventCount = Math.floor(Math.random() * 6) // random number between 0 and 5
  const randomEvents = getWeightedRandomEvents(possibleRandoms, eventCount)

  // Combine and assign to status
  status.events = [...guaranteedEvents, ...randomEvents]
  status.shownEvents.push(...guaranteedEvents, ...randomEvents)
})

// @ts-ignore
function getWeightedRandomEvents(pool, count = 1) {
  const selected = []
  const seenTitles = new Set()

  for (let i = 0; i < count && pool.length > 0; i++) {
    // Calculate total weight
    // @ts-ignore
    const totalWeight = pool.reduce((sum, item) => sum + item.weight, 0)
    let r = Math.random() * totalWeight

    for (let j = 0; j < pool.length; j++) {
      r -= pool[j].weight
      if (r <= 0) {
        const chosen = pool[j].event
        if (!seenTitles.has(chosen.title)) {
          selected.push(chosen)
          seenTitles.add(chosen.title)
        }
        pool.splice(j, 1) // remove chosen from pool
        break
      }
    }
  }

  return selected
}

function handleButtonClick() {
  // Update status based on event effects
  if (currentEvent.value) {
    if (currentEvent.value.title === 'ภาวะเศรษฐกิจถดถอย บริษัทลดพนักงาน') {
      status.updateStat('career', -5)
      status.updateStat('money', -10000)
    } else if (currentEvent.value.title === 'ได้โบนัสก้อนใหญ่') {
      status.money += status.salary * 0.1
    } else if (currentEvent.value.title === 'เจ็บป่วยหนัก') {
      status.money = Math.max(status.money - 3000, 0)
      status.updateStat('health', -10)
    } else if (currentEvent.value.title === 'เจ็บป่วยหนัก') {
      status.money = Math.max(status.money - 3000, 0)
      status.updateStat('health', -10)
    } else if (currentEvent.value.title === 'ถูกคอลเซ็นเตอร์โกงเงิน') {
      status.money = Math.max(status.money - 20000, 0)
    } else if (currentEvent.value.title === 'ถูกหวยรางวัลใหญ่') {
      status.money += 6000000 * (status.lottery / 100)
    }
  }

  if (currentIndex.value < status.events.length - 1) {
    currentIndex.value++
  } else {
    status.lastest_choices = []
    router.push('/summary')
  }
}
</script>

<template>
  <main class="h-full flex items-center justify-center bg-gray-100 w-full">
    <!-- Phone wrapper to limit height -->
    <div class="w-full max-w-[440px] max-h-[99vh] aspect-[440/956]">
      <!-- Phone container -->
      <div
        class="w-full h-full bg-white rounded-xl shadow-lg flex flex-col justify-between gap-4 p-4"
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

        <!-- Title page -->
        <div class="flex h-[4rem] flex-col items-center justify-center text-center">
          <p class="text-2xl text-black font-prompt font-bold">Random Event!</p>
        </div>

        <!-- background card event -->
        <div class="flex h-[20rem] justify-center items-center w-full">
          <div class="relative w-[60%]">
            <!-- Card image at the back -->
            <img :src="card" class="w-full h-auto" />
            <!-- White overlay on top of the card -->
            <div
              class="absolute top-1/2 left-1/2 w-[93%] h-[95%] bg-white -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-md"
            ></div>
            <!-- random card event -->
            <div
              v-if="currentEvent"
              class="absolute top-[40%] left-1/2 w-[80%] -translate-x-1/2 -translate-y-[60%]"
            >
              <img :src="currentEvent.eventImage" class="w-full h-auto" />
            </div>
            <!-- Topic -->
            <div
              v-if="currentEvent"
              class="absolute top-[60%] left-1/2 w-[75%] -translate-x-1/2 text-center space-y-2"
            >
              <p class="text-base text-black font-prompt font-medium">
                {{ currentEvent.title }}
              </p>
              <p class="text-xs text-black font-prompt font-light">
                {{ currentEvent.description }}
              </p>
            </div>
          </div>
        </div>

        <div v-if="currentEvent" class="h-[9rem] flex justify-center items-center w-full">
          <div class="flex w-[70%] gap-x-5">
            <IconUpDown
              v-for="(effect, index) in currentEvent.effects"
              :key="index"
              :icon="effect.icon"
              :arrow="effect.arrow"
            />
          </div>
        </div>

        <!-- Buttons at bottom -->
        <div class="flex items-start justify-center w-full h-[10rem]">
          <div class="w-[80%]">
            <SvgButton name="Button_Green_Active" :text="'Continue'" @click="handleButtonClick" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
