import { createApp } from 'vue'
import App from './App.vue'


import ElementPlus from 'element-plus'
import "element-ui/lib/theme-chalk/index.css"



import router from './router/index'
import store from './store'


const app=createApp(App)
// import { Button, Select } from 'element-ui';
// app.component(Button.name, Button)


app.use(store)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
