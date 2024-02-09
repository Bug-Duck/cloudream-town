<script setup lang="ts">
import Gallery from '../components/Gallery.vue'
</script>

<template>
  <h1><img alt="云梦艺游" src="/logo.png" class="logo w-74"></h1>
  <Gallery
    class="gallery w-68 h-94 ml-12"
    :src="[
      '/character1.png',
      '/character2.png',
    ]"
  />
</template>

<style>
.logo {
  filter: drop-shadow(5px 5px 5px #38494f);
}

.gallery div {
  border: 2px solid #6d5959;
}
</style>
