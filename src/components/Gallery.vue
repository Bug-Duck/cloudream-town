<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  src: [string, string, ...string[]]
  marignX?: string
  marignY?: string
  anchor?: `${'top' | 'bottom'}-${'left' | 'right'}`
  navSize?: string
  navGapSize?: string
  navColor?: string
  navBorderColor?: string
  navActiveColor?: string
}>()

const offset = ref(0)
</script>

<template>
  <div
    class="gallery"
    :data-anchor="anchor ?? 'bottom-left'"
    :style="`
      --gallery-marign-x: calc(${marignX ?? '2em'});
      --gallery-marign-y: calc(${marignY ?? '1.4em'});
      --gallery-length: ${src.length};
      --gallery-nav-size: ${navSize ?? '0.5em'};
      --gallery-nav-gap-size: ${navGapSize ?? '0.5em'};
      --gallery-nav-color: ${navColor ?? '#e1dfdd'};
      --gallery-nav-border-color: ${navBorderColor ?? '#a19f9d'};
      --gallery-nav-active-color: ${navActiveColor ?? '#323130'};`"
  >
    <div
      v-for="(item, index) in src"
      :key="`${item}-${index}`"
      class="page rounded" :style="`
        --gallery-index: ${(index + offset) % src.length};
        --gallery-raw-index: ${index};
        background-image: url(${item});`"
      @click="offset = src.length - index - 1"
    />
    <nav>
      <span>
        <div
          v-for="(item, index) in src"
          :key="`${item}-${index}`"
          :data-active="offset === src.length - index - 1"
          @click="offset = src.length - index - 1"
        />
      </span>
    </nav>
  </div>
</template>

<style scoped>
.gallery {
  --gallery-width: calc(100% - var(--gallery-marign-x));
  --gallery-height: calc(100% - var(--gallery-marign-y));
}

.page {
  position: relative;
  overflow: hidden;
  border-width: 1px;
  border-color: #b2b2bd;
  background-size: 100%;
  background-position: center;
  width: var(--gallery-width);
  height: var(--gallery-height);
  z-index: var(--gallery-index);
  left: calc(var(--gallery-marign-x) * var(--gallery-anchor-x));
  top: calc(var(--gallery-marign-y) * var(--gallery-anchor-y) - var(--gallery-offset));
  --gallery-step: calc(var(--gallery-index) / (var(--gallery-length) - 1));
  --gallery-offset: calc(var(--gallery-height) * var(--gallery-raw-index));
}

.page::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, calc((1 - var(--gallery-step)) / 2));
}

nav {
  position: relative;
  z-index: var(--gallery-length);

  span {
    display: flex;
    flex-direction: row-reverse;
    gap: var(--gallery-nav-gap-size);
    width: fit-content;

    div {
      width:  var(--gallery-nav-size);
      height: var(--gallery-nav-size);
      background-color: var(--gallery-nav-color);
      border-width: 1px;
      border-radius: var(--gallery-nav-size);
      border-color: var(--gallery-nav-border-color);

      &[data-active="true"] {
        background-color: var(--gallery-nav-active-color);
      }
    }
  }
}

[data-anchor$="-left"] {
  .page {
    --gallery-anchor-x: calc(1 - var(--gallery-step));
  }
  nav {
    left: var(--gallery-nav-size);
  }
}

[data-anchor$="-right"] {
  .page {
    --gallery-anchor-x: var(--gallery-step);
  }
  nav {
    left: calc(100% - var(--gallery-length) * (var(--gallery-nav-size) + var(--gallery-nav-gap-size)));
  }
}

[data-anchor^="top-"] {
  .page {
    --gallery-anchor-y: calc(1 - var(--gallery-step));
  }
  nav {
    top: calc(var(--gallery-nav-size) - var(--gallery-height) * var(--gallery-length));
  }
}

[data-anchor^="bottom-"] {
  .page {
    --gallery-anchor-y: var(--gallery-step);
  }

  nav {
    top: calc(100% - 2 * var(--gallery-nav-size) - var(--gallery-height) * var(--gallery-length));
  }
}
</style>
