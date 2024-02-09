<script setup lang="ts">
import CustomButton from '../components/CustomButton.vue'
import Gallery from '../components/Gallery.vue'
</script>

<template>
  <img src="/town/sign.png" class="fixed w-102 left-48 bottom-18">
  <h1><img alt="云梦小镇" src="/town/logo-dark.png" class="logo w-74"></h1>
  <div class="my-4 w-94 h-52">
    <Gallery
      :src="[
        '/town/gallery/编陆纪行联动.jpg',
        '/town/gallery/沐春节.jpg',
      ]"
    />
  </div>
  <h2 class="mt-3 mb-7" style="color: #74b5d1;">
    见证每一次相遇
  </h2>
  <div class="flex gap-6">
    <CustomButton disabled type="primary" icon="computer">
      PC 端下载
    </CustomButton>
    <CustomButton disabled icon="smartphone">
      移动端下载
    </CustomButton>
    <CustomButton type="light" icon="gamepad" href="https://shequ.codemao.cn/work/81812943">
      在线游玩
    </CustomButton>
  </div>
  <div class="flex gap-3 mt-4 font-size-5">
    <a href="https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=VBRU23GyJWzNkqSkrryk0zFYW8OpuPO7&noverify=0&group_code=626730225"><i
      class="ri-qq-line"
    /></a>
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
