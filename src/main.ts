import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
// import store from './store';
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import './styles/element/index.scss'
import 'normalize.css/normalize.css'
import '@/styles/default.scss'

const app = createApp(App);
app.use(ElementPlus, {
    locale: zhCn,
})
// app.use(store).use(router).mount('#app');
app.use(createPinia()).use(router).mount('#app');
