<template>
  <n-card content-style="padding: 0;">
    <n-carousel effect="fade" autoplay draggable style="height: 340px">
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
      />
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
      />
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
      />
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
      />
    </n-carousel>
  </n-card>
</template>
<script setup lang="ts">
// const effect:
</script>
<style lang="less" scoped>
.carousel-img {
  margin: 0 auto;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
