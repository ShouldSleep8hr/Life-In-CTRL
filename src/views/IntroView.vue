<script setup lang="ts">
import SvgButton from '../components/SvgButton.vue'
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'

const router = useRouter()

// Panel image imports
const panel_1 = new URL('../assets/IntroPanel/SVG/Panel_1_1.svg', import.meta.url).href
const panel_2 = new URL('../assets/IntroPanel/SVG/Panel_1_2.svg', import.meta.url).href
const panel_3 = new URL('../assets/IntroPanel/SVG/Panel_1_3.svg', import.meta.url).href
const panel_4 = new URL('../assets/IntroPanel/SVG/Panel_1_4.svg', import.meta.url).href
const panel_5 = new URL('../assets/IntroPanel/SVG/Panel_1_5.svg', import.meta.url).href

const panel_6 = new URL('../assets/IntroPanel/SVG/Panel_2_1.svg', import.meta.url).href
const panel_7 = new URL('../assets/IntroPanel/SVG/Panel_Angel.svg', import.meta.url).href
const panel_8 = new URL('../assets/IntroPanel/SVG/Panel_2_2.svg', import.meta.url).href

// States
const showPanel1 = ref(false)
const showPanel2 = ref(false)
const showPanel3 = ref(false)
const showPanel4 = ref(false)
const showPanel5 = ref(false)

const showPhase1 = ref(true)
const showPanel6 = ref(false)
const showPanel7 = ref(false)
const showPanel8 = ref(false)

// Background
const bg = new URL(`../assets/Background/Title.svg`, import.meta.url).href

// Show Phase 1 panels step-by-step
onMounted(() => {
  setTimeout(() => (showPanel1.value = true), 0)
  setTimeout(() => (showPanel2.value = true), 1000)
  setTimeout(() => (showPanel3.value = true), 2000)
  setTimeout(() => (showPanel4.value = true), 3000)
  setTimeout(() => (showPanel5.value = true), 4000)
})

// Handle clicking screen
const goToPhase2 = () => {
  // If we're still in Phase 1, transition to Phase 2
  if (showPhase1.value) {
    showPhase1.value = false
    showPanel1.value = false
    showPanel2.value = false
    showPanel3.value = false
    showPanel4.value = false
    showPanel5.value = false

    showPanel6.value = true

    setTimeout(() => {
      showPanel7.value = true
    }, 1000)

    setTimeout(() => {
      showPanel8.value = true
    }, 2500)

    return
  }

  // If Phase 2 is already showing, go to next page
  router.push('/setup')
}
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
        @click="goToPhase2"
      >
        <!-- Overlay covers whole background -->
        <div class="absolute inset-0 bg-white opacity-80 rounded-xl z-0"></div>

        <!-- Scrollable content wrapper ABOVE overlay -->
        <div class="relative flex flex-col justify-between p-4 gap-4 h-full overflow-y-auto z-10">
        <!-- Intro Panel -->
        <div
          v-if="showPhase1"
          class="z-10 flex-1 flex flex-col items-center justify-start pt-[5rem] space-y-2"
        >
          <!-- Phase 1 panels -->
          <div class="flex justify-center items-start w-full space-x-2">
            <!-- Panel 1-3 -->
            <div class="flex flex-col items-center w-full">
              <Transition name="fade">
                <img v-if="showPanel1" :src="panel_1" class="w-full h-auto" />
              </Transition>
              <Transition name="fade">
                <img v-if="showPanel3" :src="panel_3" class="w-full h-auto -mt-[1.1rem]" />
              </Transition>
            </div>
            <!-- SPanel 2-4 -->
            <div class="flex flex-col items-center w-full">
              <Transition name="fade">
                <img v-if="showPanel2" :src="panel_2" class="w-full h-auto" />
              </Transition>
              <Transition name="fade">
                <img v-if="showPanel4" :src="panel_4" class="w-full h-auto -mt-[1.1rem]" />
              </Transition>
            </div>
          </div>

          <!-- Panel 5 -->
          <div class="flex justify-center w-full">
            <Transition name="fade">
              <img v-if="showPanel5" :src="panel_5" class="w-full h-auto" />
            </Transition>
          </div>
        </div>

        <div class="z-10 flex-1 flex flex-col items-center justify-start pt-[5rem] space-y-2">
          <!-- Panel 6 + 7 Layered Together -->
          <div class="relative w-full flex justify-center">
            <Transition name="fade">
              <img v-if="showPanel6" :src="panel_6" class="w-full h-auto" />
            </Transition>
            <Transition name="fade">
              <img v-if="showPanel7" :src="panel_7" class="absolute inset-0 w-full h-auto m-auto" />
            </Transition>
          </div>

          <!-- Panel 8 -->
          <div class="flex justify-center w-full">
            <Transition name="fade">
              <img v-if="showPanel8" :src="panel_8" class="w-full h-auto -mt-[3.3rem]" />
            </Transition>
          </div>
        </div>

        <!-- text at bottom -->
        <div class="absolute bottom-0 left-0 right-0 flex justify-center opacity-15 z-20">
          <p class="text-2xl text-black font-prompt font-semibold">
                กดเพื่อไปต่อ
          </p>
        </div>
      </div>
    </div>
    </div>
  </main>
</template>
