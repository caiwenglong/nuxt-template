<template>
  <div class="page-articles-detail">
    <div class="header-article">
      <PartBreadcrumb></PartBreadcrumb>
    </div>
    <div class="article-title">
      <h2>干货｜如何快速上手设计出简单好看Logo？</h2>
      <div class="article-info">
        <ul>
          <li>
            <span class="text">
              <svg-icon icon-class="eye" />
            </span>
            <span class="value">yntry</span>
          </li>
          <li>
            <span></span>
          </li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
    <div class="article-content">
      撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发
      撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发
      撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发
      撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发
      撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发
      撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发
      撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发
      撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发
      撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发
    </div>
  </div>
</template>

<script>
import PartBreadcrumb from 'com/part/breadcrumb.vue'

export default {
  components: {
    PartBreadcrumb,
  },

  asyncData ({ params }) {
    return {
      id: params.id
    }
  }

}
</script>

<style lang="scss" scoped>
.page-articles-detail {
  width: 980px;
  margin: 0 auto;
  padding: 20px;
}

.article-title {
  h2 {
    text-align: center;
    font-size: 28px;
  }
}

.article-content {
  font-size: 18px;
}
</style>