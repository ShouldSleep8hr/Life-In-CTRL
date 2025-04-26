<script setup lang="ts">
import ResultCard from '../components/ResultCard.vue'
import InvestLottery from '@/components/InvestLottery.vue'
// @ts-ignore
import { userStore } from '../stores/userStore.js'
import { ref, nextTick, computed } from 'vue'

import SvgButton from '../components/SvgButton.vue'

import { toPng, toBlob } from 'html-to-image';

import { useRouter } from 'vue-router'

import Achievement from '../components/Achievement.vue'

const router = useRouter()

const status = userStore()

const allResultCard = [
  {
    name: 'ResultCards_01',
    text: 'คุณใช้ชีวิตอย่างสมดุล ทั้งงาน เงิน สุขภาพ และความสัมพันธ์ แม้ไม่ได้ร่ำรวยหรือดังสุดขีด แต่คุณมีความสุขกับทุกช่วงเวลาของชีวิต',
  },
  {
    name: 'ResultCards_02',
    text: 'คุณทุ่มเทให้งานจนเป็นมืออาชีพ แต่สุขภาพย่ำแย่ และคนรอบข้างค่อย ๆ หายไป... ชีวิตนี้มีแต่ตำแหน่งและความเหงา',
  },
  {
    name: 'ResultCards_03',
    text: 'คุณรวยล้นฟ้า แต่ต้องแลกด้วยสุขภาพและความสัมพันธ์ที่แตกสลาย คุณใช้ชีวิตในบ้านใหญ่... ที่ว่างเปล่า',
  },
  {
    name: 'ResultCards_04',
    text: 'คุณดูแลสุขภาพอย่างดี แข็งแรงเหมือนวัย 40 ทั้งที่อายุ 60! แม้ไม่ได้รวยที่สุด แต่ชีวิตเต็มไปด้วยพลังและรอยยิ้ม',
  },
  {
    name: 'ResultCards_05',
    text: 'คุณให้ความสำคัญกับความสัมพันธ์ในชีวิต ไม่ว่าจะเป็นครอบครัวหรือเพื่อน ทุกคนล้วนเห็นคุณค่าในตัวคุณ แม้คุณอาจไม่ได้ร่ำรวยหรือมีชื่อเสียงที่สุด แต่คุณไม่เคยรู้สึกโดดเดี่ยว',
  },
  {
    name: 'ResultCards_06',
    text: 'คุณสร้างธุรกิจที่ยิ่งใหญ่และทิ้งมรดกให้ลูกหลาน ชื่อเสียงของคุณจะคงอยู่ตลอดไป',
  },
  {
    name: 'ResultCards_07',
    text: 'สุขภาพของคุณพังทลาย...  เสียใจด้วย คุณเสียชีวิตก่อนวัยอันควร',
  },
  {
    name: 'ResultCards_08',
    text: 'ไม่มีคำว่าสายสำหรับการเริ่มใหม่',
  },
  {
    name: 'ResultCards_09',
    text: 'ชีวิตคุณอาจกำลังไปได้ดี แต่เหตุการณ์ไม่คาดฝันอย่างอุบัติเหตุร้ายแรงได้พรากทุกสิ่งไปก่อนอายุ 60',
  },
  {
    name: 'ResultCards_10',
    text: 'ทุกอย่างพังแต่ใจยังไหว',
  },
  {
    name: 'ResultCards_11',
    text: 'ไม่มีตอนจบที่ยิ่งใหญ่สำหรับคุณ แต่ก็ไม่มีอะไรที่ต้องเสียใจ คุณผ่านมาได้ และนั่น... ก็อาจจะพอแล้ว',
  },
  {
    name: 'ResultCards_12',
    text: 'คุณใช้ชีวิตอย่างเต็มที่… เกินไปหน่อย ความสุขไม่ควรมาในรูปของหนี้สิน คุณยังมีโอกาสเริ่มต้นใหม่ได้เสมอ ด้วยใบเสร็จในมือ และบทเรียนในใจ',
  },
]

const allAchievementCard = [
  {
    icon: new URL('../assets/Icons/SVG/Icon_Action_Baby.svg', import.meta.url).href,
    name: 'Tiny You',
    text: 'เงินหาย ไม่ได้นอน แต่ใจฟู',
  },
  {
    icon: new URL('../assets/Icons/SVG/Icon_Action_Pet.svg', import.meta.url).href,
    name: 'Paw-sitive Vibes',
    text: 'ถึงจะพูดไม่ได้… แต่เขาฟังเราเสมอ',
  },
  {
    icon: new URL('../assets/Icons/SVG/Icon_Action_Date.svg', import.meta.url).href,
    name: 'Love, Actually',
    text: 'ไม่ใช่ทุกความรักจะยั่งยืน แต่คุณทำได้',
  },
  {
    icon: new URL('../assets/Icons/SVG/Icon_Action_Language.svg', import.meta.url).href,
    name: 'Forever Learner',
    text: 'เพราะไม่มีใครแก่เกินเรียน',
  },
  {
    icon: new URL('../assets/Icons/SVG/Icon_Action_Psy.svg', import.meta.url).href,
    name: 'Healing Begins Here',
    text: 'แค่ยอมรับว่ารู้สึกไม่โอเค... ก็กล้าหาญมากแล้ว',
  },
]

const unlockedAchievements = computed(() =>
  allAchievementCard.filter(card =>
    status.achievement.includes(card.name)
  )
)

const allGoal = [
  {
    card: 'Card_Sil_Active',
    cardSelected: 'Card_Sil_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Career.svg', import.meta.url).href,
    title: 'ประสบความสำเร็จในหน้าที่การงาน',
    success_text: 'คุณเดินมาถึงจุดที่คนจำนวนมากใฝ่ฝัน แม้จะต้องแลกบางอย่างไปบ้าง แต่ความสำเร็จที่คุณได้มา ไม่ใช่เรื่องบังเอิญ',
    failed_text: 'ในผลลัพธ์นี้ คุณอาจยังไม่ไปถึงจุดที่ฝันไว้ในอาชีพ แต่บางทีชีวิตก็พาเราไปเจอสิ่งอื่นที่มีคุณค่าไม่แพ้กัน',
    result: [2, 6]
  },
  {
    card: 'Card_Sil_Active',
    cardSelected: 'Card_Sil_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Money.svg', import.meta.url).href,
    title: 'มีอิสระทางการเงิน',
    success_text: 'คุณทำสำเร็จแล้ว มีความมั่นคงทางการเงินที่หลายคนใฝ่ฝัน แม้จะต้องแลกด้วยอย่างอื่นก็ตาม',
    failed_text: 'ในผลลัพธ์นี้ คุณอาจยังไปไม่ถึงอิสรภาพทางการเงิน แต่บางทีสิ่งที่คุณได้มาแทน อาจมีค่ากว่าเงินก็ได้นะ',
    result: [3, 6]
  },
  {
    card: 'Card_Sil_Active',
    cardSelected: 'Card_Sil_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Relationship.svg', import.meta.url).href,
    title: 'มีความสัมพันธ์ที่ดีและไม่โดดเดี่ยว',
    success_text: 'คุณเลือกให้ความสัมพันธ์สำคัญกว่าสิ่งใด และผลตอบแทนคือชีวิตที่อบอุ่นรายล้อมด้วยความรัก',
    failed_text: 'ในผลลัพธ์นี้ บางทีการวิ่งตามเป้าหมายอื่นอาจทำให้คุณเผลอห่างจากคนสำคัญ ลองกลับไปหาเขา... ยังไม่สายเกินไป',
    result: [5]
  },
  {
    card: 'Card_Sil_Active',
    cardSelected: 'Card_Sil_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Health.svg', import.meta.url).href,
    title: 'มีสุขภาพกายและใจที่ดีในระยะยาว',
    success_text: 'คุณให้คุณค่ากับร่างกายและจิตใจตัวเอง และมันตอบแทนคุณกลับมาอย่างซื่อสัตย์',
    failed_text: 'ในผลลัพธ์นี้ สุขภาพอาจหลุดมือไปบ้างในบางช่วง แต่อย่าลืมว่าไม่มีคำว่าสายเกินไปที่จะเริ่มดูแลตัวเองอีกครั้ง',
    result: [4]
  },
  {
    card: 'Card_Sil_Active',
    cardSelected: 'Card_Sil_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Goal_Balance.svg', import.meta.url).href,
    title: 'มีชีวิตที่สมดุลในทุกด้าน',
    success_text: 'คุณทำได้ตามที่ตั้งใจไว้ ชีวิตคุณไม่ได้สุดขั้วในด้านใด ไม่มากไป ไม่น้อยไป เป็นการเดินทางที่เต็มไปด้วยความหมาย',
    failed_text: 'ในผลลัพธ์นี้ บางครั้งเราก็เผลอเทใจไปด้านใดด้านหนึ่งมากไป ชีวิตอาจยังไม่สมดุล แต่ยังไม่สายที่จะค่อย ๆ ปรับใหม่',
    result: [1]
  },
  {
    card: 'Card_Sil_Active',
    cardSelected: 'Card_Sil_Selected',
    icon: new URL('../assets/Icons/SVG/Icon_Goal_Live.svg', import.meta.url).href,
    title: 'ขอแค่ยังได้ใช้ชีวิตของตัวเองก็เพียงพอแล้ว',
    success_text: 'แม้ชีวิตจะโหดร้ายในหลายช่วง คุณก็ยังยืนอยู่ตรงนี้ และนั่น... ก็น่ายินดีมากแล้ว',
    failed_text: 'ในผลลัพธ์นี้ บางทีคุณอาจได้รับอะไรมากกว่าที่คุณกล้าหวังไว้แต่แรก ลองยิ้มให้ตัวเองสักนิด คุณเก่งมากแล้วนะ',
    result: [8, 11]
  },
]

const selectedGoal = computed(() =>
  allGoal.find(item => item.title === status.goal)
)

const goalResultText = computed(() => {
  const goal = selectedGoal.value
  if (!goal) return ''

  return goal.result.includes(status.result)
    ? goal.success_text
    : goal.failed_text
})


// Get the result based on status.result (subtract 1 to match array index)
const resultCard = computed(() => {
  const index = (parseInt(status.result) || 1) - 1
  return allResultCard[index] || allResultCard[0]
})



function handleButtonClick() {
  status.resetStatus()
  router.push('/')
}

const captureTarget = ref<InstanceType<typeof ResultCard> | null>(null);

const captureScreenshot = async () => {
  await nextTick();
  // Wait for custom fonts to load (important!)
  await document.fonts.ready;

  const el = captureTarget.value;
  if (!el) return;

  // Ensure images are loaded
  const images = el.querySelectorAll('img');
  await Promise.all([...images].map(img => {
    if (img.complete) return Promise.resolve();
    return new Promise(res => {
      img.onload = img.onerror = res;
    });
  }));

  // Temporarily force styles
  const originalStyle = el.getAttribute('style') || '';
  el.style.width = '440px';
  el.style.backgroundImage = `url(${bg})`;
  el.style.backgroundSize = 'cover';
  el.style.backgroundRepeat = 'no-repeat';
  el.style.backgroundPosition = 'center';
  el.style.transform = 'none'; // no scale
  el.style.overflow = 'visible';

  const fontCSS = `
    /* thai */
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 200;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/prompt/v11/-W_8XJnvUD7dzB2Cr_sIfWMuQ5Q.woff2) format('woff2');
      unicode-range: U+02D7, U+0303, U+0331, U+0E01-0E5B, U+200C-200D, U+25CC;
    }
    /* vietnamese */
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 200;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/prompt/v11/-W_8XJnvUD7dzB2Cr_sIZmMuQ5Q.woff2) format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 200;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/prompt/v11/-W_8XJnvUD7dzB2Cr_sIZ2MuQ5Q.woff2) format('woff2');
      unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 200;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/prompt/v11/-W_8XJnvUD7dzB2Cr_sIaWMu.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* thai */
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/prompt/v11/-W_8XJnvUD7dzB2Cy_gIfWMuQ5Q.woff2) format('woff2');
      unicode-range: U+02D7, U+0303, U+0331, U+0E01-0E5B, U+200C-200D, U+25CC;
    }
    /* vietnamese */
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/prompt/v11/-W_8XJnvUD7dzB2Cy_gIZmMuQ5Q.woff2) format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/prompt/v11/-W_8XJnvUD7dzB2Cy_gIZ2MuQ5Q.woff2) format('woff2');
      unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/prompt/v11/-W_8XJnvUD7dzB2Cy_gIaWMu.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* thai */
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/prompt/v11/-W__XJnvUD7dzB2KdNodVkI.woff2) format('woff2');
      unicode-range: U+02D7, U+0303, U+0331, U+0E01-0E5B, U+200C-200D, U+25CC;
    }
    /* vietnamese */
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/prompt/v11/-W__XJnvUD7dzB2Kb9odVkI.woff2) format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/prompt/v11/-W__XJnvUD7dzB2KbtodVkI.woff2) format('woff2');
      unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/prompt/v11/-W__XJnvUD7dzB2KYNod.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* thai */
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/prompt/v11/-W_8XJnvUD7dzB2Ck_kIfWMuQ5Q.woff2) format('woff2');
      unicode-range: U+02D7, U+0303, U+0331, U+0E01-0E5B, U+200C-200D, U+25CC;
    }
    /* vietnamese */
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/prompt/v11/-W_8XJnvUD7dzB2Ck_kIZmMuQ5Q.woff2) format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/prompt/v11/-W_8XJnvUD7dzB2Ck_kIZ2MuQ5Q.woff2) format('woff2');
      unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/prompt/v11/-W_8XJnvUD7dzB2Ck_kIaWMu.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* thai */
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/prompt/v11/-W_8XJnvUD7dzB2Cv_4IfWMuQ5Q.woff2) format('woff2');
      unicode-range: U+02D7, U+0303, U+0331, U+0E01-0E5B, U+200C-200D, U+25CC;
    }
    /* vietnamese */
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/prompt/v11/-W_8XJnvUD7dzB2Cv_4IZmMuQ5Q.woff2) format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/prompt/v11/-W_8XJnvUD7dzB2Cv_4IZ2MuQ5Q.woff2) format('woff2');
      unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/prompt/v11/-W_8XJnvUD7dzB2Cv_4IaWMu.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* thai */
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/prompt/v11/-W_8XJnvUD7dzB2C2_8IfWMuQ5Q.woff2) format('woff2');
      unicode-range: U+02D7, U+0303, U+0331, U+0E01-0E5B, U+200C-200D, U+25CC;
    }
    /* vietnamese */
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/prompt/v11/-W_8XJnvUD7dzB2C2_8IZmMuQ5Q.woff2) format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/prompt/v11/-W_8XJnvUD7dzB2C2_8IZ2MuQ5Q.woff2) format('woff2');
      unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/prompt/v11/-W_8XJnvUD7dzB2C2_8IaWMu.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
  `;

  try {
    const dataUrl = await toPng(el, {
      cacheBust: true,
      backgroundColor: 'white', // or 'transparent' if preferred
      pixelRatio: 2,
      fontEmbedCSS: fontCSS, // ← embed font directly
    });

    const link = document.createElement('a');
    link.download = 'result-card.png';
    link.href = dataUrl;
    link.click();
  } catch (error) {
    console.error('Failed to generate image', error);
  } finally {
    el.setAttribute('style', originalStyle);
  }
};

const shareScreenshot = async () => {
  await nextTick();
  // Wait for custom fonts to load (important!)
  await document.fonts.ready;

  const el = captureTarget.value;
  if (!el) return;

  // Ensure all images are loaded
  const images = el.querySelectorAll('img');
  await Promise.all([...images].map(img => {
    if (img.complete) return Promise.resolve();
    return new Promise(res => {
      img.onload = img.onerror = res;
    });
  }));

  // Temporarily force styles
  const originalStyle = el.getAttribute('style') || '';
  el.style.width = '440px';
  el.style.backgroundImage = `url(${bg})`;
  el.style.backgroundSize = 'cover';
  el.style.backgroundRepeat = 'no-repeat';
  el.style.backgroundPosition = 'center';
  el.style.transform = 'none';
  el.style.overflow = 'visible';

  const fontCSS = `
    /* thai */
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 200;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/prompt/v11/-W_8XJnvUD7dzB2Cr_sIfWMuQ5Q.woff2) format('woff2');
      unicode-range: U+02D7, U+0303, U+0331, U+0E01-0E5B, U+200C-200D, U+25CC;
    }
    /* vietnamese */
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 200;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/prompt/v11/-W_8XJnvUD7dzB2Cr_sIZmMuQ5Q.woff2) format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 200;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/prompt/v11/-W_8XJnvUD7dzB2Cr_sIZ2MuQ5Q.woff2) format('woff2');
      unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 200;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/prompt/v11/-W_8XJnvUD7dzB2Cr_sIaWMu.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* thai */
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/prompt/v11/-W_8XJnvUD7dzB2Cy_gIfWMuQ5Q.woff2) format('woff2');
      unicode-range: U+02D7, U+0303, U+0331, U+0E01-0E5B, U+200C-200D, U+25CC;
    }
    /* vietnamese */
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/prompt/v11/-W_8XJnvUD7dzB2Cy_gIZmMuQ5Q.woff2) format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/prompt/v11/-W_8XJnvUD7dzB2Cy_gIZ2MuQ5Q.woff2) format('woff2');
      unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/prompt/v11/-W_8XJnvUD7dzB2Cy_gIaWMu.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* thai */
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/prompt/v11/-W__XJnvUD7dzB2KdNodVkI.woff2) format('woff2');
      unicode-range: U+02D7, U+0303, U+0331, U+0E01-0E5B, U+200C-200D, U+25CC;
    }
    /* vietnamese */
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/prompt/v11/-W__XJnvUD7dzB2Kb9odVkI.woff2) format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/prompt/v11/-W__XJnvUD7dzB2KbtodVkI.woff2) format('woff2');
      unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/prompt/v11/-W__XJnvUD7dzB2KYNod.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* thai */
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/prompt/v11/-W_8XJnvUD7dzB2Ck_kIfWMuQ5Q.woff2) format('woff2');
      unicode-range: U+02D7, U+0303, U+0331, U+0E01-0E5B, U+200C-200D, U+25CC;
    }
    /* vietnamese */
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/prompt/v11/-W_8XJnvUD7dzB2Ck_kIZmMuQ5Q.woff2) format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/prompt/v11/-W_8XJnvUD7dzB2Ck_kIZ2MuQ5Q.woff2) format('woff2');
      unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/prompt/v11/-W_8XJnvUD7dzB2Ck_kIaWMu.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* thai */
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/prompt/v11/-W_8XJnvUD7dzB2Cv_4IfWMuQ5Q.woff2) format('woff2');
      unicode-range: U+02D7, U+0303, U+0331, U+0E01-0E5B, U+200C-200D, U+25CC;
    }
    /* vietnamese */
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/prompt/v11/-W_8XJnvUD7dzB2Cv_4IZmMuQ5Q.woff2) format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/prompt/v11/-W_8XJnvUD7dzB2Cv_4IZ2MuQ5Q.woff2) format('woff2');
      unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/prompt/v11/-W_8XJnvUD7dzB2Cv_4IaWMu.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* thai */
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/prompt/v11/-W_8XJnvUD7dzB2C2_8IfWMuQ5Q.woff2) format('woff2');
      unicode-range: U+02D7, U+0303, U+0331, U+0E01-0E5B, U+200C-200D, U+25CC;
    }
    /* vietnamese */
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/prompt/v11/-W_8XJnvUD7dzB2C2_8IZmMuQ5Q.woff2) format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/prompt/v11/-W_8XJnvUD7dzB2C2_8IZ2MuQ5Q.woff2) format('woff2');
      unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/prompt/v11/-W_8XJnvUD7dzB2C2_8IaWMu.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
  `;

  try {
    const blob = await toBlob(el, {
      cacheBust: true,
      backgroundColor: 'white', // or 'transparent'
      pixelRatio: 2,
      fontEmbedCSS: fontCSS, // ← embed font directly
    });

    if (!blob) {
      console.error('Failed to create blob');
      return;
    }

    const file = new File([blob], 'result-card.png', { type: 'image/png' });

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({
        title: 'ผลลัพธ์ของฉันจากเกมนี้',
        text: 'ลองดูผลลัพธ์ของฉันสิ!',
        files: [file],
      });
    } else {
      alert('ขออภัย เบราว์เซอร์ของคุณไม่รองรับการแชร์ไฟล์');
    }
  } catch (err) {
    console.error('Error sharing:', err);
  } finally {
    el.setAttribute('style', originalStyle);
  }
};

const bg = new URL(`../assets/Background/Title.svg`, import.meta.url).href

</script>

<style scoped>
.screenshot-bg {
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>

<template>
  <main class="h-full flex items-center justify-center w-full">
    <!-- Phone wrapper -->
    <div class="w-full max-w-[440px] max-h-[99vh] aspect-[440/956]">
      <!-- Phone container -->
      <div
        class="relative w-full h-full rounded-xl shadow-lg bg-no-repeat bg-center bg-cover font-prompt"
        :style="{ backgroundImage: `url(${bg})` }"
      >
        <!-- Overlay covers whole background -->
        <div class="absolute inset-0 bg-white/50 rounded-xl z-0"></div>
        <!-- Scrollable content wrapper ABOVE overlay -->
        <div class="relative flex flex-col justify-between p-4 gap-7 h-full overflow-y-auto z-10">
        
        <!-- Screenshot wrapper -->
        <div ref="captureTarget" class="inset-0 p-4 z-10 flex flex-col gap-7">
          <!-- Title page -->
          <div class="z-10 flex items-center justify-center text-center mt-5">
            <p class="whitespace-pre-line text-2xl text-black font-prompt font-bold">
              ผลลัพธ์ของคุณ
            </p>
          </div>
          
          <div style="width: 100%; max-width: 440px; overflow: visible;">
            <ResultCard :name="resultCard.name" :text="resultCard.text" />
          </div>
        </div>
        
        <div v-if="status.achievement.length > 0" class="z-10 flex items-end justify-center text-left mb-[-1.2rem] mt-[-1.4rem]">
          <p class="w-[90%] text-base text-black font-prompt font-medium">
            Achievements 
          </p>
        </div>
        <div class="grid grid-cols-1 gap-2">
          <Achievement
            v-for="card in unlockedAchievements"
            :key="card.name"
            :icon="card.icon"
            :title="card.name"
            :text="card.text"
          />
        </div>

        <div class="z-10 flex items-center justify-center text-left mb-[-1.2rem] mt-2">
          <p class="text-[0.95rem] text-black font-prompt font-medium">
            เป้าหมายในตอนแรกของคุณคือ
          </p>
        </div>
        <div class="flex flex-col items-center justify-center mb-[-1.2rem]">
          <div class="w-[90%]">
            <InvestLottery
              v-if="selectedGoal"
              :card="selectedGoal.card"
              :icon="selectedGoal.icon"
              :title="selectedGoal.title"
            />
          </div>
        </div>
        <div class="z-10 flex flex-col items-center justify-center">
          <div class="w-[80%] flex flex-col">
            <p class="whitespace-pre-line text-sm text-black font-prompt font-light text-center leading-loose">
              {{ goalResultText }}
            </p>
          </div>
        </div>

        <div class="z-10 flex flex-col items-center justify-center mt-4 mb-4">
          <div class="w-full flex flex-col space-y-10">
            <p class="whitespace-pre-line text-sm text-black font-prompt font-light text-center">
              <b class="whitespace-pre-line text-sm text-black font-prompt font-semibold text-center">
                ตอนจบนี้... เป็นแค่หนึ่งในความเป็นไปได้ของชีวิต<br/>
              </b>
              ไม่มีใครรู้ว่าสิ่งที่เราตัดสินใจในวันนี้<br/>
              จะพาเราไปที่ไหนในอีกสิบปี<br/>
              บางทางอาจดี บางทางอาจพลาด<br/>
              แต่ทุกทางก็สอนอะไรบางอย่างเสมอ<br/>
              ชีวิตจริงไม่ได้มีปุ่ม restart<br/>
              แต่ก็ไม่มีบทสรุปตายตัวเช่นกัน<br/>
              ไม่ว่าเกมของคุณจะจบแบบไหน<br/>
              <b class="whitespace-pre-line text-sm text-black font-prompt font-semibold text-center">
                ขอบคุณที่ยังพยายาม<br/>
                และขอบคุณที่ยังอยู่ตรงนี้ในแบบของคุณเอง<br/>
              </b>
            </p>
          </div>
        </div>

        <!-- Buttons -->
        <div class="flex flex-col w-[80%] mx-auto space-y-2 mb-12">
          <div class="flex gap-3 ">
            <!-- <SvgButton class="flex-1" name="Button_GreenS_Active" text="บันทึกภาพ" />
            <SvgButton class="flex-1" name="Button_GreenS_Active" text="แชร์" /> -->

            <SvgButton class="flex-1" name="Button_GreenS_Active" text="บันทึกภาพ" @click="captureScreenshot" />
            <SvgButton class="flex-1" name="Button_GreenS_Active" text="แชร์" @click="shareScreenshot" />
          </div>
          <SvgButton
            name="Button_Red_Active"
            text="เล่นอีกครั้ง"
            @click="handleButtonClick()"
          />
        </div>
      </div>
    </div>
  </div>
  </main>
</template>



