<template>
  <section class="container">
    <h2>{{ name }}</h2>
    <h3>{{ age }}</h3>
  </section>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';

export default {
  setup() {
    const user = toRefs(
      reactive({
        name: 'John Daniel',
        age: 21
      })
    );

    const { name, age } = user;

    setTimeout(() => {
      name.value = 'Daniel';
      age.value = 22;
    }, 2000);

    return {
      name,
      age
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
