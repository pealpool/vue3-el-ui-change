import HomeView from "@/views/HomeView.vue";

export default [
    {
        path: '/',
        redirect:"/home"
    },
    {
        path: '/home',
        name: 'home',
        component: HomeView,
        meta:{
            auth: true
        },
        children:[
            {
                path:'table-view',
                name:'table-view',
                component:()=>import('@/views/tableView.vue'),
            },
            {
                path:'pictures-view',
                name:'pictures-view',
                component:()=>import('@/views/pictures.vue'),
            },
        ]
    },
    {
        path: '/:catchAll(.*)',
        name: 'page404',
        component: () => import('@/views/page404.vue'),
    },
    {
        path: '/sign-page',
        name: 'sign-page',
        component: () => import('@/views/SignPage/SignPage.vue'),
        meta:{
            auth: true
        }
    },

]