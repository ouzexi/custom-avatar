import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.less'
/* 单独引入message css */
import 'element-plus/es/components/message/style/css'

const app = createApp(App)
app.mount('#app')