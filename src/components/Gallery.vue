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
    class="w-100% h-100%" :data-anchor="anchor ?? 'bottom-left'"
    :style="`
      --width: calc(${width ?? '100% - 2em'});
      --height: calc(${height ?? '100% - 1.4em'});
      --length: ${src.length - 1};`"
  >
    <div
      v-for="(item, index) in src"
      :key="`${item}-${index}`"
      class="page rounded relative"
      :style="`
        --index: ${(index + offset) % src.length};
        --raw-index: ${index};
        background-image: url(${item})`"
      @click="offset = src.length - index - 1"
    />
  </div>
</template>

<style scoped>
.page {
  background-size: 100%;
  width: var(--width);
  height: var(--height);
  z-index: var(--index);
  --step: calc(var(--index) / var(--length));
  --offset: (var(--marign-y) - 100%) * var(--raw-index);
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
