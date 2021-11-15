import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import index from '../views/index/index.vue'

const routes: Array<RouteRecordRaw> = [

  {
    path: '/',
    name: 'index',
    component: index,
  
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/login.vue'),
    
  }
 
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
