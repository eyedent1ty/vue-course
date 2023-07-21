<template>
  <h2>Manage Goals</h2>
  <input type="text" ref="goalInput" />
  <button @click="setGoal">Set Goal</button>
  <teleport to="body">
    <error-alert v-if="isInputInvalid">
      <h2>Invalid Input!</h2>
      <p>Please enter few characters...</p>
      <button @click="confirmError">Okay</button>
    </error-alert>
  </teleport>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';

export default {
  components: {
    ErrorAlert
  },
  data() {
    return {
      isInputInvalid: false
    };
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goalInput.value;
      if (enteredValue === '') {
        this.isInputInvalid = true;
      }
    },
    confirmError() {
      this.isInputInvalid = false;
    }
  }
}
</script>