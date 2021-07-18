<template>
    <div class="goods">
        <h3>商品页面</h3>
        <h4>
            路由说明，在pages文件夹底下的所有页面的名称就是一级路由, <br>
            在pages文件夹底下新建文件夹，那么这个文件夹的index.vue 就是一级路由，其他文件名称就是二级路由的名称
        </h4>
        <h4>
            比如：  pages 底下的有goods文件夹，那么goods文件夹底下的index.vue就是一级路由，要访问这个index.vue，那么访问的路由路径就是/goods
            <br/>
            goods 文件夹底下有个common.vue文件，那么这个common就是二级路由的名称，访问common.vue的路径就是：pages/common
            <br/>
            如果需要带参数，那么就在文件名前面添加一个 _ , goods 文件夹底下有个_id.vue 文件 那么这个_id 就是一个id参数，也是二级路由
        </h4>
        <div>
            <ul>
                <li></li>
            </ul>
        </div>
        <nuxt-link to="/goods/1?a=1&b=2">一号商品</nuxt-link>
        <nuxt-link to="/goods/2?a=11&b=22">二号商品</nuxt-link>
        <!-- 也可以通过 对象的形式跳转 -->
        <nuxt-link :to="{ name: 'goods-id', params: {id: 3}, query: {a: 111, b: 222 }}">三号商品</nuxt-link>
        <nuxt-link to="/goods/common">评论页</nuxt-link>
        <!-- 也可以通过 对象的形式跳转 -->
        <nuxt-link :to="{ name: 'goods-common', query: {a: 111, b: 222 }}">评论页2</nuxt-link>
        <Nuxt />
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>