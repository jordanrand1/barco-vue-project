<template>
  <div id="navbar">
    <sui-menu pointing secondary class="nav">
      <router-link is="sui-menu-item" to="/">Home</router-link>
    </sui-menu>
  </div>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style>
.nav {
  width: 100%;
  height: 40px;
  background-color: white !important;
  position: fixed;
  top: 0;
  z-index: 100;
}

.nav-item {
  align-items: center;
  text-align: center;
}
</style>

