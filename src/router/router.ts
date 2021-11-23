import { RouteRecordRaw } from 'vue-router'
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
    
  },
  {
    path: '/richText',
    name: 'richText',
    component: () => import(/* webpackChunkName: "login" */ '../views/richText/richText.vue'),
    
  },
  {
    path: '/css_s',
    name: 'css_s',
    component: () => import(/* webpackChunkName: "login" */ '../views/Tec/css_s/css_s.vue'),
    meta: { title: 'css' }
  },
  {
    path: '/git_s',
    name: 'git_s',
    component: () => import(/* webpackChunkName: "login" */ '../views/Tec/git_s/git_s.vue'),
  },
  {
    path: '/html_s',
    name: 'html_s',
    component: () => import(/* webpackChunkName: "login" */ '../views/Tec/html_s/html_s.vue'),
  },
  {
    path: '/java_s',
    name: 'java_s',
    component: () => import(/* webpackChunkName: "login" */ '../views/Tec/java_s/java_s.vue'),
  },
  {
    path: '/javaScript_s',
    name: 'javaScript_s',
    component: () => import(/* webpackChunkName: "login" */ '../views/Tec/javaScript_s/javaScript_s.vue'),
    beforeEnter: (to, from, next) => {
        console.log('这是javaScript_s独享守卫')
        next()
      }

  },
  {
    path: '/nodejs_s',
    name: 'nodejs_s',
    component: () => import(/* webpackChunkName: "login" */ '../views/Tec/nodejs_s/nodejs_s.vue'),
  },
  {
    path: '/php_s',
    name: 'php_s',
    component: () => import(/* webpackChunkName: "login" */ '../views/Tec/php_s/php_s.vue'),
  },
  {
    path: '/react_s',
    name: 'react_s',
    component: () => import(/* webpackChunkName: "login" */ '../views/Tec/react_s/react_s.vue'),
  },
  {
    path: '/springboot_s',
    name: 'springboot_s',
    component: () => import(/* webpackChunkName: "login" */ '../views/Tec/springboot_s/springboot_s.vue'),
  },
  {
    path: '/vue_s',
    name: 'vue_s',
    component: () => import(/* webpackChunkName: "login" */ '../views/Tec/vue_s/vue_s.vue'),
  },
  {
    path: '/webpack_s',
    name: 'webpack_s',
    component: () => import(/* webpackChunkName: "login" */ '../views/Tec/webpack_s/webpack_s.vue'),
  },
  {
    path: '/uniapp_s',
    name: 'uniapp_s',
    component: () => import(/* webpackChunkName: "login" */ '../views/Tec/uniapp_s/uniapp_s.vue'),
  },
  {
    path: '/mysql_s',
    name: 'mysql_s',
    component: () => import(/* webpackChunkName: "login" */ '../views/Tec/mysql_s/mysql_s.vue'),
  },
]



export default routes