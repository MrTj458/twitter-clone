<template>
  <div id="app">
    <LeftNav />
    <router-view />
    <RightNav />
  </div>
</template>

<script>
import LeftNav from "./components/layout/LeftNav";
import RightNav from "./components/layout/RightNav";

export default {
  name: "App",
  components: {
    LeftNav,
    RightNav,
  },
};
</script>

<style>
@import "./assets/styles.css";

#app {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto 2fr 1fr;
}
</style>
