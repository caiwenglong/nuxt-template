<template>
  <div>
    <div class="wrapper">
      <div class="card-item">
        <i class="el-icon-medal-1"></i>
        <div class="card-item__top">
          <div class="card-item-cover">
            <div
              class="card-item-cover__img"
              :style="{backgroundImage: `url('https://images.uiiiuiii.com/wp-content/uploads/2018/07/title-3.jpg')`}"
            >
            </div>
          </div>

          <div class="card-item-controls">
            <div class="card-item-controls__item">
              <el-tooltip
                class="item"
                effect="dark"
                content="查看他推荐的商品"
                placement="right-end"
              >
                <i class="el-icon-arrow-right"></i>
              </el-tooltip>
            </div>
            <div class="card-item-controls__item">
              <el-tooltip
                class="item"
                effect="dark"
                content="分享给他人"
                placement="right-end"
              >
                <i class="el-icon-share"></i>
              </el-tooltip>
            </div>
          </div>
        </div>
        <div class="card-item__bottom">
          <div class="card-item__title">
            这个是产品标题
          </div>
          <div class="card-item__desc">
            这里是产品描述信息这里是产品描述信息这里是产品描述信息这里是产品描述信息这里是产品描述信息这里是产品描述信息这里是产品描述信息这里是产品描述信息这里是产品描述信息这里是产品描述信息
          </div>
          <div class="card-item__data">
            <ListLottie></ListLottie>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import ListLottie from 'com/part/list-lottie.vue'
export default {
  components: {
    ListLottie
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-size: cover;
}

.card-item {
  background: #fff;
  width: 510px;
  min-height: 480px;
  box-shadow: 0px 15px 35px -5px rgba(50, 88, 130, 0.32);
  border-radius: 15px;
  padding: 30px;
  position: relative;

  i.el-icon-medal-1 {
    position: absolute;
    top: 0;
    right: 0;
    &::before {
      font-size: 32px;
      color: #f56c6c;
    }
  }

  &__top {
    display: flex;
    align-items: flex-start;
    position: relative;
    z-index: 4;
  }

  &-cover {
    width: 300px;
    height: 300px;
    margin-left: -70px;
    flex-shrink: 0;
    position: relative;
    z-index: 2;
    border-radius: 15px;

    z-index: 1;

    &__item {
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      width: 100%;
      height: 100%;
      border-radius: 15px;
      position: absolute;
      left: 0;
      top: 0;

      &:before {
        content: '';
        background: inherit;
        width: 100%;
        height: 100%;
        box-shadow: 0px 10px 40px 0px rgba(76, 70, 124, 0.5);
        display: block;
        z-index: 1;
        position: absolute;
        top: 30px;
        transform: scale(0.9);
        filter: blur(10px);
        opacity: 0.9;
        border-radius: 15px;
      }

      &:after {
        content: '';
        background: inherit;
        width: 100%;
        height: 100%;
        box-shadow: 0px 10px 40px 0px rgba(76, 70, 124, 0.5);
        display: block;
        z-index: 2;
        position: absolute;
        border-radius: 15px;
      }
    }

    &__img {
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      width: 100%;
      height: 100%;
      border-radius: 15px;
      position: absolute;
      left: 0;
      top: 0;

      &:before {
        content: '';
        background: inherit;
        width: 100%;
        height: 100%;
        // box-shadow: 0px 10px 40px 0px rgba(76, 70, 124, 0.5);
        display: block;
        z-index: 1;
        position: absolute;
        top: 30px;
        transform: scale(0.9);
        filter: blur(10px);
        opacity: 0.9;
        border-radius: 15px;
        transition: all 0.3s;
      }

      &:after {
        content: '';
        background: inherit;
        width: 100%;
        height: 100%;
        box-shadow: 0px 10px 40px 0px rgba(76, 70, 124, 0.5);
        display: block;
        z-index: 2;
        position: absolute;
        border-radius: 15px;
      }
      &__img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 15px;
        box-shadow: 0px 10px 40px 0px rgba(76, 70, 124, 0.5);
        user-select: none;
        pointer-events: none;
      }
    }
  }

  &-controls {
    flex: 1;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__item {
      display: inline-flex;
      font-size: 30px;
      padding: 5px;
      margin-bottom: 10px;
      color: #acb8cc;
      cursor: pointer;
      width: 50px;
      height: 50px;
      align-items: center;
      justify-content: center;
      position: relative;
      transition: all 0.3s ease-in-out;
      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: #409eff;
        transform: scale(0.5);
        opacity: 0;
        box-shadow: 0px 5px 10px 0px rgb(76 70 124 / 20%);
        transition: all 0.3s ease-in-out;
        transition: all 0.4s cubic-bezier(0.35, 0.57, 0.13, 0.88);
      }
      &:hover {
        &::before {
          opacity: 1;
          transform: scale(1.3);
        }
        i {
          color: #fff;
          z-index: 1;
        }
      }
    }
  }

  &__title {
    font-size: 20px;
    margin-top: 28px;
    text-align: center;
  }

  &__desc {
    text-align: left;
    margin-top: 20px;
    @include ellipsis;
  }

  &__data {
    margin-top: 20px;
    .part-list-lottie {
      display: flex;
      justify-content: space-between;
    }
    ::v-deep .lottie-value {
      padding: 0;
      & + .lottie-value {
        margin-left: 0;
      }
    }
  }
}
</style>