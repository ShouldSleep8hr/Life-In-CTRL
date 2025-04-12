<script setup lang="ts">
import ResultCard from '../components/ResultCard.vue'

// Function to handle the button click
const handleButtonClick = () => {
  console.log('Button clicked from parent!')
}
</script>

<template>
  <!-- The Workaholic -->
  <ResultCard
    name="ResultCards_02"
    text="คุณทุ่มเทให้งานจนเป็นมืออาชีพชั้นนำ แต่สุขภาพย่ำแย่ และคนรอบข้างค่อย ๆ หายไป... ชีวิตนี้มีแต่ตำแหน่งและความเหงา"
  />
</template>
