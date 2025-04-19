<script setup lang="ts">
import ResultCard from '../components/ResultCard.vue'
// @ts-ignore
import { userStore } from '../stores/userStore.js'
import { computed } from 'vue'

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

// Get the result based on status.result (subtract 1 to match array index)
const resultCard = computed(() => {
  const index = (parseInt(status.result) || 1) - 1
  return allResultCard[index] || allResultCard[0]
})

</script>

<template>
  <ResultCard :name="resultCard.name" :text="resultCard.text" />
</template>
