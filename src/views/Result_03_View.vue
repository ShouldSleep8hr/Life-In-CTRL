<script setup lang="ts">
import ResultCard from '../components/ResultCard.vue'

// Function to handle the button click
const handleButtonClick = () => {
  console.log('Button clicked from parent!')
}
</script>

<template>
  <!-- The Lonely Millionaire -->
  <ResultCard
    name="ResultCards_03"
    text="คุณรวยล้นฟ้า แต่ต้องแลกด้วยสุขภาพและความสัมพันธ์ที่แตกสลาย คุณใช้ชีวิตในบ้านใหญ่... ที่ว่างเปล่า"
  />
</template>
