<template>
  <div class="part-banner">
    <div class="unit-site-introduce">
      <div class="introduce-container">
        <h1 class="site-purpose-title">{{ title }}</h1>
        <h4 class="site-purpose-subtitle">{{ subtitle }}</h4>
        <cell-btn-cycle></cell-btn-cycle>
      </div>
    </div>
    <cell-carousel></cell-carousel>
  </div>
</template>

<script>
import CellBtnCycle from 'com/cell/btn-cycle.vue'
import CellCarousel from 'com/cell/carousel.vue'

export default {

  components: {
    CellBtnCycle,
    CellCarousel
  },

  data () {
    return {
      title: '旨在找到高性价比的商品',
      subtitle: '旨在找到高性价比的商品'
    }
  },
}
</script>

<style lang="scss" scope>
.part-banner {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  max-width: 1100px;
  padding: 0 30px;
  margin: auto;
  text-align: left;
  .site-purpose-title {
    font-size: 42px !important;
    font-weight: 600;
    line-height: 1.25;
  }
  .site-purpose-subtitle {
    display: block;
    margin-top: 55px;
    margin-bottom: 69px;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.8;
    color: #666;
    letter-spacing: 0.12px;
  }
}
</style>