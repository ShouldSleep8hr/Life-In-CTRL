<script setup>
import { defineAsyncComponent } from 'vue'
import IconUpDown from '../components/IconUpDown.vue'

const props = defineProps({
  card: String,
  cardSelected: String,
  icon: String,
  title: String,
  text: String,
  selected: Boolean,

  icon_1: String,
  arrow_1: String,
  text_1: String,
  icon_2: String,
  arrow_2: String,
  text_2: String,

  icon_3: String, // optional
  arrow_3: String, // optional
  text_3: String, // optional

  disabled: Boolean,
})

const card_default = new URL(`../assets/Cards/${props.card}.svg`, import.meta.url).href
const card_selected = new URL(`../assets/Cards/${props.cardSelected}.svg`, import.meta.url).href
const icon = new URL(`../assets/Icons/SVG/${props.icon}.svg`, import.meta.url).href

const emit = defineEmits(['select-action'])

function toggleSelection() {
  if (props.disabled) return
  emit('select-action')
}

const selected_icon = new URL(`../assets/Icons/SVG/Icon_Selected.svg`, import.meta.url).href
</script>

<template>
  <!-- Action Card -->
  <div
    class="relative w-full flex flex-col items-center justify-center mb-1"
    @click="toggleSelection"
    :class="{ 'cursor-pointer': !disabled, 'opacity-40': disabled }"
  >
    <!-- Card component as background -->
    <!-- <img :src="card" class="w-[90%] h-auto" /> -->
    <img
      :src="props.cardSelected && props.selected ? card_selected : card_default"
      class="w-[90%] h-auto"
    />

    <!-- Overlayed content on top of card -->
    <div
      class="absolute top-0 left-8 w-full h-full flex flex-col items-start justify-center pointer-events-none"
    >
      <!-- Top-right icon ( checkmark ) -->
      <img
        v-if="selected"
        :src="selected_icon"
        class="absolute top-[-7%] right-[11%] w-[12%] h-auto"
      />
      <!-- Icon and Title/Text in the same row -->
      <div class="w-[90%] flex items-center justify-cente pl-4 gap-x-6">
        <!-- Icon: fixed width so it doesn't shrink -->
        <div class="w-[20%] flex items-center justify-center">
          <img :src="icon" class="h-auto" />
        </div>

        <!-- Title + description + icons: take the rest -->
        <div class="w-[70%] flex flex-col space-y-1">
          <p class="text-[0.9rem] text-black font-prompt font-medium">
            {{ title }}
          </p>
          <p class="text-[0.7rem] text-black font-prompt font-light">
            {{ text }}
          </p>

          <!-- icon+text rows -->
          <div class="flex flex-col pt-2 space-y-1">
            <!-- Row: icon 1 and 3 -->
            <div class="flex space-x-5 w-full">
              <!-- Icon 1 -->
              <div class="flex items-center space-x-1.5">
                <div class="w-6">
                  <IconUpDown class="w-full" :icon="props.icon_1" :arrow="props.arrow_1" />
                </div>
                <p class="text-[0.65rem] text-black font-prompt font-light">
                  {{ text_1 }}
                </p>
              </div>

              <!-- Icon 3 (optional) -->
              <div
                v-if="props.icon_3 && props.arrow_3 && props.text_3"
                class="flex items-center space-x-1.5"
              >
                <div class="w-6">
                  <IconUpDown class="w-full" :icon="props.icon_3" :arrow="props.arrow_3" />
                </div>
                <p class="text-[0.65rem] text-black font-prompt font-light">
                  {{ text_3 }}
                </p>
              </div>
              <div></div>
            </div>

            <!-- Row: icon 2 -->
            <div class="flex items-center space-x-1.5 w-full">
              <div class="w-6">
                <IconUpDown class="w-full" :icon="props.icon_2" :arrow="props.arrow_2" />
              </div>
              <p class="text-[0.65rem] text-black font-prompt font-light">
                {{ text_2 }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
