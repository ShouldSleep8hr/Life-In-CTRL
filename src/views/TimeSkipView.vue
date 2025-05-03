<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref, onMounted, computed } from 'vue'
// @ts-ignore
import { userStore } from '../stores/userStore.js'

import TimeSkipPanel from '../components/TimeSkipPanel.vue'

const router = useRouter()

const status = userStore()

// States
const showPanel1 = ref(false)
const showPanel2 = ref(false)
const showPanel3 = ref(false)

// Background
const bg = new URL(`../assets/Background/Title.svg`, import.meta.url).href

// Show Phase 1 panels step-by-step
onMounted(() => {
  setTimeout(() => (showPanel1.value = true), 0)
  setTimeout(() => (showPanel2.value = true), 1000)
  setTimeout(() => (showPanel3.value = true), 2000)
  setTimeout(() => {
    router.push('/summary')
  }, 3500)
})

// Handle clicking screen
// const goToNextPage = () => {
//   router.push('/summary')
// }

const time = new URL(`../assets/Icons/SVG/Icon_Loading.svg`, import.meta.url).href

// onMounted(() => {
//   setTimeout(() => {
//     router.push('/summary')
//   }, 3000)
// })

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

@keyframes spin-with-pause {
  0% {
    transform: rotate(0deg);
  }
  90% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.spin-with-pause {
  animation: spin-with-pause 3s linear infinite;
}
</style>

<!-- Phase 1 -->
<template>
  <main class="h-full flex items-center justify-center w-full">
    <!-- Phone wrapper to limit height -->
    <div class="w-full max-w-[440px] max-h-[99vh] aspect-[440/956]">
      <!-- Phone container -->
      <div
        class="relative w-full h-full rounded-xl shadow-lg bg-no-repeat bg-center bg-cover"
        :style="{ backgroundImage: `url(${bg})` }"
      >
        <!-- Overlay covers whole background -->
        <div class="absolute inset-0 bg-white opacity-80 rounded-xl z-0"></div>

        <!-- Scrollable content wrapper ABOVE overlay -->
        <div class="relative flex flex-col justify-between p-4 gap-4 h-full overflow-y-auto z-10">
        <!-- Intro Panel -->
        <div
          class="z-10 flex-1 flex flex-col items-center justify-start pt-[5rem] space-y-2"
        >
          <!-- Time skip panels -->
          <div class="grid grid-cols-2 grid-rows-[auto_auto] gap-2 w-full">
            <!-- Panel 1 (row 1, col 1) -->
            <div>
              <Transition name="fade">
                <!-- <img v-if="showPanel1" :src="panel_1" class="w-[100%] h-auto" /> -->
                <TimeSkipPanel v-if="showPanel1" :round="status.round - 1" :number="1"/>
              </Transition>
            </div>

            <!-- Panel 2 (row 1, col 2) -->
            <div>
              <Transition name="fade">
                <!-- <img v-if="showPanel2" :src="panel_2" class="pl-2 w-[100%] h-auto" /> -->
                <TimeSkipPanel v-if="showPanel2" :round="status.round - 1" :number="2" class="pl-2"/>
              </Transition>
            </div>

            <!-- Panel 3 (row 2, col 1–2, spans both columns) -->
            <div class="col-span-2">
              <Transition name="fade">
                <!-- <img v-if="showPanel3" :src="panel_3" class="w-full h-auto -mt-[3rem]" /> -->
                <TimeSkipPanel v-if="showPanel3" :round="status.round - 1" :number="3" class="-mt-[3rem]"/>
              </Transition>
            </div>
          </div>

          <!-- Absolute centered time image -->
          <div class="absolute top-[20rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[25%]">
            <img class="w-full spin-with-pause" :src="time" />
          </div>


          <!-- text at bottom -->
          <!-- <div class="h-[10rem] flex items-center justify-center opacity-15 z-20">
            <Transition name="fade">
              <p class="text-2xl text-black font-prompt font-semibold">
                  กดเพื่อไปต่อ
              </p>
            </Transition>
          </div> -->
        </div>
      </div>
    </div>
    </div>
  </main>
</template>
