<template>
  <n-config-provider :theme="getDarkTheme">
    <Application>
      <router-view></router-view>
    </Application>
  </n-config-provider>
</template>
<script setup lang="ts">
import { darkTheme, dateZhCN, zhCN } from "naive-ui";
import { computed } from "vue";
import Application from "@/components/Application/Application.vue";
const getDarkTheme = computed(() => (false ? darkTheme : undefined));
</script>

<style>

</style>
