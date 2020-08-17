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
:root {
  --primary-color: rgb(29, 161, 242);
  --bg-color: rgb(21, 32, 43);
  --bg-light: rgb(25, 39, 52);
  --border-color: rgb(128, 128, 128);
  --text-color: rgb(255, 255, 255);
  --selected-color: rgb(29, 161, 242);
  --hover-color: rgba(29, 161, 242, 0.1);
  --hover-color: rgb(26, 145, 218);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
  font-family: sans-serif;
}

#app {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}

hr {
  width: 100%;
  color: var(--border-color);
}
</style>
