<template>
  <div>
    <div class="header grid grid-cols-24 gap-3">
      <div class="col-span-16">
        <UseSwiper />
      </div>
      <div class="col-span-8">
        <UserInfo />
      </div>
    </div>
    <div class="content">
      <Content />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useMessage } from "naive-ui";
import UseSwiper from "./components/Swiper.vue";
import UserInfo from "./components/UserInfo.vue";
import Content from "./Content.vue";
const message = useMessage();
const showMessage = () => {
  message.info("消息");
};
</script>
