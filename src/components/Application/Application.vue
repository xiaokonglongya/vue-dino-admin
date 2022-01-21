<template>
  <NConfigProvider :theme-overrides="getThemeOverrides">
    <n-loading-bar-provider>
      <n-message-provider>
        <n-dialog-provider>
          <slot></slot>
        </n-dialog-provider>
      </n-message-provider>
    </n-loading-bar-provider>
  </NConfigProvider>
</template>
<script lang="ts" setup>
import { computed } from "vue";
/**
 * @type import('naive-ui').GlobalThemeOverrides
 */
const getThemeOverrides = computed(() => {
  //   const designStore = useDesignSetting();
  //   const appTheme = designStore.getAppTheme;
  return {
    LoadingBar: {
      //   colorLoading: appTheme.value,
    },
  };
});
</script>
