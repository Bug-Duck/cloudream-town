<script setup lang="ts">
import { onMounted } from 'vue'
import CustomButton from './CustomButton.vue'
import HomePage from './HomePage.vue'

onMounted(() => {
  window.location.hash = 'home'
  update()
})

function update() {
  setTimeout(() => {
    const hash = window.location.hash
    const parent = document.getElementById('nav')
    if (parent) {
      for (const child of parent.children)
        child.className = ''
    }
    if (hash) {
      const element = document.querySelector(`a[href="${hash}"]`)
      if (element)
        element.className = 'line'
    }
  }, 30)
}
</script>

<template>
  <section class="blur-cover fixed backdrop-blur" />
  <div class="pages">
    <section id="home" class="cover p-13.5">
      <HomePage />
    </section>
    <section id="notice" class="cover p-13.5">
      <h1>广告位招租</h1>
    </section>
    <section id="contact" class="cover p-13.5">
      <h1>这里是联系页信息</h1>
    </section>
    <section id="about" class="cover p-13.5">
      <h1 class="mb-8">
        Q: 我们是谁？
      </h1>
      <p class="lh-200% font-size-4.5">
        既然你诚心诚意的发问了，<br>我们就大发慈悲的告诉你，<br>为了防止世界被破坏，<br>为了守护世界的和平，<br>贯彻爱与真实的邪恶，<br>可爱又迷人的反派角色，<br>武藏、小次郎！<br>我们是穿梭在银河的火箭队，<br>白洞，白色的明天在等著我们！
      </p>
    </section>
  </div>

  <nav
    id="nav" class="fixed left-14 bottom-10 flex gap-6 font-bold font-size-4.5" style="--line-width: 2px; --line-length: 1.7em; --line-color: #80cebc;"
    @click="update()"
  >
    <a href="#home">主页</a>
    <a href="#notice">公告</a>
    <a href="#contact">联系</a>
    <a href="#about">关于</a>
  </nav>
  <div class="absolute top-7 right-9 flex gap-6">
    <CustomButton type="light" icon="gamepad">
      在线游玩
    </CustomButton>
    <CustomButton type="primary" icon="login-box">
      登录 & 注册
    </CustomButton>
  </div>
  <i id="scroll" class="fixed right-5.5 bottom-6 ri-scroll-to-bottom-line color-white font-size-7.4" />
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

nav>a {
  color: #787875;

  &.line {
    color: #212121;
  }
}
</style>
