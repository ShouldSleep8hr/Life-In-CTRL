<script setup lang="ts">
import SvgButton from '../components/SvgButton.vue'
import Action from '../components/Action.vue'
import Status from '../components/Status.vue'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
// @ts-ignore
import { userStore } from '../stores/userStore.js'

const router = useRouter()

const status = userStore()

const allActions = [
  // Career
  {
    card: new URL('../assets/Cards/Card_Career_Active.svg', import.meta.url).href,
    icon: new URL('../assets/Icons/SVG/Icon_Action_Aboard.svg', import.meta.url).href,
    title: 'ไปเรียนต่อต่างประเทศ',
    text: '+15 Career\n-100K',
    career: 15,
    money: -100000,
  },
  {
    card: new URL('../assets/Cards/Card_Career_Active.svg', import.meta.url).href,
    icon: new URL('../assets/Icons/SVG/Icon_Income_Average.svg', import.meta.url).href,
    title: 'ไปสัมมนา',
    text: '+5 Career\n-3K',
    career: 5,
    money: -3000,
  },
  {
    card: new URL('../assets/Cards/Card_Career_Active.svg', import.meta.url).href,
    icon: new URL('../assets/Icons/SVG/Icon_Action_Study.svg', import.meta.url).href,
    title: 'เข้าคอร์สพัฒนาทักษะ',
    text: '+5 Career\n-3K',
    career: 5,
    money: -3000,
  },
  {
    card: new URL('../assets/Cards/Card_Career_Active.svg', import.meta.url).href,
    icon: new URL('../assets/Icons/SVG/Icon_Action_Language.svg', import.meta.url).href,
    title: 'เข้าคอร์สเรียนภาษา',
    text: '+5 Career\n-3K',
    career: 5,
    money: -3000,
  },
  // Career, Money
  {
    card: new URL('../assets/Cards/Card_Career_Active.svg', import.meta.url).href,
    icon: new URL('../assets/Icons/SVG/Icon_Action_Job.svg', import.meta.url).href,
    title: 'เปลี่ยนงานใหม่',
    text: '+10 Career\n+5% of salary',
    career: 10,
    salary: status.salary * 1.05,
  },
  {
    card: new URL('../assets/Cards/Card_Career_Active.svg', import.meta.url).href,
    icon: new URL('../assets/Icons/SVG/Icon_Action_Promo.svg', import.meta.url).href,
    title: 'ขอเลื่อนตำแหน่งเป็นหัวหน้า',
    text: '+10 Career\n50% of salary',
    career: 10,
    salary: status.salary * 1.5,
  },
  {
    card: new URL('../assets/Cards/Card_Career_Active.svg', import.meta.url).href,
    icon: new URL('../assets/Icons/SVG/Icon_Action_Promo.svg', import.meta.url).href,
    title: 'ขอเลื่อนตำแหน่งเป็นผู้บริหาร',
    text: '+10 Career\n50% of salary',
    career: 10,
    salary: status.salary * 1.5,
  },
  {
    card: new URL('../assets/Cards/Card_Career_Active.svg', import.meta.url).href,
    icon: new URL('../assets/Icons/SVG/Icon_Action_Promo.svg', import.meta.url).href,
    title: 'ขอเลื่อนตำแหน่งเป็น CEO',
    text: '+10 Career\n50% of salary',
    career: 10,
    salary: status.salary * 1.5,
  },
  {
    card: new URL('../assets/Cards/Card_Career_Active.svg', import.meta.url).href,
    icon: new URL('../assets/Icons/SVG/Icon_Action_Freelance.svg', import.meta.url).href,
    title: 'ทำ OT',
    text: '+5 Career +3K\n-5 Health -5 Relationship',
    career: 5,
    money: 3000,
    health: -5,
    relationship: -5,
  },
  // Health
  {
    card: new URL('../assets/Cards/Card_Health_Active.svg', import.meta.url).href,
    icon: new URL('../assets/Icons/SVG/Icon_Action_BuyHouse.svg', import.meta.url).href,
    title: 'ซื้อบ้าน',
    text: '-6M(1M/year)\n+10 Health',
    money: -6000000,
    health: 10,
  },
  {
    card: new URL('../assets/Cards/Card_Health_Active.svg', import.meta.url).href,
    icon: new URL('../assets/Icons/SVG/Icon_Action_BuyCondo.svg', import.meta.url).href,
    title: 'เช่าคอนโด', // status.residence = 'condo'
    text: '-10K/Month\n+5 Health',
    health: 5,
  },
  {
    card: new URL('../assets/Cards/Card_Health_Active.svg', import.meta.url).href,
    icon: new URL('../assets/Icons/SVG/Icon_Action_Doctor.svg', import.meta.url).href,
    title: 'ไปหาหมอ',
    text: '-10K\n+10 Health',
    health: 10,
    money: -10000,
  },
  {
    card: new URL('../assets/Cards/Card_Health_Active.svg', import.meta.url).href,
    icon: new URL('../assets/Icons/SVG/Icon_Action_Gym.svg', import.meta.url).href,
    title: 'เข้าฟิตเนส',
    text: '-2K/Month\n+5 Health',
    money: 120000, // 2000 * 12 * 5
    health: 5,
  },
  {
    card: new URL('../assets/Cards/Card_Health_Active.svg', import.meta.url).href,
    icon: new URL('../assets/Icons/SVG/Icon_Action_Divorce.svg', import.meta.url).href,
    title: 'หย่าร้าง',
    text: '+10 Health',
    health: 10,
    relationship: -20,
  },
  {
    card: new URL('../assets/Cards/Card_Health_Active.svg', import.meta.url).href,
    icon: new URL('../assets/Icons/SVG/Icon_Action_Concert.svg', import.meta.url).href,
    title: 'ไปคอนเสิร์ต',
    text: '-8K\n+10 Health',
    health: 10,
    money: -8000,
  },
  {
    card: new URL('../assets/Cards/Card_Health_Active.svg', import.meta.url).href,
    icon: new URL('../assets/Icons/SVG/Icon_Action_Spa.svg', import.meta.url).href,
    title: 'ไปนวดสปา',
    text: '-3K\n+5 Health',
    health: 5,
    money: -3000,
  },
  {
    card: new URL('../assets/Cards/Card_Health_Active.svg', import.meta.url).href,
    icon: new URL('../assets/Icons/SVG/Icon_Action_Gym.svg', import.meta.url).href,
    title: 'เล่นกีฬา',
    text: '-1K\n+5 Health',
    health: 5,
    money: -1000,
  },
  // Health, Money
  {
    card: new URL('../assets/Cards/Card_Health_Active.svg', import.meta.url).href,
    icon: new URL('../assets/Icons/SVG/Icon_Action_Insurance.svg', import.meta.url).href,
    title: 'ทำประกัน',
    text: '-100K\n+10 Health',
    health: 10,
    money: -100000,
  },
  // Health, Relationship
  {
    card: new URL('../assets/Cards/Card_Health_Active.svg', import.meta.url).href,
    icon: new URL('../assets/Icons/SVG/Icon_Action_Vacation.svg', import.meta.url).href,
    title: 'ไปเที่ยวกับครอบครัว',
    text: '-40K +5 Health\n+10 Relationship',
    health: 5,
    relationship: 10,
    money: -40000,
  },
  // Money
  // {
  //   card: new URL('../assets/Cards/Card_Money_Active.svg', import.meta.url).href,
  //   icon: new URL('../assets/Icons/SVG/Icon_Action_Stock.svg', import.meta.url).href,
  //   title: 'ลงทุนในหุ้น',
  //   text: '-1k, -5k, -10k, -50k, -100k',
  //   // InvestView
  // },
  {
    card: new URL('../assets/Cards/Card_Money_Active.svg', import.meta.url).href,
    icon: new URL('../assets/Icons/SVG/Icon_Action_Lotto.svg', import.meta.url).href,
    title: 'ซื้อหวย',
    text: '100/ใบ',
    // LotteryView
  },
  {
    card: new URL('../assets/Cards/Card_Money_Active.svg', import.meta.url).href,
    icon: new URL('../assets/Icons/SVG/Icon_Action_Car.svg', import.meta.url).href,
    title: 'ซื้อรถ',
    text: '-100k',
    money: -100000,
  },
  {
    card: new URL('../assets/Cards/Card_Money_Active.svg', import.meta.url).href,
    icon: new URL('../assets/Icons/SVG/Icon_Action_Freelance.svg', import.meta.url).href,
    title: 'ทำงานฟรีแลนซ์เสริม',
    text: '30% of salary\n-5 Health',
    money: status.salary * 0.3,
    health: -5,
  },
  // Relationship
  {
    card: new URL('../assets/Cards/Card_Rela_Active.svg', import.meta.url).href,
    icon: new URL('../assets/Icons/SVG/Icon_Action_Party.svg', import.meta.url).href,
    title: 'ปาร์ตี้',
    text: '-3K\n+5 Relationship',
    relationship: 5,
    money: -3000,
  },
  {
    card: new URL('../assets/Cards/Card_Rela_Active.svg', import.meta.url).href,
    icon: new URL('../assets/Icons/SVG/Icon_Action_Reunion.svg', import.meta.url).href,
    title: 'ไปงานเลี้ยงรุ่น',
    text: '-3K\n+5 Relationship',
    relationship: 5,
    money: -3000,
  },
  {
    card: new URL('../assets/Cards/Card_Rela_Active.svg', import.meta.url).href,
    icon: new URL('../assets/Icons/SVG/Icon_Action_FriendWed.svg', import.meta.url).href,
    title: 'ไปงานแต่งงานเพื่อน',
    text: '-3K\n+5 Relationship',
    relationship: 5,
    money: -3000,
  },
  {
    card: new URL('../assets/Cards/Card_Rela_Active.svg', import.meta.url).href,
    icon: new URL('../assets/Icons/SVG/Icon_Action_Date.svg', import.meta.url).href,
    title: 'ไปเดท',
    text: '-3K\n+5 Relationship',
    relationship: 5,
    money: -3000,
  },
  {
    card: new URL('../assets/Cards/Card_Rela_Active.svg', import.meta.url).href,
    icon: new URL('../assets/Icons/SVG/Icon_Action_Wedding.svg', import.meta.url).href,
    title: 'แต่งงาน',
    text: '-200K\n+15 Relationship',
    relationship: 15,
    money: -200000,
  },
  {
    card: new URL('../assets/Cards/Card_Rela_Active.svg', import.meta.url).href,
    icon: new URL('../assets/Icons/SVG/Icon_Action_Baby.svg', import.meta.url).href,
    title: 'มีลูก',
    text: '-200K/year +5 Health\n+10 Relationship',
    money: 1000000,
    health: 5,
    relationship: 10,
    requires: ['แต่งงาน'],
  },
  {
    card: new URL('../assets/Cards/Card_Rela_Active.svg', import.meta.url).href,
    icon: new URL('../assets/Icons/SVG/Icon_Action_OldFriend.svg', import.meta.url).href,
    title: 'นัดเจอเพื่อนเก่า',
    text: '-3K\n+5 Relationship',
    relationship: 5,
    money: -3000,
  },
  {
    card: new URL('../assets/Cards/Card_Rela_Active.svg', import.meta.url).href,
    icon: new URL('../assets/Icons/SVG/Icon_Action_Dinner.svg', import.meta.url).href,
    title: 'พาครอบครัวไปทานข้าว',
    text: '-3K\n+5 Relationship',
    relationship: 5,
    money: -3000,
  },
  // {
  //   card: new URL('../assets/Cards/Card_Rela_Active.svg', import.meta.url).href,
  //   icon: new URL('../assets/Icons/SVG/Icon_Action_Family.svg', import.meta.url).href,
  //   title: 'ใช้เวลากับครอบครัว',
  //   text: '+5 Relationship',
  //   relationship: 5,
  // },
  {
    card: new URL('../assets/Cards/Card_Rela_Active.svg', import.meta.url).href,
    icon: new URL('../assets/Icons/SVG/Icon_Action_Social.svg', import.meta.url).href,
    title: 'เข้าร่วมงานสังคม',
    text: '-1K\n+5 Relationship',
    relationship: 5,
    money: -1000,
  },
]

function applyEffects() {
  let touchedRelationship = false
  status.lastest_choices = []

  selectedActions.value.forEach((index) => {
    const action = randomActions.value[index]
    if (!status.choices.includes(action.title)) {
      status.choices.push(action.title)
    }
    if (!status.lastest_choices.includes(action.title)) {
      status.lastest_choices.push(action.title)
    }

    if (action.title === 'ซื้อหวย') {
      status.money = Math.max(status.money - status.lottery, 0)
    }

    if (typeof action.career === 'number') {
      status.career = Math.min(Math.max(status.career + action.career, 0), 100)
      // status.updateStat('career', action.career)
    }
    if (typeof action.money === 'number') {
      status.money = Math.max(status.money + action.money, 0)
      // status.updateStat('money', action.money)
    }
    if (typeof action.health === 'number') {
      status.health = Math.min(Math.max(status.health + action.health, 0), 100)
      // status.updateStat('health', action.health)
    }
    if (typeof action.relationship === 'number') {
      // status.relationship = Math.min(Math.max(status.relationship + action.relationship, 0), 100)
      status.updateStat('relationship', action.relationship)
      touchedRelationship = true
    }
  })
  // Apply relationship penalty if no relationship action was chosen
  if (!touchedRelationship) {
    // status.relationship = Math.max(status.relationship - 10, 0)
    status.updateStat('relationship', -10)
  }

  // age+5, เพิ่มเงินจากเงินเดือน 5 ปี
  status.age += 5
  status.money += status.salary * 60
  status.updateStat('health', -5)
  // หักค่ากิน
  // status.updateStat('money', -365000) // 200/day * 365 days * 5 years
  status.money = Math.max(status.money - 365000, 0)
  // หักค่าเดินทาง
  if (status.choices.includes('ซื้อรถ')) {
    status.money = Math.max(status.money - 120000, 0)
    // status.updateStat('money', -120000) // discount 50%
  } else {
    status.money = Math.max(status.money - 240000, 0)
    // status.updateStat('money', -240000) // 4000/month * 12 months * 5 years
  }
  // หักค่าตาม Starting Residence
  if (status.choices.includes('เช่าคอนโด')) {
    status.residence = 'condo'
  }
  if (status.residence === 'home') {
    status.updateStat('relationship', 5)
    status.updateStat('health', -5)
  } else if (status.residence === 'condo') {
    status.updateStat('relationship', -5)
    status.updateStat('health', 5)
    // status.updateStat('money', -10000)
    status.money = Math.max(status.money - 10000, 0)
  }
}

function formatMoney(amount: number) {
  if (amount >= 1000000) {
    return amount / 1000000 + 'M'
  }
  if (amount >= 1000) {
    return amount / 1000 + 'K'
  }
  return amount
}

// Initialize randomActions with the first random selection
const randomActions = ref(getRandomActions())

// Track selected actions (by index)
const selectedActions = ref<number[]>([])

// Shuffle and pick 8 at random and check if choices is eligible to appear
function getRandomActions(count = 8) {
  const eligible = allActions.filter((action) => {
    // เช่าคอนโด อยู่จะเช่าอีกไม่ได้
    if (action.title === 'เช่าคอนโด' && status.residence === 'condo') {
      return false
    }

    // หย่าร้าง ต้องแต่งงานก่อน และ relationship < 30
    if (
      action.title === 'หย่าร้าง' &&
      !status.choices.includes('แต่งงาน') &&
      status.relationship >= 30
    ) {
      return false
    }
    // แต่งงาน แล้ว ไปเดท ไม่ได้
    if (action.title === 'ไปเดท' && status.choices.includes('แต่งงาน')) {
      return false
    }
    // แต่งงาน ต้อง ตกหลุมรัก ก่อน
    if (action.title === 'แต่งงาน' && !status.shownEvents.includes('ตกหลุมรัก')) {
      return false
    }
    // มีลูก ต้อง แต่งงาน ก่อน
    if (action.title === 'มีลูก' && !status.choices.includes('แต่งงาน')) {
      return false
    }

    // Custom logic for excluding "ไปหาหมอ"
    if (action.title === 'ไปหาหมอ' && !status.events.includes('ป่วยเป็นโรคเรื้อรัง')) {
      return false
    }

    // Custom logic for excluding "ขอเลื่อนตำแหน่งเป็นหัวหน้า"
    if (action.title === 'ขอเลื่อนตำแหน่งเป็นหัวหน้า' && status.career < 35) {
      return false
    }
    // Custom logic for excluding "ขอเลื่อนตำแหน่งเป็นผู้บริหาร"
    if (
      action.title === 'ขอเลื่อนตำแหน่งเป็นผู้บริหาร' &&
      status.career < 60 &&
      !status.choices.includes('ขอเลื่อนตำแหน่งเป็นหัวหน้า')
    ) {
      return false
    }
    // Custom logic for excluding "ขอเลื่อนตำแหน่งเป็น CEO"
    if (
      action.title === 'ขอเลื่อนตำแหน่งเป็น CEO' &&
      status.career < 85 &&
      !status.choices.includes('ขอเลื่อนตำแหน่งเป็นผู้บริหาร')
    ) {
      return false
    }
    // Custom logic for excluding "ทำงานฟรีแลนซ์เสริม"
    if (action.title === 'ทำงานฟรีแลนซ์เสริม' && status.career >= 35) {
      return false
    }

    // Exclude actions that can only be chosen once and were already chosen
    const onceChoice = [
      'ซื้อรถ',
      'แต่งงาน',
      'ซื้อบ้าน',
      'ซื้อหวย',
      'ขอเลื่อนตำแหน่งเป็นหัวหน้า',
      'ขอเลื่อนตำแหน่งเป็นผู้บริหาร',
      'ขอเลื่อนตำแหน่งเป็น CEO',
    ]
    if (onceChoice.includes(action.title) && status.choices.includes(action.title)) {
      return false
    }

    // Custom logic for age > 35
    if (status.age > 35) {
      const excludeAfter35 = ['ไปเรียนต่อต่างประเทศ', 'เปลี่ยนงานใหม่']
      if (excludeAfter35.includes(action.title)) return false
    }

    // Custom logic for age > 40
    if (status.age > 40) {
      const excludeAfter40 = ['เข้าคอร์สพัฒนาทักษะ', 'เข้าคอร์สเรียนภาษา', '']
      if (excludeAfter40.includes(action.title)) return false
    }

    return true
  })

  return eligible
    .slice()
    .sort(() => 0.5 - Math.random())
    .slice(0, count)
    .map((action) => ({ ...action })) // clone each action
}

// Handle button click to increment progress and randomize actions
const handleButtonClick = () => {
  applyEffects()
  status.round += 1
  randomActions.value = getRandomActions() // Randomize actions on each click
  selectedActions.value = [] // Clear selected actions after confirming choices

  status.lastest_choices_show = []

  router.push('/event')
}

function toggleSelection(index: number) {
  // Access the selected action from randomActions
  const selectedAction = randomActions.value[index]
  // @ts-ignore
  const existingIndex = selectedActions.value.indexOf(index)

  console.log(status.lottery)

  if (selectedAction.title === 'ซื้อหวย' && status.lottery === 0) {
    // Save current state before navigating to lottery page
    status.lastest_choices = [...selectedActions.value] // Save selected actions
    status.lastest_choices_show = [...randomActions.value] // Save the current random actions

    router.push('/lottery')
    return
  }

  // Toggle selection for non-lottery actions
  if (existingIndex !== -1) {
    if (selectedAction.title === 'ซื้อหวย') {
      status.lottery = 0
    }
    // Deselect action
    selectedActions.value.splice(existingIndex, 1)
    // Remove from lastest_choices if deselected
    // @ts-ignore
    status.lastest_choices = status.lastest_choices.filter((i) => i !== index)
  } else {
    // Select action
    if (selectedActions.value.length < 4) {
      // @ts-ignore
      selectedActions.value.push(index)
      // Add to lastest_choices if selected
      status.lastest_choices.push(index)
    }
  }
}

onMounted(() => {
  // Restore last actions if present and valid
  if (
    Array.isArray(status.lastest_choices_show) &&
    status.lastest_choices_show.length > 0 &&
    // @ts-ignore
    status.lastest_choices_show.every((a) => a && typeof a.title === 'string')
  ) {
    randomActions.value = [...status.lastest_choices_show] // Restore actions shown before
    delete status.lastest_choices_show // Clean up after use
  } else {
    randomActions.value = getRandomActions() // Generate new random actions if none stored
  }

  // Restore last selected actions if present
  if (Array.isArray(status.lastest_choices) && status.lastest_choices.length > 0) {
    // @ts-ignore
    selectedActions.value = [...status.lastest_choices] // Restore selected actions
    delete status.lastest_choices // Clean up after use
  } else {
    selectedActions.value = [] // No previous choices, reset
  }

  // Check if lottery was selected previously
  if (status.lottery !== 0) {
    // Find the index of 'ซื้อหวย' in randomActions
    const lotteryIndex = randomActions.value.findIndex((action) => action.title === 'ซื้อหวย')

    // @ts-ignore
    if (lotteryIndex !== -1 && !selectedActions.value.includes(lotteryIndex)) {
      // Add 'ซื้อหวย' to selectedActions if it's not already selected
      // @ts-ignore
      selectedActions.value.push(lotteryIndex)
    }
  }
})
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

        <!-- Progress Bar -->
        <div class="flex flex-col text-black items-center justify-center w-full">
          <div class="w-[90%] space-y-1">
            <div class="flex justify-between w-full">
              <span class="text-sm font-prompt font-light">Round Progress</span>
              <span class="text-sm font-prompt font-light">Round {{ status.round }}/7</span>
            </div>
            <div class="relative bg-gray-200 h-2 rounded-full w-full">
              <div
                :style="{ width: (status.round / 7) * 100 + '%' }"
                class="absolute top-0 left-0 h-full bg-green-500 rounded-full"
              ></div>
            </div>
          </div>
        </div>

        <!-- Topic -->
        <div class="flex flex-col items-start justify-center w-[87%] mx-auto">
          <p class="text-lg text-black font-prompt font-semibold">Choose Your Actions</p>
          <p class="text-sm text-black font-prompt font-light">Select up to 4 actions</p>
        </div>

        <!-- Actions Grid -->
        <div class="grid grid-cols-2 gap-1 w-[85%] mx-auto">
          <Action
            v-for="(item, index) in randomActions"
            :key="index"
            :card="item.card"
            :icon="item.icon"
            :title="item.title"
            :text="item.text"
            :selected="selectedActions.includes(index)"
            @select-action="toggleSelection(index)"
          />
        </div>

        <!-- Confirm Button -->
        <div class="flex items-center justify-center w-full">
          <div class="w-[80%]">
            <SvgButton
              name="Button_Green_Active"
              disabledName="Button_Grey"
              :text="'Confirm Choices (' + selectedActions.length + '/4)'"
              :disabled="selectedActions.length !== 4"
              @click="handleButtonClick"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
