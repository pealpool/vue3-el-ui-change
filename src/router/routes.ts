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