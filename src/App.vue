<script setup lang="ts">
import CustomButton from './CustomButton.vue'
</script>

<template>
  <!-- <section class="target" /> -->
  <section>
    <section class="cover p-13.5">
      <h1><img alt="云梦小镇" src="/logo-dark.png" class="logo w-74 mt-8"></h1>
      <img src="/sign.png" class="absolute w-102 left-48 bottom-15">
      <div class="gallery my-6 w-94 h-53 bg-gray-600" />
      <h2 class="mb-8" style="color: #74b5d1; --line-color: #fef4a4;">
        见证每一次相遇
      </h2>
      <div class="downloads flex gap-6">
        <CustomButton type="primary" icon="computer">
          PC 端下载
        </CustomButton>
        <CustomButton icon="smartphone">
          移动端下载
        </CustomButton>
      </div>
      <div class="links flex gap-3">
        <a href="#" class="ri-qq-line" />
        <a href="https://github.com/Bug-Duck/cloudream-town" class="ri-github-line" />
        <a href="https://space.bilibili.com/673305329" class="ri-bilibili-line" />
        <a href="#" class="ri-wechat-2-line" />
      </div>
      <nav style="--line-color: #80cebc;">
        <a class="line" href="#homepage">主页</a>
        <a class="line" href="#notice">公告</a>
        <a class="line" href="#contact">联系</a>
        <a class="line" href="#about">关于</a>
      </nav>
    </section>
    <div class="absolute top-7 right-9 flex gap-6">
      <CustomButton type="plain" icon="gamepad">
        在线游玩
      </CustomButton>
      <CustomButton type="primary" icon="login-box">
        登录 & 注册
      </CustomButton>
    </div>
  </section>
</template>

<style scoped>
.target {
  position: fixed;
  left: 0;
  right: 0;
  background-image: url(Homepage@2x.png);
  background-size: 100%;
  opacity: 0.3;
  z-index: 100;
}

.cover {
  clip-path: polygon(0 0, 38.2% 0, 61.8% 100%, 0 100%);
  background-image: url(grid.svg);
  background-size: 28px;
}

.cover::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 4%;
  background-image: url(noise.png);
}

.line::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-width: 1em;
  border-color: var(--line-color);
  opacity: 4%;
}
</style>
