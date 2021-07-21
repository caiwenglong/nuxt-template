<template>
  <div class="lottie-value" @mouseenter="handlePlay" @mouseleave="handleStop">
    <span class="lottie__icon">
      <Lottie
        :options="options"
        :width="width"
        :height="height"
        @animCreated="handleAnimation"
      />
    </span>
    <span class="lottie__value">
      {{ value }}
    </span>
  </div>
</template>

<script>
import Lottie from 'com/Lottie.vue'

export default {
  components: {
    Lottie
  },

  props: {
    options: {
      required: true,
      type: Object
    },
    value: {
      type: String,
      default: ''
    },
    width: {
      type: Number,
      default: 24
    },
    height: {
      type: Number,
      default:  24
    }
  },

  methods: {
    handleAnimation (anim) {
      this.anim = anim
    },
    
    handlePlay () {
      this.anim.play();
    },

    handleStop () {
      this.anim.stop();
    }
  }
}
</script>

<style lang="scss" scoped>
.lottie-value {
  display: inline-block;
  font-size: 14px;
  color: $deepGrey;
  padding: 8px;
  cursor: pointer;
  & + & {
    margin-left: 20px;
  }
}
.lottie__icon, 
.lottie__value {
  @include align-center
}
</style>