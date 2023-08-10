<template>
  <button @click="incrementCounter">Add 2</button>
</template>

<script>
export default {
  methods: {
    incrementCounter() {
      // this.$store.commit('increaseCounter', { value: 2 });

      // This is another way of using an mutation method and passing a payload
      this.$store.commit({ 
        type: 'increaseCounter',
        value: 2
      });
    }
  }
}
</script>