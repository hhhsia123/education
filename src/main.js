import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入重置样式的包
import 'normalize.css'
// 导入公共样式的包
import '@/assets/style/common.less'
createApp(App).use(store).use(router).mount('#app')
