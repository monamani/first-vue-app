// we will use webHash because we dont have server side 
import { createRouter, createWebHashHistory } from 'vue-router'
import PageViewer from './views/PageViewer.vue'
import CreatePage from './views/CreatePage.vue'
import Pages from './views/Pages.vue'
import PagesList from './views/PagesList.vue'

const routes = [ 
    // we will pass props so index will be passed as props
    { path : '/:index?' , component:PageViewer ,props:true },
    { path : '/pages', component: Pages,
       children :[
        // children path wiothout /
        { path : '' , component: PagesList},
        { path : 'create' , component: CreatePage},
       ]
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;