<template>
  <div id="canvas3d" ref="canvasContainer" class="canva-spline"></div>
</template>

<script>
import { Application } from '@splinetool/runtime';


export default {
  mounted() {
    this.initSpline();
  },
  methods: {
    initSpline() {

      const canvas = document.getElementById('canvas3d');
      const app = new Application(canvas);
      app.load('https://prod.spline.design/URBRaotptNxntvZV/scene.splinecode');
      // const canvas = this.$refs.canvasContainer;
      // const app = new Application(canvas);
      // app.load('https://prod.spline.design/URBRaotptNxntvZV/scene.splinecode');
    },
  },
};
</script>

<style scoped lang="scss">
.canva-spline {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
