<script setup>
import { defineAsyncComponent } from 'vue'

const props = defineProps({
  round: String,
  number: String,
  class: {
    type: String,
    default: '',
  },
})

const panel = new URL(`../assets/TimeSkipPanel/SVG/TimeSkipPanel_${props.round}_${props.number}.svg`, import.meta.url).href
</script>

<template>
  <img :src="panel" class="w-[100%] h-auto" :class="props.class" />
</template>
