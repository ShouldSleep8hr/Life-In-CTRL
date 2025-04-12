<script setup lang="ts">
import ResultCard from '../components/ResultCard.vue'

// Function to handle the button click
const handleButtonClick = () => {
  console.log('Button clicked from parent!')
}
</script>

<template>
  <!-- Gone Too Soon -->
  <ResultCard
    name="ResultCards_08"
    text="สุขภาพของคุณพังทลายก่อนวัย... เสียชีวิตตอนอายุ 55 ปี จากโรคเครียดสะสม ชีวิตนี้สอนให้รู้ว่า ‘ไม่มีงานใดคุ้มค่าเท่าชีวิต’"
  />
</template>
