<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import { auth, db } from "./firebase/init";

export default {
  name: "App",
  created() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        db.collection("users")
          .doc(user.uid)
          .get()
          .then((doc) => {
            if (doc.exists) {
              this.$store.commit("setUser", doc.data());
            }
          });
      }
    });
  },
};
</script>

<style>
@import "./assets/styles.css";
</style>
