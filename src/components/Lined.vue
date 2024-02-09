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
      --color: ${color};
      --width: ${width ?? '3px'};
      --length: ${length ?? '100%'};
      --offset-x: ${offsetX ?? '-12px'};
      --offset-y: ${offsetY ?? '8px'};`"
  >
    <slot />
  </span>
</template>

<style scoped>
.lined::after {
  content: '';
  height: 0;
  width: var(--length);
  position: relative;
  top: var(--offset-x);
  left: var(--offset-y);
  border-width: var(--width);
  border-radius: var(--width);
  border-color: var(--color);
  border-style: solid;
  display: block;
  z-index: -1;
}
</style>
