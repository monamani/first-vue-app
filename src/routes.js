// we will use webHash because we dont have server side 
import { createRouter, createWebHashHistory } from 'vue-router'

import PageViewer from './components/PageViewer.vue'
import CreatePage from './components/CreatePage.vue'

const routes = [ 
    // we will pass props so index will be passed as props
    { path : '/:index?' , component:PageViewer ,props:true },
    { path : '/create' , component:CreatePage}
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;