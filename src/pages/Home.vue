<script setup lang="ts">
import Gallery from '../components/Gallery.vue'
</script>

<template>
  <h1><img alt="云梦艺游" src="/logo.png" class="logo w-74"></h1>
  <Gallery
    class="relative bottom-4 left-12"
    style="
      --size: calc(100vh - 18em);
      height: var(--size);
      width: calc(var(--size) * 0.7);
      "
    :src="[
      '/portraits/1.png',
      '/portraits/2.png',
    ]"
  />
</template>

<style scoped>
.logo {
  filter: drop-shadow(5px 5px 5px #38494f);
}
</style>
