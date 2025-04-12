<script setup>
import { defineAsyncComponent } from 'vue'

const props = defineProps({
  card: String,
  icon: String,
  title: String,
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
  <!-- Invest and Lottery -->
  <div
    class="relative w-full flex flex-col items-center justify-center mb-1"
    @click="toggleSelection"
    :class="{ 'bg-gray-200': selected, 'cursor-pointer': true }"
  >
    <!-- Card component as background -->
    <img :src="card" class="w-[90%] h-auto" />

    <!-- Overlayed content on top of card -->
    <div
      class="absolute top-0 left-5 w-full h-full flex flex-col items-start justify-center pointer-events-none"
    >
      <!-- Icon and Title/Text in the same row -->
      <div class="w-[60%] flex items-center">
        <!-- Icon -->
        <div class="flex-1 flex justify-center">
          <img :src="icon" class="w-[55%] h-auto" />
        </div>
        <!-- Title and Text in same column -->
        <div class="flex-1 flex-col space-y-1">
          <p class="text-[0.9rem] w-[180%] text-black font-prompt font-medium whitespace-pre-line">
            {{ title }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
