import routes from "./router";
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  // console.log("前置守卫beforeEach...")
  // console.log(to)
  // console.log(to.path)
  // let goUrl=localStorage.getItem("goUrl")
  // // console.log(goUrl)
  // if(from.path=="/login"){
  //   localStorage.removeItem("goUrl")
  // }
  // if (to.path == "/login" && goUrl==null) {
  //   localStorage.setItem("goUrl",from.path)
  //   next()
  // }else if(to.path == "/login" && goUrl!=null){
  //   next(`${goUrl}`)
  // }else{
    next()
  // }
 
})
router.beforeResolve((to, from, next) => {
  // console.log("beforeResolve...")
  next()
})
router.afterEach((to, from) => {
  // console.log("afterEach...")
  // console.log(from)
})
export default router


