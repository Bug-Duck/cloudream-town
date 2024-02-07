<script setup lang="ts">
</script>

<template>
  <div>
    <ul>
      <li>
        <router-link to="/cloudream-town" class="link">
          云梦小镇
        </router-link>
      </li>
      <li>
        <router-link to="/cloudream-plan" class="link">
          云梦计划
        </router-link>
      </li>
      <li>
        <img src="../assets/icons/bilibili-line.svg">
      </li>
      <li>
        <img src="../assets/icons/qq-line.svg">
      </li>
    </ul>
  </div>
</template>

<style>
ul {
  list-style-type: none;
  position: fixed;
  bottom: 20px;
  left: 50px;
}

ul li {
  float: left;
  margin: 20px;
  font-size: 30px;
  color: black;
}

.link {
  color: black;
  text-decoration: none;
}

.link:hover {
  color: skyblue;
}
</style>
