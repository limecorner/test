import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/RefAndReactive',
    name: 'RefAndReactive',
    component: () => import(/* webpackChunkName: "about" */ '../views/RefAndReactive.vue')
  },
  {
    path: '/Computed',
    name: 'Computed',
    component: () => import(/* webpackChunkName: "about" */ '../views/Computed.vue')
  },
  {
    path: '/Provide',
    name: 'Provide',
    component: () => import(/* webpackChunkName: "about" */ '../views/Provide.vue')
  },
  {
    path: '/Composable',
    name: 'Composable',
    component: () => import(/* webpackChunkName: "about" */ '../views/Composable.vue')
  },
  {
    path: '/VBindInStyle',
    name: 'VBindInStyle',
    component: () => import(/* webpackChunkName: "about" */ '../views/VBindInStyle.vue')
  },
  {
    path: '/Teleport',
    name: 'Teleport',
    component: () => import(/* webpackChunkName: "about" */ '../views/Teleport.vue')
  },
  {
    path: '/Slot',
    name: 'Slot',
    component: () => import(/* webpackChunkName: "about" */ '../views/Slot.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
