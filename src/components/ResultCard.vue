<script setup>
import { defineAsyncComponent } from 'vue'
import SvgButton from './SvgButton.vue'
// @ts-ignore
import { userStore } from '../stores/userStore.js'
import { useRouter } from 'vue-router'

const router = useRouter()

const status = userStore()

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true, // Text will be passed from the parent view
  },
})

// const icon = defineAsyncComponent(() => import(`../assets/Result Cards/SVG/${props.name}.svg`))
const icon = new URL(`../assets/Result Cards/SVG/${props.name}.svg`, import.meta.url).href

function handleButtonClick() {
  status.resetStatus()
  router.push('/')
}
</script>

<template>
  <main class="h-full flex items-center justify-center bg-gray-100 w-full font-prompt">
    <!-- Phone wrapper -->
    <div class="w-full max-w-[440px] max-h-[99vh] aspect-[440/956]">
      <!-- Phone container -->
      <div
        class="w-full h-full bg-white rounded-xl shadow-lg flex flex-col p-4 gap-4 overflow-y-auto"
      >
        <!-- Result Icon -->
        <div class="flex flex-1 justify-center items-center w-full">
          <div class="w-[60%]">
            <img :src="icon" />
          </div>
        </div>

        <!-- Result Text -->
        <div class="flex flex-1 justify-center items-center">
          <p class="text-sm text-center text-black w-[90%] leading-snug">
            {{ text }}
          </p>
        </div>

        <!-- Status Icons -->
        <div class="flex-1 w-[60%] mx-auto grid grid-cols-2 gap-y-2 gap-x-10 mb-6 text-black">
          <!-- Career -->
          <div class="flex items-center gap-3">
            <img src="../assets/Icons/SVG/Icon_Career.svg" class="w-10 h-10" />
            <span class="text-base font-semibold">{{ status.career }}%</span>
          </div>

          <!-- Money -->
          <div class="flex items-center gap-3">
            <img src="../assets/Icons/SVG/Icon_Money.svg" class="w-10 h-10" />
            <span class="text-base font-semibold">{{ status.money }}</span>
          </div>

          <!-- Health -->
          <div class="flex items-center gap-3">
            <img src="../assets/Icons/SVG/Icon_Health.svg" class="w-10 h-10" />
            <span class="text-base font-semibold">{{ status.health }}%</span>
          </div>

          <!-- Relationship -->
          <div class="flex items-center gap-3">
            <img src="../assets/Icons/SVG/Icon_Relationship.svg" class="w-10 h-10" />
            <span class="text-base font-semibold">{{ status.relationship }}%</span>
          </div>
        </div>

        <!-- Buttons -->
        <div class="flex flex-1 flex-col w-[80%] mx-auto space-y-2 mb-10">
          <div class="flex gap-3">
            <SvgButton class="flex-1" name="Button_GreenS_Active" text="SAVE IMAGE" />
            <SvgButton class="flex-1" name="Button_GreenS_Active" text="SHARE" />
          </div>
          <SvgButton
            name="Button_Red_Active"
            text="EXPLORE MORE ENDING"
            @click="handleButtonClick()"
          />
        </div>
      </div>
    </div>
  </main>
</template>
