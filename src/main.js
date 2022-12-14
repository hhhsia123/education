import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入重置样式的包
import 'normalize.css'
// 导入公共样式的包
import '@/assets/style/common.less'
// 导入element样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/style/element/index.scss'
// 注册ui插件
import UI from './components/library/index'
createApp(App).use(store).use(router).use(ElementPlus).use(UI).mount('#app')
