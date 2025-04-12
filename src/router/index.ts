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
      component: () => import('../views/Event_View.vue'),
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
      path: '/summary',
      name: 'round summary',
      component: () => import('../views/RoundSummaryView.vue'),
    },
    {
      path: '/result/1',
      name: 'result/1',
      component: () => import('../views/Result_01_View.vue'),
    },
    {
      path: '/result/2',
      name: 'result/2',
      component: () => import('../views/Result_02_View.vue'),
    },
    {
      path: '/result/3',
      name: 'result/3',
      component: () => import('../views/Result_03_View.vue'),
    },
    {
      path: '/result/4',
      name: 'result/4',
      component: () => import('../views/Result_04_View.vue'),
    },
    {
      path: '/result/5',
      name: 'result/5',
      component: () => import('../views/Result_05_View.vue'),
    },
    {
      path: '/result/6',
      name: 'result/6',
      component: () => import('../views/Result_06_View.vue'),
    },
    {
      path: '/result/7',
      name: 'result/7',
      component: () => import('../views/Result_07_View.vue'),
    },
    {
      path: '/result/8',
      name: 'result/8',
      component: () => import('../views/Result_08_View.vue'),
    },
    {
      path: '/result/9',
      name: 'result/9',
      component: () => import('../views/Result_09_View.vue'),
    },
    {
      path: '/result/10',
      name: 'result/10',
      component: () => import('../views/Result_10_View.vue'),
    },
  ],
})

export default router
