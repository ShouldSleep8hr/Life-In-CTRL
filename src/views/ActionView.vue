<script setup lang="ts">
import SvgButton from '../components/SvgButton.vue'
import Action from '../components/Action.vue'
import Status from '../components/Status.vue'
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
// @ts-ignore
import { userStore } from '../stores/userStore.js'
import Salary from '@/components/Salary.vue'

const router = useRouter()

const status = userStore()

const allActions = [
  // Career
  {
    card: 'Card_Career_Active',
    cardSelected: 'Card_Career_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Action_Job.svg', import.meta.url).href,
    title: 'หางานใหม่',
    text: 'ความก้าวหน้า +5',
    career: 5,
    salary: status.lastest_salary * 0.95
  },
  {
    card: 'Card_Career_Active',
    cardSelected: 'Card_Career_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Action_Resign.svg', import.meta.url).href,
    title: 'ลาออก',
    text: 'ความก้าวหน้า -5\nสุขภาพ +5',
    career: -5,
    health: 5,
    salary: 0,
  },
  {
    card: 'Card_Career_Active',
    cardSelected: 'Card_Career_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Action_Aboard.svg', import.meta.url).href,
    title: 'ไปเรียนต่อต่างประเทศ',
    text: 'ความก้าวหน้า +15\nเงิน -100K',
    career: 15,
    money: -100000,
  },
  {
    card: 'Card_Career_Active',
    cardSelected: 'Card_Career_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Income_Average.svg', import.meta.url).href,
    title: 'ไปสัมมนา',
    text: 'ความก้าวหน้า +5\nเงิน -3K',
    career: 5,
    money: -3000,
  },
  {
    card: 'Card_Career_Active',
    cardSelected: 'Card_Career_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Action_Study.svg', import.meta.url).href,
    title: 'เข้าคอร์สพัฒนาทักษะ',
    text: 'ความก้าวหน้า +5\nเงิน -3K',
    career: 5,
    money: -3000,
  },
  {
    card: 'Card_Career_Active',
    cardSelected: 'Card_Career_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Action_Language.svg', import.meta.url).href,
    title: 'เข้าคอร์สเรียนภาษา',
    text: 'ความก้าวหน้า +5\nเงิน -3K',
    career: 5,
    money: -3000,
  },
  // Career, Money
  {
    card: 'Card_Career_Active',
    cardSelected: 'Card_Career_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Action_Job.svg', import.meta.url).href,
    title: 'เปลี่ยนงานใหม่',
    text: 'ความก้าวหน้า +10\n+20% ของเงินเดือน',
    career: 10,
    salary: status.salary * 1.2,
  },
  {
    card: 'Card_Career_Active',
    cardSelected: 'Card_Career_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Action_Promo.svg', import.meta.url).href,
    title: 'ขอเลื่อนตำแหน่งเป็นหัวหน้า',
    text: 'ความก้าวหน้า +10\n+20% ของเงินเดือน',
    career: 10,
    salary: status.salary * 1.2,
    health: -5,
  },
  {
    card: 'Card_Career_Active',
    cardSelected: 'Card_Career_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Action_Promo.svg', import.meta.url).href,
    title: 'ขอเลื่อนตำแหน่งเป็นผู้บริหาร',
    text: 'ความก้าวหน้า +10\n+30% ของเงินเดือน',
    career: 10,
    salary: status.salary * 1.3,
    health: -5,
  },
  {
    card: 'Card_Career_Active',
    cardSelected: 'Card_Career_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Action_Promo.svg', import.meta.url).href,
    title: 'ขอเลื่อนตำแหน่งเป็น CEO',
    text: 'ความก้าวหน้า +10\n+40% ของเงินเดือน',
    career: 10,
    salary: status.salary * 1.4,
    health: -5,
  },
  {
    card: 'Card_Career_Active',
    cardSelected: 'Card_Career_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Action_OT.svg', import.meta.url).href,
    title: 'ทำ OT',
    text: 'ก้าวหน้า +5 เงิน +3K\nสุขภาพ -5 สังคม -5',
    career: 5,
    money: 3000,
    health: -5,
    relationship: -5,
  },
  {
    card: 'Card_Career_Active',
    cardSelected: 'Card_Career_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Action_Workshop.svg', import.meta.url).href,
    title: 'เข้าร่วมเวิร์กช็อปพัฒนาทักษะ',
    text: 'ความก้าวหน้า +5\nเงิน -3K',
    career: 5,
    money: -3000,
  },
  {
    card: 'Card_Career_Active',
    cardSelected: 'Card_Career_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Action_Learn.svg', import.meta.url).href,
    title: 'เรียนรู้ทักษะใหม่ตามเทรนด์ปัจจุบัน',
    text: 'ความก้าวหน้า +5\nเงิน -3K',
    career: 5,
    money: -3000,
  },
  {
    card: 'Card_Career_Active',
    cardSelected: 'Card_Career_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Action_Trainee.svg', import.meta.url).href,
    title: 'สอนงานรุ่นน้องในทีม',
    text: 'ความก้าวหน้า +5\nสุขภาพ -5 สังคม -5',
    career: 5,
    health: -5,
    relationship: -5,
  },
  {
    card: 'Card_Career_Active',
    cardSelected: 'Card_Career_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Action_License.svg', import.meta.url).href,
    title: 'สมัครสอบใบอนุญาตวิชาชีพ',
    text: 'ความก้าวหน้า +10\nเงิน -5K',
    career: 10,
    money: -5000,
  },
  // Health
  {
    card: 'Card_Health_Active',
    cardSelected: 'Card_Health_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Action_BuyHouse.svg', import.meta.url).href,
    title: 'ซื้อบ้าน',
    text: 'เงิน -4M(200K/ปี)\nสุขภาพ +20', //20 ปี ผ่อนหมด
    money: -1000000, //200,000 * 5
    health: 20,
  },
  {
    card: 'Card_Health_Active',
    cardSelected: 'Card_Health_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Action_BuyCondo.svg', import.meta.url).href,
    title: 'เช่าคอนโด', // status.residence = 'condo'
    text: 'เงิน -7K/เดือน\nสุขภาพ +5',
    money: -420000, // 7,000 * 12 * 5
    health: 5,
  },
  {
    card: 'Card_Health_Active',
    cardSelected: 'Card_Health_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Action_BuyCondo.svg', import.meta.url).href,
    title: 'ซื้อคอนโด', // status.residence = 'condo'
    text: 'เงิน -2M(100K/ปี)\nสุขภาพ +10', //20 ปี ผ่อนหมด
    money: -500000, //100,000 * 5
    health: 10,
  },
  {
    card: 'Card_Health_Active',
    cardSelected: 'Card_Health_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Action_Beauty.svg', import.meta.url).href,
    title: 'ทำหัตถการ',
    text: 'เงิน -50K\nสุขภาพ +10',
    money: -50000,
    health: 10,
  },
  {
    card: 'Card_Health_Active',
    cardSelected: 'Card_Health_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Action_Doctor.svg', import.meta.url).href,
    title: 'ไปหาหมอ',
    text: 'เงิน -10K\nสุขภาพ +10',
    health: 10,
    money: -10000,
  },
  {
    card: 'Card_Health_Active',
    cardSelected: 'Card_Health_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Action_Gym.svg', import.meta.url).href,
    title: 'เข้าฟิตเนส',
    text: 'เงิน -3K/เดือน\nสุขภาพ +20',
    money: -180000, // 3000 * 12 * 5
    health: 20,
  },
  {
    card: 'Card_Health_Active',
    cardSelected: 'Card_Health_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Action_Divorce.svg', import.meta.url).href,
    title: 'หย่าร้าง',
    text: 'สุขภาพ +10\nสังคม -20',
    health: 10,
    relationship: -20,
  },
  {
    card: 'Card_Health_Active',
    cardSelected: 'Card_Health_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Action_Concert.svg', import.meta.url).href,
    title: 'ไปคอนเสิร์ต',
    text: 'เงิน -8K\nสุขภาพ +10',
    health: 10,
    money: -8000,
  },
  {
    card: 'Card_Health_Active',
    cardSelected: 'Card_Health_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Action_Spa.svg', import.meta.url).href,
    title: 'ไปนวดสปา',
    text: 'เงิน -3K\nสุขภาพ +5',
    health: 5,
    money: -3000,
  },
  {
    card: 'Card_Health_Active',
    cardSelected: 'Card_Health_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Action_Gym.svg', import.meta.url).href,
    title: 'เล่นกีฬา',
    text: 'เงิน -1K\nสุขภาพ +5',
    health: 5,
    money: -1000,
  },
  // Health, Money
  {
    card: 'Card_Health_Active',
    cardSelected: 'Card_Health_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Action_Insurance.svg', import.meta.url).href,
    title: 'ทำประกัน',
    text: 'เงิน -200K\nสุขภาพ +10',
    health: 10,
    money: -200000,
  },
  // Health, Relationship
  {
    card: 'Card_Rela_Active',
    cardSelected: 'Card_Rela_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Action_Vacation.svg', import.meta.url).href,
    title: 'ไปเที่ยวกับครอบครัว',
    text: 'เงิน -40K +5 สุขภาพ\nสังคม +10',
    health: 5,
    relationship: 10,
    money: -40000,
  },
  {
    card: 'Card_Health_Active',
    cardSelected: 'Card_Health_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Action_Nutrient.svg', import.meta.url).href,
    title: 'ปรึกษานักโภชนาการ',
    text: 'เงิน -3K\n+5 สุขภาพ',
    health: 5,
    money: -3000,
  },
  {
    card: 'Card_Health_Active',
    cardSelected: 'Card_Health_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Action_Travel.svg', import.meta.url).href,
    title: 'ท่องเที่ยวพักใจ',
    text: 'เงิน -10K\n+10 สุขภาพ',
    health: 10,
    money: -10000,
  },
  {
    card: 'Card_Health_Active',
    cardSelected: 'Card_Health_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Action_Psy.svg', import.meta.url).href,
    title: 'พบจิตแพทย์',
    text: 'เงิน -10K\n+10 สุขภาพ',
    health: 10,
    money: -10000,
  },
  // Money
  {
    card: 'Card_Money_Active',
    cardSelected: 'Card_Money_Selected',    
    icon: new URL('../assets/Icons/SVG/Icon_Action_Stock.svg', import.meta.url).href,
    title: 'ลงทุนในหุ้น',
    text: '-1k, -5k, -10k, -50k, -100k',
    // InvestView
  },
  {
    card: 'Card_Money_Active',
    cardSelected: 'Card_Money_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Action_Lotto.svg', import.meta.url).href,
    title: 'ซื้อหวย',
    text: '100/ใบ',
    // LotteryView
  },
  {
    card: 'Card_Money_Active',
    cardSelected: 'Card_Money_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Action_Car.svg', import.meta.url).href,
    title: 'ซื้อรถ',
    text: 'เงิน -600K(5K/เดือน)\nลดค่าเดินทาง 50%', //10 ปี ผ่อนหมด
    money: -600000,
  },
  {
    card: 'Card_Money_Active',
    cardSelected: 'Card_Money_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Action_Freelance.svg', import.meta.url).href,
    title: 'ทำฟรีแลนซ์เสริม',
    text: '+30% ของเงินเดือน\nสุขภาพ -5',
    money: status.money === 0 ? 2000 : status.salary * 0.3,
    health: -5,
  },
  // Relationship
  {
    card: 'Card_Rela_Active',
    cardSelected: 'Card_Rela_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Action_Party.svg', import.meta.url).href,
    title: 'ปาร์ตี้',
    text: 'เงิน -3K\nสังคม +5',
    relationship: 5,
    money: -3000,
  },
  {
    card: 'Card_Rela_Active',
    cardSelected: 'Card_Rela_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Action_Reunion.svg', import.meta.url).href,
    title: 'ไปงานเลี้ยงรุ่น',
    text: 'เงิน -3K\nสังคม +5',
    relationship: 5,
    money: -3000,
  },
  {
    card: 'Card_Rela_Active',
    cardSelected: 'Card_Rela_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Action_FriendWed.svg', import.meta.url).href,
    title: 'ไปงานแต่งเพื่อน',
    text: 'เงิน -3K\nสังคม +5',
    relationship: 5,
    money: -3000,
  },
  {
    card: 'Card_Rela_Active',
    cardSelected: 'Card_Rela_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Action_Date.svg', import.meta.url).href,
    title: 'ไปเดท',
    text: 'เงิน -3K\nสังคม +5',
    relationship: 5,
    money: -3000,
  },
  {
    card: 'Card_Rela_Active',
    cardSelected: 'Card_Rela_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Action_Wedding.svg', import.meta.url).href,
    title: 'แต่งงาน',
    text: 'เงิน -200K\nสังคม +15',
    relationship: 15,
    money: -200000,
  },
  {
    card: 'Card_Rela_Active',
    cardSelected: 'Card_Rela_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Action_Baby.svg', import.meta.url).href,
    title: 'มีลูก',
    text: '-200K/ปี สุขภาพ +5\nสังคม +10',
    money: -200000,
    health: 5,
    relationship: 10,
  },
  {
    card: 'Card_Rela_Active',
    cardSelected: 'Card_Rela_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Action_Pet.svg', import.meta.url).href,
    title: 'เลี้ยงสัตว์',
    text: '-100K/ปี สุขภาพ +5\nสังคม +10',
    money: -100000,
    health: 5,
    relationship: 10,
  },
  {
    card: 'Card_Rela_Active',
    cardSelected: 'Card_Rela_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Action_OldFriend.svg', import.meta.url).href,
    title: 'นัดเจอเพื่อนเก่า',
    text: 'เงิน -3K\nสังคม +5',
    relationship: 5,
    money: -3000,
  },
  {
    card: 'Card_Rela_Active',
    cardSelected: 'Card_Rela_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Action_Dinner.svg', import.meta.url).href,
    title: 'พาครอบครัวไปทานข้าว',
    text: 'เงิน -3K\nสังคม +5',
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
    card: 'Card_Rela_Active',
    cardSelected: 'Card_Rela_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Action_Social.svg', import.meta.url).href,
    title: 'เข้าร่วมงานสังคม',
    text: 'เงิน -1K\nสังคม +5',
    relationship: 5,
    money: -1000,
  },
]

function applyEffects() {
  let touchedRelationship = false
  status.lastest_choices = []

  selectedActions.value.forEach((index) => {
    const action = randomActions.value[index]
    status.lastest_choices.push(action.title)
    if (!status.choices.includes(action.title)) {
      status.choices.push(action.title)
    }
    console.log('lastest choices', status.lastest_choices)
    console.log('all choices:', status.choices)

    if (action.title === 'ซื้อหวย') {
      // status.money = Math.max(status.money - status.lottery, 0)
      status.money += status.lottery // negative value
    }
    if (action.title === 'ลงทุนในหุ้น') {
      // status.money = Math.max(status.money - status.stock, 0)
      status.money += status.stock // negative value
    }
    if (action.title === 'ลาออก') {
      status.lastest_salary = status.salary
    }

    if (action.title === 'ซื้อบ้าน') { // ผ่อน 20 ปี
      status.buy_home_round = status.round
    }
    if (action.title === 'ซื้อคอนโด') { // ผ่อน 20 ปี
      status.buy_condo_round = status.round
    }

    if (action.title === 'แต่งงาน') {
      if (!status.achievement.includes('Love, Actually')) {
        status.achievement.push('Love, Actually');
      }
    }
    if (action.title === 'มีลูก') {
      if (!status.achievement.includes('Tiny You')) {
        status.achievement.push('Tiny You');
      }
    }
    if (action.title === 'หย่าร้าง') {
      const index = status.achievement.indexOf('Love, Actually');
      if (index !== -1) {
        status.achievement.splice(index, 1);
      }
    }
    if (action.title === 'เลี้ยงสัตว์') {
      status.pet = status.round
      if (!status.achievement.includes('Paw-sitive Vibes')) {
        status.achievement.push('Paw-sitive Vibes');
      }
    }
    if (action.title === 'พบจิตแพทย์') {
      if (!status.achievement.includes('Healing Begins Here')) {
        status.achievement.push('Healing Begins Here');
      }
    }

    if (action.title === 'ขอเลื่อนตำแหน่งเป็นหัวหน้า') {
      status.career_level = 'ระดับหัวหน้า'
    }
    if (action.title === 'ขอเลื่อนตำแหน่งเป็นผู้บริหาร') {
      status.career_level = 'ระดับผู้บริหาร'
    }
    if (action.title === 'ขอเลื่อนตำแหน่งเป็น CEO') {
      status.career_level = 'ระดับ CEO'
    }

    if (typeof action.career === 'number') {
      // status.career = Math.min(Math.max(status.career + action.career, 0), 100)
      status.updateStat('career', action.career)
    }
    if (typeof action.money === 'number') {
      // status.money = Math.max(status.money + action.money, 0)
      status.money += action.money
      // status.updateStat('money', action.money)
      // if (action.title === 'ซื้อคอนโด') {
      //   status.condo -= action.money
      //   console.log('pay condo:', status.condo)
      // }
    }
    if (typeof action.health === 'number') {
      // status.health = Math.min(Math.max(status.health + action.health, 0), 100)
      status.updateStat('health', action.health)
    }
    if (typeof action.relationship === 'number') {
      // status.relationship = Math.min(Math.max(status.relationship + action.relationship, 0), 100)
      if (action.relationship !== 0) {
        touchedRelationship = true
      }
      status.updateStat('relationship', 10)
      console.log('relationship')
    }
    if (typeof action.salary === 'number') {
      status.salary = action.salary
    }
  })
  // Apply relationship penalty if no relationship action was chosen
  if (!touchedRelationship) {
    // status.relationship = Math.max(status.relationship - 10, 0)
    status.updateStat('relationship', -10)
  }

  // age+5, เพิ่มเงินจากเงินเดือน 5 ปี
  if (status.round === 1) {
    status.updateStat('health', -5)
  } 
  else if (status.round === 2) {
    status.updateStat('health', -5)
  } 
  else if (status.round === 3) {
    status.updateStat('health', -5)
  } 
  else if (status.round === 4) {
    status.updateStat('health', -10)
  } 
  else if (status.round === 5) {
    status.updateStat('health', -10)
  } 
  else if (status.round === 6) {
    status.updateStat('health', -15)
  } 
  else if (status.round === 7) {
    status.updateStat('health', -15)
  }
  status.age += 5
  // status.money += status.salary * 60
  // status.salary *= 1.276 // ขึ้นเงินเดือน 5% ทุกปี (รวม ๆ จะได้ round ละ 28%)
  for (let i = 0; i < 5; i++) {
    status.money += (status.salary * 12)
    status.salary = (status.salary * 1.05)

    status.money -= status.eat
    status.eat = (status.eat * 1.05) // 1st round 96,000 | 5 ปี เพิ่ม 18%

    if (status.choices.includes('ซื้อรถ')) {
      status.money -= (status.transport/2)
    } 
    else {
      status.money -= status.transport
    }
    status.transport = (status.transport * 1.05) // 1st round 42,000 | 5 ปี เพิ่ม 18%
  }

  // หักค่ากิน
  // status.updateStat('money', -365000)
  // status.money = Math.max(status.money - 365000, 0)

  // ค่ากิน+ค่าเดินทาง = 8,000/เดือน (8,000*12*5 = 480,000)
  // status.money -= 480000

  // หักค่าเดินทาง
  // if (status.choices.includes('ซื้อรถ')) {
  //   status.money -= 105000 // 3,500/2 * 12 * 5
  // } 
  // else {
  //   status.money -= 210000 // 3,500 * 12 * 5
  // }

  // หักค่าตาม Starting Residence
  if (status.lastest_choices.includes('เช่าคอนโด')) {
    status.residence = 'condo'
  }
  else if (status.lastest_choices.includes('ซื้อบ้าน')) {
    status.residence = 'buy_home'
  }
  else if (status.lastest_choices.includes('ซื้อคอนโด')) {
    status.residence = 'buy_condo'
  }

  if (status.residence === 'home') { // บ้านเริ่มแรก อยู่กับครอบครัว
    status.updateStat('relationship', 5)
    status.updateStat('health', -5)
  }
  else if (status.residence === 'buy_home') {
    status.updateStat('health', 20)
    if (status.round != status.buy_home_round && status.round < status.buy_home_round + 4) {
      status.money -= 1000000 // condo 200,000/year * 5
    }
  }
  else if (status.residence === 'condo') {
    status.updateStat('relationship', -5)
    status.updateStat('health', 5)
    status.money -= 420000 // condo 7,000/month * 12 * 5
  }
  else if (status.residence === 'buy_condo') {
    status.updateStat('relationship', -5)
    status.updateStat('health', 10)
    if (status.round != status.buy_condo_round && status.round < status.buy_condo_round + 4) {
      status.money -= 500000 // condo 200,000/year * 5
      // status.condo += 500000
      // console.log('pay condo:', status.condo)
    }
  }

  console.log('before event')
  console.log('career: ', status.career)
  console.log('money: ', status.money)
  console.log('health: ', status.health)
  console.log('relationship: ', status.relationship)
  console.log('salary: ', status.salary)
}

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

// Initialize randomActions with the first random selection
const randomActions = ref(getRandomActions())

// Track selected actions (by index)
const selectedActions = ref<number[]>([])

// Shuffle and pick 8 at random and check if choices is eligible to appear
function getRandomActions(count = 8) {
  const eligible = allActions.filter((action) => {
    console.log('events all:', status.events_all.map(e => e.title))
    console.log('lastest event:', status.events.map(e => e.title))

    if (
      action.title === 'เช่าคอนโด' && 
      (status.residence === 'condo'|| status.choices.includes('ซื้อคอนโด'))
    ) {
      console.log('เช่า/ซื้อคอนโดอยู่ จะเช่าอีกไม่ได้')
      return false
    }

    if (
      status.residence === 'home' && 
      action.title === 'เช่าคอนโด' && 
      status.round < 4
    ) {
      console.log('ถ้าเลือกอยู่บ้าน ห้ามขึ้นเช่าคอนโดใน 4 round แรก')
      return false
    }

    if (action.title === 'เช่าคอนโด' && status.choices.includes('ซื้อบ้าน')) {
      console.log('ซื้อบ้านแล้ว จะเช่าคอนโดอีกไม่ได้')
      return false
    }
    if (action.title === 'ซื้อคอนโด' && status.choices.includes('ซื้อบ้าน')) {
      console.log('ซื้อบ้านแล้ว จะซื้อคอนโดอีกไม่ได้')
      return false
    }
    if (action.title === 'ซื้อบ้าน' && status.choices.includes('ซื้อคอนโด')) {
      console.log('ซื้อคอนโดแล้ว จะซื้อบ้านอีกไม่ได้')
      return false
    }

    if (action.title === 'ซื้อบ้าน' && status.round > 4) {
      console.log('ซื้อบ้าน ต้องใช้เวลาผ่อน 20 ปี')
      return false
    }
    if (action.title === 'ซื้อคอนโด' && status.round > 4) {
      console.log('ซื้อคอนโด ต้องใช้เวลาผ่อน 20 ปี')
      return false
    }

    // หย่าร้าง ต้องแต่งงานก่อน และ relationship < 30
    if (
      action.title === 'หย่าร้าง' &&
      (!status.choices.includes('แต่งงาน') || status.relationship >= 30)
    ) {
      return false
    }
    // แต่งงาน ต้อง ตกหลุมรัก ก่อน
    if (action.title === 'แต่งงาน' && !status.events_all.find(e => e.title === 'ตกหลุมรัก')) {
      console.log('แต่งงาน ต้อง ตกหลุมรัก ก่อน')
      return false
    }

    // มีลูก ต้อง แต่งงาน ก่อน
    if (action.title === 'มีลูก' && !status.choices.includes('แต่งงาน')) {
      return false
    }
    // ต้องมีลูก ก่อน 35
    if (action.title === 'มีลูก' && status.age > 35) {
      return false
    }

    // Custom logic for excluding "ไปหาหมอ"
    if (action.title === 'ไปหาหมอ' && !status.events.find(e => e.title === 'ป่วยเป็นโรคเรื้อรัง') && status.health > 30) {
      return false
    }


    // Custom logic for excluding "ขอเลื่อนตำแหน่งเป็นหัวหน้า"
    if (action.title === 'ขอเลื่อนตำแหน่งเป็นหัวหน้า' && 
      (status.career < 35 || status.salary === 0)
    ) {
      return false
    }
    // Custom logic for excluding "ขอเลื่อนตำแหน่งเป็นผู้บริหาร"
    if (
      action.title === 'ขอเลื่อนตำแหน่งเป็นผู้บริหาร' &&
      (status.career < 60 ||
      !status.choices.includes('ขอเลื่อนตำแหน่งเป็นหัวหน้า') ||
      status.salary === 0)
    ) {
      return false
    }
    // Custom logic for excluding "ขอเลื่อนตำแหน่งเป็น CEO"
    if (
      action.title === 'ขอเลื่อนตำแหน่งเป็น CEO' &&
      (status.career < 85 ||
      !status.choices.includes('ขอเลื่อนตำแหน่งเป็นผู้บริหาร') ||
      status.salary === 0)
    ) {
      return false
    }

    // Custom logic for excluding "ทำงานฟรีแลนซ์เสริม"
    if (action.title === 'ทำงานฟรีแลนซ์เสริม' && status.career >= 35) {
      return false
    }

    if (action.title === 'ไปงานแต่งเพื่อน' && status.age > 40) {
      console.log('ต้องไปงานแต่งเพื่อนก่อนอายุ 40')
      return false
    }

    if (action.title === 'หางานใหม่' && status.salary !== 0) {
      console.log('บริษัทลดพนักงาน ต้อง หางานใหม่ และยังไม่หางานใหม่')
      return false
    }

    if (action.title === 'ลาออก' && !status.events.find(e => e.title === 'หมดไฟ')) {
      console.log('เลือกหมดไฟครั้งล่าสุด เลยมีลาออก')
      return false
    }
    if (action.title === 'ลาออก' && status.salary === 0) {
      return false
    }

    if (
      (action.title === 'สอนงานรุ่นน้องในทีม' ||
      action.title === 'ทำ OT' ||
      action.title === 'เปลี่ยนงานใหม่') &&
      status.salary === 0
    ) {
      return false
    }

    // Exclude actions that can only be chosen once and were already chosen
    const onceChoice = [
      'ซื้อรถ',
      'แต่งงาน',
      'ซื้อบ้าน',
      'ขอเลื่อนตำแหน่งเป็นหัวหน้า',
      'ขอเลื่อนตำแหน่งเป็นผู้บริหาร',
      'ขอเลื่อนตำแหน่งเป็น CEO',
      'ไปเรียนต่อต่างประเทศ',
      'เช่าคอนโด',
      'ทำประกัน',
      'มีลูก',
      'เลี้ยงสัตว์',
      'ซื้อคอนโด',
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

  const getByCard = (cardType: string) => {
    return eligible.filter((action) => action.card === cardType)
  }

  const pickRandom = (arr: any[], n: number) => {
    const shuffled = arr.slice().sort(() => 0.5 - Math.random())
    return shuffled.slice(0, n)
  }

  const selected: any[] = []

  let addedCareer = false
  // let addedRela = false

  const findWork = eligible.find((a) => a.title === 'หางานใหม่')
  if (findWork) {    
    selected.push(findWork)
    selected.push(...pickRandom(getByCard('Card_Career_Active'), 1))
    addedCareer = true
  }

  const burnOut = eligible.find((a) => a.title === 'ลาออก')
  if (burnOut) {
    selected.push(burnOut)
    selected.push(...pickRandom(getByCard('Card_Career_Active'), 1))
    addedCareer = true
  }

  if (!addedCareer) {
    selected.push(...pickRandom(getByCard('Card_Career_Active'), 2))
  }
  // if (!addedRela) {
  //   selected.push(...pickRandom(getByCard('Card_Rela_Active'), 2))
  // }

  selected.push(...pickRandom(getByCard('Card_Money_Active'), 2))
  selected.push(...pickRandom(getByCard('Card_Rela_Active'), 2))
  selected.push(...pickRandom(getByCard('Card_Health_Active'), 2))


  console.log(
    'Career:',
    getByCard('Card_Career_Active').map((a) => a.title),
  )
  console.log(
    'Money:',
    getByCard('Card_Money_Active').map((a) => a.title),
  )
  console.log(
    'Health:',
    getByCard('Card_Health_Active').map((a) => a.title),
  )
  console.log(
    'Relationship:',
    getByCard('Card_Rela_Active').map((a) => a.title),
  )

  // Make sure total is not more than `count` and actions are unique
  const unique = Array.from(new Set(selected))

  return unique.slice(0, count).map((action) => ({ ...action }))
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

// Function to calculate the total money from selected actions
function calculateTotalMoney() {
  let totalChange = 0

  selectedActions.value.forEach((actionIndex) => {
    const action = randomActions.value[actionIndex]
    if (!action) return

    if (action.title === 'ซื้อหวย') {
      totalChange += status.lottery
    } 
    else if (action.title === 'ลงทุนในหุ้น') {
      totalChange += status.stock
    } 
    else {
      const money = typeof action.money === 'number' ? action.money : 0
      totalChange += money
    }
  })

  status.minus = totalChange
  return totalChange
}



function toggleSelection(index: number) {
  // Access the selected action from randomActions
  const selectedAction = randomActions.value[index]
  // @ts-ignore
  const existingIndex = selectedActions.value.indexOf(index)

  if (selectedAction.title === 'ซื้อหวย' && status.lottery === 0) {
    // Save current state before navigating to lottery page
    status.lastest_choices = [...selectedActions.value] // Save selected actions
    status.lastest_choices_show = [...randomActions.value] // Save the current random actions

    router.push('/lottery')
    return
  }
  if (selectedAction.title === 'ลงทุนในหุ้น' && status.stock=== 0) {
    // Save current state before navigating to lottery page
    status.lastest_choices = [...selectedActions.value] // Save selected actions
    status.lastest_choices_show = [...randomActions.value] // Save the current random actions

    router.push('/invest')
    return
  }

  // Handle "mutually exclusive" between "ซื้อบ้าน" and "ซื้อคอนโด"
  const houseIndex = randomActions.value.findIndex(action => action.title === 'ซื้อบ้าน');
  const condoIndex = randomActions.value.findIndex(action => action.title === 'ซื้อคอนโด');

  // Toggle selection for non-lottery actions
  if (existingIndex !== -1) {
    if (selectedAction.title === 'ซื้อหวย') {
      status.lottery = 0
    }
    if (selectedAction.title === 'ลงทุนในหุ้น') {
      status.stock = 0
    }
    // Deselect action
    selectedActions.value.splice(existingIndex, 1)
    // Remove from lastest_choices if deselected
    // @ts-ignore
    status.lastest_choices = status.lastest_choices.filter((i) => i !== index)
  } 
  else {
    // Select action
    if (selectedActions.value.length < 4) {
      // @ts-ignore
      selectedActions.value.push(index)
      // Add to lastest_choices if selected
      status.lastest_choices.push(index)

      // If selecting "ซื้อบ้าน", deselect "ซื้อคอนโด"
      if (selectedAction.title === 'ซื้อบ้าน' && condoIndex !== -1) {
        const condoSelectedIndex = selectedActions.value.indexOf(condoIndex);
        if (condoSelectedIndex !== -1) {
          selectedActions.value.splice(condoSelectedIndex, 1);
          // @ts-ignore
          status.lastest_choices = status.lastest_choices.filter((i) => i !== condoIndex);
        }
      }

      // If selecting "ซื้อคอนโด", deselect "ซื้อบ้าน"
      if (selectedAction.title === 'ซื้อคอนโด' && houseIndex !== -1) {
        const houseSelectedIndex = selectedActions.value.indexOf(houseIndex);
        if (houseSelectedIndex !== -1) {
          selectedActions.value.splice(houseSelectedIndex, 1);
          // @ts-ignore
          status.lastest_choices = status.lastest_choices.filter((i) => i !== houseIndex);
        }
      }
    }
  }
}

const formattedTotalMoney = computed(() => {
  return formatMoneyZero(calculateTotalMoney())
})

const refreshChoices = () => {
  randomActions.value = getRandomActions()
  selectedActions.value = [] // Clear selected if refreshing choices
  status.lastest_choices = []
  status.lottery = 0
  status.stock = 0
  status.lastest_choices_show = []
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
  if (status.stock !== 0) {
    // Find the index of 'ซื้อหวย' in randomActions
    const stockIndex = randomActions.value.findIndex((action) => action.title === 'ลงทุนในหุ้น')

    // @ts-ignore
    if (stockIndex !== -1 && !selectedActions.value.includes(stockIndex)) {
      // Add 'ซื้อหวย' to selectedActions if it's not already selected
      // @ts-ignore
      selectedActions.value.push(stockIndex)
    }
  }
})

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
          <div class="h-[6rem] w-[90%] flex items-center space-x-1.5 pl-1">
            <!-- Icon -->
            <div class="w-[18%] flex justify-center">
              <img :src="money_icon" class="w-full h-auto" />
            </div>

            <!-- Title with fixed height and wrap -->
            <div class="w-full flex items-start justify-start space-x-2.5 mt-3.5">
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
            <div class="flex flex-col">
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
                  {{ formattedTotalMoney }}
                </b>
              </p>
              <p class="w-[130%] text-left text-[0.5rem] font-prompt font-normal text-black leading-snug">
                *ค่าใช้จ่ายรวมค่ากิน ค่าอยู่ และค่าเดินทางแล้ว
              </p>
            </div>
            </div>
          </div>

          <!-- Progress Bar -->
          <div class="flex flex-col text-black items-center justify-center w-full">
            <div class="w-[90%] space-y-1">
              <div class="flex justify-between w-full">
                <span class="text-sm font-prompt font-light">อายุ {{ status.age }}</span>
                <span class="text-sm font-prompt font-light">รอบที่ {{ status.round }}/7</span>
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
            <p class="text-lg text-black font-prompt font-semibold">เลือกสิ่งที่อยากทำใน 5 ปีข้างหน้า</p>
            <p class="text-sm text-black font-prompt font-light">เลือกได้สูงสุด 4 อย่าง</p>
          </div>

          <!-- Actions Grid -->
          <div class="grid grid-cols-2 gap-1 w-[85%] mx-auto">
            <Action
              v-for="(item, index) in randomActions"
              :key="index"
              :card="item.card"
              :cardSelected="item.cardSelected"
              :icon="item.icon"
              :title="item.title"
              :text="item.text"
              :disabled="status.money <= 0 && (item.money || item.title==='ซื้อหวย' || item.title==='ลงทุนในหุ้น')"
              :selected="selectedActions.includes(index)"
              @select-action="toggleSelection(index)"
            />
          </div>

          <!-- Confirm Button -->
          <!-- <div class="h-[10rem] flex items-center justify-center w-full">
            <div class="w-[80%]">
              <SvgButton
                name="Button_Green_Active"
                disabledName="Button_Grey"
                :text="'ยืนยัน (' + selectedActions.length + '/4)'"
                @click="handleButtonClick"
              />
            </div>
          </div> -->
          <div class="h-[10rem] flex items-start justify-center w-full">
          <div class="w-[80%] flex gap-3">
            <SvgButton name="Button_RedS_Active" text="เปลี่ยนตัวเลือก" @click="refreshChoices" />
            <SvgButton
              name="Button_GreenS_Active"
              disabledName="Button_GreyS"
              :text="'ยืนยัน (' + selectedActions.length + '/4)'"
              @click="handleButtonClick"
            />
          </div>
        </div>
        </div>
      </div>
    </div>
  </main>
</template>
