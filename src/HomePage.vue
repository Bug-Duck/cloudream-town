<script setup lang="ts">
import CustomButton from './CustomButton.vue'
</script>

<template>
  <img src="/sign.png" class="fixed w-102 left-48 bottom-18">
  <h1><img alt="云梦小镇" src="/logo-dark.png" class="logo w-74"></h1>
  <div class="gallery my-4 w-94 h-52 bg-gray-600" />
  <h2 class="line mt-4 mb-8" style="color: #74b5d1; --line-width: 3px; --line-length: 7em; --line-color: #fef4a4;">
    见证每一次相遇
  </h2>
  <div class="flex gap-6">
    <CustomButton type="primary" icon="computer">
      PC 端下载
    </CustomButton>
    <CustomButton icon="smartphone">
      移动端下载
    </CustomButton>
  </div>
  <div class="links flex gap-3 mt-4 font-size-5">
    <a href="#" class="ri-qq-line" />
    <a href="https://github.com/Bug-Duck/cloudream-town" class="ri-github-line" />
    <a href="https://space.bilibili.com/673305329" class="ri-bilibili-line" />
    <a href="#" class="ri-wechat-2-line" />
  </div>
</template>

<style scoped>
.links>a {
  color: #5a5a5a;
}

a:hover {
  filter: brightness(0.8);
}

#scroll:hover {
  filter: drop-shadow(0 0 12px #d4d4d4);
}
</style>
