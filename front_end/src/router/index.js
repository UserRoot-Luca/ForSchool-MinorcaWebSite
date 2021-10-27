import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/places_of_interest',
    name: 'PlacesOfInterest',
    component: () => import('../views/PlacesOfInterest.vue')
  },
  {
    path: '/beaches',
    name: 'Beaches',
    component: () => import('../views/Beaches.vue')
  },
  {
    path: '/gastronomy',
    name: 'Gastronomy',
    component: () => import('../views/Gastronomy.vue')
  },
  {
    path: '/history',
    name: 'History',
    component: () => import('../views/History.vue')
  },
  {
    path: '/pubs_and_restaurants',
    name: 'PubsAndRestaurants',
    component: () => import('../views/PubsAndRestaurants.vue')
  },
  {
    path: '/vehicles_rental',
    name: 'VehiclesRental',
    component: () => import('../views/VehiclesRental.vue')
  },
  {
    path: '/how_to_get_here',
    name: 'HowToGetHere',
    component: () => import('../views/HowToGetHere.vue')
  },
  {
    path: '/accomodations',
    name: 'Accomodations',
    component: () => import('../views/Accomodations.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
