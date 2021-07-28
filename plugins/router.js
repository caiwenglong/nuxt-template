/**
 * app: vue 实例
 * redirect：跳转函数
 */
export default ({app, redirect, parmas, query, store}) => {
  
  // 路由全局前置守卫
  app.router.beforeEach((to, from, next) => {

    // 这边next的参数只能传入true 或者 false， 不能跳转到其他页面 比如 next('/login')
    // 如果要跳转到其他页面，得用 redirect 函数进行跳转
    next(true)
  })

  // 全局路由后置守卫
  app.router.afterEach((to, from) => {
  })
}