<template>
  <div id="app">
    <Nav/>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Nav from "./components/Nav";

export default {
  name: "App",
  components: {
    HelloWorld,
    Home,
    Profile,
    Nav
  }
};
</script>
