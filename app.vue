<template>
  <div>
    <img class="image-background" src="/images/background3.jpg" alt="">
    <NuxtPage />
  </div>
</template>

<script>
import Spline from './components/Spline.vue';

export default {
  components: { Spline },
  data() {
    return {};
  },
}
</script>
<style lang="scss">

.spline-container {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}
.image-background {
  position: fixed;
  top: -15px;
  left: -15px;
  width: calc(100vw + 30px);
  height: calc(100vh + 30px);
  object-fit: cover;
  z-index: -1;
  filter: blur(10px);
}
</style>