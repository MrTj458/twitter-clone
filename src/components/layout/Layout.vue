<template>
  <section>
    <LeftNav class="left" />
    <div class="slot">
      <slot></slot>
    </div>
    <RightNav class="right" />
  </section>
</template>

<script>
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";

export default {
  name: "Layout",
  components: {
    LeftNav,
    RightNav,
  },
};
</script>

<style scoped>
section {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto 2fr 1fr;
}

.slot {
  border-left: 1px solid gray;
  border-right: 1px solid gray;
}

@media only screen and (max-width: 800px) {
  .right {
    display: none;
  }

  .slot {
    border-right: none;
  }

  section {
    grid-template-columns: auto 1fr;
  }
}
</style>
