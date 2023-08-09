<template>
  <transition-group tag="ul" name="user-list">
    <li v-for="user in users" :key="user" @click="removeUser(user)">
      {{ user }}
    </li>
  </transition-group>
  <div>
    <input type="text" v-model.trim="enteredNewUser" />
    <button @click="addUser">Add User</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ['Max', 'Manu', 'Julie', 'Angela', 'Michael'],
      enteredNewUser: ''
    };
  },
  methods: {
    addUser() {
      if (this.enteredNewUser.length) {
        this.users.unshift(this.enteredNewUser);
        this.enteredNewUser = '';
      }
    },
    removeUser(user) {
      this.users = this.users.filter(usr => usr !== user);
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}

li {
  border: 1px solid #ccc;
  margin: 0;
  padding: 1rem;
  text-align: center;
  cursor: pointer;
}

.user-list-enter-from {
  opacity: 0;
  transform: translateY(150px) scale(1.1);
}

.user-list-enter-active {
  transition: all 0.3s ease-out;
}

.user-list-enter-to,
.user-list-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.user-list-leave-active {
  transition: all 0.3s ease-in;
}

.user-list-leave-to {
  transform: translateY(-150px) scale(1.1);
}
</style>