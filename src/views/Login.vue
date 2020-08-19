<template>
  <section>
    <i class="fas fa-dove fa-2x"></i>
    <h2>Login to Fake Twitter</h2>
    <p v-if="error">{{ error }}</p>
    <form @submit.prevent="login">
      <fieldset>
        <div class="field">
          <label for="email">Email</label>
          <input v-model="email" ref="email" type="text" name="email" />
        </div>
        <div class="field">
          <label for="password">Password</label>
          <input v-model="password" type="password" name="password" />
        </div>
        <input type="submit" value="Log in" :disabled="!canLogin" />
      </fieldset>
    </form>
    <small>
      Need an account?
      <router-link :to="{name: 'register'}">Register</router-link>
    </small>
  </section>
</template>

<script>
import { auth } from "../firebase/init";

export default {
  name: "Login",
  data() {
    return {
      error: "",
      email: "",
      password: "",
    };
  },
  mounted() {
    this.$refs.email.focus();
  },
  computed: {
    canLogin() {
      if (this.email && this.password) {
        return true;
      }
      return false;
    },
  },
  methods: {
    login() {
      auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push({ name: "home" });
        })
        .catch(() => (this.error = "Email or password is incorrect."));
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
