import { createRouter, createWebHistory } from 'vue-router'
const LayOut = () => import('../views/Layout.vue')
const registerLogin = () => import('../components/login/login.vue')

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: LayOut,
    children: [
      { path: '/user/login', component: registerLogin }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
