<template>
  <transition name="user-alert">
    <user-alert v-if="alertIsVisible" title="Add a User?" @close="hideAlert">
      <p>Do you want to continue with adding a user?</p>
    </user-alert>
  </transition>
  <section>
    <h2>Add a User</h2>
    <button @click="showAlert">Add User</button>
  </section>
</template>

<script>
import alertMixins from '../mixins/alert.js';

export default {
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
    opacity: 0;
  }

  to {
    opaacity: 1;
  }
}
</style>
