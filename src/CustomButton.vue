<script setup lang="ts">
defineProps<{
  disabled?: boolean
  type?: 'dark' | 'light' | 'primary'
  href?: string
  icon?: string
}>()
</script>

<template>
  <a v-if="href && !disabled" :href="href" :data-button-style="type ?? 'dark'" class="backdrop-blur">
    <span><slot /><i v-if="icon" :class="`ri-${icon}-line pl-1 my-auto`" /></span>
  </a>
  <a v-else :data-button-style="type ?? 'dark'" class="backdrop-blur">
    <span><slot /><i v-if="icon" :class="`ri-${icon}-line pl-1 my-auto`" /></span>
  </a>
</template>

<style scoped>
a {
  width: 8rem;
  height: 2.375rem;
  border-width: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-radius: 0.375rem;
  font-size: 0.95rem;
  font-weight: 700;
  color: white !important;
}

a:hover {
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
