<script setup lang="ts">
defineProps<{
  type?: 'dark' | 'light' | 'primary'
  icon?: string
}>()
</script>

<template>
  <button :data-button-style="type ?? 'dark'" class="w-32 h-9.5 b-2 b-solid rounded-md backdrop-blur font-size-3.8 font-bold color-white">
    <slot />
    <i v-if="icon" :class="`ri-${icon}-line pl-1`" />
  </button>
</template>

<style scoped>
button:hover {
  filter: brightness(1.1);
}

[data-button-style="dark"] {
  border-color: #7e8383;
  background-color: #424a49;
  &:hover {
    filter: brightness(1.2);
  }
}

[data-button-style="light"] {
  border-color: #bbd0d9;
  background-color: #9bb9c7;
}

[data-button-style="primary"] {
  border-color: #7dd0bf;
  background-color: #29b9a1;
}
</style>
