<script setup lang="ts">
import ResultCard from '../components/ResultCard.vue'

// Function to handle the button click
const handleButtonClick = () => {
  console.log('Button clicked from parent!')
}
</script>

<template>
  <!-- Burnout -->
  <ResultCard
    name="ResultCards_06"
    text="คุณทำงานหนักจนร่างกายพังทลายก่อนวัย ต้องเกษียณตั้งแต่อายุ 45 ปี... ชีวิตนี้สอนว่า ‘ความพอดีสำคัญที่สุด"
  />
</template>
