<script setup lang="ts">
import CustomButton from './CustomButton.vue'
</script>

<template>
  <img alt="Cloud Dream Town" src="/sign.png" class="fixed w-102 left-48 bottom-18">
  <h1><img alt="云梦小镇" src="/logo-dark.png" class="logo w-74"></h1>
  <div class="gallery my-4 w-94 h-52 bg-gray-600" />
  <h2 class="mt-4 mb-7" style="color: #74b5d1;">
    见证每一次相遇
  </h2>
  <div class="flex gap-6">
    <CustomButton disabled type="primary" icon="computer">
      PC 端下载
    </CustomButton>
    <CustomButton disabled icon="smartphone">
      移动端下载
    </CustomButton>
  </div>
  <div class="flex gap-3 mt-4 font-size-5">
    <a href="#"><i class="ri-qq-line" /></a>
    <a href="https://github.com/Bug-Duck/cloudream-town"><i class="ri-github-line" /></a>
    <a href="https://space.bilibili.com/673305329"><i class="ri-bilibili-line" /></a>
    <a href="#"><i class="ri-wechat-2-line" /></a>
  </div>
</template>

<style scoped>
h2::after {
  content: '';
  width: 7em;
  height: 0;
  border-width: 5px;
  border-radius: 5px;
  border-color: #fef4a4;
  position: relative;
  top: -9px;
  left: 14px;
  display: block;
  border-style: solid;
  z-index: -1;
}

i {
  color: #5a5a5a;
}

i:hover {
  filter: brightness(0.8);
}
</style>
