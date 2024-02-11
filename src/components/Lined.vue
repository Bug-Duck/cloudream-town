<script setup lang="ts">
import { calc } from '../utils'

withDefaults(defineProps<{
  color: string
  width?: string
  length?: string
  offsetX?: string
  offsetY?: string
}>(), {
  width: '3px',
  length: '100%',
  offsetX: '-12px',
  offsetY: '8px',
})
</script>

<template>
  <span
    class="lined" :style="{
      '--lined-color': color,
      '--lined-width': calc(width),
      '--lined-length': calc(length),
      '--lined-offset-x': calc(offsetX),
      '--lined-offset-y': calc(offsetY),
    }"
  >
    <slot />
  </span>
</template>

<style scoped>
.lined::after {
  content: '';
  height: 0;
  width: var(--lined-length);
  position: relative;
  top: var(--lined-offset-x);
  left: var(--lined-offset-y);
  border-width: var(--lined-width);
  border-radius: var(--lined-width);
  border-color: var(--lined-color);
  display: block;
  z-index: -1;
}
</style>
