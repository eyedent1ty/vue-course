<template>
  <header>
    <nav>
      <h1>
        <router-link to="/">Find a Coach</router-link>
      </h1>
      <ul>
        <li>
          <router-link to="/coaches">All Coaches</router-link>
        </li>
        <li>
          <router-link to="/auth" v-if="!isLoggedIn">Login</router-link>
          <router-link to="/requests" v-else>Requests</router-link>
        </li>
        <li v-if="isLoggedIn">
          <base-button @click="onClickLogout">Logout</base-button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  computed: {
    isLoggedIn(): boolean {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    onClickLogout() {
      this.$store.dispatch('logout');
      this.$router.replace('/coaches');
    }
  }
});
</script>

<style scoped>
header {
  height: 5rem;
  background-color: #3d008d;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: #f391e3;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #f391e3;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
}

h1 a:hover,
h1 a:active h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
  text-align: center;
}

@media only screen and (max-width: 530px) {
  header {
    height: 10rem;
  }

  header ul {
    flex-direction: column;
  }

  li {
    margin: 0.5rem 0;
  }
}
</style>
