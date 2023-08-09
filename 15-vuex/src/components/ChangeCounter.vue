<template>
  <button @click="incrementCounter">Add 2</button>
</template>

<script>
export default {
  methods: {
    incrementCounter() {
      this.$store.commit('increaseCounter', { value: 2 });
    }
  }
}
</script>