import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import router from './router';
import music from './components/music.vue'



const app=createApp(App)
app.use(ElementPlus)
app.use(router)
app.component('music',music)
app.mount('#app')