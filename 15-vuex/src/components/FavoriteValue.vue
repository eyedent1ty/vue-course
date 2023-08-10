<template>
  <h3>Favorite: {{ finalCounter }}</h3>
  <p>We do more...</p>
</template>

<script>
export default {
  computed: {
    finalCounter() {
      return this.$store.getters['numbers/finalCounter'];
    }
  },
}
</script>
