<template>
  <div class="page-articles-detail">
    <div class="header-article">
      <PartBreadcrumb></PartBreadcrumb>
    </div>
    <div class="article-title">
      <h2>干货｜如何快速上手设计出简单好看Logo？</h2>
      <div class="article-info">
        <div class="el-row">
          <div class="el-col">
            <CellLottieValue :options="avatarOptions" :value="'123123'"></CellLottieValue>
            <CellLottieValue :options="eyeOptions" :value="'123123'"></CellLottieValue>
            <CellLottieValue :options="starOptions" :value="'123123'"></CellLottieValue>
            <CellLottieValue :options="scoreOptions" :value="'123123'"></CellLottieValue>
          </div>
        </div>
      </div>
    </div>
    <div class="article-content">
      撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发
      撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发
      撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发
      撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发
      撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发
      撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发
      撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发
      撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发
      撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发撒旦发射点发
    </div>
    <div class="page-row">
      <comment-editor></comment-editor>
      <CellFeedBackRate></CellFeedBackRate>
    </div>
  </div>
</template>

<script>
import PartBreadcrumb from 'com/part/breadcrumb.vue'
import CellLottieValue from 'com/cell/lottie-value.vue'
import * as loEye from 'assets/animation/eye.json'
import * as loAvatar from 'assets/animation/avatar.json'
import * as loStar from 'assets/animation/star.json'
import * as loScore from 'assets/animation/coins.json'

import CellFeedBackRate from 'com/cell/feedback-rate.vue'


export default {
  components: {
    PartBreadcrumb,
    CellLottieValue,
    CellFeedBackRate
  },

  asyncData ({ params }) {
    return {
      id: params.id,
    }
  },

  data () {
    return {
      eyeOptions: { animationData: loEye },
      avatarOptions: { animationData: loAvatar },
      starOptions: { animationData: loStar },
      scoreOptions: { animationData: loScore },
    }
  }

}
</script>

<style lang="scss" scoped>
.page-articles-detail {
  width: 980px;
  margin: 0 auto;
  padding: 20px;
}

.article-title {
  h2 {
    text-align: center;
    font-size: 28px;
  }
}

.article-content {
  font-size: 20px;
  line-height: 2;
}
</style>