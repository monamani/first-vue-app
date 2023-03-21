import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import $bus from './utils/Events'
import router from './routes';
import $pages from './data'


const app = createApp(App)
app.use(router) // to add plugin / dependecies use
app.config.globalProperties.$bus = $bus;
//app.config.globalProperties.$pages = $pages;
// to make it accessible on all the pages , parent ,childs
// and we need just to inject it where we need
app.provide('$pages',$pages); 
app.mount('#app');
