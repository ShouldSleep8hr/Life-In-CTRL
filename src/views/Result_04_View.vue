<script setup lang="ts">
import ResultCard from '../components/ResultCard.vue'

// Function to handle the button click
const handleButtonClick = () => {
  console.log('Button clicked from parent!')
}
</script>

<template>
  <!-- Health is Wealth -->
  <ResultCard
    name="ResultCards_04"
    text="คุณดูแลสุขภาพอย่างดี แข็งแรงเหมือนวัย 40 ทั้งที่อายุ 60! แม้เงินไม่มาก แต่ชีวิตเต็มไปด้วยพลังและรอยยิ้ม"
  />
</template>
