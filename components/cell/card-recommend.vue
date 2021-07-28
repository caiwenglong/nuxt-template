<template>
  <div class="cell-card">
    <el-card
      class="cell-card__item-wrap vivify ball"
      shadow="hover"
    >
    <nuxt-link :to="'/articles/'+ 1">
      <div
        class="item"
      >
        <div class="item__img">
          <a href="">
            <img
              src="https://images.uiiiuiii.com/wp-content/uploads/2018/07/title-3.jpg"
              alt=""
            >
          </a>
        </div>
        <div class="item__info">
          <div class="item__title">这样设计的区块链类网页更更专业！</div>
          <div class="item__dec">
            <span class="item__author">
              <span class="author__avatar">
                <img
                  src="https://s2.jiguo.com/avatar3450389/230x230"
                  alt=""
                >
              </span>
              <span class="author__name">yntry</span>
            </span>
            <div class="item__release-time">
              <span>2021-7-15</span>
            </div>
          </div>
        </div>
      </div>
    </nuxt-link>
    </el-card>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.cell-card {
  width: 100%;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
  }
}
::v-deep(.el-card__body) {
  padding-top: 32px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 16px;
}
.item__info {
  margin-top: 12px;
  margin-bottom: 12px;
  padding-left: 8px;
  padding-right: 8px;
}
.item__title {
  text-align: center;
}
.item__dec {
  margin-top: 12px;
  color: #bdbdbd;
  font-size: 12px;
  overflow: hidden;
}
.item__img {
  height: 235px;
  overflow: hidden;
  a {
    display: block;
  }
  img {
    width: 100%;
  }
}
.item__author {
  float: left;
  .author__avatar {
    img {
      width: 24px;
      height: 24px;
      -webkit-border-radius: 50%;
      border-radius: 50%;
      padding: 0;
      display: inline-block;
      vertical-align: middle;
    }
  }
  .author__name {
    margin: 12px;
    font-size: 12px;
  }
}
.item__release-time {
  float: right;
}
</style>