<script setup lang="ts">
import ResultCard from '../components/ResultCard.vue'

// Function to handle the button click
const handleButtonClick = () => {
  console.log('Button clicked from parent!')
}
</script>

<template>
  <!-- Tragic Accident -->
  <ResultCard
    name="ResultCards_10"
    text="ชีวิตคุณอาจกำลังไปได้ดี แต่เหตุการณ์ไม่คาดฝันอย่างอุบัติเหตุร้ายแรงได้พรากทุกสิ่งไปก่อนอายุ 60"
  />
</template>
