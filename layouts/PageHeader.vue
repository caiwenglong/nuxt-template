<template>
  <div class="part-header">
    <el-row :gutter="28">
      <el-col :span="4">
        <div class="page-logo">
          <CellLogo></CellLogo>
        </div>
      </el-col>
      <el-col :span="12">
        <part-menu></part-menu>
      </el-col>
      <el-col :span="4">
         <CellInputDel></CellInputDel>
      </el-col>
      <el-col :span="2">
        <span class="sign-in" @click="handleLogin">登录</span>
        <span class="sign-up" @click="handleRegister">注册</span>
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
  },

  methods: {
    handleLogin() {
      this.$EventBus.$emit('toggleSign', true)
      console.log(1);
    },
    handleRegister() {
      this.$EventBus.$emit('toggleSign', false)
      console.log(2);
    }
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

.sign-in,
.sign-up {
  cursor: pointer;
}
</style>
