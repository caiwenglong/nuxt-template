<template>
<div>
    <!-- 声明式跳转 router-link  -->
    <nuxt-link to="/">首页</nuxt-link>
    <nuxt-link to="/goods">商品页</nuxt-link>
    <Nuxt />
</div>
</template>

<script>
export default {
    // middleware: 'auth', // 这个的页面层级的
    middleware() {
       console.log('middleware layout s');
        
    }
}
</script>