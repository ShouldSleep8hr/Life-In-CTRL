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
  const absAmount = Math.abs(amount)

  if (absAmount >= 1_000_000) {
    return (amount / 1_000_000).toFixed(2) + 'M'
  }
  if (absAmount >= 1_000) {
    return (amount / 1_000).toFixed(2) + 'K'
  }
  return amount.toFixed(2)
}

const card = new URL(`../assets/RandomEventsCards/RandomCards_Empty.svg`, import.meta.url).href

const currentIndex = ref(0)
const currentEvent = computed(() => {
  return status.events?.[currentIndex.value] || null
})

const events = {
  'ได้เลื่อนตำแหน่ง': {
    eventImage: new URL(`../assets/RandomEventsCards/SVG/RandomCardsIllus_01.svg`, import.meta.url).href,
    title: 'ได้เลื่อนตำแหน่ง',
    description: 'บริษัทเห็นศักยภาพคุณจาก ผลงานที่ผ่านมา คุณได้เลื่อนขั้น',
    effects: [
      { icon: 'Career', arrow: 'Up' }, //+10
      { icon: 'Money', arrow: 'Up' }, //50% of salary
      { icon: 'Health' },
      { icon: 'Relationship' },
    ],
  },
  'เรียนจบ': {
    eventImage: new URL(
      `../assets/RandomEventsCards/SVG/RandomCardsIllus_26.svg`,
      import.meta.url).href,
    title: 'เรียนจบ',
    description: 'เก่งมากนักล่าปริญญา',
    effects: [
      { icon: 'Career', arrow: 'Up' }, //+15
      { icon: 'Money' },
      { icon: 'Health' },
      { icon: 'Relationship' },
    ],
  },
  'ภาวะเศรษฐกิจถดถอย บริษัทลดพนักงาน': {
    eventImage: new URL(
      `../assets/RandomEventsCards/SVG/RandomCardsIllus_02.svg`,
      import.meta.url).href,
    title: 'ภาวะเศรษฐกิจถดถอย บริษัทลดพนักงาน',
    description: 'บริษัทปรับโครงสร้าง คุณถูกเลิกจ้าง',
    effects: [
      { icon: 'Career', arrow: 'Down' }, //-5
      { icon: 'Money', arrow: 'Down' }, //-10K
      { icon: 'Health' },
      { icon: 'Relationship' },
    ],
  },
  'ได้โบนัสก้อนใหญ่': {
    eventImage: new URL(
      `../assets/RandomEventsCards/SVG/RandomCardsIllus_03.svg`,
      import.meta.url).href,
    title: 'ได้โบนัสก้อนใหญ่',
    description: 'บริษัทแจกโบนัสประจำปี',
    effects: [
      { icon: 'Career' },
      { icon: 'Money', arrow: 'Up' }, //10% of salary
      { icon: 'Health' },
      { icon: 'Relationship' },
    ],
  },
  'เจ็บป่วยหนัก': {
    eventImage: new URL(
      `../assets/RandomEventsCards/SVG/RandomCardsIllus_04.svg`,
      import.meta.url).href,
    title: 'เจ็บป่วยหนัก',
    description: 'ป่วยต้องเข้าโรงพยาบาล',
    effects: [
      { icon: 'Career' },
      { icon: 'Money', arrow: 'Down' }, //-3K
      { icon: 'Health', arrow: 'Down' }, //-10
      { icon: 'Relationship' },
    ],
  },
  // 'เพื่อนแต่งงาน ': {
  //   eventImage: new URL(
  //     `../assets/RandomEventsCards/SVG/RandomCardsIllus_05.svg`,
  //     import.meta.url
  //   ).href,
  //   title: 'เพื่อนแต่งงาน',
  //   description: 'ได้รับเชิญไปร่วมงานแต่งของเพื่อน',
  //   effects: [
  //     { icon: 'Career' },
  //     { icon: 'Money', arrow: 'Down' }, //-2K
  //     { icon: 'Health' },
  //     { icon: 'Relationship', arrow: 'Up' }, //+5
  //   ],
  // },
  'มีลูก': {
    eventImage: new URL(
      `../assets/RandomEventsCards/SVG/RandomCardsIllus_06.svg`,
      import.meta.url).href,
    title: 'มีลูก',
    description: 'ยินดีด้วย คุณมีเจ้าตัวน้อย',
    effects: [
      { icon: 'Career' },
      { icon: 'Money', arrow: 'Down' }, //-5K
      { icon: 'Health', arrow: 'Down' }, //-2
      { icon: 'Relationship', arrow: 'Up' }, //+7
    ],
  },
  'มีสัตว์เลี้ยง': {
    eventImage: new URL(
      `../assets/RandomEventsCards/SVG/RandomCardsIllus_27.svg`,
      import.meta.url).href,
    title: 'มีสัตว์เลี้ยง',
    description: 'มีเจ้าขนฟูเป็นของตัวเอง',
    effects: [
      { icon: 'Career' },
      { icon: 'Money', arrow: 'Down' }, //-100K/year
      { icon: 'Health', arrow: 'Up' }, //+5
      { icon: 'Relationship', arrow: 'Up' }, //+10
    ],
  },
  'ได้งานใหม่ที่เงินเดือนสูงขึ้น': {
    eventImage: new URL(
      `../assets/RandomEventsCards/SVG/RandomCardsIllus_07.svg`,
      import.meta.url).href,
    title: 'ได้งานใหม่ที่เงินเดือนสูงขึ้น',
    description: 'เปลี่ยนงานเพื่อเงินที่ดีกว่า',
    effects: [
      { icon: 'Career', arrow: 'Up' }, //+5
      { icon: 'Money', arrow: 'Up' }, //20% of salary
      { icon: 'Health' },
      { icon: 'Relationship' },
    ],
  },
  'สูญเสียคนสำคัญ': {
    eventImage: new URL(
      `../assets/RandomEventsCards/SVG/RandomCardsIllus_08.svg`,
      import.meta.url).href,
    title: 'สูญเสียคนสำคัญ',
    description: 'มีพบก็ต้องมีจาก',
    effects: [
      { icon: 'Career' },
      { icon: 'Money', arrow: 'Down' }, //-10K
      { icon: 'Health', arrow: 'Down' }, //-10
      { icon: 'Relationship', arrow: 'Down' }, //-10
    ],
  },
  'ถูกคอลเซ็นเตอร์โกงเงิน': {
    eventImage: new URL(
      `../assets/RandomEventsCards/SVG/RandomCardsIllus_09.svg`,
      import.meta.url).href,
    title: 'ถูกคอลเซ็นเตอร์โกงเงิน',
    description: 'สวัสดีครับ ผมอีลอนมัส โอนเงินให้ผม 1 หมื่นบาทแล้วผมจะส่งยานอวกาศให้คุณ',
    effects: [
      { icon: 'Career' },
      { icon: 'Money', arrow: 'Down' }, //-10K
      { icon: 'Health' },
      { icon: 'Relationship' },
    ],
  },
  'ถูกหวยรางวัลใหญ่': {
    eventImage: new URL(
      `../assets/RandomEventsCards/SVG/RandomCardsIllus_10.svg`,
      import.meta.url).href,
    title: 'ถูกหวยรางวัลใหญ่',
    description: 'ได้เงินก้อนโตจากโชค',
    effects: [
      { icon: 'Career' },
      { icon: 'Money', arrow: 'Up' }, //รางวัลที่ 1 = 6M รางวัลที่ 2 = 200K
      { icon: 'Health' },
      { icon: 'Relationship' },
    ],
  },
  'ถูกปล้น': {
    eventImage: new URL(`../assets/RandomEventsCards/SVG/RandomCardsIllus_11.svg`, import.meta.url).href,
    title: 'ถูกปล้น',
    description: 'สูญเสียทรัพย์สินจากอาชญากรรม',
    effects: [
      { icon: 'Career' },
      { icon: 'Money', arrow: 'Down' }, //-4K
      { icon: 'Health', arrow: 'Down' }, //-5
      { icon: 'Relationship' },
    ],
  },
  'หย่าร้าง': {
    eventImage: new URL(
      `../assets/RandomEventsCards/SVG/RandomCardsIllus_12.svg`,
      import.meta.url).href,
    title: 'หย่าร้าง',
    description: 'ความสัมพันธ์จบลง',
    effects: [
      { icon: 'Career' },
      { icon: 'Money' },
      { icon: 'Health', arrow: 'Up' }, //+10
      { icon: 'Relationship', arrow: 'Down' }, //-20
    ],
  },
  'รถเสีย': {
    eventImage: new URL(
      `../assets/RandomEventsCards/SVG/RandomCardsIllus_13.svg`,
      import.meta.url).href,
    title: 'รถเสีย',
    description: 'รถเสียกะทันหัน',
    effects: [
      { icon: 'Career' },
      { icon: 'Money', arrow: 'Down' }, //-5K
      { icon: 'Health' },
      { icon: 'Relationship' },
    ],
  },
  'อุบัติเหตุรถชน': {
    eventImage: new URL(
      `../assets/RandomEventsCards/SVG/RandomCardsIllus_17.svg`,
      import.meta.url).href,
    title: 'อุบัติเหตุรถชน',
    description: 'โรงพยาบาลใกล้ฉัน',
    effects: [
      { icon: 'Career' },
      { icon: 'Money' },
      { icon: 'Health', arrow: 'Down' }, //-15
      { icon: 'Relationship' },
    ],
  },
  'ได้เจอเพื่อนเก่าที่ห่างหาย': {
    eventImage: new URL(
      `../assets/RandomEventsCards/SVG/RandomCardsIllus_14.svg`,
      import.meta.url).href,
    title: 'ได้เจอเพื่อนเก่าที่ห่างหาย',
    description: 'จากวันนี้ จะมีเรา เราและนาย',
    effects: [
      { icon: 'Career' },
      { icon: 'Money' },
      { icon: 'Health' },
      { icon: 'Relationship', arrow: 'Up' }, //+5
    ],
  },
  'ตกหลุมรัก': {
    eventImage: new URL(
      `../assets/RandomEventsCards/SVG/RandomCardsIllus_15.svg`,
      import.meta.url).href,
    title: 'ตกหลุมรัก',
    description: 'พบคู่ชีวิตที่ใช่',
    effects: [
      { icon: 'Career' },
      { icon: 'Money' },
      { icon: 'Health' },
      { icon: 'Relationship', arrow: 'Up' }, //+15
    ],
  },
  'ป่วยเป็นโรคเรื้อรัง': {
    eventImage: new URL(
      `../assets/RandomEventsCards/SVG/RandomCardsIllus_16.svg`,
      import.meta.url).href,
    title: 'ป่วยเป็นโรคเรื้อรัง',
    description: 'ต้องรักษาระยะยาว',
    effects: [
      { icon: 'Career' },
      { icon: 'Money', arrow: 'Down' }, //-20K/year
      { icon: 'Health', arrow: 'Down' }, //-15
      { icon: 'Relationship', arrow: 'Down' }, //-5
    ],
  },
  'หมดไฟ': {
    eventImage: new URL(
      `../assets/RandomEventsCards/SVG/RandomCardsIllus_18.svg`,
      import.meta.url).href,
    title: 'หมดไฟ',
    description: 'อยากลาออกจากงาน',
    effects: [
      { icon: 'Career', arrow: 'Down' }, //-5
      { icon: 'Money', arrow: 'Down' }, //-25K
      { icon: 'Health', arrow: 'Down' }, //-10
      { icon: 'Relationship', arrow: 'Down' }, //-5
    ],
  },
  'ถูกเลือกให้เป็นตัวแทนบริษัทในงานสัมนา': {
    eventImage: new URL(
      `../assets/RandomEventsCards/SVG/RandomCardsIllus_19.svg`,
      import.meta.url).href,
    title: 'ถูกเลือกให้เป็นตัวแทนบริษัทในงานสัมนา',
    description: 'บริษัทเห็นศักยภาพและมอบโอกาสอันยิ่งใหญ่ให้คุณ',
    effects: [
      { icon: 'Career', arrow: 'Up' }, //10
      { icon: 'Money' },
      { icon: 'Health' },
      { icon: 'Relationship' },
    ],
  },
  'เจอเงินตกในเครื่องซักผ้า': {
    eventImage: new URL(
      `../assets/RandomEventsCards/SVG/RandomCardsIllus_20.svg`,
      import.meta.url).href,
    title: 'เจอเงินตกในเครื่องซักผ้า',
    description: 'ดีจังที่วันนี้ซักผ้า',
    effects: [
      { icon: 'Career' },
      { icon: 'Money', arrow: 'Up' }, //500
      { icon: 'Health' },
      { icon: 'Relationship' },
    ],
  },
  'คุณถูกหวย... กิน': {
    eventImage: new URL(
      `../assets/RandomEventsCards/SVG/RandomCardsIllus_21.svg`,
      import.meta.url).href,
    title: 'คุณถูกหวย... กิน',
    description: 'ต้องมีสักวันที่เป็นวันของเรา...',
    effects: [
      { icon: 'Career' },
      { icon: 'Money', arrow: 'Down' },
      { icon: 'Health' },
      { icon: 'Relationship' },
    ],
  },
  'หุ้นตก': {
    eventImage: new URL(
      `../assets/RandomEventsCards/SVG/RandomCardsIllus_23.svg`,
      import.meta.url).href,
    title: 'หุ้นตก',
    description: 'การลงทุนมีความเสี่ยง ผู้ลงทุนควรศึกษาข้อมูลก่อนการตัดสินใจลงทุน',
    effects: [
      { icon: 'Career' },
      { icon: 'Money', arrow: 'Down' },
      { icon: 'Health' },
      { icon: 'Relationship' },
    ],
  },
  'หุ้นขึ้น': {
    eventImage: new URL(
      `../assets/RandomEventsCards/SVG/RandomCardsIllus_22.svg`,
      import.meta.url).href,
    title: 'หุ้นขึ้น',
    description: 'ใครอยากเป็นเศรษฐี ฉันน่ะสิ ฉันน่ะสิ',
    effects: [
      { icon: 'Career' },
      { icon: 'Money', arrow: 'Up' },
      { icon: 'Health' },
      { icon: 'Relationship' },
    ],
  },
  'ล้มละลาย': {
    eventImage: new URL(
      `../assets/RandomEventsCards/SVG/RandomCardsIllus_24.svg`,
      import.meta.url).href,
    title: 'ล้มละลาย',
    description: 'คุณได้กลายเป็นผู้ยากไร้โดยสมบูรณ์',
    effects: [
      { icon: 'Career' },
      { icon: 'Money', arrow: 'Down' },
      { icon: 'Health', arrow: 'Down' },
      { icon: 'Relationship' },
    ],
  },
  'ผ่อนบ้านหมดแล้ว!': {
    eventImage: new URL(
      `../assets/RandomEventsCards/SVG/RandomCardsIllus_25.svg`,
      import.meta.url).href,
    title: 'ผ่อนบ้านหมดแล้ว!',
    description: 'ยินดีด้วย ในที่สุดคุณก็หมดเวรหมดกรรมสักที',
    effects: [
      { icon: 'Career' },
      { icon: 'Money' },
      { icon: 'Health', arrow: 'Up' }, //10
      { icon: 'Relationship' },
    ],
  },
  'ผ่อนคอนโดหมดแล้ว!': {
    eventImage: new URL(
      `../assets/RandomEventsCards/SVG/RandomCardsIllus_28.svg`,
      import.meta.url).href,
    title: 'ผ่อนคอนโดหมดแล้ว!',
    description: 'อายุเท่านี้ มีคอนโดเป็นของตัวเองจริง ๆ แล้ว',
    effects: [
      { icon: 'Career' },
      { icon: 'Money' },
      { icon: 'Health', arrow: 'Up' }, //10
      { icon: 'Relationship' },
    ],
  },
  'ประกันชีวิตช่วยคุณไว้': {
    eventImage: new URL(
      `../assets/RandomEventsCards/SVG/RandomCardsIllus_29.svg`,
      import.meta.url).href,
    title: 'ประกันชีวิตช่วยคุณไว้',
    description: 'คุณโดนมรสุมชีวิตมา แต่คุณเคยซื้อประกันไว้ เสียเงินแค่ 10% ของค่าเสียหาย',
    effects: [
      { icon: 'Career' },
      { icon: 'Money', arrow: 'Up' }, // -10% ของค่าเสียหาย
      { icon: 'Health' },
      { icon: 'Relationship' },
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
    guaranteedEvents.push(events['ได้เลื่อนตำแหน่ง'])
  }

  if (status.lastest_choices.includes('ไปเรียนต่อต่างประเทศ')) {
    guaranteedEvents.push(events['เรียนจบ'])
  }

  if (status.lastest_choices.includes('มีลูก')) {
    guaranteedEvents.push(events['มีลูก'])
  }

  if (status.lastest_choices.includes('เลี้ยงสัตว์')) {
    guaranteedEvents.push(events['มีสัตว์เลี้ยง'])
  }

  if (status.lastest_choices.includes('เปลี่ยนงานใหม่')) {
    guaranteedEvents.push(events['ได้งานใหม่ที่เงินเดือนสูงขึ้น'])
  }

  if (status.lastest_choices.includes('ซื้อหวย')) {
    const randomLottery = weightedRandomArray([
      { item: events['ถูกหวยรางวัลใหญ่'], weight: 20 },
      { item: events['คุณถูกหวย... กิน'], weight: 80 },
    ])
    guaranteedEvents.push(randomLottery)
  }

  if (status.lastest_choices.includes('ลงทุนในหุ้น')) {
    const randomInvest = weightedRandomArray([
      { item: events['หุ้นตก'], weight: 50 },
      { item: events['หุ้นขึ้น'], weight: 50 },
    ])
    guaranteedEvents.push(randomInvest)
  }

  if (status.lastest_choices.includes('หย่าร้าง')) {
    guaranteedEvents.push(events['หย่าร้าง'])
  }

  if (status.money <= 0) {
    guaranteedEvents.push(events['ล้มละลาย'])
  }

  // ผ่อนบ้าน คอนโด
  if (status.round === status.buy_home_round + 4) {
    guaranteedEvents.push(events['ผ่อนบ้านหมดแล้ว!'])
  }
  if (status.round === status.buy_condo_round + 4) {
    guaranteedEvents.push(events['ผ่อนคอนโดหมดแล้ว!'])
  }

  // สูญเสียคนสำคัญ บังคับเกิดช่วง 40/45/50/55
  if (status.guaranteedEventRound === 0) {
    status.guaranteedEventRound = Math.floor(Math.random() * 4) + 4 // randomly pick 4, 5, 6, 7
  }
  if (status.round === status.guaranteedEventRound && !status.events_all.find(e => e.title === 'สูญเสียคนสำคัญ')) {
    guaranteedEvents.push(events['สูญเสียคนสำคัญ'])
  }


  // Conditional RANDOM events
  // @ts-ignore
  const possibleRandoms: { event: any; weight: number }[] = []

  if (status.round > 2 && status.career < 30 && !status.events_all.find(e => e.title === 'ภาวะเศรษฐกิจถดถอย บริษัทลดพนักงาน')) {
    // @ts-ignore
    possibleRandoms.push({ event: events['ภาวะเศรษฐกิจถดถอย บริษัทลดพนักงาน'], weight: 5 })
  }
  else {
    possibleRandoms.push({ event: events['ถูกเลือกให้เป็นตัวแทนบริษัทในงานสัมนา'], weight: 1 })
  }

  if (status.career > 50 && !status.lastest_choices.includes('ลาออก') && !status.lastest_choices.includes('หางานใหม่')) {
    // @ts-ignore
    possibleRandoms.push({ event: events['ได้โบนัสก้อนใหญ่'], weight: 1 })
  }
  if (status.health < 50) {
    // @ts-ignore
    possibleRandoms.push({ event: events['เจ็บป่วยหนัก'], weight: 1 })
  }
  if (
    status.choices.includes('ปาร์ตี้') ||
    status.choices.includes('ไปงานเลี้ยงรุ่น') ||
    status.choices.includes('นัดเจอเพื่อนเก่า')
  ) {
    // @ts-ignore
    possibleRandoms.push({ event: events['ได้เจอเพื่อนเก่าที่ห่างหาย'], weight: 4 })
  }
  if (status.choices.includes('ซื้อรถ')) {
    // @ts-ignore
    possibleRandoms.push({ event: events['รถเสีย'], weight: 0.5 })
  }
  if (status.health < 30 && status.age >= 40 && !status.events_all.find(e => e.title === 'ป่วยเป็นโรคเรื้อรัง')) {
    // @ts-ignore
    possibleRandoms.push({ event: events['ป่วยเป็นโรคเรื้อรัง'], weight: 2 })
  }
  if (status.career > 50 && status.health < 10 && status.age >= 25 && status.age <= 50) {
    // @ts-ignore
    possibleRandoms.push({ event: events['หมดไฟ'], weight: 4 })
  }

  // Normal random event always in the pool

  if (!status.choices.includes('แต่งงาน') && !status.events_all.find(e => e.title === 'ตกหลุมรัก') ) {
    console.log('แต่งงานแล้วห้ามตกหลุมรัก และ ตกหลุมรักแล้วห้ามตกหลุมรักอีก')
    // @ts-ignore
    possibleRandoms.push({ event: events['ตกหลุมรัก'], weight: 5 })
  }
  else if (status.choices.includes('หย่าร้าง') && !status.lastest_choices.includes('หย่าร้าง')) {
    console.log('หย่าแล้วตกหลุมรักได้ แต่ต้องไม่ได้เพิ่งหย่า')
    // @ts-ignore
    possibleRandoms.push({ event: events['ตกหลุมรัก'], weight: 1 })
  }

  if (status.money > 0 && !status.events_all.find(e => e.title === 'ถูกคอลเซ็นเตอร์โกงเงิน')) {
    // @ts-ignore
    possibleRandoms.push({ event: events['ถูกคอลเซ็นเตอร์โกงเงิน'], weight: 1 })
  }

  if (status.money > 0 && !status.events_all.find(e => e.title === 'ถูกปล้น')) {
    // @ts-ignore
    possibleRandoms.push({ event: events['ถูกปล้น'], weight: 1 })
  }

  if (!status.events_all.find(e => e.title === 'อุบัติเหตุรถชน')) {
    // @ts-ignore
    possibleRandoms.push({ event: events['อุบัติเหตุรถชน'], weight: 1 })
  }

  possibleRandoms.push({ event: events['เจอเงินตกในเครื่องซักผ้า'], weight: 0.2 })


  // random
  const eventCount = Math.floor(Math.random() * 3) + 1// random number between 1 and 3 ถ้าเป็น 0 ข้ามไปหน้า summary
  const randomEvents = getWeightedRandomEvents(possibleRandoms, eventCount)

  // Combine and assign to status
  status.events = [...guaranteedEvents, ...randomEvents]
  status.events_all.push(...guaranteedEvents, ...randomEvents)

  // if (status.events.includes('อุบัติเหตุรถชน')) {
  //   status.events.push('ประกันชีวิตช่วยคุณไว้')
  //   status.health += 5
  // }
  if (status.choices.includes('ทำประกัน')) {
    if (status.events.find(e => e.title === 'ป่วยเป็นโรคเรื้อรัง')) {
      if (!status.events.find(e => e.title === 'ประกันชีวิตช่วยคุณไว้')) {
        status.events.push('ประกันชีวิตช่วยคุณไว้')
      }
      status.money += 10000
    }
    if (status.events.find(e => e.title === 'ถูกปล้น')) {
      if (!status.events.find(e => e.title === 'ประกันชีวิตช่วยคุณไว้')) {
        status.events.push('ประกันชีวิตช่วยคุณไว้')
      }
      status.money += 400
    }
  }

  console.log('events:', status.events.map(e => e.title))
  console.log('all events:', status.events_all.map(e => e.title))

})

function weightedRandomArray(choices: { item: any; weight: number }[]) {
  const total = choices.reduce((sum, choice) => sum + choice.weight, 0)
  const rand = Math.random() * total
  let cumWeight = 0
  for (const choice of choices) {
    cumWeight += choice.weight
    if (rand < cumWeight) return choice.item
  }
}

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
      // ได้เงินชดเชย เลิกจ้าง
      if (status.round === 1) {
        status.money += status.salary * 6
      }
      else if (status.round === 2) {
        status.money += status.salary * 10
      }
      else if (status.round === 3) {
        status.money += status.salary * 10
      }
      else { // round 4 5 6 7
        status.money += status.salary * 14
      }
      
      status.lastest_salary = status.salary
      status.salary = 0
    } 
    else if (currentEvent.value.title === 'ได้โบนัสก้อนใหญ่') {
      status.money += status.salary * 3 //300%
    } 
    else if (currentEvent.value.title === 'เจ็บป่วยหนัก') {
      // status.money = Math.max(status.money - 3000, 0)
      status.money -= 3000
      status.updateStat('health', -10)
    } 
    else if (currentEvent.value.title === 'ถูกคอลเซ็นเตอร์โกงเงิน') {
      // status.money = Math.max(status.money - 20000, 0)
      status.money -= 20000
    } 
    else if (currentEvent.value.title === 'ถูกปล้น') {
      status.money -= 4000
      status.updateStat('health', -5)
    } 
    else if (currentEvent.value.title === 'รถเสีย') {
      status.money -= 5000
    }
    else if (currentEvent.value.title === 'อุบัติเหตุรถชน') {
      // status.money -= 10000
      status.updateStat('health', -15)
    } 
    else if (currentEvent.value.title === 'ได้เจอเพื่อนเก่าที่ห่างหาย') {
      status.updateStat('relationship', 5)
    } 
    else if (currentEvent.value.title === 'ตกหลุมรัก') {
      status.updateStat('relationship', 15)
    } 
    else if (currentEvent.value.title === 'ป่วยเป็นโรคเรื้อรัง') {
      status.money -= 100000
      status.updateStat('health', 15)
      status.updateStat('relationship', -5)
    } 
    else if (currentEvent.value.title === 'หมดไฟ') {
      status.updateStat('career', -5)
      status.money -= 25000
      status.updateStat('health', 10)
      status.updateStat('relationship', -5)
    } 
    else if (currentEvent.value.title === 'ถูกเลือกให้เป็นตัวแทนบริษัทในงานสัมนา') {
      status.updateStat('career', 10)
    } 
    else if (currentEvent.value.title === 'เจอเงินตกในเครื่องซักผ้า') {
      status.money += 500
    } 
    // else if (currentEvent.value.title === 'ถูกหวยรางวัลใหญ่') {
    //   status.money += 6000000 * (status.lottery / 100) * -1
    //   status.lottery = 0
    // }
    else if (currentEvent.value.title === 'ถูกหวยรางวัลใหญ่') {
      const prizeRoll = Math.random()
      if (prizeRoll < 0.1) {
        // 1% chance of prize 1 (i.e., 1% of original 20%)
        status.money += 6000000 * (status.lottery / 100) * -1
        console.log('คุณถูกรางวัลที่ 1!')
      } 
      else {
        // 99% chance of prize 2 (i.e., 99% of original 20%)
        status.money += 200000 * (status.lottery / 100) * -1
        console.log('คุณถูกรางวัลที่ 2!')
      }
      status.lottery = 0
    }
    else if (currentEvent.value.title === 'คุณถูกหวย... กิน') {
      status.lottery = 0
    } 
    else if (currentEvent.value.title === 'หุ้นขึ้น') {
      status.money += status.stock * 1.1
      status.stock = 0
    }
    else if (currentEvent.value.title === 'หุ้นตก') {
      status.money -= status.stock * 1.1
      status.stock = 0
    }
    else if (currentEvent.value.title === 'ล้มละลาย') {
      status.updateStat('health', -20)
    }
    else if (currentEvent.value.title === 'ผ่อนบ้านหมดแล้ว!') {
      status.updateStat('health', 10)
    }
    else if (currentEvent.value.title === 'ผ่อนคอนโดหมดแล้ว!') {
      status.updateStat('health', 10)
    }
  }

  if (currentIndex.value < status.events.length - 1) {
    currentIndex.value++
  } else {
    status.lastest_choices = []
    router.push('/loading')
  }
}

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
        <!-- Status Bar -->
        <div class="h-[10rem] flex items-center justify-center w-full">
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
          <p class="text-2xl text-black font-prompt font-bold">เหตุการณ์สุ่ม!</p>
        </div>

        <!-- background card event -->
        <div class="flex h-[20rem] justify-center items-center w-full">
          <div class="relative w-[60%]">
            <!-- Card image at the back -->
            <img :src="card" class="w-full h-auto" />
            
            <!-- random card event -->
            <div
              v-if="currentEvent"
              class="absolute top-[40%] left-1/2 w-[80%] -translate-x-1/2 -translate-y-[70%]"
            >
              <img :src="currentEvent.eventImage" class="w-full h-auto" />
            </div>
            <!-- Topic -->
            <div
              v-if="currentEvent"
              class="absolute top-[55%] left-1/2 w-[90%] -translate-x-1/2 text-center space-y-2"
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
            <SvgButton name="Button_Green_Active" :text="'ไปกันต่อ'" @click="handleButtonClick" />
          </div>
        </div>
      </div>
    </div>
    </div>
  </main>
</template>
