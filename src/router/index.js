import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const router=new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            redirect:'/index'
        },
        {
            path:'/index',
            name:'index',
            component:()=>import('../views/index.vue')
        }
    ],
    
})

export default router;