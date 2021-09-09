<template>
  <div class="page-articles-category">
    <div class="header-article">
      <PartBreadcrumb></PartBreadcrumb>
    </div>
    <div class=" page-row articles-list">
      <PartListCardRecommend></PartListCardRecommend>
    </div>
    <div class="page-row cell-pagination">
      <CellPagination></CellPagination>
    </div>
  </div>
</template>

<script>
import PartBreadcrumb from 'com/part/breadcrumb.vue'
import PartListCardRecommend from 'com/part/list-card-recommend.vue'
import CellPagination from 'com/cell/pagination.vue'
export default {
  components: {
    PartBreadcrumb,
    PartListCardRecommend,
    CellPagination
  }
}
</script>

<style lang="scss" scoped>
.page-articles-category {
  width: 980px;
  margin: 0 auto;
  padding: 20px;
}
</style>