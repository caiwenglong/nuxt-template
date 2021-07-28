<template>
  <div class="part-header">
    <el-row :gutter="28">
      <el-col :span="6">
        <div class="page-logo">
          <CellLogo></CellLogo>
        </div>
      </el-col>
      <el-col :span="12">
        <part-menu></part-menu>
      </el-col>
      <el-col :span="6">
         <CellInputDel></CellInputDel>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CellLogo from 'com/cell/logo.vue'
import PartMenu from 'com/part/menu.vue'
import CellInputDel from 'com/cell/input-del.vue'

export default {
  components: {
    CellLogo,
    PartMenu,
    CellInputDel
  }
}
</script>

<style lang="scss" scoped>
.part-header {
  padding: 20px;
  .el-row {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
}
</style>
