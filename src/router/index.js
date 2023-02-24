import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      // route level code-splitting
      // this generates a separate chunk (Discord.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      path: '/discord',
      name: 'discord',
      component: () => import('../views/DiscordView.vue')
    }
  ]
})

export default router
