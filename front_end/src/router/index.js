import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },  
  {
    path: '/accomodations',
    name: 'Accomodations',
    component: () => import('../views/Accomodations.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
