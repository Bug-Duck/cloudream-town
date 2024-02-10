<script setup lang="ts">
defineProps<{
  color: string
  width?: string
  length?: string
  offsetX?: string
  offsetY?: string
}>()
</script>

<template>
  <span
    class="lined" :style="`
      --lined-color: ${color};
      --lined-width: ${width ?? '3px'};
      --lined-length: ${length ?? '100%'};
      --lined-offset-x: ${offsetX ?? '-12px'};
      --lined-offset-y: ${offsetY ?? '8px'};`"
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
