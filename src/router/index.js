import { createRouter, createWebHistory } from 'vue-router'
const Layout = () => import('../views/Layout.vue')

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
