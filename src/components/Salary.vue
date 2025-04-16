<script setup>
import { defineAsyncComponent } from 'vue'

const props = defineProps({
  card: String,
  cardSelected: String,
  icon: String,
  title: String,
  text: String,
  selected: Boolean,
})

const emit = defineEmits(['select-action'])

function toggleSelection() {
  emit('select-action')
}

const card_default = new URL(`../assets/Cards/${props.card}.svg`, import.meta.url).href
const card_selected = new URL(`../assets/Cards/${props.cardSelected}.svg`, import.meta.url).href
</script>

<template>
  <!-- Action Card -->
  <div
    class="relative w-full flex flex-col items-center justify-center mb-1"
    :class="{ 'cursor-pointer': true }"
    @click="toggleSelection"
  >
    <!-- :class="{ 'bg-gray-200': selected, 'cursor-pointer': true }" -->
    <!-- Card component as background -->
    <!-- <img :src="card" class="w-[90%] h-auto" /> -->
    <!-- <img :src="selected ? cardSelected : card" class="w-[90%] h-auto" /> -->
    <img
      :src="props.cardSelected && props.selected ? card_selected : card_default"
      class="w-[90%] h-auto"
    />

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
          <p class="text-[0.9rem] w-[180%] text-black font-prompt font-medium">
            {{ title }}
          </p>
          <p class="text-xs text-black font-prompt font-light">
            {{ text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
