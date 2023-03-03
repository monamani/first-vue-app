import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import $bus from './utils/Events'

const app = createApp(App)
app.config.globalProperties.$bus = $bus;
app.mount('#app');
