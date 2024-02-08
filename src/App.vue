<script setup lang="ts">
import CustomButton from './CustomButton.vue'
</script>

<template>
  <section class="blur-cover fixed backdrop-blur" />
  <section class="cover p-13.5">
    <router-view />
  </section>

  <nav class="fixed left-14 bottom-10 flex gap-6 font-bold font-size-4.5">
    <router-link to="/town" style="--line-length: 4em;">
      云梦小镇
    </router-link>
    <router-link to="/plan" style="--line-length: 4em;">
      云梦计划
    </router-link>
    <router-link to="/about" style="--line-length: 4em;">
      关于
    </router-link>
  </nav>
  <div class="absolute top-7 right-9 flex gap-6">
    <CustomButton
      v-show="['/town', '/plan'].includes($route.path)"
      type="light" icon="gamepad" :href="{
        '/town': 'https://shequ.codemao.cn/work/81812943',
        '/plan': 'https://shequ.codemao.cn/work/196562887',
      }[$route.path] ?? ''"
    >
      在线游玩
    </CustomButton>
    <CustomButton disabled type="primary" icon="login-box">
      登录 & 注册
    </CustomButton>
  </div>
  <i class="fixed right-5.5 bottom-6 ri-scroll-to-bottom-line color-white font-size-7.4" />
</template>

<style scoped>
section {
  width: 100vw;
  height: 100vh;
}

.blur-cover {
  clip-path: polygon(0 0, 39.3% 0, 65.5% 100%, 100% 87%, 100% 100%, 0 100%);
}

.cover {
  clip-path: polygon(0 0, 38.2% 0, 61.8% 100%, 0 100%);
  background-image: url(grid.svg);
  background-size: 28px;
}

.cover::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 4%;
  background-image: url(noise.png);
  pointer-events: none;
}

nav > a {
  color: #787875;

  &:hover {
    filter: brightness(0.8);
  }

  &.router-link-active {
    color: #212121;

    &::after {
      content: '';
      width: 100%;
      height: 0;
      border-width: 3px;
      border-radius: 3px;
      border-color: #80cebc;
      position: relative;
      top: -5px;
      left: 5px;
      display: block;
      border-style: solid;
      z-index: -1;
    }
  }
}
</style>
