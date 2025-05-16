import { createRouter, createWebHistory } from 'vue-router'
import CategoriesView from '@/views/CategoriesView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: CategoriesView
  },
  {
    path: '/:category/products',
    name: 'products',
    component: () => import('@/views/ProductsView.vue')
  },
  {
    path: '/:category/product/:id',
    name: 'product',
    component: () => import('@/views/ProductView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/CartView.vue')
  }

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
