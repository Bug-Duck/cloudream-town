import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Town from './pages/Town.vue'
import Plan from './pages/Plan.vue'
import About from './pages/About.vue'

const routes = [
  { path: '/', component: Home, meta: { title: '首页' } },
  { path: '/town', component: Town, meta: { title: '云梦小镇' } },
  { path: '/plan', component: Plan, meta: { title: '云梦计划' } },
  { path: '/about', component: About, meta: { title: '关于我们' } },
]

const router = createRouter({ history: createWebHistory(), routes })

export default router
