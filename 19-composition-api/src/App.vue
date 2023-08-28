<template>
  <section class="container">
    <user-data
      :first-name="firstName"
      :last-name="lastName"
      @myEvent="logEvent"
    ></user-data>
    <button v-on:click="setNewAge">Change age</button>
    <h1>Full name: {{ fullName }}</h1>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script lang="ts">
import { reactive, ref, computed, watch, toRefs, provide } from 'vue';
import type { Ref } from 'vue';

import UserData from './components/UserData.vue';

export default {
  components: {
    UserData
  },
  setup() {
    const user = reactive({
      name: 'John Daniel',
      age: 21
    });

    const userRefs = toRefs(user);

    const firstName = ref('');
    const lastName = ref('');
    const lastNameInput: Ref<HTMLInputElement | null> = ref(null);

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

    function setLastName() {
      if (lastNameInput.value) {
        lastName.value = lastNameInput.value.value;
      } else {
        lastName.value = '';
      }
    }

    function logEvent(event: string) {
      console.log(event);
    }

    // Providing the ref object to descendants component
    // You must provide a Ref instance instead of the value itself if you want your provided data to be reactive
    // provide('age', userRefs.age.value);
    provide('age', userRefs.age);

    watch(userRefs.age, (value) => {
      console.log(value);
    });

    return {
      user,
      setNewAge,
      firstName,
      lastName,
      age: userRefs.age,
      fullName,
      setLastName,
      lastNameInput,
      logEvent
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
