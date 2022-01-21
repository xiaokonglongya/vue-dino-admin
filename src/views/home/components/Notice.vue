<template>
  <n-card title="最新公告">
    <div class="flex info-item" v-for="item in 5">
      <n-icon :size="iconSize" :depth="1">
        <VolumeLowOutline />
      </n-icon>
      <div class="info-item-context flex-1">公告1</div>
      <div class="info-item-context">2021-03-06</div>
    </div>
  </n-card>
</template>
<script setup lang="ts">
import { VolumeLowOutline } from "@vicons/ionicons5";

const iconSize = 18;
</script>
<style scoped lang="less">
.avator {
  &:hover {
    // transform: scale(1);
  }
}
.info-item {
  align-items: center;
  padding: 10px 0;
  position: relative;
  &-context {
    padding-left: 4px;
  }

  &::after {
    content: "";
    width: 0px;
    height: 1px;
    background-color: chocolate;
    position: absolute;
    left: 0;
    bottom: 0;
    transition: width 0.2s;
  }
  &:hover {
    color: red;
    &::after {
      width: 100%;
    }
  }
}
</style>
