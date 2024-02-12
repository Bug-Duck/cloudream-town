<script setup lang="ts">
import { ref } from 'vue'
import { calc } from '../utils'

const { src } = withDefaults(defineProps<{
  src: [string, string, ...string[]]
  anchor?: `${'top' | 'bottom'}-${'left' | 'right'}`
  marignX?: string
  marignY?: string
  navSize?: string
  navGapSize?: string
  navColor?: string
  navActiveColor?: string
  navBorderColor?: string
}>(), {
  anchor: 'bottom-left',
  marignX: '2em',
  marignY: '1.4em',
  navSize: '0.5em',
  navGapSize: '0.5em',
  navColor: '#e1dfdd',
  navActiveColor: '#323130',
  navBorderColor: '#a19f9d',
})

const step = 5e-3
const epsilon = 1e-5
const offset = ref(0)
let intervalID: number | null = null

function mod(dividend: number, divisor: number): number {
  return (dividend % divisor + divisor) % divisor
}

function update(index: number, reverse?: boolean): void {
  function solved() {
    const diff = Math.abs((offset.value + index + 1) % src.length)
    return Math.min(diff, src.length - diff) <= epsilon
  }

  if (solved())
    return

  if (intervalID !== null)
    clearInterval(intervalID)

  intervalID = setInterval(() => {
    offset.value += (reverse ? -1 : 1) * step * src.length
    offset.value = mod(offset.value, src.length)
    if (solved()) {
      offset.value = Math.round(offset.value) % src.length
      clearInterval(intervalID!)
      intervalID = null
    }
  }, 0)
}

function shifted(index: number): number {
  return (index + offset.value) % src.length
}
</script>

<template>
  <div
    class="gallery" :data-anchor="anchor" :style="{
      '--gallery-length': src.length,
      '--gallery-width': 'calc(100% - var(--gallery-marign-x))',
      '--gallery-height': 'calc(100% - var(--gallery-marign-y))',
      '--gallery-marign-x': calc(marignX),
      '--gallery-marign-y': calc(marignY),
      '--gallery-nav-size': calc(navSize),
      '--gallery-nav-gap-size': calc(navGapSize),
      '--gallery-nav-color': navColor,
      '--gallery-nav-border-color': navBorderColor,
      '--gallery-nav-active-color': navActiveColor,
    }"
  >
    <div
      v-for="(item, index) in src" :key="`${item}-${index}`"
      class="page rounded" :class="{ first: shifted(index) + 1 > src.length }"
      :style="{
        'z-index': Math.round(shifted(index)),
        'background-image': `url(${item})`,
        '--gallery-index': shifted(index),
        '--gallery-offset': `calc(var(--gallery-height) * ${index})`,
      }"
      @click="update(index)"
    />
    <div
      class="page rounded" :style="{
        'z-index': -1,
        'opacity': offset - Math.floor(offset),
        'background-image': `url(${src[src.length - Math.ceil(offset)]})`,
        '--gallery-index': offset - Math.floor(offset) - 1,
        '--gallery-offset': `calc(var(--gallery-height) * ${src.length})`,
      }"
    />
    <nav>
      <span>
        <div
          v-for="(item, index) in src" :key="`${item}-${index}`"
          :class="{ active: Math.round(shifted(index)) + 1 === src.length }"
          @click="update(index, offset > src.length - index - 1)"
        />
      </span>
    </nav>
  </div>
</template>

<style scoped>
.page {
  position: relative;
  overflow: hidden;
  border-width: 1px;
  border-color: #b2b2bd;
  background-size: 100%;
  background-position: center;
  width: var(--gallery-width);
  height: var(--gallery-height);
  left: calc(var(--gallery-marign-x) * var(--gallery-page-x));
  top: calc(var(--gallery-marign-y) * var(--gallery-page-y) - var(--gallery-offset));
  --gallery-step: calc(var(--gallery-index) / (var(--gallery-length) - 1));

  &.first {
    opacity: calc(var(--gallery-length) - var(--gallery-index));
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, calc((1 - var(--gallery-step)) / 2));
  }
}

nav {
  position: relative;
  top: calc(var(--gallery-nav-y) - var(--gallery-height) * (var(--gallery-length) + 1));
  z-index: var(--gallery-length);

  span {
    display: flex;
    flex-direction: row-reverse;
    gap: var(--gallery-nav-gap-size);
    width: fit-content;

    div {
      width: var(--gallery-nav-size);
      height: var(--gallery-nav-size);
      background-color: var(--gallery-nav-color);
      border-width: 1px;
      border-radius: var(--gallery-nav-size);
      border-color: var(--gallery-nav-border-color);

      &.active {
        background-color: var(--gallery-nav-active-color);
      }
    }
  }
}

[data-anchor$="-left"] {
  .page {
    --gallery-page-x: calc(1 - var(--gallery-step));
  }

  nav {
    left: var(--gallery-nav-size);
  }
}

[data-anchor$="-right"] {
  .page {
    --gallery-page-x: var(--gallery-step);
  }

  nav {
    left: calc(100% - var(--gallery-length) * (var(--gallery-nav-size) + var(--gallery-nav-gap-size)));
  }
}

[data-anchor^="top-"] {
  .page {
    --gallery-page-y: calc(1 - var(--gallery-step));
  }

  nav {
    --gallery-nav-y: var(--gallery-nav-size);
  }
}

[data-anchor^="bottom-"] {
  .page {
    --gallery-page-y: var(--gallery-step);
  }

  nav {
    --gallery-nav-y: calc(100% - 2 * var(--gallery-nav-size));
  }
}
</style>
