<template>
  <div class="cell-card-desc">
    <div class="cell-card__title">
      专业出品
    </div>
    <div class="cell-card__content">
      矢量，反色，黑白，透明等10多种 LOGO文件格式在线输出。
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.cell-card-desc {
  padding: 20px;
  background: #fff;
  box-shadow: 0 2px 7px 0 rgb(0 0 0 / 10%);
  border-radius: 8px;
  position: relative;
  &:after {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 97px;
    height: 108px;
    content: '';
    background-repeat: no-repeat;
    background-size: contain;
  }
}
.cell-card-0:after {
  background-image: url("images/1.png");
}
.cell-card-1:after {
  background-image: url("images/2.png");
}
.cell-card-2:after {
  background-image: url("images/3.png");
}
.cell-card__title {
  font-size: 18px;
  font-weight: 500;
  line-height: 1.34;
  color: #222;
}
.cell-card__content {
  max-width: 256px;
  margin: 8px 0 0;
  font-size: 14px;
  line-height: 1.72;
  color: #666;
  white-space: normal;
}
</style>