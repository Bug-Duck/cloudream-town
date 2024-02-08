<script setup lang="ts">
defineProps<{
  type?: 'primary' | 'plain'
  icon?: string
}>()
</script>

<template>
  <button :data-button="type" class="rounded-md backdrop-blur w-32 h-9.5 b-2 font-size-3.8 color-white">
    <slot />
    <i v-if="icon" :class="`ri-${icon}-line`" />
  </button>
</template>

<style scoped>
button {
  border-color: #7e8383;
  background-color: #424a49;
}

[data-button="primary"] {
  border-color: #7dd0bf;
  background-color: #29b9a1;
}

[data-button="plain"] {
  border-color: #bbd0d9;
  background-color: #9bb9c7;
}
</style>
