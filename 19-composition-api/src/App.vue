<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
    <button v-on:click="setNewAge">Change age</button>
  </section>
</template>

<script lang="ts">
import { reactive, ref } from 'vue';

export default {
  setup() {
    const user = reactive({
      name: 'John Daniel',
      age: 21
    });

    const setNewAge = () => {
      user.age = 22;
    };

    return {
      user,
      setNewAge
    };
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
