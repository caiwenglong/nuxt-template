<template>
  <div class="unit-card-list">
    <el-row :gutter="28">
      <el-col
        v-for="(item, index) in 12"
        :key="index"
        :span="8"
      >
        <CellCardRecommend></CellCardRecommend>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CellCardRecommend from 'com/cell/card-recommend.vue'
export default {
  CellCardRecommend
}
</script>

<style lang="scss" scoped>
.el-col {
  margin-bottom: 16px;
}
</style>