<template>
  <button @click="addOne">Add 1</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions('numbers', ['addOne'])
  }
}
</script>