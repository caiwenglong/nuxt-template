<template>
  <div class="cell-card-img-outstanding">
    <div class="card-item">
      <div class="card-item__top">
        <div class="card-item-cover">
          <div
            class="card-item-cover__img"
            :style="{backgroundImage: `url('https://images.uiiiuiii.com/wp-content/uploads/2018/07/title-3.jpg')`}"
          >
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
.card-item {
  background: #eef3f7;
  width: 100%;
  min-height: initial;
  border-radius: 15px;
  padding: 20px;
  padding-bottom: 30px;
  margin-top: 75px;
  transition: all .3s;

  &:hover {
    box-shadow: 0px 15px 35px -5px rgba(50, 88, 130, 0.32);
    .card-item-cover__img::before {
      box-shadow: 0px 10px 40px 0px rgba(76, 70, 124, 0.5);
    }
  }

  &__top {
    display: flex;
    align-items: flex-start;
    position: relative;
    z-index: 4;
    flex-wrap: wrap;
  }

  &-cover {
    margin-top: -70px;
    margin-bottom: 25px;
    width: 290px;
    height: 230px;
    margin-left: auto;
    margin-right: auto;
    flex-shrink: 0;
    position: relative;
    border-radius: 15px;
    z-index: 1;

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