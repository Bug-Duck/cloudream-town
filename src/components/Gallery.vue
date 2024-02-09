<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  src: [string, string, ...string[]]
  width?: string
  height?: string
  anchor?: `${'top' | 'bottom'}-${'left' | 'right'}`
}>()

const offset = ref(0)
</script>

<template>
  <div
    class="w-100% h-100%"
    :data-anchor="anchor ?? 'bottom-left'"
    :style="`
    --width: calc(${width ?? '100% - 2em'});
    --height: calc(${height ?? '100% - 1.4em'});
    --length: ${src.length - 1};`"
  >
    <div
      v-for="(item, index) in src"
      :key="`${item}-${index}`"
      class="page rounded"
      :style="`
      --index: ${(index + offset) % src.length};
      --src: url(${item})`"
      @click="console.log(index)"
    />
  </div>
</template>

<style scoped>
.page {
  transition: all 0.3s;
  background-image: var(--src);
  background-size: 100%;
  position: relative;
  width: var(--width);
  height: var(--height);
  --step: calc(var(--index) / var(--length));
  --offset: (var(--marign-y) - 100%) * var(--index);
  --marign-x: calc(100% - var(--width));
  --marign-y: calc(100% - var(--height));
}

[data-anchor^="top-"] .page {
  top: calc(var(--offset) + var(--marign-y) * (1 - var(--step)));
}
[data-anchor^="bottom-"] .page {
  top: calc(var(--offset) + var(--marign-y) * var(--step));
}
[data-anchor$="-left"] .page {
  left: calc(var(--marign-x) * (1 - var(--step)));
}
[data-anchor$="-right"] .page {
  left: calc(var(--marign-x) * var(--step));
}

.page::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, calc((1 - var(--step)) / 2));
}
</style>
