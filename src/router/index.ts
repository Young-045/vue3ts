import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "home",
        component: () => import("@/components/HelloWorld.vue")
    },
]

//创建router
const router = createRouter({
    //配置Hash模式
    history: createWebHashHistory(),
    //配置routes
    routes,
    //路由跳转时返回顶部
    scrollBehavior() {
        return { top: 0 }
    }
})

//设置前置路由守卫
router.beforeEach((to, from, next) => {
    next()
})

//设置后置路由守卫
router.afterEach((to, from, failure) => {

})

export { router }