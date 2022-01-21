<template>
  <n-card content-style="padding: 0;" class="shadow-gray-400 shadow-2xl">
    <div class="header flex justify-center">
      <header class="header-content flex justify-center">
        <div
          class="header-content-item tracking-widest transition"
          v-for="item in menus"
          :class="{
            'header-content-item_active': activeMenu?.title === item.title,
          }"
          @click="setActiveItem(item)"
        >
          {{ item.title }}
        </div>
      </header>
    </div>
  </n-card>
</template>
<script lang="ts" setup>
import { ref } from "vue";

interface MenuItemType {
  title: string;
}
const menus: Array<MenuItemType> = [
  {
    title: "首页",
  },

  {
    title: "标签",
  },
  {
    title: "网站推荐",
  },
  {
    title: "关于",
  },
];

const activeMenu = ref<MenuItemType>(menus[0]);
const setActiveItem = (item: MenuItemType) => {
  activeMenu.value = item;
};
</script>

<style lang="less" scoped>
@header_height: 60px;
@active_line_width: 40px;
.header {
  height: @header_height;
  &-content {
    width: 1200px;
    margin: 0 auto;
    align-items: center;
    &-item {
      height: 100%;
      line-height: @header_height;
      padding: 0 30px;
      position: relative;
      &::after {
        transition: all 0.3s;
        content: "";
        position: absolute;
        display: block;
        width: 0;
        height: 2px;
        bottom: 0;
        left: calc(50% - calc(@active_line_width / 2));
        background-color: brown;
        z-index: 10;
      }
      &_active {
        &::after {
          width: @active_line_width;
        }
      }
    }
  }
}
</style>
