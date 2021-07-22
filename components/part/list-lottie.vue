<template>
  <div class="part-list-lottie">
    <CellLottieValue
      :options="avatarOptions"
      :value="'123123'"
    ></CellLottieValue>
    <CellLottieValue
      :options="eyeOptions"
      :value="'123123'"
    ></CellLottieValue>
    <CellLottieValue
      :options="starOptions"
      :value="'123123'"
    ></CellLottieValue>
    <CellLottieValue
      :options="scoreOptions"
      :value="'123123'"
    ></CellLottieValue>
  </div>
</template>

<script>
import * as loEye from 'assets/animation/eye.json'
import * as loAvatar from 'assets/animation/avatar.json'
import * as loStar from 'assets/animation/star.json'
import * as loScore from 'assets/animation/coins.json'
export default {
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

<style>
</style>