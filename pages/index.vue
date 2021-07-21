<template>
  <div class="page-home">
    <div class="page-home-banner">
      <PartBanner></PartBanner>
      <PartListCardFeature></PartListCardFeature>
    </div>
    <div class="page-row product-recommend">
      <CellRowTitle></CellRowTitle>
      <PartListCardRecommend></PartListCardRecommend>
    </div>
  </div>
</template>

<script>
import PartBanner from 'com/part/banner.vue'
import PartListCardFeature from 'com/part/list-card-feature.vue'
import PartListCardRecommend from 'com/part/list-card-recommend.vue'
import CellRowTitle from 'com/cell/row-title.vue'

export default {
  components: {
    PartBanner,
    PartListCardFeature,
    PartListCardRecommend,
    CellRowTitle
  }
}
</script>


<style lang="scss">
.page-home {
  position: relative;
}
.page-home-banner {
  position: relative;
  min-height: 650px;
}

.product-recommend {
  padding-top: 120px;
  background-color: #f5f5f5;
}
.waves {
  position: relative;
  width: 100%;
  height: 15vh;
  margin-bottom: -7px; /*Fix for safari gap*/
  min-height: 100px;
  max-height: 150px;
}

.content {
  position: relative;
  height: 20vh;
  text-align: center;
  background-color: white;
}

/* Animation */

.parallax > use {
  animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}
/*Shrinking for mobile*/
@media (max-width: 768px) {
  .waves {
    height: 40px;
    min-height: 40px;
  }
  .content {
    height: 30vh;
  }
  h1 {
    font-size: 24px;
  }
}
</style>