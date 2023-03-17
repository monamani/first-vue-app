import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import $bus from './utils/Events'
import router from './routes';
import $pages from './data'


const app = createApp(App)
app.use(router) // to add plugin / dependecies use
app.config.globalProperties.$bus = $bus;
app.config.globalProperties.$pages = $pages;
app.mount('#app');
