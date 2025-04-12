<script setup lang="ts">
import ResultCard from '../components/ResultCard.vue'

// Function to handle the button click
const handleButtonClick = () => {
  console.log('Button clicked from parent!')
}
</script>

<template>
  <!-- Legacy Builder -->
  <ResultCard
    name="ResultCards_07"
    text="คุณสร้างธุรกิจที่ยิ่งใหญ่และทิ้งมรดกให้ลูกหลาน ชื่อเสียงของคุณจะคงอยู่ตลอดไป"
  />
</template>
