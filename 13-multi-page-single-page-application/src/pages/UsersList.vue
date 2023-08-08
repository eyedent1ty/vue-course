<template>
  <button @click="goToTeams()">Go to teams</button>
  <button @click="confirmChanges()">Save changes</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from '@/components/users/UserItem.vue';

export default {
  components: {
    UserItem
  },
  inject: ['users'],
  data() {
    return {
      savedChanges: false
    };
  },
  methods: {
    goToTeams() {
      this.$router.push('/teams');
    },
    confirmChanges() {
      this.savedChanges = true;
    }
  },
  beforeRouteLeave(to, from, next) {
    console.log('/users ComponentPublicInstance.beforeRouteLeave executed');

    if (this.savedChanges) {
      next();
    } else {
      const usersWantsToLeave = confirm('Do you want to leave the page? You have unsaved changes!');
      next(usersWantsToLeave);
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
