import routes from "./router";
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes
  })
router.beforeEach((to, from, next) => {
    console.log("前置守卫")
    // if (to.meta.title) {
      // let document:Document
      // document.title = to.meta.title || '首页'
  // }
    next()
  })
  export default router


