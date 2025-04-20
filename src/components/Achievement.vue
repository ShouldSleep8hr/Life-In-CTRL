<script setup>

const props = defineProps({
  icon: String,
  title: String,
  text: String,
})

</script>

<template>
  <div class="relative w-full flex flex-col items-center justify-center mb-1">
    <!-- Gray background card -->
    <div class="h-[4.3rem] w-[90%] bg-[#e3e0db] rounded-lg shadow-md flex items-center p-3">
      
      <!-- Icon with white square behind it -->
      <div class="opacity-80 flex-shrink-0 w-12 h-12 mr-3 bg-white rounded-md flex items-center justify-center">
        <img :src="icon" class="w-[70%] h-[70%] object-contain" />
      </div>

      <!-- Title & Text -->
      <div class="flex flex-col gap-y-2">
        <p class="text-sm text-black font-prompt font-medium">
          {{ title }}
        </p>
        <p class="text-xs text-black font-prompt font-light leading-tight">
          {{ text }}
        </p>
      </div>
    </div>
  </div>
</template>


