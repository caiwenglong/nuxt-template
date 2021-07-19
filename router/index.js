import path from 'path'
import auth from '../middleware/auth'

// 引入 path 模块，并简单封装成resolve方法，这里不要用 __dirname，
// 否则路由暴露出去调用时 刷新页面会出错，因为刷新时__dirname是不存在的。
const resolve = (pagePath) => path.resolve(process.cwd(), `./${pagePath}`)

// 自定义路由相关属性
export const $routes = [
  {
    path: '/index',
    name: 'Home',
    component: resolve('pages/index.vue'),
    meta: {
      title: '首页',
      icon: 'icon-home',
    },
  },
]

// 扩展路由属性
const extendRoutes = (routes) => {
  routes.push(...$routes)
}

export default {
  middleware: 'auth',
  extendRoutes
}