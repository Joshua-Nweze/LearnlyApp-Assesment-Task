import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AddProductView from '@/views/AddProductView.vue'
import ProductView from '@/views/ProductView.vue'
import CreateAccountView from '@/views/CreateAccountView.vue'
import LoginView from '@/views/LoginView.vue'

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
      path: '/product/:id',
      name: 'product',
      component: ProductView
    },
    {
      path: '/create-account',
      name: 'create-account',
      component: CreateAccountView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
  ]
})

export default router
