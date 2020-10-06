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
            component:()=>import('../views/index.vue'),
            children:[
                {
                    path:'product',
                    name:'product',
                    component:()=>import('../views/product/index.vue')
                },
                {
                    path:'comment',
                    name:'comment',
                    component:()=>import('../views/comment/index.vue')
                },
                {
                    path:'store',
                    name:'store',
                    component:()=>import('../views/store/index.vue')
                }
            ],
        }
    ],
    
})

export default router;