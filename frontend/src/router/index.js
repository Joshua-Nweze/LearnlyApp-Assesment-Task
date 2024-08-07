import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AddProductView from '@/views/AddProductView.vue'
import ProductView from '@/views/ProductView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/add-product',
      name: 'add-product',
      component: AddProductView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/product',
      name: 'product',
      component: ProductView
    },
  ]
})

export default router
