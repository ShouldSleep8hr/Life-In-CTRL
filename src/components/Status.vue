<script setup>
const props = defineProps({
  text_career: String,
  text_money: String,
  text_health: String,
  text_relationship: String,
})

const card = new URL('../assets/Cards/Card_Sil_Active.svg', import.meta.url).href
</script>

<template>
  <!-- Container with relative positioning -->
  <div class="relative w-full flex items-center justify-center font-prompt">
    <!-- Card background image -->
    <img :src="card" class="w-[100%] h-auto" />

    <!-- Overlayed content -->
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="flex flex-row justify-between items-center w-[90%]">
        <!-- Career -->
        <div class="flex flex-col items-center gap-2 flex-1">
          <img src="../assets/Icons/SVG/Icon_Career.svg" alt="Career" class="w-[40%] h-auto" />
          <span class="text-black font-semibold text-xs text-center">{{ text_career }}</span>
        </div>

        <!-- Money -->
        <div class="flex flex-col items-center gap-2 flex-1">
          <img src="../assets/Icons/SVG/Icon_Money.svg" alt="Money" class="w-[40%] h-auto" />
          <span class="text-black font-semibold text-xs text-center">{{ text_money }}</span>
        </div>

        <!-- Health -->
        <div class="flex flex-col items-center gap-2 flex-1">
          <img src="../assets/Icons/SVG/Icon_Health.svg" alt="Health" class="w-[40%] h-auto" />
          <span class="text-black font-semibold text-xs text-center">{{ text_health }}</span>
        </div>

        <!-- Relationship -->
        <div class="flex flex-col items-center gap-2 flex-1">
          <img
            src="../assets/Icons/SVG/Icon_Relationship.svg"
            alt="Relationship"
            class="w-[40%] h-auto"
          />
          <span class="text-black font-semibold text-xs text-center">{{ text_relationship }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
