<template>
  <section>
    <i class="fas fa-dove fa-2x"></i>
    <h2>Register for Fake Twitter</h2>
    <p v-if="error">{{ error }}</p>
    <form @submit.prevent="register">
      <fieldset>
        <div class="field">
          <label for="email">Email</label>
          <input v-model="email" ref="email" type="text" name="email" />
        </div>
        <div class="field">
          <label for="username">Username</label>
          <input v-model="username" type="text" name="username" />
        </div>
        <div class="field">
          <label for="password">Password</label>
          <input v-model="password" type="password" name="password" />
        </div>
        <div class="field">
          <label for="password2">Confirm Password</label>
          <input v-model="password2" type="password" name="password2" />
        </div>
        <input type="submit" value="Register" :disabled="!canRegister" />
      </fieldset>
    </form>
    <small>
      Already have an account?
      <router-link :to="{ name: 'login' }">Log in</router-link>
    </small>
  </section>
</template>

<script>
import { auth, db } from "../firebase/init";

export default {
  name: "Register",
  data() {
    return {
      error: "",
      email: "",
      username: "",
      password: "",
      password2: "",
    };
  },
  mounted() {
    this.$refs.email.focus();
  },
  computed: {
    canRegister() {
      if (this.email && this.username && this.password && this.password2) {
        return true;
      }
      return false;
    },
  },
  methods: {
    register() {
      if (this.password !== this.password2) {
        this.error = "Passwords must match!";
        return;
      }

      auth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((cred) => {
          db.collection("users").doc(cred.user.uid).set({
            username: this.username,
            avatar:
              "https://firebasestorage.googleapis.com/v0/b/twitter-clone-716ff.appspot.com/o/avatars%2Fdefault.jpeg?alt=media&token=43da35a8-5b7f-4461-b17d-535e564927c4",
          });
        })
        .then(() => {
          this.$router.push({ name: "home" });
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
  },
};
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

i {
  margin: 2rem 0 1rem 0;
}

p {
  margin-bottom: 2rem;
  color: var(--error-color);
}

h2 {
  margin-bottom: 2rem;
}

a {
  color: var(--selected-color);
}

fieldset {
  border: 0;
}

form {
  width: 400px;
  max-width: 100%;
  margin-bottom: 2rem;
}

label {
  color: var(--border-color);
}

/* Field styles */
.field {
  margin-bottom: 1rem;
  padding: 0.5rem;
  background: var(--bg-light);
  border-bottom: 2px solid var(--border-color);
  border-radius: 2px;
}

.field:focus-within {
  border-bottom: 2px solid var(--primary-color);
}

.field:focus-within label {
  color: var(--primary-color);
}

/* Input styles */
input {
  display: block;
  width: 100%;
  background: none;
  color: var(--text-color);
  border: 0;
  font-size: 1.3rem;
  margin-top: 0.3rem;
}

input:focus {
  outline: 0;
}

input[type="submit"] {
  background: var(--primary-color);
  border-radius: 50px;
  padding: 1rem 2rem;
  cursor: pointer;
}

input[type="submit"]:hover {
  background: var(--hover-color);
}

input[type="submit"]:disabled {
  background: var(--bg-light);
  color: var(--border-color);
}
</style>
