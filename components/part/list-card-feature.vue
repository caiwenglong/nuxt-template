<template>
  <div class="part-list-card-feature">
    <el-row :gutter="20">
      <el-col v-for="(item, index) in cardFeatureList" :key="item.title" :span="24 / cardFeatureList.length">
        <CellCardFeature :class="'cell-card-' + index"></CellCardFeature>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CellCardFeature from 'com/cell/card-feature.vue'
export default {
  components: {
    CellCardFeature
  },
  data() {
    return {
      cardFeatureList: [{
        title: '标题1',
        content: '内容1'
      },{
        title: '标题2',
        content: '内容2'
      },{
        title: '标题3',
        content: '内容3'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.part-list-card-feature {
    position: absolute;
    bottom: -90px;
    padding: 20px;
    width: 100%;
}
</style>