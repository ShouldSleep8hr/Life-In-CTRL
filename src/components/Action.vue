<script setup>
import { computed } from 'vue'

const props = defineProps({
  card: String,
  cardSelected: String,
  icon: String,
  title: String,
  text: String,
  selected: Boolean,
  disabled: Boolean,
})

const emit = defineEmits(['select-action'])

// function toggleSelection() {
//   emit('select-action')
// }

function toggleSelection() {
  if (props.disabled) return
  emit('select-action')
}

const card_default = computed(
  () => new URL(`../assets/Cards/${props.card}.svg`, import.meta.url).href,
)
const card_selected = computed(
  () => new URL(`../assets/Cards/${props.cardSelected}.svg`, import.meta.url).href,
)
const selected_icon = new URL(`../assets/Icons/SVG/Icon_Selected.svg`, import.meta.url).href
</script>

<template>
  <!-- Action Card -->
  <div
    class="relative w-full flex flex-col items-center justify-center mb-1"
    @click="toggleSelection"
    :class="{ 'cursor-pointer': !disabled, 'opacity-40': disabled }"
  >
    <!-- Card background -->
    <!-- <img :src="card" class="w-full h-auto" /> -->
    <!-- <img
      :src="props.cardSelected && props.selected ? card_selected : card_default"
      class="w-[90%] h-auto"
    /> -->
    <img
      :src="props.cardSelected && props.selected ? card_selected : card_default"
      class="w-[90%] h-auto"
    />

    <!-- Overlay content -->
    <div
      class="absolute top-2 left-0 w-full h-full flex flex-col items-center justify-start pointer-events-none"
    >
      <!-- Top-right icon ( checkmark ) -->
      <img
        v-if="selected"
        :src="selected_icon"
        class="absolute top-[-20%] right-[-3%] w-[20%] h-auto"
      />

      <!-- Icon + Title -->
      <div class="w-[90%] flex items-center space-x-1.5 mb-1 pl-2">
        <!-- Icon -->
        <div class="w-[28%] flex justify-center">
          <img :src="icon" class="w-[100%] h-auto" />
        </div>

        <!-- Title with fixed height and wrap -->
        <div class="w-[75%] h-[2.2rem] flex items-center">
          <p class="text-left text-[0.75rem] font-prompt font-semibold text-black leading-tight">
            {{ title }}
          </p>
        </div>
      </div>

      <!-- Status Text -->
      <div class="w-[75%] text-left text-[0.6rem] font-prompt font-light leading-tight text-black">
        <p class="whitespace-pre-line">
          {{ text }}
        </p>
      </div>
    </div>
  </div>
</template>
