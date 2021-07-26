<template>
  <div class="list-card-champion">
    <el-row>

      <el-col
        v-for="(item,index) in 2"
        :key="index"
        :span="12"
        class="el-col"
      >
        <CellCardChampion></CellCardChampion>

      </el-col>
    </el-row>
  </div>
</template>

<script>
import CellCardChampion from 'com/cell/card-champion.vue'
export default {
  components: {
    CellCardChampion
  }
}
</script>
<style lang="scss" scoped>
</style>