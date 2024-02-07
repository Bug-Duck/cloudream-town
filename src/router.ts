import { createRouter, createWebHistory } from 'vue-router'
import Town from './components/Town.vue'
import Plan from './components/Plan.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Town,
    },
    {
      path: '/cloudream-town',
      component: Town,
    },
    {
      path: '/cloudream-plan',
      component: Plan,
    },
  ],
})

export default router
