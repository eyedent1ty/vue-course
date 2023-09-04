<template>
  <transition name="user-alert">
    <user-alert
      v-if="alertIsVisible"
      title="Delete the User?"
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
import UserAlert from './UserAlert.vue';

import useAlert from '@/hooks/alert';

export default {
  components: {
    UserAlert
  },
  setup() {
    // Hooks are just regular function, you can pass parameters to define data to be used in the hook
    const [alertIsVisible, showAlert, hideAlert] = useAlert(true);

    return {
      alertIsVisible,
      showAlert,
      hideAlert
    };
  }
}
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
    opacity: 1
  }
}
</style>
