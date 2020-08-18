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
  </section>
</template>

<script>
export default {
  name: "LeftNav",
};
</script>

<style scoped>
section {
  height: 100vh;
  /* border-right: 1px solid var(--border-color); */
  padding-top: 2rem;
  padding-right: 1rem;
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

@media only screen and (max-width: 1000px) {
  section {
    padding-right: 0;
  }

  span {
    display: none;
  }
}
</style>
