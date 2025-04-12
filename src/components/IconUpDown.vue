<script setup>
import { defineAsyncComponent } from 'vue'

const props = defineProps({
  icon: String,
  arrow: String,
  class: {
    type: String,
    default: '',
  },
})

const icon = new URL(`../assets/Icons/SVG/Icon_${props.icon}.svg`, import.meta.url).href
const arrow = new URL(`../assets/Icons/SVG/Icon_${props.arrow}_S.svg`, import.meta.url).href
</script>

<template>
  <!-- Icon with arrow up/down on bottom right corner -->
  <div class="relative w-full flex flex-col items-center justify-center mb-1" :class="props.class">
    <!-- icon component as background -->
    <img :src="icon" class="w-full h-auto" />

    <!-- Overlayed arrow on top of icon -->
    <div
      v-if="props.arrow"
      class="absolute w-full h-full flex items-end justify-end pointer-events-none"
    >
      <img :src="arrow" class="w-[50%]" />
    </div>
  </div>
</template>
