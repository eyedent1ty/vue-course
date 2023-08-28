<template>
  <h2>{{ userName }}</h2>
  <h3>{{ age }}</h3>
  <button @click="emitEvent">Send Data</button>
</template>

<script lang="ts">
import { computed, ref, defineEmits } from 'vue';

export default {
  props: ['firstName', 'lastName', 'age'],
  setup(props: any, context: any) {
    const userName = computed(() => {
      return props.firstName + ' ' + props.lastName;
    });
  
    const myData = ref('Hello from my component');

    function emitEvent() {
      context.emit('myEvent', myData.value);
    }

    return {
      userName,
      emitEvent
    };
  }
};
</script>
