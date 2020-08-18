<template>
  <Layout>
    <h3>Home</h3>
    <TweetForm />
    <TweetList />
  </Layout>
</template>

<script>
import Layout from "../components/layout/Layout";
import TweetForm from "../components/tweets/TweetForm";
import TweetList from "../components/tweets/TweetList";

export default {
  name: "Home",
  components: {
    Layout,
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
