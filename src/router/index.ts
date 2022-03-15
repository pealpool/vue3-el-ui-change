import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import routes from "./routes";

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})


router.beforeEach((to, from, next) => {
    // 获取 token, 登录的标识
    let token = sessionStorage.getItem("userCookie");

    if(token) { // 判断是否已经登录过
        console.log(1)
        next()
    } else {
        if(to.meta.auth && to.path ==='/sign-page') { // 如果有此资源且是登录页
            console.log(2);
            next();
        } else if(!to.meta.auth){ // 没有此资源，到404页面
            console.log(3);
            next()
        } else { // 有此资源，没有登陆过，也不是登录页
            console.log(4);
            next({path: '/sign-page'})
        }
    }

})

export default router
