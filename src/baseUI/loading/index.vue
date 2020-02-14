<template>
  <div class="loading-wrapper">
    <div />
    <div />
  </div>
</template>
<script>
export default {};
</script>
<style lang="stylus" scoped>
@keyframes loading {
  0%, 100% {
    transform: scale(0);
  }

  50% {
    transform: scale(1);
  }
}

.loading-wrapper {
  >div {
    position: fixed;
    z-index: 1000;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    width: 60px;
    height: 60px;
    opacity: 0.6;
    border-radius: 50%;
    background-color: theme-color;
    animation: 1.4s infinite ease-in loading;
  }

  >div:nth-child (2) {
    animation-delay: -0.7s;
  }
}
</style>
