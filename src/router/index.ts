import {createRouter, createWebHashHistory} from 'vue-router';

import Cart from '@/views/Cart.vue'
import Product from '@/views/Product.vue'
import Main from '@/views/Main.vue'
import Favorites from '@/views/Favorites.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/product/:id',
    name: 'product',
    component: Product
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: Favorites
  }
]

const router = createRouter({
  routes, 
  history: createWebHashHistory()
})

export default router
