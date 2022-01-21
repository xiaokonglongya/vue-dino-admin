<template>
  <div class="content my-4 grid grid-cols-24 gap-3">
    <div class="col-span-16">
      <div class="article mb-3 cursor-pointer" v-for="item in 5">
        <n-card hoverable>
          <template #header>
            <n-space>
              <n-tag type="warning"> JavaScript </n-tag>
              <n-tag type="error"> 基础知识 </n-tag>
              <span>面试常问的单例模式</span>
            </n-space>
          </template>
          <div class="flex">
            <div class="article-cover">
              <n-image
                width="240"
                height="160"
                object-fit="cover"
                src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
              />
            </div>
            <p
              class="article-content tracking-wider leading-relaxed indent-lg overflow-clip"
            >
              # 作者(Author)：于立。欢迎关注我的微信公众号：「于立为文」。 #
              链接(URL)：https://www.yulisay.com/ # 来源(Source)：魚立说 #
              版权声明：本网站所有文章除特别声明外，均采用 CC BY-NC-SA 4.0
              国际协议，转载或引用请署名作者并注明出处。
              搭建博客网站是个人进入互联网世界的最常见方式之一。伴随着网站技术的发展，如何搭建博客网站已经变得非常容易了。当然，你可以选择诸如
              新浪博客、CSDN、博客园
              之类的大型网站，快速创建依赖于大平台的个人博客，不过这种方式的不足是言论受限太多、无法触及网站底层技术。所以，对于想要自由发挥创意、又期望对网站拥有更多主动权的话，最好还是选择自己去亲手搭建一个网站。
            </p>
          </div>
          <template #footer>
            <n-space justify="end">
              <p class="flex footer-item cursor-pointer">
                <n-icon :size="ArticleFooterIconSize">
                  <PersonOutline />
                </n-icon>
                <span>小恐龙</span>
              </p>
              <p class="flex footer-item cursor-pointer">
                <n-icon :size="ArticleFooterIconSize">
                  <TimeOutline />
                </n-icon>
                <span> 2022-01-18</span>
              </p>
              <p class="flex footer-item cursor-pointer">
                <n-icon :size="ArticleFooterIconSize">
                  <EyeOutline />
                </n-icon>
                <span>999</span>
              </p>
              <p class="flex footer-item cursor-pointer">
                <n-icon :size="ArticleFooterIconSize">
                  <ChatbubblesOutline />
                </n-icon>
                <span>66</span>
              </p>
              <p class="flex footer-item cursor-pointer">
                <n-icon :size="ArticleFooterIconSize">
                  <ThumbsUpOutline />
                </n-icon>
                <span>66</span>
              </p>
            </n-space>
          </template>
        </n-card>
      </div>
    </div>
    <div class="col-span-8">
      <Notice />
      <!-- <UserInfo /> -->
    </div>
  </div>
</template>
<script lang="ts" setup>
import {
  PersonOutline,
  TimeOutline,
  EyeOutline,
  ChatbubblesOutline,
  ThumbsUpOutline,
} from "@vicons/ionicons5";
import Notice from "./components/Notice.vue";
const ArticleFooterIconSize = 16;
</script>

<style lang="less" scoped>
.article {
  position: relative;
  &::after {
    content: "";
    width: 0px;
    height: 100%;
    background-color: chocolate;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    transition: width 0.2s;
  }
  &:hover {
    &::after {
      width: 4px;
    }
  }
  &-cover {
    width: 280px;
    height: 160px;
    text-align: center;
  }
  &-content {
    flex: 1;
    height: 160px;
    overflow: hidden;
  }
}
.footer-item {
  align-items: center;
  span {
    padding-left: 2px;
  }
}
</style>
