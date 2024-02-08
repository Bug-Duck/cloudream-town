import { createRouter, createWebHistory } from 'vue-router'
import Town from './Town.vue'
import Plan from './Plan.vue'
import About from './About.vue'

const routes = [
  { path: '/', redirect: '/town' },
  { path: '/town', component: Town, meta: { title: '云梦艺游 | 云梦小镇' } },
  { path: '/plan', component: Plan, meta: { title: '云梦艺游 | 云梦计划' } },
  { path: '/about', component: About, meta: { title: '云梦艺游 | 关于我们' } },
]

const router = createRouter({ history: createWebHistory(), routes })

export default router
