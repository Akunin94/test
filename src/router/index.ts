import {createRouter, createWebHashHistory} from 'vue-router';

import Cart from '@/views/Cart.vue'
import Main from '@/views/Main.vue'

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
  }
]

const router = createRouter({
  routes, 
  history: createWebHashHistory()
})

export default router
