<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
    <button v-on:click="setNewAge">Change age</button>
    <h1>Full name: {{ fullName }}</h1>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" v-model="lastName" />
    </div>
  </section>
</template>

<script lang="ts">
import { reactive, ref, computed, watch } from 'vue';

export default {
  setup() {
    const user = reactive({
      name: 'John Daniel',
      age: 21
    });

    const firstName = ref('');
    const lastName = ref('');

    watch([firstName, lastName], (value, oldValue) => {
      console.log('Value', value);
      console.log('Old Value', oldValue);
    });

    function setNewAge() {
      user.age = 22;
    }

    const fullName = computed(() => {
      return firstName.value + ' ' + lastName.value;
    });

    return {
      user,
      setNewAge,
      firstName,
      lastName,
      fullName
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
