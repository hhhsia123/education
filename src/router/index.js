import { createRouter, createWebHistory } from 'vue-router'
const LayOut = () => import('../views/Layout.vue')

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: LayOut
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
