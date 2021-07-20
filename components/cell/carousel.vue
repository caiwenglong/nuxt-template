<template>
  <div class="unit-carousel">
    <template v-for="item in carouselList">
      <div
        :key="item.imageUrl1"
        class="carousel-item-wrapper"
      >
        <img
          :src="item.imageUrl1"
          :alt="item.alt1"
          class="carousel-item"
        >
        <img
          :src="item.imageUrl2"
          :alt="item.alt2"
          class="carousel-item"
        >
        <img
          :src="item.imageUrl3"
          :alt="item.alt3"
          class="carousel-item"
        >
      </div>
    </template>
  </div>
</template>


<script>
export default {
  data () {
    return {
      carouselList: [
        {
          imageUrl1: 'https://www.logosc.cn/img/index/example2/part1.png?v=1',
          imageUrl2: 'https://www.logosc.cn/img/index/example2/part2.png?v=1',
          imageUrl3: 'https://www.logosc.cn/img/index/example2/part3.png?v=1',
          alt1: '图片一',
          alt2: '图片2',
          alt3: '图片3'
        },
        {
          imageUrl1: 'https://www.logosc.cn/img/index/example3/part1.png?v=1',
          imageUrl2: 'https://www.logosc.cn/img/index/example3/part2.png?v=1',
          imageUrl3: 'https://www.logosc.cn/img/index/example3/part3.png?v=1',
          alt1: '图片一',
          alt2: '图片2',
          alt3: '图片3'
        },
        {
          imageUrl1: 'https://www.logosc.cn/img/index/example4/part1.png?v=1',
          imageUrl2: 'https://www.logosc.cn/img/index/example4/part2.png?v=1',
          imageUrl3: 'https://www.logosc.cn/img/index/example4/part3.png?v=1',
          alt1: '图片一',
          alt2: '图片2',
          alt3: '图片3'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.carousel-item-wrapper:first-child {
  -webkit-animation: fade-in-out1 16.8s infinite;
  animation: fade-in-out1 16.8s infinite;

  .carousel-item:first-child {
    top: 15.5%;
    left: 57.7%;
    width: 255px;
    height: 318px;
    -webkit-animation-duration: 2.7s;
    animation-duration: 2.7s;
  }

  .carousel-item:nth-child(2) {
    top: 37.4%;
    left: 79.1%;
    width: 153px;
    height: 303px;
    -webkit-animation-duration: 1.8s;
    animation-duration: 1.8s;
  }

  .carousel-item:nth-child(3) {
    top: 68.3%;
    left: 66.7%;
    width: 94px;
    height: 82px;
    -webkit-animation-duration: 2.32s;
    animation-duration: 2.32s;
  }
}

.carousel-item-wrapper:nth-child(2) {
  -webkit-animation: fade-in-out2 16.8s infinite;
  animation: fade-in-out2 16.8s infinite;

  .carousel-item:first-child {
    top: 14.8%;
    left: 56.3%;
    width: 267px;
    height: 341px;
    -webkit-animation-duration: 1.86s;
    animation-duration: 1.86s;
  }

  .carousel-item:nth-child(2) {
    top: 42.8%;
    left: 77.6%;
    width: 181px;
    height: 224px;
    -webkit-animation-duration: 2.2s;
    animation-duration: 2.2s;
  }
  .carousel-item:nth-child(3) {
    top: 69.1%;
    left: 59.5%;
    width: 226px;
    height: 97px;
    -webkit-animation-duration: 1.7s;
    animation-duration: 1.7s;
  }
}

.carousel-item-wrapper:nth-child(3) {
  -webkit-animation: fade-in-out3 16.8s infinite;
  animation: fade-in-out3 16.8s infinite;

  .carousel-item:first-child {
    top: 43.5%;
    left: 77.3%;
    width: 182px;
    height: 261px;
    -webkit-animation-duration: 2.16s;
    animation-duration: 2.16s;
  }
  .carousel-item:nth-child(2) {
    top: 16.6%;
    left: 57.6%;
    width: 279px;
    height: 259px;
    -webkit-animation-duration: 2.03s;
    animation-duration: 2.03s;
  }
  .carousel-item:nth-child(3) {
    top: 64.9%;
    left: 62.8%;
    width: 130px;
    height: 61px;
    -webkit-animation-duration: 1.81s;
    animation-duration: 1.81s;
  }
}

.carousel-item {
  position: absolute;
  -webkit-animation: floating ease-in-out infinite alternate;
  animation: floating ease-in-out infinite alternate;
}

@-webkit-keyframes floating {
  0% {
    transform: translateY(0);
  }

  to {
    transform: translateY(5%);
  }
}

@keyframes floating {
  0% {
    transform: translateY(0);
  }

  to {
    transform: translateY(5%);
  }
}

@-webkit-keyframes fade-in-out1 {
  0% {
    opacity: 1;
  }

  29.7619047619% {
    opacity: 1;
  }

  31.5476190476% {
    opacity: 0;
  }

  98.2142857143% {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fade-in-out1 {
  0% {
    opacity: 1;
  }

  29.7619047619% {
    opacity: 1;
  }

  31.5476190476% {
    opacity: 0;
  }

  98.2142857143% {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@-webkit-keyframes fade-in-out2 {
  0% {
    opacity: 0;
  }

  31.5476190476% {
    opacity: 0;
  }

  33.3333333333% {
    opacity: 1;
  }

  63.0952380952% {
    opacity: 1;
  }

  64.880952381% {
    opacity: 0;
  }

  to {
    opacity: 0;
  }
}

@keyframes fade-in-out2 {
  0% {
    opacity: 0;
  }

  31.5476190476% {
    opacity: 0;
  }

  33.3333333333% {
    opacity: 1;
  }

  63.0952380952% {
    opacity: 1;
  }

  64.880952381% {
    opacity: 0;
  }

  to {
    opacity: 0;
  }
}

@-webkit-keyframes fade-in-out3 {
  0% {
    opacity: 0;
  }

  64.880952381% {
    opacity: 0;
  }

  66.6666666667% {
    opacity: 1;
  }

  96.4285714286% {
    opacity: 1;
  }

  98.2142857143% {
    opacity: 0;
  }

  to {
    opacity: 0;
  }
}

@keyframes fade-in-out3 {
  0% {
    opacity: 0;
  }

  64.880952381% {
    opacity: 0;
  }

  66.6666666667% {
    opacity: 1;
  }

  96.4285714286% {
    opacity: 1;
  }

  98.2142857143% {
    opacity: 0;
  }

  to {
    opacity: 0;
  }
}
</style>