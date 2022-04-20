import { createApp } from 'vue'
import App from './App.vue'


// import ElementPlus from 'element-plus'
import "element-ui/lib/theme-chalk/index.css"
import { components, plugins } from './plugins/element'
// import 'element-plus/dist/index.css'
// import 'element-plus/packages/theme-chalk/src/base.scss'


import router from './router/index'
import store from './store'

import VueWechatTitle from 'vue-wechat-title'//动态修改title
// main.js
import 'lib-flexible'

import * as api from "./http/api"





const app=createApp(App)

// 按需导入Element Plus组件和插件

components.forEach(component => {
    app.component(component.name, component)
  })
  plugins.forEach(plugin => {
    app.use(plugin)
  })

// import { Button, Select } from 'element-ui';
// app.component(Button.name, Button)
// app.use<APlayer.InstallOptions>(APlayer, {
//     defaultCover: 'https://github.com/u3u.png',
//     productionTip: true,
//   });
app.config.globalProperties.http=api

app.use(VueWechatTitle)

app.use(store)
app.use(router)


app.mount('#app')
