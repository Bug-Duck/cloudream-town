import { createRouter, createWebHistory } from 'vue-router'
import Town from './Town.vue'
import Plan from './Plan.vue'
import About from './About.vue'

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
    {
      path: '/about',
      component: About,
    },
  ],
})

export default router
