
import { RouteRecordRaw } from 'vue-router'
import index from '../views/index/index.vue'
import Consume from '../views/Tec/text/Consume/Consume.vue'
import login from '../views/login/login.vue'

const routes: Array<RouteRecordRaw> = [

    {
        path: '/',
        name: 'index',
        component: index,
        meta: {
            title: '木留'
        },
    },
    {
        path: '/text',
        name: 'text',
        component: () => import(/* webpackChunkName: "login" */ '../views/Tec/text/text.vue'),
        beforeEnter: (to, from, next) => {
            console.log('这是text独享守卫')
            next()
        },
        redirect: '/text/Consume',  // 默认显示的子路由
        children: [
            {
                path: 'Consume',//以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
                name: 'Consume',
                component: Consume,
                meta: {
                    title: 'Consume'
                }
            },
            {
                path: 'js',
                name: 'js',
                component: () => import(/* webpackChunkName: "login" */ '../views/Tec/text/js/js.vue'),
                meta: {
                    title: 'js'
                }
            },
        ],
        meta: {
            title: 'text'
        },
    },
    {
        path: '/login',
        name: 'login',
        // component: () => import(/* webpackChunkName: "login" */ '../views/login/login.vue'),
        component:login,
        meta: {
            title: 'login'
        },
    },
    {
        //   富文本
        path: '/richText',
        name: 'richText',
        component: () => import(/* webpackChunkName: "login" */ '../views/richText/richText.vue'),
        meta: {
            title: 'richText'
        },
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
        meta: {
            title: 'git'
        }
    },
    {
        path: '/html_s',
        name: 'html_s',
        component: () => import(/* webpackChunkName: "login" */ '../views/Tec/html_s/html_s.vue'),
        meta: {
            title: 'html'
        }
    },
    {
        path: '/java_s',
        name: 'java_s',
        component: () => import(/* webpackChunkName: "login" */ '../views/Tec/java_s/java_s.vue'),
        meta: {
            title: 'java'
        }
    },
    {
        path: '/javaScript_s',
        name: 'javaScript_s',
        component: () => import(/* webpackChunkName: "login" */ '../views/Tec/javaScript_s/javaScript_s.vue'),
        meta: {
            title: 'javaScript'
        }


    },
    {
        path: '/nodejs_s',
        name: 'nodejs_s',
        component: () => import(/* webpackChunkName: "login" */ '../views/Tec/nodejs_s/nodejs_s.vue'),
        meta: {
            title: 'nodejs'
        }
    },
    {
        path: '/php_s',
        name: 'php_s',
        component: () => import(/* webpackChunkName: "login" */ '../views/Tec/php_s/php_s.vue'),
        meta: {
            title: 'php'
        }
    },
    {
        path: '/react_s',
        name: 'react_s',
        component: () => import(/* webpackChunkName: "login" */ '../views/Tec/react_s/react_s.vue'),
        meta: {
            title: 'react'
        }
    },
    {
        path: '/springboot_s',
        name: 'springboot_s',
        component: () => import(/* webpackChunkName: "login" */ '../views/Tec/springboot_s/springboot_s.vue'),
        meta: {
            title: 'springboot'
        }
    },
    {
        path: '/vue_s',
        name: 'vue_s',
        component: () => import(/* webpackChunkName: "login" */ '../views/Tec/vue_s/vue_s.vue'),
        meta: {
            title: 'vue'
        }
    },
    {
        path: '/webpack_s',
        name: 'webpack_s',
        component: () => import(/* webpackChunkName: "login" */ '../views/Tec/webpack_s/webpack_s.vue'),
        meta: {
            title: 'webpack'
        }
    },
    {
        path: '/uniapp_s',
        name: 'uniapp_s',
        component: () => import(/* webpackChunkName: "login" */ '../views/Tec/uniapp_s/uniapp_s.vue'),
        meta: {
            title: 'uniapp'
        }
    },
    {
        path: '/mysql_s',
        name: 'mysql_s',
        component: () => import(/* webpackChunkName: "login" */ '../views/Tec/mysql_s/mysql_s.vue'),
        meta: {
            title: 'mysql'
        }
    },
    {
        path: '/videos',
        name: 'videos',
        component: () => import(/* webpackChunkName: "login" */ '@/views/videos/videos.vue'),
        meta: {
            title: 'videos'
        }
    },
 
]



export default routes