<template>
  <button @click="login" v-if="!isLoggedIn">Login</button>
  <button @click="logout" v-else>Logout</button>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login');
    },
    logout() {
      this.$store.dispatch('logout');
    }
  }
}
</script>