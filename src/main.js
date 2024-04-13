import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue';
// 引入路由
import router from "./router";
// import 'ant-design-vue/dist/reset.css';
import './style.css'

const app = createApp(App);

app.use(router)
app.use(Antd)
app.mount('#app');
