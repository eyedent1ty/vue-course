<template>
  <button @click="addOne">Add 1</button>
</template>

<script>
export default {
  methods: {
    addOne() {
      // this.$store.commit('increaseCounter', { value: 2 });

      // This is another way of using an mutation method and passing a payload
      this.$store.dispatch('addOne');
    }
  }
}
</script>