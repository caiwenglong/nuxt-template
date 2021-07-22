<template>
  <div class="unit-card-list">
    <el-row :gutter="28">
      <el-col
        v-for="(item, index) in 3"
        :key="index"
        :span="8"
      >
        <CellCardImgOutstanding></CellCardImgOutstanding>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CellCardImgOutstanding from 'com/cell/card-img-outstanding.vue'
export default {
  CellCardImgOutstanding
}
</script>

<style lang="scss" scoped>
.el-col {
  margin-bottom: 16px;
}
</style>