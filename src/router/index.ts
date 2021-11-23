import routes from "./router";
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes
  })
router.beforeEach((to, from, next) => {
    console.log("前置守卫beforeEach...")
  //   if (to.meta.title) {
  //     let document:any
  //     document.title = to.meta.title || '首页'
  // }

//   if (to.meta.title) {
//     document.title = to.meta.title
// } else {
//     document.title = '默认标题' //此处写默认的title
// }
    next()
  })
  router.beforeResolve((to, from, next) => {
    console.log("beforeResolve...")
    next()
  })
  router.afterEach((to, from) => {
    console.log("afterEach...")
  })
  export default router


