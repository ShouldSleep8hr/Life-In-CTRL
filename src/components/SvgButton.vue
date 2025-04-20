<script setup>
import { defineAsyncComponent } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  disabledName: String,
  text: {
    type: String,
    default: '',
  },
  class: {
    type: String,
    default: '',
  },
  disabled: Boolean,
})

const icon = new URL(`../assets/Button/${props.name}.svg`, import.meta.url).href
const icon_2 = new URL(`../assets/Button/${props.disabledName}.svg`, import.meta.url).href
// const icon = defineAsyncComponent(() => import(`../assets/Button/${props.name}.svg`))

const emit = defineEmits(['click'])

function handleIconClick() {
  if (props.disabled) return // Prevent click if disabled
  emit('click') // Otherwise emit as expected
}
</script>

<template>
  <div
    class="relative inline-block"
    :class="[props.class, props.disabled ? 'cursor-not-allowed' : 'cursor-pointer']"
    @click="handleIconClick"
  >
    <!-- :class="[props.class, props.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer']" -->

    <!-- <component :is="icon" class="w-full h-auto" /> -->
    <!-- <img :src="icon" class="w-full h-auto" /> -->
    <img :src="props.disabled && props.disabledName ? icon_2 : icon" class="w-full h-auto" />

    <span
      v-if="text"
      class="absolute inset-0 bottom-[20%] flex items-center justify-center text-white text-sm pointer-events-none font-bold font-prompt"
      style="-webkit-text-stroke: 2.5px black; paint-order: stroke fill"
    >
      {{ text }}
    </span>
  </div>
</template>
