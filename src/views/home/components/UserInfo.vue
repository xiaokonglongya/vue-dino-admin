<template>
  <n-card title="我的名片">
    <div class="text-center">
      <n-avatar
        class="avator transition-all border shadow-2xl"
        round
        :size="68"
        src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      />
    </div>
    <div class="flex info-item">
      <n-icon :size="iconSize" :depth="1">
        <AccessibilityOutline />
      </n-icon>
      <div class="info-item-context">小恐龙</div>
    </div>
    <div class="flex info-item">
      <n-icon :size="iconSize" :depth="1">
        <BookmarkOutline />
      </n-icon>
      <div class="info-item-context">WEB前端工程师</div>
    </div>
    <div class="flex info-item">
      <n-icon :size="iconSize" :depth="1">
        <ChatboxEllipsesOutline />
      </n-icon>
      <div class="info-item-context">1363931801@qq.com</div>
    </div>
    <div class="line bg-gray-200 my-2" style="height: 1px"></div>
    <div class="action grid grid-cols-4">
      <div
        class="action-item col-auto justify-center grid grid-col"
        v-for="item in 4"
      >
        <n-icon :size="48" :depth="1">
          <LogoGithub />
        </n-icon>
        <span class="inline-block text-center">QQ</span>
      </div>
    </div>
  </n-card>
</template>
<script setup lang="ts">
import {
  AccessibilityOutline,
  BookmarkOutline,
  ChatboxEllipsesOutline,
  LogoGithub
} from "@vicons/ionicons5";

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
  padding: 4px;
  &-context {
    padding-left: 4px;
  }
}
</style>
