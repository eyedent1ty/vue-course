<template>
  <section class="container">
    <h2>{{ userName }}</h2>
  </section>
</template>

<script lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';

export default {
  setup() {
    const userName: Ref<string> = ref('John Daniel');

    return {
      userName
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
