import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/warning',
      name: 'content warning',
      component: () => import('../views/WarningView.vue'),
    },
    {
      path: '/about',
      name: 'about us',
      component: () => import('../views/AboutUsView.vue'),
    },
    {
      path: '/intro',
      name: 'intro panel',
      component: () => import('../views/IntroView.vue'),
    },
    {
      path: '/setup',
      name: 'life setup',
      component: () => import('../views/SetupView.vue'),
    },
    {
      path: '/start',
      name: 'This is your life',
      component: () => import('../views/StartLifeView.vue'),
    },
    {
      path: '/event',
      name: 'random event',
      component: () => import('../views/EventView.vue'),
    },
    {
      path: '/action',
      name: 'action',
      component: () => import('../views/ActionView.vue'),
    },
    {
      path: '/invest',
      name: 'invest',
      component: () => import('../views/InvestView.vue'),
    },
    {
      path: '/lottery',
      name: 'lottery',
      component: () => import('../views/LotteryView.vue'),
    },
    {
      path: '/loading',
      name: 'loading',
      component: () => import('../views/LoadingView.vue'),
    },
    {
      path: '/summary',
      name: 'round summary',
      component: () => import('../views/RoundSummaryView.vue'),
    },
    {
      path: '/result',
      name: 'result',
      component: () => import('../views/ResultView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

export default router
