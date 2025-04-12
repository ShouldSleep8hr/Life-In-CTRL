<script setup lang="ts">
import ResultCard from '../components/ResultCard.vue'

// Function to handle the button click
const handleButtonClick = () => {
  console.log('Button clicked from parent!')
}
</script>

<template>
  <!-- The Balanced Life -->
  <ResultCard
    name="ResultCards_01"
    text="คุณใช้ชีวิตอย่างสมดุล ทั้งงาน เงิน สุขภาพ และความสัมพันธ์ แม้ไม่ได้ร่ำรวยหรือดังสุดขีด แต่คุณมีความสุขกับทุกช่วงเวลาของชีวิต"
  />
</template>
