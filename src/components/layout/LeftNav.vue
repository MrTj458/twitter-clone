<template>
  <section>
    <ul>
      <li>
        <router-link :to="{name: 'home'}" class="no-change">
          <i class="fas fa-dove"></i>
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'home'}">
          <i class="fas fa-home"></i>
          <span>Home</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'explore'}" class="link-button">
          <i class="fas fa-hashtag"></i>
          <span>Explore</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'messages'}">
          <i class="fas fa-envelope"></i>
          <span>Messages</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'bookmarks'}">
          <i class="fas fa-bookmark"></i>
          <span>Bookmarks</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'profile'}">
          <i class="fas fa-user"></i>
          <span>Profile</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'settings'}">
          <i class="fas fa-cog"></i>
          <span>Settings</span>
        </router-link>
      </li>
    </ul>
    <div class="user-info">
      <div v-if="user" class="user">
        <img :src="user.avatar" alt />
        <p class="username">{{ user.username }}</p>
      </div>
      <div v-else class="logins">
        <button>Log In</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LeftNav",
  computed: {
    user() {
      console.log(this.$store.state.user);
      return this.$store.state.user;
    },
  },
};
</script>

<style scoped>
section {
  height: 100vh;
  padding: 2rem 1rem 0 0;
  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

h1 {
  text-align: center;
}

ul {
  list-style: none;
}

li {
  padding-bottom: 2rem;
}

a {
  color: var(--text-color);
  padding: 1rem 2rem;
  font-weight: bold;
  text-decoration: none;
  font-size: 1.5rem;
  border-radius: 50px;
}

a:hover {
  color: var(--selected-color);
  background-color: rgba(29, 161, 242, 0.1);
}

.router-link-exact-active {
  color: var(--selected-color);
}

.no-change {
  color: var(--text-color);
}

.no-change:hover {
  color: var(--text-color);
}

span {
  margin-left: 1rem;
}

.user-info {
  width: 100%;
  padding: 1rem 2rem;
  border-radius: 50px;
  margin-bottom: 0.5rem;
}

.user-info:hover {
  background: var(--hover-background);
}

.user {
  display: flex;
  align-items: center;
}

.user img {
  margin-right: 0.5rem;
}

@media only screen and (max-width: 1000px) {
  section {
    padding-right: 0;
  }

  span {
    display: none;
  }

  .username {
    display: none;
  }
}
</style>
