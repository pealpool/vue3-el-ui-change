import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import routes from "./routes";

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    // 获取 token, 登录的标识
    const token = sessionStorage.getItem("userCookie");
    if (token) { // 登录过
        next()
    } else {
        if (to.path === '/sign-page') { // 如果有此资源且是登录页
            next()
        } else if (!to.meta.auth) { // 没有此资源，到404页面
            next()
        } else { // 有此资源，没有登陆过，也不是登录页
            next({path: '/sign-page'})
        }
    }
})

export default router
