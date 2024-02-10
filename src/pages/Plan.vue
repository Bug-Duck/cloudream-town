<script setup lang="ts">
import CustomButton from '../components/CustomButton.vue'
import Gallery from '../components/Gallery.vue'
import Lined from '../components/Lined.vue'
</script>

<template>
  <h1>云梦计划</h1>
  <Gallery
    class="my-4 w-94 h-52"
    anchor="top-right"
    :src="[
      '/plan/gallery/4.webp',
      '/plan/gallery/3.webp',
      '/plan/gallery/2.webp',
      '/plan/gallery/1.webp',
      '/plan/gallery/0.webp',
    ]"
  />
  <h2 class="mt-3 mb-7" style="color: #4c5640;">
    <Lined color="#c9beab" length="9em">
      万物有灵，生生不息
    </Lined>
  </h2>
  <div class="flex gap-6">
    <CustomButton icon="gamepad" href="https://shequ.codemao.cn/work/81812943">
      在线游玩
    </CustomButton>
    <CustomButton type="primary" icon="reserved" href="https://www.taptap.cn/app/208492">
      现在预约
    </CustomButton>
  </div>
</template>
