<template>
  <section>
    <h3>Home</h3>
    <TweetForm />
    <TweetList />
  </section>
</template>

<script>
import TweetForm from "../components/tweets/TweetForm";
import TweetList from "../components/tweets/TweetList";

export default {
  name: "Home",
  components: {
    TweetForm,
    TweetList,
  },
};
</script>

<style scoped>
h3 {
  border-bottom: 1px solid var(--border-color);
  padding: 1rem;
}
</style>
