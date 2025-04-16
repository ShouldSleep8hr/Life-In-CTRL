<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
// @ts-ignore
import { userStore } from '../stores/userStore.js'

const router = useRouter()

const status = userStore()

// Background
const bg = new URL(`../assets/Background/Title.svg`, import.meta.url).href

function handleButtonClick() {
  router.push('/summary')
}

const time = new URL(`../assets/Icons/SVG/Icon_Loading.svg`, import.meta.url).href

onMounted(() => {
  setTimeout(() => {
    router.push('/summary')
  }, 3000)
})
</script>

<style scoped>
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
        class="w-full h-full rounded-xl shadow-lg flex flex-col justify-between p-4 overflow-y-auto bg-no-repeat bg-center bg-cover"
        :style="{ backgroundImage: `url(${bg})` }"
        @click="handleButtonClick"
      >
        <div class="flex-1 flex flex-col items-center justify-center gap-y-4 w-full">
          <p class="text-lg text-black font-prompt font-semibold">5 ปีผ่านไป</p>
          <div class="w-[30%]">
            <img class="w-full spin-with-pause" :src="time" />
          </div>
          <p class="text-lg text-black font-prompt font-semibold">
            ตอนนี้คุณอายุ {{ status.age }} แล้ว
          </p>
        </div>
      </div>
    </div>
  </main>
</template>
