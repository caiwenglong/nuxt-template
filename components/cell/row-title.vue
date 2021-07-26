<template>
  <div class="row-title">
    <div class="row-title__container">
      <a class="row-title__text">
        <span>{{ title ? title : ''}}</span>
      </a>
      <a class="row-title__more">
        <span>更多>></span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scope>
.row-title {
  padding: 14px;
  padding-bottom: 20px;
}

.row-title__container {
  border-bottom: 1px solid #10161a1a;
  font-size: 2em;
  transition: all 0.25s linear;
  position: relative;
  display: flex;
  justify-content: space-between;
}

.row-title__container:before {
  content: '';
  display: block;
  width: 100%;
  height: 3px;
  background-color: #61a3ff;
  position: absolute;
  left: 0;
  bottom: -3px; /* this is to match where the border is */
  transform-origin: left;
  transform: scale(0);
  transition: 0.25s linear;
  /*   will-change: transform; */
}

.row-title__container:hover:before {
  transform: scale(1);
}

.row-title__text,
.row-title__more {
  display: block;
  cursor: pointer;
  > span {
    display: block;
  }
}

.row-title__more {
  font-size: 16px;
  color: #c2c2c2;
  display: flex;
  align-items: center;
}
</style>
