import router from './router'
import { resolve } from 'path'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-template',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // 配置别名
  alias: {
    images: resolve(__dirname, './assets/images'),
    icons: resolve(__dirname, './assets/icons'),
    style: resolve(__dirname, './assets/style'),
    com: resolve(__dirname, './components/'),
    pages: resolve(__dirname, './pages/'),
  },

  server: {
    port: 8000, // default: 3000
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    './assets/css/vivify.min.css',
    './assets/scss/index.scss',
    'element-ui/lib/theme-chalk/index.css',
  ],

  styleResources: {
    scss: ['./assets/scss/variable.scss', './assets/scss/mixin.scss']
  },

  router,

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/router',
    {
      src: '~/plugins/axios',
      ssr: true, // 开启服务端渲染
    },
    {
      src: '~/plugins/element-ui',
      ssr: true,
      // mode: 'server' // or client // v2.4+
    },
    '~/plugins/mixins',
    '~/plugins/svg-icon',
    {
      src: '~/plugins/no-ssr',
      ssr: false
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxt/components',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'cookie-universal-nuxt',
    '@nuxtjs/style-resources',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true, // 开启跨域
  },

  proxy: {
    '/api/': {
      target: 'localhost:8080', // 代理转发的地址
      pathRewrite: { '^/api/': '' },
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    extend(config, context) {
      // 排除 nuxt 原配置的影响,Nuxt 默认有vue-loader,会处理svg,img等
      // 找到匹配.svg的规则,然后将存放svg文件的目录排除
      const svgRule = config.module.rules.find((rule) => rule.test.test('.svg'))
      svgRule.exclude = [resolve(__dirname, 'assets/icons/svg')]
      //添加loader规则
      config.module.rules.push({
        test: /\.svg$/, //匹配.svg
        include: [resolve(__dirname, 'assets/icons/svg')], //将存放svg的目录加入到loader处理目录
        use: [
          { loader: 'svg-sprite-loader', options: { symbolId: 'icon-[name]' } },
        ],
      })
    },
  },
}
