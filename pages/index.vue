<template>
  <div>12</div>
</template>

<script>
export default {
  middleware(context) {
    // 这个是页面级别的 middleware
    // console.log(context);
    console.log('middleware page');
    
  },

  // 做动态路由参数的校验
  validate({ params, query, store }) {
    // 校验业务
    console.log('validate');

    // 这边返回值为true 或者 false， 
    // 如果是false 那么页面就会出现报错信息
    return true
    
  },

  /**
   * 读取数据，将数据返回给组件的data
   * 返回的数据会跟组件的data进行合并
   */
  async asyncData({ $axios }) {
    // 注意：静态资源底下的文件在获取时路径不用加static
    const ip = await $axios({url: '/mock-data.json'})
    console.log(ip);
    
  },

  data() {
    return {
      a: 1
    }
  },

  /**
   * 读取数据，将数据返回给vuex
   */
  fetch({store, getters}) {
    console.log('fetch');
    store.dispatch('A_UPDATE_DATA', {err: 0, data: {title: 123}})
  },

  /**
   * beforeCreate 和created 会在客户端跟服务器端同时执行
   * 下面的打印信息会在服务器端和客户端的控制台中打印出来
   * 但是这边不能拿到context 和 window
   */
  beforeCreate() {
    console.log('beforeCreate');
    
  },
  created() {
    console.log('created');
    
    
  },

  beforeMount() {
    console.log('beforeMount');
    
  },

  mounted() {
    console.log('mounted');
    
  },
  beforeUpdate() {
    console.log('beforeUpdate');
    
  },

  updated() {
    console.log('updated');
    
  },
  
  beforeDestroy() {
    console.log('beforeDestroy');
    
  },
  destroyed() {
    console.log('destroyed');
    
  },

  beforeRouteLeave(to, from, next) {
    console.log('离开');
    next()
  }
}
</script>
