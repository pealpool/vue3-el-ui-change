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
        }
    },
    {
        path: '/sign-page',
        name: 'sign-page',
        component: () => import('@/views/SignPage.vue'),
        meta:{
            auth: true
        }
    }
]