<script setup lang="ts">
import { ref } from 'vue'
import Guider from './components/Guider.vue'

const url = ref('./assets/background.png')
</script>

<template>
  <div
    class="background fixed top-0 z-index-100" :style="{
      backgroundImage: url,
    }"
  >
    <div class="bg-white cover fade-in">
      <router-view />
      <Guider />
    </div>
  </div>
</template>

<style scoped>
.cover {
  clip-path: polygon(0 0, 38.2% 0, 61.8% 100%, 0 100%);
  width: 100%;
  height: 100vh;
  margin: 0;
}

.fade-in {
  animation: fadeInAnimation 0.7s;
  opacity: 0.9;
}

@keyframes fadeInAnimation {
  from {
    opacity: 0;
  }

  ;

  to {
    opacity: 0.9;
  }

  ;
}

.background {
  margin: 0;
  display: absolute;
  place-items: center;
  background-image: url('./assets/background1.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #464646;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
