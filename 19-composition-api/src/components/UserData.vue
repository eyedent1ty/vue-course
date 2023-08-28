<template>
  <h2>{{ userName }}</h2>
  <h3>{{ age }}</h3>
  <button @click="emitEvent">Send Data</button>
</template>

<script lang="ts">
import { computed, ref, inject } from 'vue';

export default {
  props: ['firstName', 'lastName'],
  setup(props: any, context: any) {
    const userName = computed(() => {
      return props.firstName + ' ' + props.lastName;
    });
  
    const myData = ref('Hello from my component');

    function emitEvent() {
      context.emit('myEvent', myData.value);
    }

    const age = inject('age');

    console.log(age);

    return {
      userName,
      emitEvent,
      age
    };
  }
};
</script>
