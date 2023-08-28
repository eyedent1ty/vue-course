<template>
  <h2>{{ userName }}</h2>
  <h3>{{ age }}</h3>
  <button @click="emitEvent">Send Data</button>
</template>

<script lang="ts">
import {
  computed,
  ref,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
} from 'vue';

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

    onBeforeMount(() => {
      console.log('onBeforeMount');
    });

    onMounted(() => {
      console.log('onMounted');
    });

    onBeforeUpdate(() => {
      console.log('onBeforeUpdate');
    });

    onUpdated(() => {
      console.log('onUpdated');
    });

    onBeforeUnmount(() => {
      console.log('onBeforeUnmount');
    });

    onUnmounted(() => {
      console.log('onUnmounted');
    });

    return {
      userName,
      emitEvent,
      age
    };
  }
};
</script>
