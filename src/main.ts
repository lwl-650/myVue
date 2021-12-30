import { createApp } from 'vue'
import App from './App.vue'


import ElementPlus from 'element-plus'
import "element-ui/lib/theme-chalk/index.css"
// import 'element-plus/dist/index.css'


import router from './router/index'
import store from './store'

import VueWechatTitle from 'vue-wechat-title'//动态修改title


import * as api from "./http/api"





const app=createApp(App)
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
app.use(ElementPlus)
app.mount('#app')
