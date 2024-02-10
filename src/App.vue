<script setup lang="ts">
import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const routes = router.getRoutes()
const frist = routes[0]
const last = routes[routes.length - 1]
const index = () => routes.findIndex(cur => cur.path === route.path)
const prev = () => routes[index() - 1]
const next = () => routes[index() + 1]

watch(() => route.meta.title as string, (newTitle: string) => {
  document.title = `云梦艺游 | ${newTitle}`
}, { immediate: true })
</script>

<template>
  <section class="background fixed" :data-route="$route.path" />
  <section class="blur-cover fixed backdrop-blur" />
  <section class="cover fixed px-12 py-8">
    <router-view />
  </section>

  <nav class="fixed left-14 bottom-10 flex gap-6 font-bold font-size-4.5">
    <router-link to="/">
      首页
    </router-link>
    <router-link to="/town">
      云梦小镇
    </router-link>
    <router-link to="/plan">
      云梦计划
    </router-link>
    <router-link to="/about">
      关于我们
    </router-link>
  </nav>

  <div class="nav fixed right-6 bottom-6 font-size-6">
    <a v-show="$route.path !== frist.path" id="prev" :href="prev()?.path">
      <i class="ri-arrow-left-s-line" />
    </a>
    <a v-show="$route.path !== last.path" id="next" :href="next()?.path">
      <i class="ri-arrow-right-s-line" />
    </a>
  </div>
</template>

<style scoped>
section {
  width: 100vw;
  height: 100vh;
}

.background {
  background-position: right top;
  background-size: auto 100%;
  background-image: var(--background);
  --town: url('/town/background.png');
  --plan: url('/plan/background.png');

  &[data-route="/"],
  &[data-route="/plan"] {
    --background: var(--plan);
  }

  &[data-route="/town"],
  &[data-route="/about"] {
    --background: var(--town);
  }
}

.blur-cover {
  clip-path: polygon(0 0, 39.3% 0, 65.5% 100%, 100% 87%, 100% 100%, 0 100%);
}

.cover {
  clip-path: polygon(0 0, 38.2% 0, 61.8% 100%, 0 100%);
  background-image: url(/grid.svg);
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
  background-image: url(/noise.png);
  pointer-events: none;
}

nav>a {
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
      z-index: -1;
    }
  }
}

.nav a {
  color: white;
}
</style>
