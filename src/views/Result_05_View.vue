<script setup lang="ts">
import ResultCard from '../components/ResultCard.vue'

// Function to handle the button click
const handleButtonClick = () => {
  console.log('Button clicked from parent!')
}
</script>

<template>
  <!-- The Heart of the Circle -->
  <ResultCard
    name="ResultCards_05"
    text="คุณให้ความสำคัญกับความสัมพันธ์ในชีวิต ไม่ว่าจะเป็นครอบครัวหรือเพื่อน ทุกคนล้วนเห็นคุณค่าในตัวคุณ แม้คุณอาจไม่ได้ร่ำรวยหรือมีชื่อเสียงที่สุด แต่คุณไม่เคยรู้สึกโดดเดี่ยว"
  />
</template>
