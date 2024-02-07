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
        <router-link to="/about" class="link">
          关与
        </router-link>
      </li>
      <li>
        <a href="https://space.bilibili.com/673305329">
          <img src="../assets/icons/bilibili-line.svg">
        </a>
      </li>
      <li>
        <a
          href="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=NgKGtUC94ptkJ5rrZhn6mzRXbp8eUc9l&authKey=Cclo6Cw%2BxKkGQ21JthF1NtLo%2BUTe9dkZv%2FH1VEG6yBVv9pWjinT0GF%2BApwmwadRv&noverify=0&group_code=626730225"
        >
          <img src="../assets/icons/qq-line.svg">
        </a>
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
