<template>
  <transition name="user-alert">
    <user-alert
      v-if="alertIsVisible"
      :title="userAlertTitle"
      @close="hideAlert"
    >
      <p>Do you want to continue with deleting a user?</p>
    </user-alert>
  </transition>
  <section>
    <h2>Delete a User</h2>
    <button @click="showAlert">Delete User</button>
  </section>
</template>

<script>
import alertMixins from '../mixins/alert.js';

export default {
  data() {
    return {
      userAlertTitle: 'Delete User?'
    };
  },
  mixins: [alertMixins]
};
</script>

<style scoped>
.user-alert-enter-active {
  animation: fade-user-alert 0.3s ease-out;
}

.user-alert-leave-active {
  animation: fade-user-alert 0.3s ease-in reverse;
}

@keyframes fade-user-alert {
  from {
    opacity: 0
  }

  to {
    opaacity: 1
  }
}
</style>
