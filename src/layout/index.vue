<template>
  <div class="app">
    <div class="header-layout">
      <Header />
    </div>
    <AppMain />
  </div>
</template>
<script lang="ts" setup>
import Header from "./components/Header.vue";
import AppMain from "./AppMain.vue";
</script>
<style lang="less" scoped>
.app {
  min-height: 100vh;
  background-color: #f0f2f5;
  .header-layout {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }
}
</style>
