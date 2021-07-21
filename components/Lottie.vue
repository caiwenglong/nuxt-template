<template>
  <div
    ref="lavContainer"
    :style="style"
    @click="play"
  ></div>
</template>

<script>
import lottie from 'lottie-web'
export default {
  props: {
    options: {
      type: Object,
      required: true
    },
    width: {
      type: Number,
      default: 48
    },
    height: {
      type: Number,
      default: 48
    }
  },

  data () {
    return {
      style: {
        width: this.width ? `${this.width}px` : '100%',
        height: this.height ? `${this.height}px` : '100%',
        overflow: 'hidden',
        margin: '0 auto',
        cursor: 'pointer'
      }
    }
  },
  mounted () {
    this.anim = lottie.loadAnimation({
      container: this.$refs.lavContainer,
      renderer: 'svg',
      // loop: this.options.loop !== false,
      loop: false,
      // autoplay: this.options.autoplay !== false,
      autoplay: true,
      animationData: this.options.animationData.default,
      rendererSettings: this.options.rendererSettings
    })
    this.$emit('animCreated', this.anim)
  },
  methods: {
    play () {
      this.anim.loop = true
    }
  }
}
</script>
