<template>
  <div class="unit-btn-cycle">
    <div class="btn-cycle">
      <div style="--color: #2196f3">
        <i class="el-icon-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  mounted () {
    const btnCycles = document.querySelectorAll('.btn-cycle > div')
    btnCycles.forEach((btn) => {
      btn.addEventListener('mousemove', (e) => {
        const size = parseInt(getComputedStyle(btn).width)
        // scaling
        const x = size * 0.3 * 0.7 + 0.7 * e.offsetX
        const y = size * 0.3 * 0.7 + 0.7 * e.offsetY
        btn.style.setProperty('--x', x)
        btn.style.setProperty('--y', y)
        btn.style.setProperty('--size', size)
      })
    })
  }

}
</script>


<style lang="scss" scoped>
.btn-cycle {
  text-align: right;
}
.btn-cycle div {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 10vw;
  height: 10vw;
  min-width: 5em;
  min-height: 5em;
  transition: 0.5s all ease;
  background: var(--color, #aaa);
  border: 0 solid transparent;
  box-sizing: border-box;
  border-radius: 50%;
  margin: 0.5em;
  opacity: 0.7;
  --dx: calc(var(--size) - var(--x));
  --dy: calc(var(--size) - var(--y));
}
.btn-cycle div:hover {
  opacity: 1;
  cursor: pointer;
  border: calc(2px + 0.85vw) solid rgba(255, 255, 255, 0.5);
  transition: 0.5s background-color ease, 0.2s border ease;
  border-radius: calc(var(--x) / var(--size) * 100%)
    calc(var(--dx) / var(--size) * 100%) calc(var(--dx) / var(--size) * 100%)
    calc(var(--x) / var(--size) * 100%) / calc(var(--y) / var(--size) * 100%)
    calc(var(--y) / var(--size) * 100%) calc(var(--dy) / var(--size) * 100%)
    calc(var(--dy) / var(--size) * 100%);
}
body:not([style]) .btn-cycle div:first-child:after,
.btn-cycle div:after {
  color: rgba(255, 255, 255, 0);
  font-size: calc(1vw + 1.2em);
  font-weight: 200;
  transition: all 0.2s ease;
  transition-delay: 0.1s;
  transform: translate3d(0, -0.5em, 0);
}
body:not([style]) .btn-cycle div:first-child:after,
.btn-cycle div:hover:after {
  color: rgba(255, 255, 255, 0.7);
  transform: translate3d(0, 0, 0);
}
.el-icon-right:before {
  content: '';
  font-size: 60px;
  color: #fff;
}
</style>