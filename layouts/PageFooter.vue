<template>
  <div class="page-footer">
    <div class="page-row">
      <cell-icon-link></cell-icon-link>
    </div>
  </div>
</template>

<script>
import CellIconLink from 'com/cell/icon-link.vue'

export default {
  components: {
    CellIconLink
  }
}
</script>


<style lang="scss" scoped>
.page-footer {
  padding: 20px;
  background: #fff
}
</style>