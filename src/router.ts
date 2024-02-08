import { createRouter, createWebHistory } from 'vue-router'
import Town from './Town.vue'
import Plan from './Plan.vue'
import About from './About.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/town' },
    { path: '/town', component: Town },
    { path: '/plan', component: Plan },
    { path: '/about', component: About },
  ],
})

export default router
