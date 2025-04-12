<script setup lang="ts">
import SvgButton from '../components/SvgButton.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Function to handle the button click
const handleButtonClick = () => {
  router.push('/setup')
}
const icon = new URL(`../assets/Logo_V1/Logo_V1_Full.svg`, import.meta.url).href
</script>

<template>
  <main class="h-full flex items-center justify-center bg-gray-100 w-full">
    <!-- Phone wrapper to limit height -->
    <div class="w-full max-w-[440px] max-h-[99vh] aspect-[440/956]">
      <!-- Phone container -->
      <div class="w-full h-full bg-white rounded-xl shadow-lg flex flex-col justify-between p-4">
        <!-- Logo in center -->
        <div class="flex-1 flex items-end justify-center">
          <img :src="icon" alt="Logo" class="w-[55%] h-auto" />
        </div>

        <div class="flex-1 flex items-center justify-center">
          <div class="flex flex-col items-center w-[80%] space-y-2">
            <SvgButton name="Button_Green_Active" text="START" @click="handleButtonClick" />
            <SvgButton name="Button_Grey" text="ABOUT THIS PROJECT" @click="handleButtonClick" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
