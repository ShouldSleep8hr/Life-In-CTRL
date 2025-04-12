<script setup>
import { defineAsyncComponent } from 'vue'

const props = defineProps({
  card: String,
  icon: String,
  title: String,
  text: String,
  selected: Boolean,
})

const emit = defineEmits(['select-action'])

function toggleSelection() {
  emit('select-action')
}
</script>

<style scoped>
/* Optional: Add custom styles for selected state */
.bg-gray-200 {
  background-color: lightgreen;
}
</style>

<template>
  <!-- Action Card -->
  <div
    class="relative w-full flex flex-col items-center justify-center mb-1"
    @click="toggleSelection"
    :class="{ 'bg-gray-200': selected, 'cursor-pointer': true }"
  >
    <!-- Card background -->
    <img :src="card" class="w-full h-auto" />

    <!-- Overlay content -->
    <div
      class="absolute top-2 left-0 w-full h-full flex flex-col items-center justify-start pointer-events-none"
    >
      <!-- Icon + Title -->
      <div class="w-[90%] flex items-center space-x-2 mb-1.5 pl-2">
        <!-- Icon -->
        <div class="w-[30%] flex justify-center">
          <img :src="icon" class="w-[100%] h-auto" />
        </div>

        <!-- Title with fixed height and wrap -->
        <div class="w-[75%] h-[2.5rem] flex items-center">
          <p class="text-left text-[0.8rem] font-prompt font-semibold text-black leading-snug">
            {{ title }}
          </p>
        </div>
      </div>

      <!-- Status Text -->
      <div class="w-[75%] text-left text-[0.65rem] font-prompt font-light leading-tight text-black">
        <p class="whitespace-pre-line">
          {{ text }}
        </p>
      </div>
    </div>
  </div>
</template>
